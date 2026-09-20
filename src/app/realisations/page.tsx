import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mes réalisations | JWL MARKETING",
  description:
    "Découvre les sites web et projets digitaux réalisés par JWL Marketing pour ses clients à Aix-en-Provence et partout en France.",
};

const CAS_CLIENTS = [
  {
    logo: "/images/logo-dynamitz.png",
    name: "Dynamitz",
    title: "Les entreprises récemment accompagnées",
    text: "Transformer un outil complexe en véritable plateforme d'accompagnement entrepreneurial : refonte complète du site, nouvelle architecture de contenu et positionnement commercial clarifié.",
    href: "https://dynamitz.fr",
    cta: "Voir le site",
  },
  {
    logo: "/images/site-web-referencement-seo.png",
    name: "Résultats SEO",
    title: "Zoom sur les résultats SEO obtenus",
    text: "Stratégie de contenu et optimisation technique pour faire apparaître le site dans les premières positions Google sur les recherches locales.",
    href: "/audit-seo-aix-en-provence",
    cta: "Voir la stratégie SEO",
  },
];

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/realisations" />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 md:grid-cols-2">
        <ScrollReveal>
          <h1 className="font-heading text-4xl leading-[1.15] text-black md:text-[52px]">
            <span className="italic text-[#c9846f]">Mes réalisations</span>
            <br />
            <span className="font-medium">parlent pour moi.</span>
          </h1>
          <p className="mt-6 text-justify text-[17px] leading-[26px] text-[#1a1a1a]">
            Du site web professionnel à la stratégie SEO, en passant par le
            développement commercial et les événements terrain, découvre
            comment j&apos;accompagne les entreprises dans leur croissance.
            Chaque projet présenté ici illustre une problématique, une
            stratégie mise en place et les résultats obtenus.
          </p>
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="mt-8 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
          >
            Parlons de ton projet
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl">
            <Image
              src="/images/realisations-portrait-jodie.webp"
              alt="Jodie Lapaillerie — JWL Marketing"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 rounded-full bg-black/80 px-4 py-2 font-heading text-sm text-white">
              JWL MARKETING
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Cas clients */}
      {CAS_CLIENTS.map((cas, i) => (
        <section
          key={cas.name}
          className="mx-auto max-w-[1000px] px-6 py-10 text-center"
        >
          <ScrollReveal delay={i * 150}>
            <h2 className="font-heading text-3xl leading-[1.15] text-black md:text-[40px]">
              {cas.title.includes("récemment") ? (
                <>
                  Les entreprises{" "}
                  <span className="italic text-[#c9846f]">récemment</span>
                  <br />
                  accompagnées
                </>
              ) : (
                <>
                  Zoom sur{" "}
                  <span className="italic text-[#c9846f]">
                    les résultats SEO
                  </span>{" "}
                  obtenus
                </>
              )}
            </h2>
            <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-[#eee] p-8 text-left md:flex-row">
              <Image
                src={cas.logo}
                alt={cas.name}
                width={160}
                height={160}
                className="h-[100px] w-[100px] flex-shrink-0 rounded-xl border border-[#eee] object-contain p-2"
              />
              <div className="flex-1">
                <p className="font-heading text-xl text-black">{cas.name}</p>
                <p className="mt-2 text-[15px] leading-[22px] text-[#555]">
                  {cas.text}
                </p>
                <a
                  href={cas.href}
                  target={cas.href.startsWith("http") ? "_blank" : undefined}
                  rel={cas.href.startsWith("http") ? "noopener" : undefined}
                  className="mt-4 inline-flex items-center gap-1 font-semibold text-[#c9846f] hover:underline"
                >
                  {cas.cta} →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      ))}

      {/* Quand le digital soutient le développement commercial */}
      <section className="mx-auto max-w-[900px] px-6 py-16 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl leading-[1.15] text-black md:text-[40px]">
            Quand le digital soutient le{" "}
            <span className="italic text-[#c9846f]">
              développement commercial
            </span>
          </h2>
          <div className="mx-auto mt-8 aspect-video w-full max-w-[560px] overflow-hidden rounded-2xl bg-black">
            <video
              src="/videos/hero-jodie-etoile.mp4"
              controls
              className="h-full w-full object-cover"
            />
          </div>
          <Link
            href="/developpement-commercial-aix-en-provence"
            className="mt-8 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
          >
            Découvre l&apos;accompagnement JWL Prospecte
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
