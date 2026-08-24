import Image from "next/image";
import Link from "next/link";
import HeroBadge from "@/components/HeroBadge";
import YoutubeLite from "@/components/YoutubeLite";
import SectionHeading from "@/components/SectionHeading";
import GoogleColors from "@/components/GoogleColors";
import FaqAccordion from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/data/homeFaq";
import { REVIEWS } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";

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

const WHY_US = [
  {
    title: "1 seule interlocutrice",
    text: "En tant que consultante SEO et développeuse commerciale indépendante, je pilote personnellement chaque mission afin de garantir un accompagnement réactif, cohérent et transparent.",
    icon: "phone" as const,
  },
  {
    title: "Des échanges rapides",
    text: "Profite d'un contact direct pour poser tes questions, suivre ton projet et obtenir des réponses rapides lorsque tu en as besoin.",
    icon: "whatsapp" as const,
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
        <p className="mt-2 font-semibold italic text-white/90">
          {(offer as (typeof OFFERS_STARTER)[number]).subtitle}
        </p>
      )}
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold">
        {offer.lead}
      </p>
      <ul className="mt-2 space-y-1.5 text-sm text-white/85">
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
          <ul className="mt-2 space-y-1.5 text-sm text-white/85">
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
        <p className="mt-4 text-sm text-white/85">
          <span className="font-semibold uppercase tracking-wide text-gold">
            Objectif :
          </span>{" "}
          {(offer as (typeof OFFERS_NEXT)[number]).objectif}
        </p>
      )}
      <Link
        href={offer.href}
        className="mt-6 inline-block self-start rounded-[5px] bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
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
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[5%] pb-[60px] pt-20 md:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 mt-2.5 font-heading text-[60px] leading-[1.2] text-black">
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

      {/* Et si ton prochain client... */}
      <section className="flex flex-col items-center justify-between gap-10 px-[5%] py-20 md:flex-row">
        <div className="flex-1 overflow-hidden rounded-[40px] bg-black p-10">
          <div className="mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-xl">
            <YoutubeLite videoId="-btM09DQ4zg" title="JWL Marketing" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-[54px] font-normal leading-[1.1] text-black">
            Et si <span className="italic text-[#c9846f]">ton prochain client</span>{" "}
            te trouvait grâce à <GoogleColors />
          </h2>
        </div>
      </section>

      {/* Cas client */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading noCorners title="Ce que JWL MARKETING à mis en place pour un de">
          {" "}
          <span className="font-semibold italic text-gold">ces clients</span>
        </SectionHeading>
        <Image
          src="/images/case-study-proxiclic.png"
          alt="Résultats obtenus pour Proxiclic-Provence grâce à JWL Marketing"
          width={1366}
          height={465}
          className="mx-auto h-auto w-full max-w-[1200px]"
        />
      </section>

      {/* La méthode */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading kicker="La méthode" title="JWL MARKETING" />
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {METHODE_STEPS.map((step) => (
            <div key={step.title} className="flex flex-col overflow-hidden rounded-2xl bg-black text-white">
              <Image
                src={step.image}
                alt={step.title}
                width={455}
                height={340}
                className="h-[220px] w-full object-cover"
              />
              <div className="border-b border-white/15 px-6 py-6">
                <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm text-white/85">{step.lead}</p>
              </div>
              <ul className="flex-1 space-y-2 px-6 py-6 text-sm text-white/85">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="px-6 pb-8">
                <Link
                  href={step.href}
                  className="inline-block rounded-full bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
                >
                  {step.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi les entreprises choisissent JWL Marketing */}
      <section className="py-16 text-center">
        <SectionHeading kicker="Pourquoi les entreprises choisissent" title="JWL MARKETING" />
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-0 overflow-hidden rounded-3xl bg-black md:h-[560px] md:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-8 p-10 text-left text-white">
            {WHY_US.map((item) => (
              <div key={item.title} className="border-b border-white/15 pb-8 last:border-0 last:pb-0">
                <h3 className="text-center font-heading text-2xl font-bold">{item.title}</h3>
                {item.icon === "phone" ? (
                  <svg viewBox="0 0 24 24" className="mx-auto mt-3 h-9 w-9 fill-gold">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="mx-auto mt-3 h-9 w-9 fill-[#25D366]">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 004.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.34-.5.04-1 .25-3.34-.7-2.82-1.13-4.63-3.99-4.77-4.18-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.92 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.07.12.07.68-.17 1.36z" />
                  </svg>
                )}
                <p className="mt-4 text-center text-white/85">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <Image
              src="/images/jodie-marketing-digital-seo.png"
              alt="Jodie Lapaillerie - JWL Marketing"
              width={642}
              height={862}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[1200px] rounded-3xl bg-black p-10 text-left text-white md:text-center">
          <h3 className="text-center font-heading text-2xl font-bold text-white">
            Un espace sécurisé.
          </h3>
          <div className="mt-6 flex flex-col items-center gap-8 md:flex-row">
            <Image
              src="/images/jwl-intranet-playstore.png"
              alt="Application JWL Intranet"
              width={470}
              height={285}
              className="h-auto w-full max-w-[320px] rounded-xl"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/85">
                Retrouve tes statistiques Google, tes documents, tes
                rendez-vous et le suivi de ton activité. Accessible depuis ton
                intranet client ou en téléchargeant l&apos;application JWL
                MARKETING sur le Play Store.
              </p>
              <Link
                href="/consultant-seo-aix-en-provence"
                className="mt-6 inline-block rounded-[5px] bg-gold px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8952f]"
              >
                Qui suis je ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ta visibilité n'est pas une question de hasard */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading
          kicker="Ta visibilité"
          title="n'est pas une question de hasard"
          subtext={
            <span className="mx-auto block max-w-[300px] text-left font-semibold text-black">
              1. Être trouvée
              <br />
              2. Être comprise
              <br />
              3. Être choisie
            </span>
          }
        />

        <video
          src="/videos/visibilite-graphique.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto mb-4 w-full max-w-[500px]"
        />

        <SectionHeading
          title="Choisis l'accompagnement"
          accent="adapté a tes objectifs"
        />
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row">
          {OFFERS_STARTER.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>

        <SectionHeading
          kicker="Et après ?"
          title="on poursuit l'aventure ensemble ou en autonomie"
        />
        <div className="mx-auto flex max-w-[820px] flex-col gap-8 md:flex-row">
          {OFFERS_NEXT.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-neutral-50 px-6 py-16">
        <SectionHeading title="Ils" accent="encaissent du cash, avec JWL MARKETING" />
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-2 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading title="FAQ" accent=": Foire Aux Questions" />
        <FaqAccordion items={HOME_FAQ} />
      </section>

      {/* CTA de clôture */}
      <section className="px-[5%] py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row">
          <Image
            src="/images/cta-carriere-decollee.png"
            alt="Hâte de voir votre carrière décollée - JWL Marketing"
            width={1410}
            height={2000}
            className="h-auto w-full max-w-[300px] rounded-2xl object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-4xl font-bold leading-tight text-black">
              Hâte de voir votre carrière décollée !
            </h2>
            <p className="mt-6 text-lg text-[#555]">
              Pour toute question concernant le programme, veuillez me
              contacter
            </p>
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
