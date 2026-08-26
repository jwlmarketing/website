import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;
function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

export async function POST(req: Request) {
  const secret = req.headers.get("x-relay-secret") || "";
  if (secret !== process.env.RAW_EMAIL_RELAY_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const to = (body?.to || "").trim();
  const toName = (body?.toName || "").trim();
  const subject = body?.subject || "";
  const html = body?.html || "";
  const fromName = body?.fromName || "JWL Marketing";
  const fromEmail = process.env.SMTP_USER;

  if (!to || !subject || !html) {
    return NextResponse.json({ error: "to, subject, html requis" }, { status: 400 });
  }

  try {
    await getTransporter().sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toName ? `"${toName}" <${to}>` : to,
      subject,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
