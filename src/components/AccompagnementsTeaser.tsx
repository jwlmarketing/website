"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

/**
 * Paires de cartes "accompagnement" (Business+Booster, puis Connect+Prospecte
 * plus bas sur la page). Pas de rotation auto ici : deux cartes côte à côte,
 * un premier clic agrandit la carte, un second clic (sur la carte déjà
 * agrandie) redirige vers la page correspondante.
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
      href: "/site-web-seo-aix-en-provence",
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

export default function AccompagnementsTeaser({
  pair = "primary",
}: {
  pair?: "primary" | "secondary";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname?.startsWith("/en") ? "en" : "fr";
  const allCards = CARDS[locale];
  const cards = pair === "primary" ? allCards.slice(0, 2) : allCards.slice(2, 4);

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-[700px] items-center justify-center gap-6">
      {cards.map((card, i) => {
        const isExpanded = expanded === i;
        return (
          <button
            key={card.name}
            type="button"
            onClick={() => {
              if (isExpanded) {
                router.push(card.href);
              } else {
                setExpanded(i);
              }
            }}
            className={`group flex flex-col overflow-hidden rounded-2xl bg-black text-white shadow-md transition-all duration-300 ease-out hover:shadow-xl ${
              isExpanded ? "scale-110 bg-gold" : "scale-100"
            }`}
            style={{ zIndex: isExpanded ? 10 : 1 }}
          >
            <div className="p-3">
              <div className="relative aspect-square w-[160px] overflow-hidden rounded-lg bg-white sm:w-[200px]">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-3 py-4 text-center">
              <p className="font-heading text-base font-bold uppercase tracking-wide">
                {card.name}
              </p>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isExpanded ? "text-[#141414]/80" : "text-white/80"
                }`}
              >
                {card.subtitle}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
