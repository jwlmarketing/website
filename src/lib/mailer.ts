import nodemailer from "nodemailer";

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

export async function sendMail(to: string, subject: string, html: string) {
  const from = process.env.SMTP_USER;
  if (!from || !process.env.SMTP_PASS) {
    throw new Error("SMTP_USER / SMTP_PASS non configurés");
  }
  await getTransporter().sendMail({
    from: `"JWL Marketing" <${from}>`,
    to,
    subject,
    html,
  });
}
