import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import BlockRenderer from "@/components/BlockRenderer";
import type { Block } from "@/lib/blocks/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await prisma.page.findUnique({ where: { slug } });
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
  const page = await prisma.page.findUnique({ where: { slug } });

  if (!page || !page.published) notFound();

  const content = page.content as { blocks?: Block[] };
  const blocks = content?.blocks ?? [];

  return (
    <div>
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
