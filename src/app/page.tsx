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
import SiteHeader from "@/components/SiteHeader";
import AccompagnementsSection from "@/components/AccompagnementsSection";

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

const ET_APRES_ITEMS = [
  "Ton site web t'appartient.",
  "Tu conserves tous tes identifiants et mots de passe.",
  "Ton espace client reste accessible à tout moment.",
  "Tes devis, factures et documents restent disponibles.",
  "Tes comptes Google et tes outils de suivi restent à ton nom.",
  "Tu gardes l'accès à Google Search Console pour suivre ta visibilité et ton trafic.",
  "Tu conserves l'historique et les actions mises en place pendant notre collaboration.",
];

export default function Home() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en" />

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[5%] pb-[60px] pt-20 lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 font-heading text-4xl leading-[1.15] text-black lg:text-[60px] lg:leading-[1.2]">
            <span>Créez un site web conçu pour</span>{" "}
            <span className="font-heading italic text-[#c9846f]">
              attirer des prospects !
            </span>
          </h1>
          <p className="mt-2.5 text-sm leading-relaxed text-[#333]">
            Sais-tu combien de prospects découvrent ton entreprise grâce à{" "}
            <GoogleColors />
            {" "}? Peux-tu mesurer le nombre de clics, d&apos;appels ou de
            contacts générés par ta présence en ligne ?
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
            className="h-auto max-h-[70vh] w-full max-w-full object-contain"
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
        <p className="mx-auto mt-3 max-w-[700px] text-base text-[#555] md:text-lg">
          <GoogleColors />{" "}attire l&apos;attention. Ton site crée la confiance. Ta
          stratégie transforme les visiteurs en clients.
        </p>

        <div className="mx-auto mt-10 max-w-[900px] rounded-2xl bg-black p-8 md:p-12">
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
              <GoogleColors />{" "}proposera tes concurrents.
            </p>
          </div>
        </div>
      </section>

      {/* Et si ton prochain client... */}
      <section className="flex flex-col items-center justify-between gap-10 px-[5%] py-20 md:flex-row">
        <div className="flex-[1.4_1_0%] overflow-hidden rounded-[40px] bg-black p-10">
          <div className="mx-auto aspect-video w-full max-w-[650px] overflow-hidden rounded-xl">
            <YoutubeLite videoId="-btM09DQ4zg" title="JWL Marketing" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="mx-auto max-w-[560px] font-heading text-3xl font-normal leading-[1.2] text-black md:text-[54px] md:leading-[1.1]">
            Et si <span className="italic text-[#c9846f]">ton prochain</span>
            <br />
            <span className="italic text-[#c9846f]">client</span> te trouvait
            <br />
            grâce à <GoogleColors />
            <span className="text-black">?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] text-sm leading-relaxed text-[#666]">
            Ancienne commerciale au sein du groupe IAC (Meetic, TripAdvisor,
            Travaux.com), j&apos;applique au digital les mêmes principes qui
            font vendre sur le terrain : comprendre son marché, se
            différencier et convertir.
          </p>
        </div>
      </section>

      {/* Cas client */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading title="Ce que JWL MARKETING à mis en place">
          <br />
          pour un de{" "}
          <span className="italic text-[#c9846f]">ces clients</span>
        </SectionHeading>
        <ClientResultsWidget />
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
        <SectionHeading
          title="Comment JWL Marketing"
          accent="peut t'aider ?"
        />
        <AccompagnementsSection />
      </section>

      {/* Ta visibilité n'est pas une question de hasard */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading
          kicker="Ta visibilité"
          title="grandit grâce aux clients que ton site web génère."
        />

        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row md:items-stretch">
          <div className="shrink-0">
            <VisibilityChart />
          </div>
          <div className="w-full rounded-2xl bg-[#141414] p-8 text-left text-white md:p-10">
            <p className="leading-relaxed text-white/85">
              Mon métier ne se limite pas à la création de sites web. Il
              consiste à t&apos;aider à{" "}
              <strong className="text-white">
                construire un véritable écosystème digital pour développer ton
                activité et attirer de nouveaux clients.
              </strong>
            </p>
            <p className="mt-4 leading-relaxed text-white/85">
              <strong className="text-white">
                Mon rôle est de créer un lien entre ton quotidien
                d&apos;entrepreneur et les outils digitaux.
              </strong>{" "}
              Que ce soit lors de tes actions de prospection, de ta
              participation à des salons professionnels ou de ton activité sur
              le terrain,{" "}
              <strong className="text-white">
                l&apos;objectif est de faire en sorte que ton entreprise
                continue d&apos;être visible et de générer des opportunités,
                même lorsque tu n&apos;es pas derrière ton écran.
              </strong>
            </p>
            <p className="mt-4 leading-relaxed text-white/85">
              <strong className="text-white">
                Pour cela j&apos;utilise des outils digitaux les plus adaptés à
                ton activité
              </strong>{" "}
              : site web optimisé, référencement naturel (SEO), fiche{" "}
              <GoogleColors />, contenus, articles, blog, IA, et autres leviers
              de visibilité.{" "}
              <strong className="text-white">
                Chaque action est pensée pour renforcer ta présence en ligne,
                développer ta crédibilité et favoriser l&apos;acquisition de
                nouveaux clients.
              </strong>
            </p>
          </div>
        </div>

        {/* Mais de résultat */}
        <h3 className="mx-auto mt-16 max-w-[900px] font-heading text-2xl leading-[1.3] text-black md:text-4xl">
          <span className="italic text-[#c9846f]">
            Les piliers de ton référencement
          </span>{" "}
          sur lesquels je peux intervenir
        </h3>
        <div className="mx-auto mt-8 flex max-w-[1300px] flex-col items-center gap-8 md:flex-row md:items-stretch">
          <p className="text-2xl italic text-[#c9846f] md:hidden">Mais de résultat :</p>
          <Image
            src="/images/jwl-consultante-seo-facteurs-visibilite.png"
            alt="JWL Marketing - facteurs de visibilité SEO"
            width={237}
            height={421}
            className="h-[420px] w-auto max-w-none shrink-0 object-contain md:h-full md:w-auto"
          />
          <div className="w-full rounded-2xl border border-[#c9846f]/40 bg-[#141414] p-8 text-left text-white">
            <p className="mb-3 hidden text-2xl italic text-[#c9846f] md:block">
              Mais de résultat :
            </p>
            <h3 className="font-heading text-lg font-semibold text-gold">
              Le SEO dépend de nombreux facteurs
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm text-white/85">
              {FACTEURS_SEO.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
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
