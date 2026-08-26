import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporters: Record<string, ReturnType<typeof nodemailer.createTransport>> = {};

// "mailbox" selects which authenticated OVH account sends the email.
// "newsletter" (default) = newsletter@jwl-marketing.fr — used by the newsletter app.
// "noreply" = noreply@jwl-marketing.fr — used by the intranet.
function getTransporter(mailbox: string) {
  if (transporters[mailbox]) return transporters[mailbox];
  const user = mailbox === "noreply" ? process.env.SMTP_USER_NOREPLY : process.env.SMTP_USER;
  const pass = mailbox === "noreply" ? process.env.SMTP_PASS_NOREPLY : process.env.SMTP_PASS;
  const t = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: { user, pass },
  });
  transporters[mailbox] = t;
  return t;
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
  const mailbox = body?.mailbox === "noreply" ? "noreply" : "newsletter";
  const fromEmail = mailbox === "noreply" ? process.env.SMTP_USER_NOREPLY : process.env.SMTP_USER;
  const attachments = Array.isArray(body?.attachments) ? body.attachments : [];

  if (!to || !subject || (!html && !text)) {
    return NextResponse.json({ error: "to, subject, et html ou text requis" }, { status: 400 });
  }

  try {
    await getTransporter(mailbox).sendMail({
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
