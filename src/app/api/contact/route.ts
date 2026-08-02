import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, activity, phone, email, website, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nom, email et message sont requis." },
      { status: 400 }
    );
  }

  await prisma.contactSubmission.create({
    data: { name, activity, phone, email, website, message },
  });

  return NextResponse.json({ success: true });
}
