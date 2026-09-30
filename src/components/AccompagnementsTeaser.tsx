import Image from "next/image";
import Link from "next/link";

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
      image: "/images/jwl-prospecte.jpg",
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
      image: "/images/jwl-prospecte.jpg",
      name: "JWL Prospecte",
      subtitle: "Business development",
      href: "/en/developpement-commercial-aix-en-provence",
    },
  ],
};

export default function AccompagnementsTeaser({
  pair = "primary",
  locale = "fr",
}: {
  pair?: "primary" | "secondary";
  locale?: "fr" | "en";
}) {
  const allCards = CARDS[locale];
  const cards = pair === "primary" ? allCards.slice(0, 2) : allCards.slice(2, 4);

  return (
    <div className="mx-auto flex max-w-[700px] items-center justify-center gap-6">
      {cards.map((card) => (
        <Link
          key={card.name}
          href={card.href}
          className="group flex flex-col overflow-hidden rounded-2xl bg-black text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-3 hover:bg-gold hover:shadow-2xl"
        >
          <div className="p-3">
            <div className="relative aspect-square w-[160px] overflow-hidden rounded-lg bg-white sm:w-[200px]">
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover object-left" // <-- LA MODIFICATION EST ICI
              />
            </div>
          </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-1 px-3 py-4 text-center">
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
  );
}
