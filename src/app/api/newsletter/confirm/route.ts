import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getO2switchPool } from "@/lib/o2switch-db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jwl-marketing.fr";

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
  }

  const pool = getO2switchPool();

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT id FROM newsletter_subscribers WHERE confirm_token = ? LIMIT 1",
    [token]
  );
  const subscriber = rows[0];

  if (!subscriber) {
    return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
  }

  await pool.query(
    "UPDATE newsletter_subscribers SET status = 'active', confirm_token = NULL, confirmed_at = NOW() WHERE id = ?",
    [subscriber.id]
  );

  return NextResponse.redirect(`${siteUrl}/?newsletter=confirmed`);
}
