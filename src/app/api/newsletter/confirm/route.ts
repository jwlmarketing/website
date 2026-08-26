import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RELAY_URL = "http://lajo1183.odns.fr/newsletter-api.php";
const RELAY_SECRET = process.env.O2SWITCH_RELAY_SECRET || "";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jwl-marketing.fr";

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
  }

  try {
    const relayRes = await fetch(
      `${RELAY_URL}?action=confirm&token=${encodeURIComponent(token)}`,
      { headers: { "X-NL-Secret": RELAY_SECRET } }
    );
    const relayData = await relayRes.json();
    if (!relayData.success) {
      return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
    }
  } catch (e) {
    console.error("newsletter confirm relay error", e);
    return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
  }

  return NextResponse.redirect(`${siteUrl}/?newsletter=confirmed`);
}
