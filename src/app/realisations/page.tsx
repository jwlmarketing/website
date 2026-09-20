import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import BlockRenderer from "@/components/BlockRenderer";
import { getIndexPage, listPublishedCaseStudies } from "@/lib/realisations";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = getIndexPage();
  return {
    title: page.metaTitle || `${page.title} | JWL MARKETING`,
    description:
      page.metaDescription ||
      "Découvre les sites web et projets digitaux réalisés par JWL Marketing pour ses clients à Aix-en-Provence et partout en France.",
  };
}

export default function Page() {
  const page = getIndexPage();
  const caseStudies = listPublishedCaseStudies();

  return (
    <div>
      <SiteHeader locale="fr" href="/en/realisations" />

      {page.blocks.length > 0 ? (
        <BlockRenderer blocks={page.blocks} />
      ) : (
        <div className="mx-auto max-w-[800px] px-6 py-16 text-center">
          <h1 className="font-heading text-3xl font-semibold text-black">
            {page.title}
          </h1>
        </div>
      )}

      {caseStudies.length > 0 && (
        <section className="mx-auto max-w-[1100px] px-6 py-10">
          <h2 className="text-center font-heading text-3xl leading-[1.15] text-black md:text-[40px]">
            Les entreprises{" "}
            <span className="italic text-[#c9846f]">récemment</span>{" "}
            accompagnées
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/realisations/${cs.slug}`}
                className="rounded-2xl border border-[#eee] p-6 transition-colors hover:border-gold"
              >
                <p className="font-heading text-lg text-black">{cs.title}</p>
                <p className="mt-2 text-sm font-semibold text-[#c9846f]">
                  Voir le projet →
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
