import { NextResponse } from "next/server";
import { createContactSubmission } from "@/lib/cmsRelay";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, activity, phone, email, website, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nom, email et message sont requis." },
      { status: 400 }
    );
  }

  try {
    await createContactSubmission({ name, activity, phone, email, website, message });
  } catch (e) {
    console.error("contact relay error", e);
    return NextResponse.json(
      { error: "Erreur d'enregistrement. Réessaie dans quelques secondes." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
