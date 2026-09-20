import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import BlockRenderer from "@/components/BlockRenderer";
import { getCaseStudy } from "@/lib/realisations";
import { getSession } from "@/lib/jwlAuth";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCaseStudy(slug);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | JWL MARKETING`,
    description: page.metaDescription || undefined,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseStudy(slug);
  if (!page) notFound();

  if (page.status !== "published") {
    const user = await getSession();
    if (!user) notFound();
  }

  return (
    <div>
      <SiteHeader locale="fr" href="/en/realisations" />
      {page.status !== "published" && (
        <div className="bg-amber-100 px-6 py-2 text-center text-xs font-semibold text-amber-800">
          Aperçu — ce cas client n&apos;est pas encore publié, visible
          uniquement car tu es connecté à l&apos;admin.
        </div>
      )}
      <div className="mx-auto max-w-[1100px] px-6 pt-6">
        <Link href="/realisations" className="text-sm text-[#c9846f] hover:underline">
          ← Mes réalisations
        </Link>
      </div>
      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}

export const dynamic = "force-dynamic";
