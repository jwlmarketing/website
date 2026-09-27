"use server";

import { cookies } from "next/headers";
import crypto from "crypto";
import { verifyPageCode } from "@/lib/gatedContent";

const SESSION_SECRET = process.env.SESSION_SECRET || "dev-secret-change-me";

function sign(value: string): string {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

function cookieName(pageSlug: string) {
  return `gate_${pageSlug}`;
}

export async function hasPageAccess(pageSlug: string): Promise<boolean> {
  const jar = await cookies();
  const value = jar.get(cookieName(pageSlug))?.value;
  return value === sign(pageSlug);
}

export async function unlockPageAction(
  pageSlug: string,
  code: string
): Promise<{ ok: true } | { error: string }> {
  if (!verifyPageCode(pageSlug, code)) {
    return { error: "Code incorrect." };
  }
  const jar = await cookies();
  jar.set(cookieName(pageSlug), sign(pageSlug), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return { ok: true };
}
