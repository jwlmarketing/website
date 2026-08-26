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
  const text = body?.text || "";
  const fromName = body?.fromName || "JWL Marketing";
  const replyTo = (body?.replyTo || "").trim();
  const fromEmail = process.env.SMTP_USER;
  const attachments = Array.isArray(body?.attachments) ? body.attachments : [];

  if (!to || !subject || (!html && !text)) {
    return NextResponse.json({ error: "to, subject, et html ou text requis" }, { status: 400 });
  }

  try {
    await getTransporter().sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toName ? `"${toName}" <${to}>` : to,
      replyTo: replyTo || undefined,
      subject,
      html: html || undefined,
      text: text || undefined,
      attachments: attachments.map((a: { filename?: string; content?: string; contentType?: string }) => ({
        filename: a.filename || "piece-jointe",
        content: Buffer.from(a.content || "", "base64"),
        contentType: a.contentType,
      })),
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
