// Génère /sitemap.xml automatiquement à partir du registre src/lib/seo.ts.
// Remplace l'ancienne route statique src/app/sitemap.xml/route.ts.
// Seules les pages indexables y figurent, avec leurs alternates FR/EN.

import type { MetadataRoute } from "next";
import { ROUTES, absUrl, isIndexable } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of ROUTES) {
    const fr = absUrl(r.path);
    const en = r.en ? absUrl(r.path === "/" ? "/en" : `/en${r.path}`) : undefined;
    const bothIndexable = isIndexable(r, "fr") && isIndexable(r, "en");
    const languages = en && bothIndexable ? { "fr-FR": fr, en } : undefined;

    if (isIndexable(r, "fr")) {
      entries.push({
        url: fr,
        lastModified: now,
        changeFrequency: r.changeFrequency ?? "monthly",
        priority: r.priority ?? 0.5,
        alternates: languages ? { languages } : undefined,
      });
    }
    if (en && isIndexable(r, "en")) {
      entries.push({
        url: en,
        lastModified: now,
        changeFrequency: r.changeFrequency ?? "monthly",
        priority: Math.max((r.priority ?? 0.5) - 0.1, 0.1),
        alternates: languages ? { languages } : undefined,
      });
    }
  }

  // Articles de blog publiés (non présents individuellement dans ROUTES)
  try {
    const posts = getAllPosts().filter((p) => p.status === "published");
    for (const post of posts) {
      if (ROUTES.some((r) => r.path === `/blog/${post.slug}`)) continue;
      entries.push({
        url: absUrl(`/blog/${post.slug}`),
        lastModified: post.publishedAt || post.updatedAt || now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  } catch {
    // Le contenu du blog n'a pas pu être lu - on publie le sitemap sans les articles plutôt que de le casser.
  }

  return entries;
}
