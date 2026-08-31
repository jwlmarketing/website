import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { listPublishedPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "JWL Marketing Blog — SEO & Marketing Digital Aix-en-Provence",
  description:
    "Blog expert SEO local, marketing digital et visibilité Google pour les entrepreneurs à Aix-en-Provence et en PACA.",
};

const PER_PAGE = 9;

function readingTime(content: unknown): number {
  const html = (content as { html?: string })?.html ?? "";
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function BlogList({
  searchParams,
}: {
  searchParams: Promise<{ p?: string; cat?: string }>;
}) {
  const { p, cat } = await searchParams;
  const page = Math.max(1, Number(p) || 1);

  const { posts, total, categories } = await listPublishedPosts({
    page,
    perPage: PER_PAGE,
    cat,
  });

  const pages = total > 0 ? Math.ceil(total / PER_PAGE) : 1;

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {page === 1 && !cat && (
        <section className="bg-white pt-3">
          <div className="mx-auto flex max-w-[1140px] flex-col-reverse items-center gap-0 px-6 md:min-h-[480px] md:flex-row">
            <div className="flex-1 py-10 md:py-10 md:pr-12">
              <h1 className="mb-4 font-heading text-[1.9rem] font-bold leading-[1.15] tracking-tight md:text-[3.4rem]">
                <span className="block text-gold">Blog SEO</span>
                <span className="mt-1 block text-[1.4rem] text-black md:text-[2.2rem]">
                  Ton partenaire marketing
                  <br />
                  et commercial
                </span>
              </h1>
              <div className="mb-5 flex items-center gap-1.5">
                <span className="block h-0.5 w-8 rounded-full bg-gold" />
                <span className="block h-0.5 w-2 rounded-full bg-gold" />
              </div>
              <p className="mb-7 font-semibold text-gold">au service de votre croissance.</p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-gold px-[22px] py-3 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-[#b5903a]"
              >
                Découvrir nos services
              </Link>
            </div>
            <div className="w-full shrink-0 self-end md:w-[440px]">
              <Image
                src="/images/blog-jodie-lapaillerie.webp"
                alt="Jodie Lapaillerie — Consultante SEO & Marketing Aix-en-Provence"
                width={440}
                height={520}
                priority
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#F5F5F3] py-16">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-heading text-[2rem] font-bold text-black">
              Articles pour une communication qui a du sens.
            </h2>
            <p className="mb-5 text-[0.95rem] text-[#6b6560]">
              Ici vous trouverez des contenus pour réfléchir, comprendre et agir sur votre communication
            </p>

            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  href="/blog"
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                    !cat ? "border-gold bg-gold text-white" : "border-neutral-300 text-[#555] hover:border-gold"
                  }`}
                >
                  Tous
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/blog?cat=${c.slug}`}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                      cat === c.slug ? "border-gold bg-gold text-white" : "border-neutral-300 text-[#555] hover:border-gold"
                    }`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-sm text-[#888]">
              Aucun article publié pour le moment.
            </p>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {posts.map((post) => (
                  <article key={post.id} className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                    <div className="relative">
                      <Link href={`/blog/${post.slug}`} className="block">
                        {post.coverImage ? (
                          <Image
                            src={post.coverImage}
                            alt={post.coverAlt || post.title}
                            width={400}
                            height={220}
                            className="h-[180px] w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-[180px] w-full items-center justify-center bg-neutral-100 text-neutral-300">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
                              <path d="M14 2H6a2 2 0 0 0-2 2v16h16V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                          </div>
                        )}
                      </Link>
                      {post.category && (
                        <span className="absolute left-3 top-3">
                          <Link
                            href={`/blog?cat=${post.category.slug}`}
                            className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                            style={{ backgroundColor: post.category.color }}
                          >
                            {post.category.name}
                          </Link>
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="mb-2 font-heading text-lg font-semibold leading-snug text-black">
                        <Link href={`/blog/${post.slug}`} className="hover:text-gold">
                          {post.title}
                        </Link>
                      </h3>
                      {post.excerpt && (
                        <p className="mb-4 text-sm text-[#6b6560]">
                          {post.excerpt.length > 110 ? post.excerpt.slice(0, 110) + "…" : post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between border-t border-neutral-100 pt-3 text-xs text-[#888]">
                        <span>
                          {post.publishedAt &&
                            new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                          {" · "}
                          {readingTime(post.content)} min
                        </span>
                        <Link href={`/blog/${post.slug}`} className="font-semibold text-gold hover:underline">
                          Lire →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {pages > 1 && (
                <nav className="mt-10 flex justify-center gap-2" aria-label="Pagination">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                    <Link
                      key={n}
                      href={`/blog?p=${n}${cat ? `&cat=${cat}` : ""}`}
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                        n === page ? "bg-gold text-white" : "text-[#555] hover:bg-white"
                      }`}
                    >
                      {n}
                    </Link>
                  ))}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
