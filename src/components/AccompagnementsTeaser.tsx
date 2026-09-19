"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Cartes "Choisis l'accompagnement adapté à ton projet" — teaser compact
 * affiché sur la homepage, avec effet hover (carte qui s'élève, grandit et
 * devient dorée). Le détail complet (checklist, tarifs, modales) reste dans
 * AccompagnementsSection, réutilisée ailleurs.
 */

const CARDS = {
  fr: [
    {
      image: "/images/strategie-digitale.webp",
      name: "JWL Business",
      subtitle: "Création de site web pro",
      href: "/site-internet-aix-en-provence",
    },
    {
      image: "/images/croissance-digitale.webp",
      name: "JWL Booster",
      subtitle: "Refonte, pilotage de site web SEO",
      href: "/tarifs",
    },
    {
      image: "/images/communication-digitale.webp",
      name: "JWL Connect",
      subtitle: "Rédige ton blog avec du SEO",
      href: "/tarifs",
    },
    {
      image: "/images/transformation-digitale.webp",
      name: "JWL Prospecte",
      subtitle: "Développement commercial",
      href: "/developpement-commercial-aix-en-provence",
    },
  ],
  en: [
    {
      image: "/images/strategie-digitale.webp",
      name: "JWL Business",
      subtitle: "Professional website creation",
      href: "/en/site-internet-aix-en-provence",
    },
    {
      image: "/images/croissance-digitale.webp",
      name: "JWL Booster",
      subtitle: "Redesign and SEO website management",
      href: "/en/tarifs",
    },
    {
      image: "/images/communication-digitale.webp",
      name: "JWL Connect",
      subtitle: "Write your blog with SEO",
      href: "/en/tarifs",
    },
    {
      image: "/images/transformation-digitale.webp",
      name: "JWL Prospecte",
      subtitle: "Business development",
      href: "/en/developpement-commercial-aix-en-provence",
    },
  ],
};

const CTA = {
  fr: { label: "Découvrir les différences", href: "/tarifs" },
  en: { label: "Discover the differences", href: "/en/tarifs" },
};

export default function AccompagnementsTeaser() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "fr";
  const cards = CARDS[locale];
  const cta = CTA[locale];

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.name}
            href={card.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#15132b] text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-105 hover:bg-gold hover:shadow-xl"
          >
            <div className="p-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-3 py-5 text-center">
              <p className="font-heading text-base font-bold uppercase tracking-wide">
                {card.name}
              </p>
              <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-[#141414]/80">
                {card.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href={cta.href}
          className="inline-block rounded-full bg-[#c9846f] px-9 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
