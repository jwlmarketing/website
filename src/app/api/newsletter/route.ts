import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

const RELAY_URL = "http://lajo1183.odns.fr/newsletter-api.php";
const RELAY_SECRET = process.env.O2SWITCH_RELAY_SECRET || "";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "").trim();
  const name = String(form.get("name") || "").trim();
  const source = String(form.get("source") || "site");
  const locale = String(form.get("locale") || "fr") === "en" ? "en" : "fr";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: locale === "en" ? "Invalid email address." : "Adresse email invalide." },
      { status: 400 }
    );
  }

  let relayData: { success?: boolean; already?: boolean; token?: string; error?: string };
  try {
    const relayRes = await fetch(`${RELAY_URL}?action=subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-NL-Secret": RELAY_SECRET,
      },
      body: new URLSearchParams({ email, name, source }),
    });
    relayData = await relayRes.json();
  } catch (e) {
    console.error("newsletter relay error", e);
    return NextResponse.json(
      { error: locale === "en" ? "Database error." : "Erreur base de données." },
      { status: 500 }
    );
  }

  if (!relayData.success) {
    return NextResponse.json(
      { error: relayData.error || (locale === "en" ? "Database error." : "Erreur base de données.") },
      { status: 500 }
    );
  }

  if (relayData.already) {
    return NextResponse.json({
      success: true,
      message: locale === "en" ? "You're already subscribed!" : "Vous êtes déjà inscrit(e) !",
    });
  }

  const confirmUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.jwl-marketing.fr"}/api/newsletter/confirm?token=${relayData.token}`;
  const html =
    locale === "en"
      ? `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f7f5f2;padding:32px 16px">
    <div style="max-width:460px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #eae6e0">
      <h2 style="font-size:18px;color:#0d0d0d;margin:0 0 10px;font-family:Georgia,serif">Confirm your subscription</h2>
      <p style="color:#6b6560;line-height:1.7;margin:0 0 20px;font-size:14px">Just one click to go!</p>
      <a href="${confirmUrl}" style="display:inline-block;background:#C97B63;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;font-size:14px">Confirm my subscription →</a>
    </div></body></html>`
      : `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f7f5f2;padding:32px 16px">
    <div style="max-width:460px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #eae6e0">
      <h2 style="font-size:18px;color:#0d0d0d;margin:0 0 10px;font-family:Georgia,serif">Confirmez votre inscription</h2>
      <p style="color:#6b6560;line-height:1.7;margin:0 0 20px;font-size:14px">Plus qu'un clic et c'est parti !</p>
      <a href="${confirmUrl}" style="display:inline-block;background:#C97B63;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;font-size:14px">Confirmer mon inscription →</a>
    </div></body></html>`;

  try {
    await sendMail(
      email,
      locale === "en" ? "Confirm your subscription — JWL Marketing" : "Confirmez votre inscription — JWL Marketing",
      html
    );
  } catch (e) {
    console.error("newsletter mail error", e);
    return NextResponse.json(
      {
        error:
          locale === "en"
            ? "Error sending email. Try again in a few seconds."
            : "Erreur d'envoi de l'email. Réessaie dans quelques secondes.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      locale === "en"
        ? "✓ Check your inbox to confirm your subscription!"
        : "✓ Vérifie ta boîte mail pour confirmer ton inscription !",
  });
}
