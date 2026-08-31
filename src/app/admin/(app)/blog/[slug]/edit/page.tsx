import { redirect, notFound } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { CATEGORIES, getPost } from "@/lib/blog";
import PostForm from "../../PostForm";

export default async function EditPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return <PostForm post={post} categories={CATEGORIES} />;
}
