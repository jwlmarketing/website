import { redirect, notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { CATEGORIES, getPost } from "@/lib/blog";
import PostForm from "../../PostForm";

export default async function EditPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-[760px] px-6 py-10">
      <h1 className="mb-8 font-heading text-2xl font-bold text-black">Modifier l&apos;article</h1>
      <PostForm post={post} categories={CATEGORIES} />
    </div>
  );
}
