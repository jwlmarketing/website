import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const SECRET = "m13_onetime_9f2a7";
const FILES = ["alex.png", "clara.png", "darius.png", "elio.png", "kayden.png", "leroi.png"];

export async function POST(req: Request) {
  const secret = req.headers.get("x-secret") || "";
  if (secret !== SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const dir = path.join(process.cwd(), "public", "tmp-m13");
  const attachments = FILES.map((f) => ({
    filename: f,
    content: fs.readFileSync(path.join(dir, f)),
  }));

  try {
    await transporter.sendMail({
      from: `"JWL Marketing" <${process.env.SMTP_USER}>`,
      to: "wyatt.lapaillerieengone@gmail.com",
      subject: "PROJECT-M13 — Personnages",
      text: "Voici les images des personnages récupérées depuis le repo M13site.",
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
