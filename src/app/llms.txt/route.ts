import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const SITE = "https://www.jwl-marketing.fr";

const CORE_PAGES: { path: string; title: string; desc: string }[] = [
  {
    path: "/",
    title: "Accueil",
    desc: "JWL Marketing — agence freelance de marketing digital et SEO basée à Aix-en-Provence.",
  },
  {
    path: "/consultant-freelance-seo-aix-en-provence",
    title: "Qui suis-je",
    desc: "Présentation de Jodie Lapaillerie, consultante SEO et visibilité web à Aix-en-Provence.",
  },
  {
    path: "/audit-seo-aix-en-provence",
    title: "Audit SEO",
    desc: "Audit SEO à Aix-en-Provence : analyse du site, des concurrents et des opportunités de visibilité.",
  },
  {
    path: "/google-my-business-aix-en-provence",
    title: "Fiche Google Business Profile",
    desc: "Création et optimisation de fiche Google Business Profile pour la visibilité locale.",
  },
  {
    path: "/site-internet-aix-en-provence",
    title: "Création de site web",
    desc: "Conception de sites internet sur mesure, pensés pour le référencement naturel.",
  },
  {
    path: "/trouver-client-aix-en-provence",
    title: "Acquisition client",
    desc: "Stratégies d'acquisition client pour indépendants, artisans et PME à Aix-en-Provence.",
  },
  {
    path: "/entrepreneur-aix-en-provence",
    title: "Indépendants & entrepreneurs",
    desc: "Accompagnement marketing digital dédié aux indépendants et professions libérales.",
  },
  {
    path: "/developpement-commercial-aix-en-provence",
    title: "Développement commercial",
    desc: "Accompagnement au développement commercial à Aix-en-Provence.",
  },
  {
    path: "/tarifs",
    title: "Tarifs",
    desc: "Grille tarifaire des prestations JWL Marketing (audit, GMB, site web, accompagnement).",
  },
  {
    path: "/contact-jwl-marketing-aix-en-provence",
    title: "Contact",
    desc: "Coordonnées et formulaire de contact de JWL Marketing.",
  },
  {
    path: "/blog",
    title: "Blog",
    desc: "Articles sur le SEO local, le marketing digital et la visibilité en Provence-Alpes-Côte d'Azur.",
  },
];

const ZONE_PAGES: { path: string; title: string }[] = [
  { path: "/consultant-freelance-seo-aix-en-provence", title: "Consultant SEO Aix-en-Provence" },
  { path: "/consultant-freelance-seo-marseille-jwl-marketing", title: "Consultant SEO Marseille" },
  { path: "/consultant-freelance-seo-montpellier-jwl-marketing", title: "Consultant SEO Montpellier" },
  { path: "/consultant-freelance-seo-toulouse-jwl-marketing", title: "Consultant SEO Toulouse" },
  { path: "/consultant-seo-bordeaux-jwl-marketing", title: "Consultant SEO Bordeaux" },
  { path: "/consultant-freelance-seo-nice", title: "Consultant SEO Nice" },
  { path: "/consultant-freelance-seo-paris-jwl-marketing", title: "Consultant SEO Paris" },
];

const LEGAL_PAGES: { path: string; title: string }[] = [
  { path: "/mentions-legales", title: "Mentions légales" },
  { path: "/politique-de-confidentialite", title: "Politique de confidentialité" },
  { path: "/cgv", title: "CGV" },
  { path: "/cookies", title: "Cookies" },
];

function section(title: string, items: { path: string; title: string; desc?: string }[]) {
  if (items.length === 0) return "";
  const lines = items.map((i) => {
    const desc = i.desc ? `: ${i.desc}` : "";
    return `- [${i.title}](${SITE}${i.path})${desc}`;
  });
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

export async function GET() {
  let dynamicPages: { path: string; title: string; desc?: string }[] = [];
  let posts: { path: string; title: string; desc?: string }[] = [];

  try {
    const pages = await prisma.page.findMany({
      where: { published: true },
      select: { slug: true, title: true, metaDesc: true },
      orderBy: { order: "asc" },
    });
    dynamicPages = pages
      .filter((p) => !CORE_PAGES.some((c) => c.path === `/${p.slug}`))
      .map((p) => ({
        path: `/${p.slug}`,
        title: p.title,
        desc: p.metaDesc ?? undefined,
      }));
  } catch {
    dynamicPages = [];
  }

  try {
    const publishedPosts = await prisma.post.findMany({
      where: { status: "published" },
      select: { slug: true, title: true, excerpt: true },
      orderBy: { publishedAt: "desc" },
      take: 200,
    });
    posts = publishedPosts.map((p) => ({
      path: `/blog/${p.slug}`,
      title: p.title,
      desc: p.excerpt ?? undefined,
    }));
  } catch {
    posts = [];
  }

  const body = `# JWL Marketing

> Agence freelance de marketing digital et SEO dirigée par Jodie Lapaillerie, basée à Aix-en-Provence (PACA), intervenant sur toute la France. Spécialisée en référencement naturel local, optimisation de fiches Google Business Profile et création de sites web orientés visibilité.

JWL Marketing accompagne les indépendants, artisans, professions libérales et PME dans leur acquisition client via Google : audit SEO, stratégie de contenu, développement de sites (HTML / Next.js) et pilotage de la visibilité locale.

${section("Pages principales", CORE_PAGES)}
${section("Zones d'intervention SEO", ZONE_PAGES)}
${dynamicPages.length ? section("Autres pages", dynamicPages) : ""}
${posts.length ? section("Articles de blog", posts) : ""}
${section("Informations légales", LEGAL_PAGES)}
## Contact

- Téléphone : [07 83 79 28 14](tel:+33783792814)
- Email : [service@jwl-marketing.fr](mailto:service@jwl-marketing.fr)
- Adresse : 13290 - Pôle d'activité La Duranne, Aix-en-Provence
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
