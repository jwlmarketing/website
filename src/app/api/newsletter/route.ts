import { NextResponse } from "next/server";
import crypto from "crypto";
import type { RowDataPacket } from "mysql2/promise";
import { getO2switchPool } from "@/lib/o2switch-db";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "").trim();
  const name = String(form.get("name") || "").trim();
  const source = String(form.get("source") || "site");

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const pool = getO2switchPool();

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT id, status FROM newsletter_subscribers WHERE email = ? LIMIT 1",
    [email]
  );
  const existing = rows[0];

  if (existing && existing.status === "active") {
    return NextResponse.json({ success: true, message: "Vous êtes déjà inscrit(e) !" });
  }

  const token = crypto.randomBytes(32).toString("hex");

  if (existing) {
    await pool.query(
      "UPDATE newsletter_subscribers SET confirm_token = ?, status = 'pending' WHERE id = ?",
      [token, existing.id]
    );
  } else {
    await pool.query(
      "INSERT INTO newsletter_subscribers (email, name, status, confirm_token, source) VALUES (?, ?, 'pending', ?, ?)",
      [email, name || null, token, source]
    );
  }

  const confirmUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.jwl-marketing.fr"}/api/newsletter/confirm?token=${token}`;
  const html = `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f7f5f2;padding:32px 16px">
    <div style="max-width:460px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #eae6e0">
      <h2 style="font-size:18px;color:#0d0d0d;margin:0 0 10px;font-family:Georgia,serif">Confirmez votre inscription</h2>
      <p style="color:#6b6560;line-height:1.7;margin:0 0 20px;font-size:14px">Plus qu'un clic et c'est parti !</p>
      <a href="${confirmUrl}" style="display:inline-block;background:#C97B63;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;font-size:14px">Confirmer mon inscription →</a>
    </div></body></html>`;

  try {
    await sendMail(email, "Confirmez votre inscription — JWL Marketing", html);
  } catch (e) {
    console.error("newsletter mail error", e);
    return NextResponse.json({ error: "Erreur d'envoi de l'email. Réessaie dans quelques secondes." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: "✓ Vérifie ta boîte mail pour confirmer ton inscription !",
  });
}
