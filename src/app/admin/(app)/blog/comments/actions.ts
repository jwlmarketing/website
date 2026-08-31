"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { setCommentStatus, deleteComment } from "@/lib/comments";

export async function approveCommentAction(formData: FormData) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");
  setCommentStatus(Number(formData.get("id")), "approved");
  revalidatePath("/admin/blog/comments");
  revalidatePath("/blog");
}

export async function markSpamAction(formData: FormData) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");
  setCommentStatus(Number(formData.get("id")), "spam");
  revalidatePath("/admin/blog/comments");
  revalidatePath("/blog");
}

export async function deleteCommentAction(formData: FormData) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");
  deleteComment(Number(formData.get("id")));
  revalidatePath("/admin/blog/comments");
  revalidatePath("/blog");
}
