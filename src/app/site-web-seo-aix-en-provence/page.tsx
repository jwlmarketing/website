import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import GoogleColors from "@/components/GoogleColors";
import ContactForm from "@/components/ContactForm";
import ProofCards from "@/components/ProofCards";
import ProspectCarousel from "@/components/ProspectCarousel";
import FadeUp from "@/components/FadeUp";
import RotatingKeyword from "@/components/RotatingKeyword";
import ComparisonTableCta from "@/components/ComparisonTableCta";

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

const FORMATION_ITEMS = [
  "Formation personnalisée selon ton activité et tes objectifs.",
  "Comprendre les bases de la rédaction SEO.",
  "Savoir ce que Google attend d'un blog professionnel.",
  "Différencier le rôle du site web et du blog.",
  "Créer une arborescence de blog cohérente.",
  "Choisir les bons sujets selon ton activité.",
  "Trouver les mots-clés pertinents.",
  "Planifier un calendrier éditorial efficace.",
  "Rédiger des contenus optimisés pour Google et pour tes clients.",
  "Découvrir les outils indispensables pour gagner du temps et avoir un résultat de compréhension chiffré.",
  "Réaliser des exercices pratiques et des mises en situation.",
];

const FORMATION_RESULTS = [
  "Tu repars avec une méthode claire.",
  "Tu sais quels contenus créer.",
  "Tu comprends comment Google analyse ton blog.",
  "Tu maîtrises les bases de la rédaction SEO.",
  "Tu disposes d'un plan d'action adapté à ton activité pour gagner en visibilité et attirer davantage de prospects.",
];

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Site web SEO à Aix-en-Provence | JWL Marketing",
  description:
    "Site web SEO avec accompagnement sur 12 mois. Optimisation continue, visibilité Google et stratégie digitale pour développer votre activité.",
};

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

function PricingCard({ tier }: { tier: (typeof PRICING_TIERS)[number] }) {
  return (
    <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-left text-white">
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
      <p className="mt-2 italic text-white/90">{tier.quote}</p>
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
      <a
        href="https://calendly.com/jwlm"
        target="_blank"
        rel="noopener"
        className="mt-6 inline-block self-center rounded-full bg-[#c9846f] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        {tier.cta}
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/site-web-seo-aix-en-provence" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[6%] py-[60px] lg:flex-row lg:px-[9%]">
        <div className="max-w-[680px] flex-1">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] lg:text-[54px] lg:leading-[1.1] text-black">
            <span className="text-[#c9846f]">JWL Booster</span>
            <span className="font-medium"> : Un site</span>
            <br />
            <span className="font-medium">web SEO avec plus de</span>
            <br />
            <span className="font-medium">trafic et de clients</span>
          </h1>
          <p className="text-justify mt-6 text-2xl leading-[1.5] text-black">
            Pour les entreprises qui ont déjà une offre claire. En 90 jours,
            je pose la stratégie, l&apos;arborescence du site, les pages et
            le tracking google. Ensuite, je pilote mensuellement ton site
            sur-mesure pensé ton référencement, et je t&apos;accompagne sur
            12 mois pour en faire un vrai levier d&apos;acquisition.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-black">
            {[
              "1 seule interlocutrice",
              "1 site web qui se transforme en outil",
              "100 % sur mesure",
              "100 % propriétaire de ton outil",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-gold px-6 py-[15px] font-semibold text-white">
              À partir de 875 €
            </span>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] text-center font-semibold text-white transition-colors hover:bg-[#b8735f]"
            >
              Faire de mon site un outil qui attire les clients
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-[460px]">
          <Image
            src="/images/hero-site-web-seo-duo.png"
            alt="Jodie Lapaillerie — Site web SEO JWL Marketing"
            width={612}
            height={752}
            priority
            className="h-auto w-full object-contain"
          />
          <a
            href="https://www.vincenthego.com/consultants-seo/#fiche-jwl-marketing-aix-en-provence"
            target="_blank"
            rel="noopener"
            className="absolute left-1/2 top-[60%] w-[35%] max-w-[110px] -translate-x-1/2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.vincenthego.com/consultants-seo/assets/badge/medaille-consultante.png"
              alt="Consultante de qualité référencée sur la SEO Map"
              width={160}
              height={178}
              loading="lazy"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </a>
        </div>
      </div>

      {/* Quand un client recherche ton métier, apparais-tu ? */}
      <section className="px-[5%] py-16 text-center">
        <FadeUp>
          <h2 className="mx-auto max-w-[900px] font-heading text-3xl font-medium leading-[1.25] text-black md:text-[44px] md:leading-[1.3]">
            Quand un client recherche ton métier,{" "}
            <span className="italic text-[#c9846f]">apparais-tu</span>{" "}
            <span className="text-[#c9846f]">?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-base text-[#555] md:text-lg">
            Google{" "}attire l&apos;attention. Ton site crée la confiance. Ta
            stratégie transforme les visiteurs en clients.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mx-auto mt-10 max-w-[900px] rounded-2xl bg-black p-8 md:p-12">
          <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">
            <span className="text-3xl md:text-4xl">
              <GoogleColors />
            </span>
            <div className="flex w-full items-center gap-2 rounded-full border border-[#e0e0e0] bg-white px-6 py-4 shadow-sm">
              <p className="flex min-w-0 flex-1 items-center gap-1.5 text-left text-sm text-[#333] md:text-base">
                <RotatingKeyword
                  className="font-semibold text-[#c9846f]"
                  interval={1900}
                  words={[
                    "électricien",
                    "plombier",
                    "robe rouge",
                    "costume enfant",
                    "consultant SEO",
                    "avocat",
                    "coach sportif",
                    "boulangerie",
                    "agence immobilière",
                    "dentiste",
                    "restaurant",
                    "fleuriste",
                    "garagiste",
                    "coiffeur",
                    "kinésithérapeute",
                    "expert-comptable",
                    "photographe",
                    "traiteur",
                  ]}
                />
                <span className="shrink-0">à</span>
                <RotatingKeyword
                  className="truncate"
                  showIcon={false}
                  interval={1900}
                  startDelay={950}
                  words={[
                    "Aix-en-Provence",
                    "Marseille",
                    "Nice",
                    "Paris",
                    "Montpellier",
                    "Bordeaux",
                    "Toulouse",
                    "Lyon",
                    "Nantes",
                    "Lille",
                    "Strasbourg",
                    "Grenoble",
                  ]}
                />
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[820px] space-y-5 text-left text-[15px] leading-relaxed text-white/85 md:text-base">
            <p>
              <strong className="text-white">
                Aujourd&apos;hui, près de 85 % des consommateurs effectuent une
                recherche en ligne avant de contacter une entreprise.
              </strong>{" "}
              Ils ne connaissent ni ton nom, ni l&apos;existence de ton
              entreprise. Ils recherchent simplement un produit ou un service.
              Si ton entreprise n&apos;apparaît pas dans les résultats,{" "}
              Google{" "}proposera tes concurrents.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Des prospects qualifiés qui trouvent ton entreprise naturellement */}
      <section className="px-[5%] py-16 text-center">
        <FadeUp>
          <h2 className="mx-auto max-w-[900px] font-heading text-3xl font-medium leading-[1.25] text-black md:text-[44px] md:leading-[1.3]">
            <span className="italic text-[#c9846f]">Des prospects qualifiés</span>
          </h2>
          <p className="mx-auto mt-1 max-w-[700px] text-lg text-black md:text-xl">
            qui trouvent ton entreprise naturellement
          </p>
        </FadeUp>
        <ScrollReveal delay={150}>
          <ProspectCarousel />
        </ScrollReveal>
      </section>

      {/* Ma Méthode */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Ma Méthode</span>
          <br />
          <span className="font-medium">
            Fais de ton site web une machine à clients.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#141414] text-white transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image
                src="/images/conception-site-web.png"
                alt="Je comprends comment tes clients te recherchent — JWL Marketing"
                width={466}
                height={346}
                className="h-auto w-full object-cover"
              />
              <div className="p-4 text-left">
                <p className="text-[15px] font-semibold leading-[22px]">
                  Je comprends comment tes clients te recherchent
                </p>
                <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                  Étude de ton activité, de tes concurrents et des mots-clés
                  utilisés sur Google.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#141414] text-white transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image
                src="/images/site-web-sur-mesure.png"
                alt="Je crée un site web pensé pour être trouvé — JWL Marketing"
                width={466}
                height={344}
                className="h-auto w-full object-cover"
              />
              <div className="p-4 text-left">
                <p className="text-[15px] font-semibold leading-[22px]">
                  Je crée un site web pensé pour être trouvé
                </p>
                <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                  Structure, contenus, pages de services et optimisation SEO
                  dès la création.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#141414] text-white transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <Image
                src="/images/jwl-methode-analyse-search-console.png"
                alt="J'analyse les données et j'améliore la connexion à Google Search Console — JWL Marketing"
                width={466}
                height={346}
                className="h-auto w-full object-cover"
              />
              <div className="p-4 text-left">
                <p className="text-[15px] font-semibold leading-[22px]">
                  J&apos;analyse les données et j&apos;améliore la connexion à
                  Google Search Console
                </p>
                <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                  Pour comprendre le comportement des visiteurs et identifier
                  les opportunités d&apos;amélioration.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12 mois pour construire, analyser et faire évoluer ta visibilité */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">12 mois</span>{" "}
          <span className="font-medium">pour construire,</span>
          <br />
          <span className="font-medium">analyser et faire évoluer ta</span>{" "}
          <span className="italic text-[#c9846f]">visibilité sur Google.</span>
        </h2>
        <p className="mt-4 text-[17px] text-[#555]">
          Un accompagnement clair et conçu pour te rendre autonome au bout
          d&apos;un an.
        </p>

        <div className="mx-auto mt-10 grid gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
        <ComparisonTableCta />
      </section>

      {/* Tu sais tout ce qui est fait. Quand. Et pourquoi. */}
      <section className="mx-auto max-w-[1000px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Tu sais tout ce qui est fait.</span>
          <br />
          <span className="font-medium">Quand. Et pourquoi.</span>
        </h2>
        <ScrollReveal>
          <Image
            src="/images/jwl-tu-sais-tout-ce-qui-est-fait.webp"
            alt="Accompagnement JWL Marketing — Google Livres"
            width={1200}
            height={675}
            className="mx-auto mt-8 h-auto w-full max-w-[700px] rounded-2xl object-cover"
          />
        </ScrollReveal>
      </section>

      {/* Tous les mois je veille à faire évoluer ta position sur Google */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Tous les mois je veille</span>
          <br />
          <span className="font-medium">
            à faire évoluer ta position sur <GoogleColors />
          </span>
        </h2>
        <div className="mt-10 grid items-end gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
              1
            </div>
            <div className="mt-4 rounded-2xl bg-[#141414] p-5 text-left text-white">
              <p className="text-sm font-semibold leading-[20px]">
                Je regarde le suivi Search Console Google
              </p>
              <p className="mt-2 text-[13px] leading-[19px] text-white/80">
                En claire se que les gens tapent sur google et comment ton
                site ressort.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <StepNumber n={2} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                J&apos;analyse ce que les internautes tapent sur google
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                En comment ton site ressort et se qu&apos;on peut améliorer.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-3xl font-bold text-white">
              3
            </div>
            <div className="mt-4 rounded-2xl bg-[#141414] p-7 text-left text-white">
              <p className="text-base font-semibold leading-[24px]">
                J&apos;ajuste ta stratégie en concéquence
              </p>
              <p className="mt-2 text-[15px] leading-[22px] text-white/80">
                Je fais évoluer tes pages tes contenus.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <p className="mx-auto mt-8 max-w-[940px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Selon ton accompagnement je peux soit te guider sur les ajustements
          à faire soit les faire pour toi. Et si tu rédiges tes articles de
          blog toi même après la formation en rédaction SEO, je t&apos;indique
          les sujets et les optimisations à travailler.
        </p>
      </section>

      {/* J'améliore la compréhension de ton activité par ChatGPT et les IA */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">
            J&apos;améliore la compréhension
          </span>
          <br />
          <span className="font-medium">
            de ton activité par ChatGPT et les IA
          </span>
        </h2>
        <div className="mt-10 grid items-center gap-8 text-left md:grid-cols-2">
          <ScrollReveal delay={0}>
            <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
              Je passe régulièrement ton site au crible pour vérifier ce que
              Google comprend... mais aussi ce que les intelligences
              artificielles retiennent de ton activité.
              <br />
              Parce qu&apos;aujourd&apos;hui, être visible ne suffit plus. Il
              faut aussi être compris, afin que Google comme les IA puissent
              te proposer aux bonnes personnes, au bon moment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Image
              src="/images/jwl-ia-chatgpt-comprehension.png"
              alt="JWL Marketing — compréhension de ton activité par les IA"
              width={530}
              height={328}
              className="mx-auto h-auto w-full max-w-[340px] object-contain"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* J'optimise ta stratégie */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">J&apos;optimise ta stratégie</span>
          <br />
          <span className="font-medium">avec des données chiffrées</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0} className="text-left">
            <p className="text-[17px] leading-[26px] text-[#1a1a1a] md:min-h-[64px]">
              Je vois quand <span className="font-bold">tu n&apos;as pas de stratégie</span>
            </p>
            <Lightbox
              src="/images/creation-site-entreprise-graph1.png"
              alt="Search Console — sans stratégie SEO"
              width={640}
              height={352}
              className="mt-3 h-[210px] w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              Quand tu n&apos;as pas de stratégie.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Google{" "}ne te propose pas aux internautes
              <br />
              Tu as des clics qui correspondent à tes clients
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="text-left">
            <p className="text-[17px] leading-[26px] text-[#1a1a1a] md:min-h-[64px]">
              Quand <span className="font-bold">tu as une stratégie SEO</span> et
              aucune stratégie commerciale sur ton site web
            </p>
            <Lightbox
              src="/images/creation-site-entreprise-graph2.png"
              alt="Search Console — stratégie SEO sans stratégie commerciale"
              width={638}
              height={356}
              className="mt-3 h-[210px] w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              Quand tu as une stratégie SEO et aucune stratégie commerciale
              sur ton site web.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Ta courbe monte car Google{" "}te comprend
              <br />
              Tu as toujours de faibles clics, tu ne convertis pas
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={300} className="mx-auto mt-8 max-w-[380px] text-left">
          <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
            Ou quand tu as investi sur ta stratégie.
          </p>
          <Lightbox
            src="/images/creation-site-entreprise-graph3.png"
            alt="Search Console — stratégie SEO investie"
            width={618}
            height={314}
            className="mt-3 h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <p className="mt-2 text-sm italic text-[#7c5fd6]">
            Google{" "}te propose sur des mots-clés
            <br />
            Tu as des clics des internautes
          </p>
        </ScrollReveal>
        <p className="mx-auto mt-8 max-w-[940px] text-[17px] leading-[28px] text-[#1a1a1a]">
          L&apos;objectif c&apos;est d&apos;avoir un site qui travaille pour
          toi pendant que tu fais ton métier, que tu prospectes ou que tu
          fais la sieste.
        </p>
      </section>

      {/* Je t'accompagne à lier ta visibilité sur terrain et le web */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Je t&apos;accompagne</span>
          <br />
          <span className="font-medium">
            à lier ta visibilité sur terrain et le web
          </span>
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-10 grid max-w-[900px] gap-6 rounded-2xl p-6 text-left md:grid-cols-2 md:items-center md:p-8">
            <Image
              src="/images/jwl-google-siege-visibilite.png"
              alt="JWL Marketing devant le siège Google"
              width={296}
              height={213}
              className="h-auto w-full rounded-xl object-cover"
            />
            <div>
              <h3 className="font-heading text-lg font-semibold text-black">
                Le SEO dépend de nombreux facteurs
              </h3>
              <ul className="mt-4 space-y-1.5 text-sm text-[#1a1a1a]">
                {FACTEURS_SEO.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Je te rends autonome */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Je te rends autonome</span>
          <br />
          <span className="font-medium">
            sur ton métier pour que tu sois libre
          </span>
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-10 rounded-2xl bg-[#141414] p-8 text-left text-white md:p-10">
            <h3 className="text-center font-heading text-2xl">
              Forme-toi à la rédaction SEO pour ton blog
            </h3>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              {FORMATION_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-gold">Résultat</p>
            <ul className="mt-2 space-y-2 text-sm text-white/85">
              {FORMATION_RESULTS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <a
                href="/tarifs"
                className="inline-block rounded-full bg-gold px-9 py-4 text-base font-medium text-white transition-colors hover:bg-[#b8952f]"
              >
                voir la formation
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Des projets SEO qui parlent d'eux-même */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="italic text-[#c9846f]">Des projets SEO</span>
          <br />
          <span className="font-medium">qui parlent d&apos;eux-même</span>
        </h2>
        <div className="mt-10">
          <ProofCards />
        </div>
      </section>

      {/* Boost ton Bizz avec JWL MARKETING */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Boost ton Bizz avec <span className="text-[#c9846f]">JWL MARKETING</span>
        </h3>
        <div className="mt-10 grid gap-8 text-left md:grid-cols-2">
          <ScrollReveal>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#faf3ea] p-8 text-center">
              <p className="text-[15px] leading-[22px] text-black">
                Une question avant de réserver ? Écris-moi sur WhatsApp, le
                message est déjà préparé pour aller droit au but.
              </p>
              <a
                href="https://wa.me/33783792814?text=Bonjour%20Jodie%2C%20j%27ai%20une%20question%20avant%20de%20r%C3%A9server%20un%20appel%20pour%20mon%20site%20web%20SEO%C2%A0%3A"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#25D366] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe57]"
              >
                Poser ma question sur WhatsApp
              </a>
              <a
                href="https://calendly.com/jwlm"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
              >
                Réserve un appel
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="rounded-2xl border border-[#eee] p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
