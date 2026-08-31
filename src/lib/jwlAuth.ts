import { cookies } from "next/headers";
import crypto from "crypto";

const JWL_AUTH_URL = "https://accounts.jwlmarketing.fr";
const CLIENT_ID = process.env.JWL_AUTH_CLIENT_ID || "";
const CLIENT_SECRET = process.env.JWL_AUTH_CLIENT_SECRET || "";
const REDIRECT_URI = process.env.JWL_AUTH_REDIRECT_URI || "";
const SESSION_SECRET = process.env.SESSION_SECRET || "dev-secret-change-me";
const COOKIE_NAME = "jwl_admin_session";

export type JwlUser = {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  is_admin?: boolean;
  role?: string;
  avatar?: string;
};

function sign(payload: string): string {
  return crypto.createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
}

export function authorizeUrl(state: string): string {
  const qs = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    state,
  });
  return `${JWL_AUTH_URL}/oauth/authorize.php?${qs.toString()}`;
}

export async function exchangeCodeForUser(code: string): Promise<JwlUser | null> {
  const res = await fetch(`${JWL_AUTH_URL}/api/token.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
    }),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data?.access_token || !data?.user) return null;
  return data.user as JwlUser;
}

export async function createSession(user: JwlUser) {
  const payload = JSON.stringify(user);
  const b64 = Buffer.from(payload).toString("base64url");
  const sig = sign(b64);
  const store = await cookies();
  store.set(COOKIE_NAME, `${b64}.${sig}`, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getSession(): Promise<JwlUser | null> {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  const [b64, sig] = raw.split(".");
  if (!b64 || !sig) return null;
  if (sign(b64) !== sig) return null;
  try {
    const user = JSON.parse(Buffer.from(b64, "base64url").toString("utf8")) as JwlUser;
    return user;
  } catch {
    return null;
  }
}

export async function requireAdminUser(): Promise<JwlUser | null> {
  const user = await getSession();
  if (!user) return null;
  const adminEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  const isAllowed = user.is_admin || (adminEmails.length > 0 && adminEmails.includes((user.email || "").toLowerCase()));
  return isAllowed ? user : null;
}
