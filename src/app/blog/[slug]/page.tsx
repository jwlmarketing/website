import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return {};
  return {
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt || undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) notFound();

  if (!post.published) {
    const session = await auth();
    if (!session) notFound();
  }

  const content = post.content as { html?: string };

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      {!post.published && (
        <div className="mb-6 rounded bg-amber-100 px-4 py-2 text-center text-xs font-semibold text-amber-800">
          Aperçu — cet article n&apos;est pas encore publié.
        </div>
      )}
      {post.publishedAt && (
        <p className="text-xs uppercase tracking-wide text-gold">
          {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      )}
      <h1 className="mt-2 font-heading text-3xl font-semibold text-black">
        {post.title}
      </h1>
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={630}
          className="mt-6 h-auto w-full rounded-2xl object-cover"
        />
      )}
      <div
        className="prose-legal mt-8 text-[15px] leading-[25.5px] text-[#1a1a1a] [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_a]:text-gold"
        dangerouslySetInnerHTML={{ __html: content?.html || "" }}
      />
    </div>
  );
}
