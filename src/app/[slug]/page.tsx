import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/cmsRelay";
import { auth } from "@/lib/auth";
import BlockRenderer from "@/components/BlockRenderer";
import type { Block } from "@/lib/blocks/types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { page } = await getPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle || page.title,
    description: page.metaDesc || undefined,
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { page } = await getPageBySlug(slug);

  if (!page) notFound();

  if (!page.published) {
    const session = await auth();
    if (!session) notFound();
  }

  const content = page.content as { blocks?: Block[] };
  const blocks = content?.blocks ?? [];

  return (
    <div>
      {!page.published && (
        <div className="bg-amber-100 px-6 py-2 text-center text-xs font-semibold text-amber-800">
          Aperçu — cette page n&apos;est pas encore publiée, visible uniquement car tu es connecté à l&apos;admin.
        </div>
      )}
      {blocks.length === 0 ? (
        <div className="mx-auto max-w-[800px] px-6 py-16">
          <h1 className="font-heading text-3xl font-semibold text-black">
            {page.title}
          </h1>
          <p className="mt-4 text-sm text-[#888]">
            Cette page n&apos;a pas encore de contenu.
          </p>
        </div>
      ) : (
        <BlockRenderer blocks={blocks} />
      )}
    </div>
  );
}
