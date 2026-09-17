import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";
import { getSession } from "@/lib/jwlAuth";
import { getApprovedComments } from "@/lib/comments";
import CommentForm from "./CommentForm";

export const dynamic = "force-dynamic";

function readingTime(content: unknown): number {
  const html = (content as { html?: string })?.html ?? "";
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt || undefined,
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
    robots: post.noIndex ? { index: false } : undefined,
    openGraph: {
      images: post.ogImage || post.coverImage ? [post.ogImage || post.coverImage!] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, related } = await getPostBySlug(slug);

  if (!post) notFound();

  if (post.status !== "published") {
    const session = await getSession();
    if (!session) notFound();
  }

  const comments = getApprovedComments(slug);
  const content = post.content as { html?: string };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.ogImage || post.coverImage || undefined,
    datePublished: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
    dateModified: new Date(post.updatedAt).toISOString(),
    author: { "@type": "Person", name: "Jodie Lapaillerie" },
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {post.status !== "published" && (
        <div className="bg-amber-100 px-6 py-2 text-center text-xs font-semibold text-amber-800">
          Aperçu — cet article n&apos;est pas encore publié.
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[760px] px-4 pb-20 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 pt-5 text-[0.82rem] font-medium text-[#888] hover:text-gold"
        >
          ← Retour au blog
        </Link>

        <div className="flex flex-wrap items-center gap-2 pb-3.5 pt-7 text-[0.82rem] text-[#888]">
          {post.category && (
            <>
              <Link href={`/blog?cat=${post.category.slug}`} className="font-semibold text-gold hover:underline">
                {post.category.name}
              </Link>
              <span className="text-neutral-300">·</span>
            </>
          )}
          {post.publishedAt && (
            <time dateTime={new Date(post.publishedAt).toISOString()}>
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          )}
          <span className="text-neutral-300">·</span>
          <span>{readingTime(post.content)} min</span>
        </div>

        <h1 className="mb-5 font-heading text-[1.7rem] font-black leading-[1.1] tracking-tight text-black sm:text-[2.8rem]">
          {post.title}
        </h1>

        {post.coverImage && (
          <div className="mx-auto mb-6 max-w-[760px] overflow-hidden rounded-2xl">
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              width={1200}
              height={630}
              className="max-h-[460px] w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose-legal text-[15px] leading-[25.5px] text-[#1a1a1a] [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_a]:text-gold [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: content?.html || "" }}
        />

        {post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-100 pt-6">
            {post.tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-[#555] hover:border-gold hover:text-gold"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-12 border-t border-neutral-100 pt-8">
            <h2 className="mb-4 font-heading text-xl font-semibold text-black">
              À lire aussi
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="rounded-xl border border-neutral-100 p-4 text-sm font-medium text-black hover:border-gold"
                >
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-12 border-t border-neutral-100 pt-8">
          <h2 className="mb-4 font-heading text-xl font-semibold text-black">
            {comments.length > 0 ? `Commentaires (${comments.length})` : "Laisser un commentaire"}
          </h2>
          {comments.length > 0 && (
            <div className="mb-6 space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="rounded-xl border border-neutral-100 p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <strong className="text-sm text-black">{c.author_name}</strong>
                    <span className="text-xs text-neutral-400">
                      {new Date(c.created_at).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <p className="text-sm text-[#444]">{c.content}</p>
                </div>
              ))}
            </div>
          )}
          <CommentForm postSlug={post.slug} />
        </div>
      </div>
    </div>
  );
}
