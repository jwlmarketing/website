"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Cartes "Choisis l'accompagnement adapté à ton projet" — teaser compact
 * affiché sur la homepage, avec effet hover (carte qui s'élève, grandit et
 * devient dorée). Le détail complet (checklist, tarifs, modales) reste dans
 * AccompagnementsSection, réutilisée ailleurs.
 */

const CARDS = [
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
];

export default function AccompagnementsTeaser() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {CARDS.map((card) => (
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
          href="/tarifs"
          className="inline-block rounded-full bg-[#c9846f] px-9 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Découvrir les différences
        </Link>
      </div>
    </div>
  );
}
