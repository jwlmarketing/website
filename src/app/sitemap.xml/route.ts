import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.jwl-marketing.fr";

type Entry = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
};

const STATIC_PATHS_FR = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/site-internet-aix-en-provence", priority: "0.9", changefreq: "weekly" },
  { path: "/site-web-seo-aix-en-provence", priority: "0.9", changefreq: "weekly" },
  { path: "/tarifs", priority: "0.9", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "daily" },
  { path: "/contact-jwl-marketing-aix-en-provence", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-freelance-seo-aix-en-provence", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-freelance-seo-marseille-jwl-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-freelance-seo-montpellier-jwl-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-freelance-seo-nice", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-freelance-seo-paris-jwl-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-freelance-seo-toulouse-jwl-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/consultant-seo-bordeaux-jwl-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/audit-seo-aix-en-provence", priority: "0.7", changefreq: "monthly" },
  { path: "/developpement-commercial-aix-en-provence", priority: "0.7", changefreq: "monthly" },
  { path: "/entrepreneur-aix-en-provence", priority: "0.7", changefreq: "monthly" },
  { path: "/google-my-business-aix-en-provence", priority: "0.7", changefreq: "monthly" },
  { path: "/mentions-legales", priority: "0.3", changefreq: "yearly" },
  { path: "/politique-de-confidentialite", priority: "0.3", changefreq: "yearly" },
  { path: "/cgv", priority: "0.3", changefreq: "yearly" },
  { path: "/cookies", priority: "0.3", changefreq: "yearly" },
];

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const entries: Entry[] = STATIC_PATHS_FR.map((p) => ({ ...p }));

  // Version anglaise (miroir des mêmes routes, hors mentions légales spécifiques FR)
  for (const p of STATIC_PATHS_FR) {
    if (p.path === "/blog" || p.path === "/site-web-seo-aix-en-provence") continue;
    entries.push({ path: `/en${p.path}`, priority: p.priority, changefreq: p.changefreq });
  }
  entries.push({ path: "/en/blog", priority: "0.8", changefreq: "daily" });

  // Articles de blog publiés
  try {
    const posts = getAllPosts().filter((p) => p.status === "published");
    for (const post of posts) {
      entries.push({
        path: `/blog/${post.slug}`,
        priority: "0.7",
        changefreq: "monthly",
        lastmod: (post.publishedAt || post.updatedAt || "").slice(0, 10) || undefined,
      });
    }
  } catch {
    // Le contenu du blog n'a pas pu être lu — on publie le sitemap sans les articles plutôt que de le casser.
  }

  const body = entries
    .map((e) => {
      const loc = `${BASE_URL}${e.path}`;
      const lastmodTag = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : "";
      return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmodTag}
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
