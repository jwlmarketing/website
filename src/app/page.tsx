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
import FadeUp from "@/components/FadeUp";
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
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[6%] pb-[60px] pt-[90px] lg:flex-row lg:gap-24 lg:px-[9%]">
        <div className="max-w-[720px] flex-1">
          <h1 className="m-0 mb-1 font-heading text-5xl font-extrabold leading-[1.02] text-black lg:text-[76px] lg:leading-[1.02]">
            <span className="font-heading italic text-[#c9846f]">
              Sois visible
            </span>
            <span> là où tes futurs clients te cherchent. </span>
          </h1>
          <p className="mt-2.5 text-2xl leading-[1.5] text-[#333]">
            Mesure le nombre de clics, d’appels de demandes de devis ou de contacts et de trafic issus de ta présence en ligne
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
              className="inline-block rounded-full bg-[#faf3ea] px-9 py-[18px] text-lg font-medium text-[#c9846f] transition-colors hover:bg-[#f2e6d4]"
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

        <div className="flex h-[220px] w-full flex-1 items-start justify-center sm:h-[380px] lg:h-[460px] lg:justify-end">
          <div className="relative h-full w-auto">
            <video
              src="/videos/hero-jodie-etoile.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Jodie Lapaillerie - JWL Marketing"
              className="relative z-10 h-full w-auto max-w-none object-contain"
            />
            <HeroBadge />
          </div>
        </div>
      </div>

      <TrustedPartners />

      {/* Et si ton prochain client... */}
      <section className="flex flex-col items-center justify-between gap-10 px-[5%] py-20 md:flex-row">
        <FadeUp className="flex-[1.4_1_0%] overflow-hidden rounded-[40px] bg-black p-10">
          <div className="mx-auto aspect-video w-full max-w-[650px] overflow-hidden rounded-xl">
            <YoutubeLite videoId="-btM09DQ4zg" title="JWL Marketing" />
          </div>
        </FadeUp>
        <FadeUp delay={0.15} className="flex flex-1 flex-col items-center justify-center text-center">
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
        </FadeUp>
      </section>

      {/* Cas client */}
      <section className="px-[5%] py-16 text-center">
        <FadeUp>
          <SectionHeading title="Ce que JWL MARKETING à mis en place">
            <br />
            pour un de{" "}
            <span className="italic text-[#c9846f]">ces clients</span>
          </SectionHeading>
          <ClientResultsWidget />
        </FadeUp>
      </section>

      {/* Pourquoi les entreprises choisissent JWL Marketing */}
      <section className="px-[5%] py-16 text-center">
        <FadeUp>
          <SectionHeading kicker="Pourquoi les entreprises choisissent" title="JWL MARKETING ?" />
        </FadeUp>
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

        <FadeUp className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row md:items-stretch">
          <div className="flex w-full shrink-0 items-center justify-center md:w-auto">
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
              Google, contenus, articles, blog, IA, et autres leviers
              de visibilité.{" "}
              <strong className="text-white">
                Chaque action est pensée pour renforcer ta présence en ligne,
                développer ta crédibilité et favoriser l&apos;acquisition de
                nouveaux clients.
              </strong>
            </p>
          </div>
        </FadeUp>

        <SectionHeading
          kicker="Et après ?"
          title="on poursuit l'aventure ensemble ou en autonomie"
        />
        <FadeUp>
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
        </FadeUp>
      </section>

      {/* Témoignages */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto my-10 max-w-[700px] px-5 text-center md:my-[60px]">
          <h2 className="font-heading text-3xl leading-[1.2] md:text-[54px] md:leading-[1.35]">
            <span className="italic text-[#c9846f]">Ils encaissent du cash,</span>{" "}
            <span className="text-black">avec JWL MARKETING</span>
          </h2>
        </div>
        <EscalierReveal
          className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-2 pb-4"
          itemClassName="shrink-0"
        >
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </EscalierReveal>
      </section>
    </div>
  );
}
