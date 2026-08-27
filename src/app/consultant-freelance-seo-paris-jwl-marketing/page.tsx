import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Paris | JWL Marketing",
  description:
    "Consultante Freelance SEO à Paris. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
};

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      {/* Logo + compte, au-dessus du hero */}
      <div className="flex w-full items-center justify-between px-[5%] pt-20">
        <Link href="/">
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing Paris"
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
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="font-medium">
              Consultante SEO
              <br />
              &amp; Visibilité Web
            </span>
            <br />
            <span className="italic text-[#c9846f]">Paris</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. Votre réussite commence sous les lumières de
            Paris.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <span className="rounded-full bg-[#faf3ea] px-5 py-[15px] text-sm font-semibold text-black">
              + de 20 projets depuis 2025
            </span>
            <p className="min-h-[1.2em] font-heading text-4xl italic text-[#c9846f]">
              <TypewriterText text="Bonjour, je m'appelle Jodie." speed={113} />
            </p>
          </div>
        </div>
        <Image
          src="/images/qui-suis-je-hero.png"
          alt="Jodie Lapaillerie — Consultante SEO Paris"
          width={1244}
          height={1387}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/qui-suis-je-portrait.png"
            alt="Jodie Lapaillerie — consultante en marketing digital"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl object-cover"
          />
          <div className="text-center">
            <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              Ta meilleure consultant SEO , experte en stratégie  digitale, et développement commercial
            </h2>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Parle moi de tes besoins SEO sur Paris
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_260px]">
          <div className="rounded-2xl bg-[#141414] p-8 text-white">
            <p className="text-[15px] leading-[25.5px]">
              <span className="font-bold">Ma mission : </span>
              Paris concentre des milliers d&apos;entreprises, de commerces,
              de professions libérales et de sociétés de services. Dans un
              environnement aussi concurrentiel, être compétent ne suffit
              plus toujours à être choisi.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              J&apos;aide les entrepreneurs, indépendants et dirigeants à
              construire une présence digitale capable d&apos;attirer des
              prospects qualifiés et de soutenir leur développement
              commercial sur le long terme.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Forte de plus de 10 ans d&apos;expérience dans la vente et le
              développement commercial, dont 4 années au sein du groupe
              américain IAC, j&apos;associe aujourd&apos;hui stratégie
              commerciale, référencement naturel et visibilité digitale.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Site internet, SEO local, contenus, Google Business Profile,
              stratégie d&apos;acquisition ou optimisation de l&apos;expérience
              client : chaque action est pensée pour répondre à un objectif
              simple. Permettre à ton entreprise de gagner en visibilité
              auprès des personnes qui recherchent réellement tes services à
              Paris.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/jodie-seo-aix-en-provence.webp"
              alt="Jodie Lapaillerie — SEO Summit Paris 2026"
              width={800}
              height={1000}
              className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-xs text-[#000]">
              Jodie-LAPAILLERIE / SEO summit
            </p>
          </div>
        </div>
      </section>

      {/* Ambition */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je suis ambitieuse</span>
          <br />
          <span className="font-medium">
            Et je vise la 1ère place sur Paris.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/qui-suis-je-gmb-card.png"
            alt="Fiche Google Business Profile JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/qui-suis-je-search-console.png"
            alt="Évolution des impressions et clics — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/qui-suis-je-serp.png"
            alt="Résultat Google pour seo aix-en-provence — JWL Marketing"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* Je m'investis */}
      <section className="mx-auto max-w-[800px] px-6 py-6 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je m&apos;investis</span>{" "}
          <span className="font-medium">
            dans ton projet et mes clients en parlent.
          </span>
        </h2>
      </section>

      {/* Avis clients */}
      <section className="py-6">
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Marché local + widget audit */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je connais ton marché</span>{" "}
          <span className="font-medium">Parisien</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Paris offre un potentiel immense. La concurrence aussi. Dans la
              plupart des secteurs, tes futurs clients ont l&apos;embarras du
              choix.
            </p>
            <p>
              Avant de contacter une entreprise, ils effectuent souvent
              plusieurs recherches sur Google. Mon rôle consiste à faire en
              sorte que ton entreprise fasse partie des solutions
              qu&apos;ils découvrent au bon moment.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Je maximilise ta fiche Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je maximilise</span>{" "}
          <span className="font-medium">ta fiche Google profile.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Paris, la concurrence est souvent à quelques clics. Avant de
              contacter une entreprise, les internautes consultent plusieurs
              profils, comparent les avis et évaluent les informations
              disponibles. Ta fiche Google Business Profile joue un rôle
              essentiel dans cette première impression.
            </p>
            <p className="mt-4">
              J&apos;optimise les éléments qui influencent réellement la
              décision : services, catégories, photos, avis, informations
              pratiques et cohérence de ta visibilité locale.
              L&apos;objectif n&apos;est pas seulement d&apos;être visible.
              L&apos;objectif est de rassurer et de donner envie de te
              choisir.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-gmb.png"
            alt="Optimisation fiche Google Business Profile JWL Marketing"
            width={2000}
            height={1414}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 2. J'optimise ton marché avant de bâtir ton site web */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">J&apos;optimise ton marché</span>{" "}
          <span className="font-medium">avant de bâtir ton site web.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Paris, être excellent dans son métier ne garantit pas
              d&apos;être choisi. Les internautes recherchent, comparent et
              prennent leur décision bien avant le premier contact. Une
              grande partie de ce parcours se déroule sur Google.
            </p>
            <p className="mt-4">
              Les entreprises qui se développent le plus vite ne sont pas
              forcément les plus connues. Ce sont souvent les plus visibles
              auprès des bonnes personnes.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-terrasse.png"
            alt="Jodie Lapaillerie — analyse de marché SEO Paris"
            width={880}
            height={632}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* CTA de clôture */}
      <section className="bg-white px-6 py-16 text-center">
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Parce que tu mérites le meilleur
        </a>
      </section>
    </div>
  );
}
