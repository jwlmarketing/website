import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBadge from "@/components/HeroBadge";
import YoutubeLite from "@/components/YoutubeLite";
import VisibilityChart from "@/components/VisibilityChart";
import SectionHeading from "@/components/SectionHeading";
import GoogleColors from "@/components/GoogleColors";
import ClientResultsWidget from "@/components/ClientResultsWidget";
import { REVIEWS } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import GuaranteesCards from "@/components/GuaranteesCards";
import EscalierReveal from "@/components/EscalierReveal";
import TypewriterText from "@/components/TypewriterText";
import TrustedPartners from "@/components/TrustedPartners";

const METHODE_STEPS = [
  {
    image: "/images/methode-ecosysteme.png",
    title: "Je découvre",
    lead: "J'identifies pourquoi Google ne t'apporte pas assez de clients.",
    items: [
      "Audit SEO",
      "Audit commercial",
      "Analyse de la concurrence",
      "Analyse de Google Business Profile",
    ],
    cta: "Prenez rendez-vous",
    href: "/contact-jwl-marketing-aix-en-provence",
  },
  {
    image: "/images/methode-avis-google.png",
    title: "Je passe à l'action",
    lead: "Je construis un écosystème qui travaille pour ton entreprise.",
    items: [
      "Google Business Profile",
      "Site internet",
      "Pages SEO",
      "Articles de blog",
      "Optimisations IA et GEO",
    ],
    cta: "En savoir plus",
    href: "/site-internet-aix-en-provence",
  },
  {
    image: "/images/methode-suivi.png",
    title: "Google te découvre",
    lead: "Je mesures, ajustes et développes ta visibilité.",
    items: [
      "Suivi du positionnement",
      "Analyse des statistiques",
      "Nouvelles opportunités SEO",
      "Accompagnement mensuel",
    ],
    cta: "En savoir plus",
    href: "/audit-seo-aix-en-provence",
  },
];

const OFFERS_STARTER = [
  {
    price: "690",
    title: "JWL Diagnostic",
    subtitle: "« Je veux savoir où j'en suis avant d'investir. »",
    lead: "Je réalise :",
    items: [
      "audit commercial",
      "audit marketing",
      "audit SEO",
      "analyse concurrentielle",
      "analyse de visibilité",
      "opportunités de développement",
      "feuille de route",
    ],
    footer:
      "Peu importe que tu sois dentiste, plombier, thérapeute, créateur ou avocat.",
    cta: "Prenez rendez-vous",
    href: "/contact-jwl-marketing-aix-en-provence",
  },
  {
    price: "1990",
    title: "JWL Business",
    subtitle: "« Je construis un site web sur mesure. »",
    lead: "Inclus :",
    items: [
      "Audit stratégique",
      "Positionnement commercial",
      "Architecture des pages",
      "Développement sur mesure",
      "Mise en ligne sur Vercel",
      "Optimisation technique",
    ],
    lead2: "Ce qui fait la différence :",
    items2: [
      "Site rapide",
      "Sans abonnement",
      "Sans paiement annuel d'un hébergeur",
      "Évolutif",
      "Certificat de propriété délivré au client (agréé juridiquement)",
    ],
    cta: "En savoir plus",
    href: "/site-internet-aix-en-provence",
  },
  {
    price: "4500",
    title: "JWL Visible",
    subtitle: "« Je développe, je veux des clients. »",
    lead: "Inclus :",
    items: [
      "Site web sur mesure + stratégie SEO",
      "Audit stratégique",
      "Positionnement SEO",
      "Développement du site",
      "Optimisation technique SEO",
      "Rédaction SEO",
      "Google Business Profile",
      "Blog",
      "Stratégie locale, régionale ou nationale",
    ],
    cta: "En savoir plus",
    href: "/audit-seo-aix-en-provence",
  },
];

const OFFERS_NEXT = [
  {
    price: "645",
    perMonth: true,
    title: "JWL Croissance",
    lead: "Comprend :",
    items: [
      "Accompagnement mensuel (one to one)",
      "Accès aux outils Google performance",
      "Suivi du positionnement",
      "Analyse des performances",
      "Ajustements stratégiques SEO",
    ],
    objectif: "Devenir la référence locale ou régionale sur son marché.",
    cta: "voir les formules",
    href: "/site-internet-aix-en-provence",
  },
  {
    price: "950",
    title: "JWL Master rédaction SEO",
    lead: "Comprend :",
    items: [
      "Comprendre les opportunités SEO identifiées",
      "Utiliser les mots-clés stratégiques",
      "Construire un calendrier éditorial",
      "Rédiger des articles optimisés",
      "Utiliser TextOptimizer ou ton outil d'optimisation",
      "Comprendre l'intention de recherche",
      "Structurer un contenu qui plaît à Google",
    ],
    objectif: "Devenir la référence locale ou régionale sur son marché.",
    cta: "voir les formules",
    href: "/site-internet-aix-en-provence",
  },
];

function OfferCard({
  offer,
}: {
  offer: (typeof OFFERS_STARTER)[number] | (typeof OFFERS_NEXT)[number];
}) {
  const hasSubtitle = "subtitle" in offer;
  const hasLead2 = "lead2" in offer && offer.lead2;
  const hasFooter = "footer" in offer && offer.footer;
  const hasObjectif = "objectif" in offer && offer.objectif;
  const perMonth = "perMonth" in offer && offer.perMonth;

  return (
    <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-white">
      <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] font-bold leading-tight text-white shadow-md">
        À partir
        <br />
        de {offer.price}€{perMonth && <><br />par mois</>}
      </span>
      <h3 className="font-heading text-xl font-bold underline decoration-gold underline-offset-4">
        {offer.title}
      </h3>
      {hasSubtitle && (
        <p className="mt-2 min-h-[2.5em] font-semibold italic text-white/90">
          <TypewriterText
            text={(offer as (typeof OFFERS_STARTER)[number]).subtitle}
          />
        </p>
      )}
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold">
        {offer.lead}
      </p>
      <ul className="mt-2 flex-1 space-y-1.5 text-sm text-white/85">
        {offer.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {hasLead2 && (
        <>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold">
            {(offer as (typeof OFFERS_STARTER)[number]).lead2}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-[#c9846f]">
            {(offer as (typeof OFFERS_STARTER)[number]).items2!.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {hasFooter && (
        <p className="mt-4 text-sm text-white/70">
          {(offer as (typeof OFFERS_STARTER)[number]).footer}
        </p>
      )}
      {hasObjectif && (
        <p className="mt-4 min-h-[3em] text-sm text-white/85">
          <span className="font-semibold uppercase tracking-wide text-gold">
            Objectif :
          </span>{" "}
          <TypewriterText
            text={(offer as (typeof OFFERS_NEXT)[number]).objectif}
          />
        </p>
      )}
      <Link
        href={offer.href}
        className="mt-6 inline-block self-center rounded-[5px] bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        {offer.cta}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Logo + compte, au-dessus du hero */}
      <div className="flex w-full items-center justify-between px-[5%] pt-20">
        <Link href="/">
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing Aix-en-Provence"
            width={966}
            height={187}
            className="h-[36px] w-auto"
          />
        </Link>
        <a href="https://intranet.jwlmarketing.fr/" aria-label="Connexion espace client">
          <Image
            src="/images/seco.png"
            alt="Connexion espace client"
            width={28}
            height={28}
            className="h-7 w-7"
          />
        </a>
      </div>

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[5%] pb-[60px] pt-20 lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 mt-2.5 font-heading text-4xl leading-[1.15] text-black lg:text-[60px] lg:leading-[1.2]">
            <span className="font-bold">
              Un site Web
              <br />
              qui attire de
            </span>
            <br />
            <span className="font-heading italic text-[#c9846f]">
              nouveaux clients
            </span>
          </h1>

          <p className="mt-4 text-lg leading-[1.6] text-[#333]">
            Google doit te trouver. L&apos;IA doit te comprendre. Tes futurs
            clients doivent te choisir.
          </p>

          <div className="mt-6 flex flex-wrap gap-[15px]">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Audit Marketing GRATUIT
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-base">
            <span className="text-lg font-normal text-[#1a2b6b]">4,9/5</span>
            <span className="text-gold">★★★★★</span>
            <span className="text-[#555]">91 avis Google</span>
            <span className="text-[#999]">·</span>
            <a
              href="http://api.jwl-marketing.fr/redirects/gmb/jwl.html"
              target="_blank"
              rel="noopener"
              className="font-normal text-[#1a2b6b] underline"
            >
              Ajouter un avis
            </a>
          </div>
        </div>

        <div className="relative flex min-w-0 flex-[1.4_1_0%] items-start justify-end">
          <Image
            src="/images/hero-jodie-cartoon.png"
            alt="Jodie Lapaillerie - JWL Marketing"
            width={760}
            height={623}
            priority
            className="h-auto max-h-[70vh] w-full max-w-full object-contain"
          />
          <HeroBadge />
        </div>
      </div>

      <TrustedPartners />

      {/* Et si ton prochain client... */}
      <section className="flex flex-col items-center justify-between gap-10 px-[5%] py-20 md:flex-row">
        <div className="flex-[1.4_1_0%] overflow-hidden rounded-[40px] bg-black p-10">
          <div className="mx-auto aspect-video w-full max-w-[650px] overflow-hidden rounded-xl">
            <YoutubeLite videoId="-btM09DQ4zg" title="JWL Marketing" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center text-center">
          <h2 className="mx-auto max-w-[560px] font-heading text-3xl font-normal leading-[1.2] text-black md:text-[54px] md:leading-[1.1]">
            Et si <span className="italic text-[#c9846f]">ton prochain</span>
            <br />
            <span className="italic text-[#c9846f]">client</span> te trouvait
            <br />
            grâce à <GoogleColors />
            <span className="text-black">?</span>
          </h2>
        </div>
      </section>

      {/* Cas client */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading title="Ce que JWL MARKETING à mis en place">
          <br />
          pour un de{" "}
          <span className="font-semibold italic text-[#c9846f]">ces clients</span>
        </SectionHeading>
        <ClientResultsWidget />
      </section>

      {/* La méthode */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading kicker="La méthode" title="JWL MARKETING" />
        <EscalierReveal
          className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3"
          itemClassName="flex flex-col overflow-hidden rounded-2xl bg-black text-white"
        >
          {METHODE_STEPS.map((step, i) => (
            <Fragment key={step.title}>
              <Image
                src={step.image}
                alt={step.title}
                width={455}
                height={340}
                className="h-[220px] w-full object-cover"
              />
              <div className="border-b border-white/15 px-6 py-6">
                <h3 className="min-h-[1.6em] font-heading text-xl font-bold">
                  <TypewriterText text={step.title} startDelay={i * 150 + 650} />
                </h3>
                <p className="mt-3 text-sm text-white/85">{step.lead}</p>
              </div>
              <ul className="flex-1 space-y-2 px-6 py-6 text-sm text-white/85">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="px-6 pb-8 text-center">
                <Link
                  href={step.href}
                  className="inline-block rounded-full bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
                >
                  {step.cta}
                </Link>
              </div>
            </Fragment>
          ))}
        </EscalierReveal>
      </section>

      {/* Pourquoi les entreprises choisissent JWL Marketing */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading kicker="Pourquoi les entreprises choisissent" title="JWL MARKETING" />
        <GuaranteesCards />
      </section>

      {/* Ta visibilité n'est pas une question de hasard */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading
          kicker="Ta visibilité"
          title="n'est pas une question de hasard"
        />

        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 md:flex-row">
          <VisibilityChart />
          <span className="block max-w-[300px] shrink-0 text-left font-semibold text-black">
            1. Être trouvée
            <br />
            2. Être comprise
            <br />
            3. Être choisie
          </span>
        </div>

        <div className="mx-auto my-10 w-full max-w-[1400px] px-5 text-center md:my-[60px]">
          <h2 className="font-heading text-3xl leading-[1.2] md:text-[54px] md:leading-[1.35]">
            <span className="italic text-[#c9846f]">Choisis l&apos;accompagnement</span>{" "}
            <span className="text-black">adapté a tes objectifs</span>
          </h2>
        </div>
        <EscalierReveal
          className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row"
          itemClassName="flex flex-1 flex-col"
        >
          {OFFERS_STARTER.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </EscalierReveal>

        <div className="mx-auto mt-10 flex max-w-[1200px] justify-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Un doute sur ton choix ? Demande un conseil gratuit
          </Link>
        </div>

        <SectionHeading
          kicker="Et après ?"
          title="on poursuit l'aventure ensemble ou en autonomie"
        />
        <EscalierReveal
          className="mx-auto flex max-w-[820px] flex-col gap-8 md:flex-row"
          itemClassName="flex flex-1 flex-col"
        >
          {OFFERS_NEXT.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </EscalierReveal>

        <div className="mx-auto mt-10 flex max-w-[820px] justify-center">
          <Link
            href="/site-internet-aix-en-provence"
            className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            JWL Master — voir l&apos;accompagnement
          </Link>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto my-10 max-w-[700px] px-5 text-center md:my-[60px]">
          <h2 className="font-heading text-3xl leading-[1.2] md:text-[54px] md:leading-[1.35]">
            <span className="italic text-[#c9846f]">Ils encaissent du cash,</span>{" "}
            <span className="text-black">avec JWL MARKETING</span>
          </h2>
        </div>
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-2 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>
    </div>
  );
}
