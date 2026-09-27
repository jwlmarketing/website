import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import BlockRenderer from "@/components/BlockRenderer";
import { getIndexPage } from "@/lib/realisations";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = getIndexPage();
  return buildMetadata({
    path: "/realisations",
    locale: "fr",
    title: page.metaTitle || `${page.title} | JWL MARKETING`,
    description:
      page.metaDescription ||
      "Découvre les sites web et projets digitaux réalisés par JWL Marketing pour ses clients à Aix-en-Provence et partout en France.",
  });
}

export default function Page() {
  const page = getIndexPage();

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
    </div>
  );
}
