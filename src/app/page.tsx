import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBadge from "@/components/HeroBadge";
import YoutubeLite from "@/components/YoutubeLite";
import VisibilityChart from "@/components/VisibilityChart";
import SectionHeading from "@/components/SectionHeading";
import GoogleColors from "@/components/GoogleColors";
import RotatingKeyword from "@/components/RotatingKeyword";
import ClientResultsWidget from "@/components/ClientResultsWidget";
import { REVIEWS } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import GuaranteesCards from "@/components/GuaranteesCards";
import EscalierReveal from "@/components/EscalierReveal";
import TypewriterText from "@/components/TypewriterText";
import TrustedPartners from "@/components/TrustedPartners";
import LanguageToggle from "@/components/LanguageToggle";

const METHODE_STEPS = [
  {
    image: "/images/accompagnement-digital.png",
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
    image: "/images/strategie-marketing.png",
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
    image: "/images/developpement-digital.png",
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

const ACCOMPAGNEMENTS = [
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
    cta: "Obtenir mon audit offert",
    href: "/site-internet-aix-en-provence",
    ctaStyle: "terracotta" as const,
  },
  {
    image: "/images/jwl-formation-redaction-seo-blog.png",
    title: "Je te forme à la rédaction SEO pour ton blog",
    text: "Rédige, publie plus vite, et sois plus visible. Apprends à optimiser ton blog grâce aux méthodes SEO, aux outils d'analyse et à l'IA (ChatGPT, Claude).",
    star: "Forme-toi au SEO, au GEO et à la rédaction web pour attirer plus de visiteurs et gagner en autonomie.",
    cta: "voir la formation",
    href: "/tarifs",
    ctaStyle: "gold" as const,
  },
  {
    image: "/images/jwl-clarifier-positionnement-entreprise.png",
    title: "Je clarifie ton positionnement",
    text: "Pour les entreprises qui ne savent pas encore comment se positionner ou vendre.",
    star: "Audit stratégique offert pour tout accompagnement annuel",
    cta: "Découvrir l'accompagnement",
    href: "/entrepreneur-aix-en-provence",
    ctaStyle: "terracotta" as const,
  },
  {
    image: "/images/jwl-developpement-prospection-commerciale.png",
    title: "Je développe ta prospection commerciale",
    text: "Représentation sur salons et événements.",
    star: "Audit stratégique offert pour tout accompagnement annuel",
    cta: "Découvrir l'accompagnement",
    href: "/developpement-commercial-aix-en-provence",
    ctaStyle: "terracotta" as const,
  },
];

const FACTEURS_SEO = [
  "De tes produits et services",
  "De ta zone de chalandise",
  "De ton positionnement",
  "De ta stratégie commerciale",
  "De ta présence en ligne",
  "De ta fiche Google Business Profile",
  "De ton site web",
  "De son optimisation technique",
  "De ta rédaction web",
  "De la qualité de tes contenus",
  "De ta régularité à publier",
  "De la concurrence sur ton secteur",
  "De ton historique digital",
  "De tes objectifs",
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

const ET_APRES_ITEMS = [
  "Ton site web t'appartient.",
  "Tu conserves tous tes identifiants et mots de passe.",
  "Ton espace client reste accessible à tout moment.",
  "Tes devis, factures et documents restent disponibles.",
  "Tes comptes Google et tes outils de suivi restent à ton nom.",
  "Tu gardes l'accès à Google Search Console pour suivre ta visibilité et ton trafic.",
  "Tu conserves l'historique et les actions mises en place pendant notre collaboration.",
];

function PricingCard({ tier }: { tier: (typeof PRICING_TIERS)[number] }) {
  return (
    <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-white">
      <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
        {tier.price}€
        <br />
        /mois
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
        <div className="flex items-center gap-3">
          <a href="https://intranet.jwlmarketing.fr/" aria-label="Connexion espace client">
            <Image
              src="/images/seco.png"
              alt="Connexion espace client"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </a>
          <LanguageToggle locale="fr" href="/en" />
        </div>
      </div>

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[5%] pb-[60px] pt-20 lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 mt-2.5 font-heading text-4xl leading-[1.15] text-black lg:text-[60px] lg:leading-[1.2]">
            <span>
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
              className="inline-block rounded-full bg-[#faf3ea] px-9 py-[18px] text-lg font-medium text-[#000000] transition-colors hover:bg-[#f2e6d4]"
            >
              Audit Marketing GRATUIT
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-base">
            <span className="text-lg font-normal text-[#1a2b6b]">5/5</span>
            <span className="text-gold">★★★★★</span>
            <span className="text-[#555]">16 avis Google</span>
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
          <video
            src="/videos/hero-jodie-etoile.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Jodie Lapaillerie - JWL Marketing"
            className="-mt-10 h-auto max-h-[70vh] w-full max-w-full object-contain md:-mt-16"
          />
          <HeroBadge />
        </div>
      </div>

      <TrustedPartners />

      {/* Quand un client recherche ton métier, apparais-tu ? */}
      <section className="px-[5%] py-16 text-center">
        <h2 className="mx-auto max-w-[900px] font-heading text-3xl font-medium leading-[1.25] text-black md:text-[44px] md:leading-[1.3]">
          Quand un client recherche ton métier,{" "}
          <span className="italic text-[#c9846f]">apparais-tu</span> ?
        </h2>

        <div className="mx-auto mt-10 flex max-w-[700px] flex-col items-center gap-2">
          <GoogleColors />
          <div className="flex w-full items-center gap-2 rounded-full border border-[#e0e0e0] bg-white px-6 py-4 shadow-sm">
            <p className="flex min-w-0 flex-1 items-center gap-1.5 text-left text-sm text-[#333] md:text-base">
              <RotatingKeyword
                className="font-semibold text-[#c9846f]"
                words={["électricien", "plombier", "robe rouge", "costume enfant"]}
              />
              <span className="truncate">à Aix-en-Provence</span>
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[900px] space-y-5 text-left text-[15px] leading-relaxed text-[#333] md:text-base">
          <p>
            <strong>
              Aujourd&apos;hui, près de 85 % des consommateurs effectuent une
              recherche en ligne avant de contacter une entreprise.
            </strong>{" "}
            Ils ne connaissent ni ton nom, ni l&apos;existence de ton
            entreprise. Ils recherchent simplement un produit ou un service.
            Si ton entreprise n&apos;apparaît pas dans les résultats, Google
            proposera tes concurrents.
          </p>
          <p>
            Les habitudes de recherche évoluent également avec l&apos;arrivée
            de l&apos;intelligence artificielle.{" "}
            <strong>
              Google intègre désormais l&apos;IA dans ses résultats pour
              répondre plus rapidement aux internautes et mettre en avant les
              entreprises jugées les plus pertinentes.
            </strong>
          </p>
          <p>
            Être visible ne consiste plus seulement à avoir un site web.{" "}
            <strong>
              Il faut aussi proposer un contenu clair, fiable et pertinent
              pour apparaître dans les recherches Google d&apos;aujourd&apos;hui
              et de demain.
            </strong>
          </p>
        </div>
      </section>

      {/* Recommandée par l'IA + Cas client */}
      <section className="px-[5%] py-16 text-center">
        <Image
          src="/images/jwl-marketing-recommandee-ia-google-chatgpt-gemini-claude.png"
          alt="JWL Marketing recommandée par Google, ChatGPT, Gemini, Perplexity et Claude"
          width={1366}
          height={340}
          className="mx-auto h-auto w-full max-w-[1100px] object-contain"
        />
        <SectionHeading title="Ce que JWL MARKETING à mis en place">
          <br />
          pour un de{" "}
          <span className="italic text-[#c9846f]">ces clients</span>
        </SectionHeading>
        <ClientResultsWidget />
      </section>

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

      {/* Pourquoi les entreprises choisissent JWL Marketing */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading kicker="Pourquoi les entreprises choisissent" title="JWL MARKETING" />
        <GuaranteesCards />
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
                <h3 className="min-h-[1.6em] font-heading text-xl">
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

      {/* Nos accompagnements */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading title="Nos accompagnements" />
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
              {item.badge && (
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
                <Link
                  href={item.href}
                  className={`mt-6 inline-block self-start rounded-full px-6 py-3 text-sm font-medium text-white transition-colors ${
                    item.ctaStyle === "gold"
                      ? "bg-gold hover:bg-[#b8952f]"
                      : "bg-[#c9846f] hover:bg-[#b8735f]"
                  }`}
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </EscalierReveal>
      </section>

      {/* Ta visibilité n'est pas une question de hasard */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading
          kicker="Ta visibilité"
          title="n'est pas une question de hasard"
        />

        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 md:flex-row">
          <VisibilityChart />
          <span className="block max-w-[300px] shrink-0 text-left text-black">
            1. Être trouvée
            <br />
            2. Être comprise
            <br />
            3. Être choisie
          </span>
        </div>

        {/* Mais de résultat */}
        <div className="mx-auto mt-16 flex max-w-[1000px] flex-col items-center gap-8 md:flex-row">
          <p className="text-2xl italic text-[#c9846f] md:hidden">Mais de résultat :</p>
          <Image
            src="/images/jwl-consultante-seo-facteurs-visibilite.png"
            alt="JWL Marketing - facteurs de visibilité SEO"
            width={280}
            height={340}
            className="h-auto w-[220px] shrink-0 object-contain md:w-[280px]"
          />
          <div className="w-full rounded-2xl border border-[#c9846f]/40 bg-[#141414] p-8 text-left text-white">
            <p className="mb-3 hidden text-2xl italic text-[#c9846f] md:block">
              Mais de résultat :
            </p>
            <h3 className="font-heading text-lg font-semibold">
              Le SEO dépend de nombreux facteurs
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm text-white/85">
              {FACTEURS_SEO.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto my-10 w-full max-w-[1000px] px-5 text-center md:my-[60px]">
          <h3 className="font-heading text-2xl leading-[1.3] md:text-4xl">
            Alors, combien de temps pour atteindre la{" "}
            <span className="italic text-[#c9846f]">première page Google</span> ?
          </h3>
          <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-relaxed text-[#555]">
            Te donner une date précise sans analyser ton activité reviendrait
            à te promettre une date pour devenir riche sans connaître ton
            projet, ton marché ou les actions que tu es prêt à mettre en
            place. Chaque entreprise est différente. Certaines obtiennent
            leurs premiers résultats en quelques semaines. D&apos;autres
            nécessitent plusieurs mois de travail pour rattraper des
            concurrents déjà bien implantés. Je suis consultante SEO et
            experte en acquisition client. Mon rôle est de construire une
            stratégie adaptée à ton activité, d&apos;identifier les leviers
            les plus rentables et de mettre en place les actions qui te
            rapprocheront durablement de la première page Google.
          </p>
        </div>

        <div className="mx-auto my-10 w-full max-w-[1400px] px-5 text-center md:my-[60px]">
          <h2 className="font-heading text-3xl leading-[1.2] md:text-[54px] md:leading-[1.35]">
            <span className="italic text-[#c9846f]">Choisis l&apos;accompagnement</span>{" "}
            <span className="text-black">adapté a tes objectifs</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-[#555]">
            Un accompagnement clair et conçu pour te rendre autonome au bout
            d&apos;un an.
          </p>
        </div>
        <EscalierReveal
          className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row"
          itemClassName="flex flex-1 flex-col"
        >
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
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

        {/* Formation rédaction SEO */}
        <div className="mx-auto mt-16 max-w-[820px] rounded-2xl bg-[#141414] p-8 text-left text-white md:p-10">
          <h3 className="text-center font-heading text-2xl">
            {FORMATION_REDACTION.title}
          </h3>
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

        <SectionHeading
          kicker="Et après ?"
          title="on poursuit l'aventure ensemble ou en autonomie"
        />
        <div className="mx-auto max-w-[900px] rounded-2xl bg-[#141414] p-8 text-left text-white md:p-10">
          <p className="text-sm leading-relaxed text-white/90 md:text-base">
            Tu es libre de continuer avec JWL Marketing, de gérer ta
            communication seul ou de travailler avec un autre prestataire.
            Les outils, les données et le travail réalisé restent les tiens.
            Chez JWL Marketing, tu conserves l&apos;ensemble de tes accès et
            de tes outils.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/85">
            {ET_APRES_ITEMS.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-semibold text-white">
            Après 12 mois, deux possibilités :
          </p>
          <ul className="mt-2 space-y-2 text-sm text-white/85">
            <li className="flex gap-2">
              <span className="text-gold">✔</span>
              <span>Nous continuons à développer ta visibilité ensemble.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold">✔</span>
              <span>Tu poursuis en totale autonomie avec toutes les clés en main.</span>
            </li>
          </ul>
        </div>
        <Image
          src="/images/jwl-et-apres-jwl-marketing.png"
          alt="JWL Marketing - on poursuit l'aventure ensemble"
          width={900}
          height={450}
          className="mx-auto mt-8 h-auto w-full max-w-[500px] object-contain"
        />
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
