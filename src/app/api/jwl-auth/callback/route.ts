import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForUser, createSession } from "@/lib/jwlAuth";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const error = req.nextUrl.searchParams.get("error");

  if (error || !code) {
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url));
  }

  const user = await exchangeCodeForUser(code);
  if (!user) {
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url));
  }

  await createSession(user);
  return NextResponse.redirect(new URL("/admin/blog", req.url));
}
