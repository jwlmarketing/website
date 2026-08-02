import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

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

  const content = page.content as { html?: string };

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-black">
        {page.title}
      </h1>
      <div
        className="prose-legal mt-8 text-[15px] leading-[25.5px] text-[#1a1a1a] [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_a]:text-gold"
        dangerouslySetInnerHTML={{ __html: content?.html || "" }}
      />
    </div>
  );
}
