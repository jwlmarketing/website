"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleColors from "@/components/GoogleColors";
import EscalierReveal from "@/components/EscalierReveal";
import TypewriterText from "@/components/TypewriterText";
import Modal from "@/components/Modal";

const ACCOMPAGNEMENTS = [

  {
    image: "/images/jwl-formation-redaction-seo-blog.png",
    title: "Je te forme à la rédaction SEO pour ton blog",
    text: "Rédige, publie plus vite, et sois plus visible. Apprends à optimiser ton blog grâce aux méthodes SEO, aux outils d'analyse et à l'IA (ChatGPT, Claude).",
    star: "Forme-toi au SEO, au GEO et à la rédaction web pour attirer plus de visiteurs et gagner en autonomie.",
    cta: "Explore ma méthodologie",
    action: "formation" as const,
    ctaStyle: "gold" as const,
  },
  {
    image: "/images/jwl-creation-site-web-aix-en-provence.png",
    badge: "Nouveau",
    title: (
      <>
        Je crée ou refonds ton site web visible par <GoogleColors />
      </>
    ),
    text: "Création ou refonte, SEO intégré, Google Business Profile et accompagnement stratégique pour développer ton activité.",
    star: "Audit stratégique offert pour tout accompagnement annuel",
    cta: "Découvre le détail de mes accompagnements",
    action: "pricing" as const,
    ctaStyle: "terracotta" as const,
  },
  {
    image: "/images/jwl-clarifier-positionnement-entreprise.png",
    title: "Je te forme à la rédaction SEO pour ton blog",
    text: "Rédige, publie plus vite, et sois plus visible. Apprends à optimiser ton blog grâce aux méthodes SEO, aux outils d'analyse et à l'IA (ChatGPT, Claude).",
    star: "Forme-toi au SEO, au GEO et à la rédaction web pour attirer plus de visiteurs et gagner en autonomie.",
    cta: "Consulte mes audits",
    href: "/audit-seo-aix-en-provence",
    ctaStyle: "terracotta" as const,
  },
  {
    image: "/images/jwl-developpement-prospection-commerciale.png",
    title: "Je développe ta prospection commerciale",
    text: "Représentation sur salons et événements.",
    star: "Audit stratégique offert pour tout accompagnement annuel",
    cta: "Découvre mes prestations",
    href: "/developpement-commercial-aix-en-provence",
    ctaStyle: "terracotta" as const,
  },
];

const PRICING_TIERS = [
  {
    price: "697",
    title: "JWL Start",
    subtitle: "Le Site Web Business",
    quote: "« L'essentiel pour être visible sur Google. »",
    includedFrom: null as string | null,
    lead: null as string | null,
    items: [
      "Audit SEO stratégique inclus",
      "Création ou optimisation du site web",
      "SEO technique",
      "3 pages SEO locales ou régionales",
      "Conseils sur la gestion de ta fiche Google Business Profile",
      "Conseils pour gérer ta fiche en autonomie",
      "Connexion Search Console et Google Analytics",
      "Tableau de bord de suivi",
      "Maintenance et sauvegardes",
      "One to One tous les trimestres avec analyse du trafic et des conversions",
      "Rendez-vous stratégique trimestriel",
      "Site 100 % propriétaire",
    ],
    cta: "Je demande mon audit stratégique",
  },
  {
    price: "1275",
    title: "JWL Perform",
    subtitle: "Le Site Web Premium",
    quote: "« Je délègue ma visibilité et je me concentre sur mon métier. »",
    includedFrom: "Business",
    lead: "Ce qui change pour toi",
    items: [
      "Intégration d'un blog personnalisé",
      "5 pages SEO locales ou régionales",
      "Mise à jour de ta fiche Google Business Profile",
      "Suivi des appels, clics et demandes d'itinéraires",
      "Ajustements du site si nécessaire",
      "Analyse mensuelle pdf des résultats mensuels",
    ],
    cta: "Je réserve un échange découverte",
  },
  {
    price: "1500",
    title: "JWL Master",
    subtitle: null as string | null,
    quote: "« Pour les entreprises qui veulent une présence Google gérée de A à Z. »",
    includedFrom: "Premium",
    lead: "Ce qui change pour toi",
    items: [
      "Gestion complète de la fiche Google Business Profile",
      "Réponse aux avis clients",
      "Optimisation continue de la fiche Google",
      "1 publication Google Business Profile par mois",
      "Analyse mensuelle détaillée des performances",
      "One to One tous les mois avec analyse du trafic et des conversions, + pdf",
      "Accompagnement prioritaire",
      "Ajustements continus de la visibilité locale",
    ],
    cta: "Parler de mon projet",
  },
];

const FORMATION_REDACTION = {
  title: "JWL rédaction SEO pour ton blog",
  items: [
    "Formation personnalisée selon ton activité et tes objectifs",
    "Comprendre les bases de la rédaction SEO",
    "Savoir ce que Google attend d'un blog professionnel",
    "Différencier le rôle du site web et du blog",
    "Créer une arborescence de blog cohérente",
    "Choisir les bons sujets selon ton activité",
    "Trouver les mots-clés pertinents",
    "Planifier un calendrier éditorial efficace",
    "Rédiger des contenus optimisés pour Google et pour tes clients",
    "Découvrir les outils indispensables pour gagner du temps et avoir un résultat de compréhension chiffré",
    "Réaliser des exercices pratiques et des mises en situation",
  ],
  resultLead: "Résultat",
  results: [
    "Tu repars avec une méthode claire",
    "Tu sais quels contenus créer",
    "Tu comprends comment Google analyse ton blog",
    "Tu maîtrises les bases de la rédaction SEO",
    "Tu disposes d'un plan d'action adapté à ton activité pour gagner en visibilité et attirer davantage de prospects",
  ],
  cta: "voir la formation",
  href: "/tarifs",
};

function PricingCard({ tier }: { tier: (typeof PRICING_TIERS)[number] }) {
  return (
    <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-white">
      <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
        {tier.price}€
        <br />
        /mois
      </span>
      <span
        aria-hidden
        className="absolute -top-4 left-[64px] text-3xl font-bold leading-none text-white"
      >
        *
      </span>
      <h3 className="font-heading text-xl underline decoration-gold underline-offset-4">
        {tier.title}
      </h3>
      {tier.subtitle && (
        <p className="mt-1 text-sm font-medium text-white/80">{tier.subtitle}</p>
      )}
      <p className="mt-2 min-h-[2.5em] italic text-white/90">
        <TypewriterText text={tier.quote} />
      </p>
      {tier.includedFrom && (
        <p className="mt-4 text-sm uppercase tracking-wide text-gold">
          Tout ce qui est inclus dans {tier.includedFrom}
        </p>
      )}
      {tier.lead && (
        <p className="mt-2 text-sm font-semibold text-white">{tier.lead}</p>
      )}
      <ul className="mt-2 flex-1 space-y-1.5 text-sm text-white/85">
        {tier.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact-jwl-marketing-aix-en-provence"
        className="mt-6 inline-block self-center rounded-[5px] bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        {tier.cta}
      </Link>
    </div>
  );
}

export default function AccompagnementsSection() {
  const [modal, setModal] = useState<"pricing" | "formation" | null>(null);

  return (
    <>
      <EscalierReveal
        className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2"
        itemClassName="relative flex flex-col pt-14"
      >
        {ACCOMPAGNEMENTS.map((item, i) => (
          <div key={i} className="relative flex flex-col pt-14">
            <Image
              src={item.image}
              alt={typeof item.title === "string" ? item.title : "JWL Marketing"}
              width={220}
              height={220}
              className="absolute -top-2 right-6 h-[140px] w-[140px] rotate-3 rounded-xl object-cover shadow-lg md:h-[160px] md:w-[160px]"
            />
            {"badge" in item && item.badge && (
              <span className="absolute right-[150px] top-2 -rotate-6 rounded-full bg-gold px-4 py-2 text-xs font-bold text-white shadow-md md:right-[170px]">
                {item.badge}
              </span>
            )}
            <div className="flex flex-1 flex-col rounded-2xl border border-[#c9846f]/40 bg-[#141414] p-8 pt-10 text-left text-white">
              <h3 className="pr-32 font-heading text-xl leading-snug md:pr-36">
                {item.title}
              </h3>
              <p className="mt-4 text-sm text-white/85">{item.text}</p>
              <p className="mt-4 text-sm text-gold">⭐ {item.star}</p>
              {"action" in item && item.action ? (
                <button
                  type="button"
                  onClick={() => setModal(item.action)}
                  className={`mt-6 inline-block self-start rounded-full px-6 py-3 text-sm font-medium text-white transition-colors ${
                    item.ctaStyle === "gold"
                      ? "bg-gold hover:bg-[#b8952f]"
                      : "bg-[#c9846f] hover:bg-[#b8735f]"
                  }`}
                >
                  {item.cta}
                </button>
              ) : (
                <Link
                  href={"href" in item ? item.href : "#"}
                  className="mt-6 inline-block self-start rounded-full bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
                >
                  {item.cta}
                </Link>
              )}
            </div>
          </div>
        ))}
      </EscalierReveal>

      <Modal open={modal === "pricing"} onClose={() => setModal(null)}>
        <h3 className="text-center font-heading text-2xl md:text-3xl">
          Un accompagnement clair et conçu pour te rendre autonome au bout d&apos;un an.
        </h3>
        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
        <div className="mt-8 rounded-2xl border-2 border-gold bg-white p-6 text-sm leading-relaxed text-gold">
          * <strong className="font-bold">Les tarifs indiqués</strong>{" "}
          correspondent aux prestations décrites dans chaque formule. Ils
          peuvent être adaptés selon la complexité du projet, le secteur
          d&apos;activité, la concurrence, la zone géographique ciblée, les
          objectifs de développement, le niveau d&apos;accompagnement souhaité
          ainsi que les besoins spécifiques de l&apos;entreprise. Toute
          demande particulière pourra faire l&apos;objet d&apos;un devis
          personnalisé.
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Un doute sur ton choix ? Demande un conseil gratuit
          </Link>
        </div>
      </Modal>

      <Modal open={modal === "formation"} onClose={() => setModal(null)}>
        <div className="rounded-2xl bg-[#141414] p-8 text-left text-white md:p-10">
          <h3 className="text-center font-heading text-2xl">{FORMATION_REDACTION.title}</h3>
          <ul className="mt-6 space-y-2 text-sm text-white/85">
            {FORMATION_REDACTION.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold text-gold">{FORMATION_REDACTION.resultLead}</p>
          <ul className="mt-2 space-y-2 text-sm text-white/85">
            {FORMATION_REDACTION.results.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href={FORMATION_REDACTION.href}
              className="inline-block rounded-full bg-gold px-9 py-4 text-base font-medium text-white transition-colors hover:bg-[#b8952f]"
            >
              {FORMATION_REDACTION.cta}
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
