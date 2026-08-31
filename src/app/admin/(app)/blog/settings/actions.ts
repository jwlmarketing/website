"use server";

import { execSync } from "child_process";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { saveSettings } from "@/lib/blog";

function syncToGit(message: string) {
  try {
    execSync("git add content/settings.json", { cwd: process.cwd() });
    execSync(`git -c user.email="contact.jwlmarketing@gmail.com" -c user.name="JWL Marketing" commit -m ${JSON.stringify(message)}`, {
      cwd: process.cwd(),
    });
    execSync("git push", { cwd: process.cwd() });
  } catch (err) {
    console.error("[settings admin] git sync failed (non-fatal):", err);
  }
}

export async function saveSettingsAction(formData: FormData) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  saveSettings({
    siteName: String(formData.get("siteName") || ""),
    tagline: String(formData.get("tagline") || ""),
    description: String(formData.get("description") || ""),
    seoTitle: String(formData.get("seoTitle") || ""),
    seoDescription: String(formData.get("seoDescription") || ""),
    footerText: String(formData.get("footerText") || ""),
    socialFacebook: String(formData.get("socialFacebook") || ""),
    socialInstagram: String(formData.get("socialInstagram") || ""),
    socialLinkedin: String(formData.get("socialLinkedin") || ""),
    socialTwitter: String(formData.get("socialTwitter") || ""),
    socialYoutube: String(formData.get("socialYoutube") || ""),
  });

  syncToGit("Blog: met à jour les paramètres");
  revalidatePath("/admin/blog/settings");
  revalidatePath("/blog");
}
