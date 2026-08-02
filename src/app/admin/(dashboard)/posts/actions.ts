"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Non autorisé");
}

export async function savePost(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;
  const slug = (formData.get("slug") as string).trim().replace(/^\/+/, "");
  const title = formData.get("title") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const metaTitle = (formData.get("metaTitle") as string) || null;
  const metaDesc = (formData.get("metaDesc") as string) || null;
  const seoKeywords = (formData.get("seoKeywords") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const coverAlt = (formData.get("coverAlt") as string) || null;
  const categoryId = (formData.get("categoryId") as string) || null;
  const tagNames = (formData.get("tags") as string)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const html = formData.get("content") as string;
  const status = formData.get("status") as "draft" | "published" | "scheduled";
  const isFeatured = formData.get("isFeatured") === "on";
  const allowComments = formData.get("allowComments") === "on";

  const tagConnectOrCreate = tagNames.map((name) => ({
    where: { slug: slugify(name) },
    create: { name, slug: slugify(name) },
  }));

  const data = {
    slug,
    title,
    excerpt,
    metaTitle,
    metaDesc,
    seoKeywords,
    coverImage,
    coverAlt,
    categoryId,
    content: { html },
    status,
    isFeatured,
    allowComments,
    publishedAt: status === "published" ? new Date() : null,
    tags: { set: [], connectOrCreate: tagConnectOrCreate },
  };

  if (id) {
    await prisma.post.update({ where: { id }, data });
  } else {
    await prisma.post.create({ data });
  }

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function deletePost(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/posts");
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
