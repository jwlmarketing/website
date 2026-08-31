"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { addComment } from "@/lib/comments";

export async function submitCommentAction(formData: FormData) {
  const postSlug = String(formData.get("postSlug") || "").trim();
  const authorName = String(formData.get("authorName") || "").trim();
  const authorEmail = String(formData.get("authorEmail") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!postSlug || !authorName || !authorEmail || !content) {
    return { error: "Merci de remplir tous les champs." };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;

  addComment({ postSlug, authorName, authorEmail, content, ip });
  revalidatePath(`/blog/${postSlug}`);

  return { success: true };
}
