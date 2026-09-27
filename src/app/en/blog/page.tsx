// English version not yet translated — reuses the French content for now.
import type { Metadata } from "next";
import { getSettings } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export { default } from "@/app/blog/page";

// TODO (contenu, Jodie) : titre/description encore en français, à traduire.
export async function generateMetadata(): Promise<Metadata> {
  const settings = getSettings();
  return buildMetadata({
    path: "/blog",
    locale: "en",
    title: settings.seoTitle,
    description: settings.seoDescription,
  });
}
