// Source unique de vérité SEO : URLs, indexation, versions FR/EN.
// Utilisé par : metadata / generateMetadata de chaque page, src/app/sitemap.ts, src/app/robots.ts

import type { Metadata } from "next";

export const SITE_URL = "https://www.jwl-marketing.fr";
export const SITE_NAME = "JWL Marketing";

type Route = {
  path: string; // chemin FR (sans /en)
  index: boolean; // false = noindex
  en?: boolean; // true = une version /en existe
  enIndex?: boolean; // surcharge si la version EN ne doit pas être indexée
  priority?: number;
  changeFrequency?: "weekly" | "monthly" | "yearly";
};

// Mettre à jour ce tableau à chaque création / suppression de page.
export const ROUTES: Route[] = [
  { path: "/", index: true, en: true, priority: 1, changeFrequency: "weekly" },
  { path: "/site-internet-aix-en-provence", index: true, en: true, priority: 0.9 },
  { path: "/site-web-seo-aix-en-provence", index: true, priority: 0.9 },
  // EN = 20 mots -> noindex tant que pas traduite (cf. brief P1-5)
  { path: "/google-my-business-aix-en-provence", index: true, en: true, enIndex: false, priority: 0.9 },
  { path: "/consultant-freelance-seo-aix-en-provence", index: true, en: true, priority: 0.8 },
  { path: "/consultant-freelance-seo-marseille-jwl-marketing", index: true, en: true, priority: 0.7 },
  { path: "/consultant-freelance-seo-montpellier-jwl-marketing", index: true, en: true, priority: 0.7 },
  { path: "/consultant-freelance-seo-nice", index: true, en: true, priority: 0.7 },
  { path: "/consultant-freelance-seo-paris-jwl-marketing", index: true, en: true, priority: 0.7 },
  { path: "/consultant-freelance-seo-bordeaux-jwl-marketing", index: true, en: true, priority: 0.7 },
  // EN = pas de H1, 14 mots -> noindex tant que pas traduite
  { path: "/realisations", index: true, en: true, enIndex: false, priority: 0.7 },
  { path: "/realisations/dynamitz", index: true, priority: 0.6 },
  { path: "/realisations/bout-de-poils", index: true, priority: 0.6 },
  // 9 mots -> noindex jusqu'à rédaction de l'étude de cas (cf. brief "Côté contenu")
  { path: "/realisations/proxiclic-provence", index: false, priority: 0.6 },
  { path: "/realisations/star-limousine", index: false, priority: 0.6 },
  { path: "/blog", index: true, en: true, priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog/site-web-ia", index: true, priority: 0.7 },
  { path: "/blog/fiche-google-my-business", index: true, priority: 0.7 },

  // Pages en noindex (hors sitemap)
  { path: "/roadmap", index: false },
  // Pages ressources (kits Canva) : PDF/vidéos gratuits ou payants, hors Google (cf. brief)
  { path: "/ressources/kit-google-my-business", index: false },
  { path: "/ressources/kit-commercial", index: false },
  { path: "/ressources/kit-visibilite", index: false },
  { path: "/ressources/kit-ia", index: false },
  { path: "/ressources/kit-reseaux-sociaux", index: false },
  { path: "/ressources-entrepreneurs", index: false },
  { path: "/tarifs", index: false, en: true },
  { path: "/contact-jwl-marketing-aix-en-provence", index: false, en: true },
  { path: "/consultant-freelance-seo-toulouse-jwl-marketing", index: false, en: true },
  { path: "/audit-seo-aix-en-provence", index: false, en: true },
  { path: "/developpement-commercial-aix-en-provence", index: false, en: true },
  { path: "/entrepreneur-aix-en-provence", index: false, en: true },
  { path: "/cas-clients", index: false, en: true },
  { path: "/aides-digitalisation", index: false, en: true },

  // Pages légales : indexables, faible priorité
  { path: "/mentions-legales", index: true, en: true, priority: 0.2, changeFrequency: "yearly" },
  { path: "/politique-de-confidentialite", index: true, en: true, priority: 0.2, changeFrequency: "yearly" },
  { path: "/cgv", index: true, en: true, priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", index: true, en: true, priority: 0.2, changeFrequency: "yearly" },

  // Outils / pages annexes (hors périmètre marketing FR/EN, pas de version EN)
  // Contenu trop léger (109-154 mots) -> noindex en attendant l'étoffement (cf. brief)
  { path: "/jwl-insight", index: false, priority: 0.4 },
  { path: "/jwl-insight-tarifs", index: false, priority: 0.4 },
  { path: "/jwl-insight-affiliation", index: false, priority: 0.3 },
];

export type Locale = "fr" | "en";

const enPath = (p: string) => (p === "/" ? "/en" : `/en${p}`);
export const absUrl = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

export function getRoute(path: string) {
  return ROUTES.find((r) => r.path === path);
}

export function isIndexable(route: Route, locale: Locale) {
  if (locale === "en") return !!route.en && (route.enIndex ?? route.index);
  return route.index;
}

/**
 * À appeler dans chaque page :
 *   export const metadata = buildMetadata({ path: "/tarifs", locale: "fr", title: "...", description: "..." })
 * Gère : canonical, hreflang, robots, Open Graph, Twitter.
 */
export function buildMetadata({
  path,
  locale,
  title,
  description,
  image = "/og-default.jpg",
}: {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const route = getRoute(path);
  if (!route) throw new Error(`[SEO] Route absente de lib/seo.ts : ${path}`);

  const frUrl = absUrl(path);
  const enUrl = route.en ? absUrl(enPath(path)) : undefined;
  const canonical = locale === "en" && enUrl ? enUrl : frUrl;
  const index = isIndexable(route, locale);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
      languages: enUrl ? { "fr-FR": frUrl, en: enUrl, "x-default": frUrl } : undefined,
    },
    robots: { index, follow: true },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale: locale === "en" ? "en_GB" : "fr_FR",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
