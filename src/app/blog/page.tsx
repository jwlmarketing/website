import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import SectionHeading from "@/components/SectionHeading";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | JWL Marketing",
  description: "Conseils marketing digital, SEO et visibilité locale par JWL Marketing.",
};

export default async function BlogList() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-16">
      <SectionHeading
        kicker="Conseils"
        title="Le blog de"
        accent="JWL Marketing"
        subtext="Marketing digital, SEO et visibilité locale."
      />

      {posts.length === 0 ? (
        <p className="text-center text-sm text-[#888]">
          Les premiers articles arrivent très bientôt.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-neutral-100 bg-white p-5 hover:border-gold"
            >
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={220}
                  className="h-40 w-full rounded-xl object-cover"
                />
              )}
              <h2 className="mt-3 font-heading text-lg font-semibold text-black">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-1 text-sm text-[#555]">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
