// Données structurées schema.org.
// <LocalBusinessSchema />  -> dans le layout racine (toutes les pages)
// <ArticleSchema ... />    -> dans chaque article de blog (vérifier qu'il n'y a pas déjà un JSON-LD Article -> pas de doublon)
// <BreadcrumbSchema ... /> -> pages villes, réalisations, articles

import { SITE_URL, SITE_NAME } from "@/lib/seo";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema({ locale = "fr" }: { locale?: "fr" | "en" }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/og-default.jpg`,
        description:
          locale === "en"
            ? "SEO, Google Business Profile and website consultant in Aix-en-Provence."
            : "Consultante SEO, Google Business Profile et création de site web à Aix-en-Provence.",
        telephone: "+33783792814",
        email: "service@jwl-marketing.fr",
        founder: { "@type": "Person", name: "Jodie Lapaillerie" },
        address: {
          "@type": "PostalAddress",
          // TODO (Jodie) : à aligner EXACTEMENT sur la fiche Google Business Profile.
          // Valeur reprise du footer actuel ("Pôle d'activité des Milles") ; le
          // brief technique mentionne aussi "Pôle d'activité La Duranne" - à trancher
          // par Jodie avant la mise en prod (cf. rapport de l'agent).
          streetAddress: "Pôle d'activité des Milles",
          postalCode: "13290",
          addressLocality: "Aix-en-Provence",
          addressRegion: "Provence-Alpes-Côte d'Azur",
          addressCountry: "FR",
        },
        areaServed: [
          { "@type": "City", name: "Aix-en-Provence" },
          { "@type": "City", name: "Marseille" },
          { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
          { "@type": "Country", name: "France" },
        ],
        knowsAbout: ["SEO local", "Google Business Profile", "Création de site web", "Marketing digital"],
        sameAs: [
          "https://www.linkedin.com/in/jodie-lapaillerie-jwl-marketing/",
          "https://www.instagram.com/jwlmarketing13/",
        ],
      }}
    />
  );
}

export function ArticleSchema(p: {
  url: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: p.url,
        headline: p.title,
        description: p.description,
        image: p.image,
        datePublished: p.datePublished,
        dateModified: p.dateModified ?? p.datePublished,
        inLanguage: "fr-FR",
        author: { "@type": "Person", name: "Jodie Lapaillerie", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#business` },
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}
