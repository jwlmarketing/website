import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostForm from "@/components/admin/PostForm";
import { savePost } from "../actions";

export default async function EditPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">
        Modifier : {post.title}
      </h1>
      <div className="mt-6 max-w-2xl">
        <PostForm
          post={{
            ...post,
            content: post.content as { html?: string },
          }}
          action={savePost}
        />
      </div>
    </div>
  );
}
