import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import BlockRenderer from "@/components/BlockRenderer";
import RealisationsCarousel from "@/components/RealisationsCarousel";
import { getIndexPage, listCarouselCaseStudies } from "@/lib/realisations";

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
  const caseStudies = listCarouselCaseStudies();

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
        <section className="px-6 py-10 text-center">
          <h2 className="font-heading text-3xl leading-[1.15] text-black md:text-[40px]">
            Les entreprises{" "}
            <span className="italic text-[#c9846f]">récemment</span>{" "}
            accompagnées
          </h2>
          <div className="mt-10">
            <RealisationsCarousel
              items={caseStudies.map((cs) => ({
                slug: cs.slug,
                title: cs.title,
                coverImage: cs.coverImage,
              }))}
            />
          </div>
        </section>
      )}
    </div>
  );
}
