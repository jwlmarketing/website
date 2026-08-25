import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jwl-marketing.fr";

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
  }

  const subscriber = await prisma.newsletterSubscriber.findFirst({
    where: { confirmToken: token },
  });

  if (!subscriber) {
    return NextResponse.redirect(`${siteUrl}/?newsletter=invalid`);
  }

  await prisma.newsletterSubscriber.update({
    where: { id: subscriber.id },
    data: { status: "active", confirmToken: null, confirmedAt: new Date() },
  });

  return NextResponse.redirect(`${siteUrl}/?newsletter=confirmed`);
}
