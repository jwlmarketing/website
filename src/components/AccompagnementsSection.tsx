import Image from "next/image";
import Link from "next/link";
import GoogleColors from "@/components/GoogleColors";

const ACCOMPAGNEMENTS = [
  {
    image: "/images/jwl-formation-redaction-seo-blog.png",
    packName: "JWL Business",
    title: "Création de site web professionnel",
    text: (
      <ul className="space-y-1">
        {[
          "Site moderne et responsive",
          "Optimisé pour mobile",
          "Balises techniques conformes (H1, titres, métadonnées)",
          "Vitesse et sécurité de base",
          "Formation à la prise en main",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-green-500">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
    star: "À partir de 1 200 €",
    cta: "Créer mon Site Web",
    href: "/site-internet-aix-en-provence",
  },
  {
    image: "/images/jwl-creation-site-web-aix-en-provence.png",
    packName: "JWL Booster",
    badge: "Nouveau",
    title: (
      <>
        Je crée ou refonds ton site web visible par <GoogleColors />
      </>
    ),
    text: (
      <>
        1 seule interlocutrice
        <ul className="mt-2 space-y-1">
          {[
            "Ton site sur-mesure prêt en 1 mois (selon ta disponibilité)",
            "SEO + GEO intégrés dès sa conception",
            "Installation search console",
            "Maintenance et suivi inclus",
            "Sérénité totale & levier d'acquisition sur 12 mois",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-green-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
    star: "Audit stratégique offert pour tout accompagnement annuel",
    cta: "Découvre le détail de mes accompagnements",
    href: "/site-web-seo-aix-en-provence",
  },
];

export default function AccompagnementsSection() {
  return (
    <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-2">
      {ACCOMPAGNEMENTS.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="group relative flex flex-col items-center pt-28 transition-transform duration-300 hover:-translate-y-3 md:pt-32"
        >
          <Image
            src={item.image}
            alt={typeof item.title === "string" ? item.title : "JWL Marketing"}
            width={220}
            height={220}
            className="absolute -top-4 left-1/2 h-[140px] w-[140px] -translate-x-1/2 rounded-xl object-cover shadow-lg md:h-[160px] md:w-[160px]"
          />
          {item.badge && (
            <span className="absolute right-6 top-2 -rotate-6 rounded-full bg-gold px-4 py-2 text-xs font-bold text-white shadow-md">
              {item.badge}
            </span>
          )}
          <div className="relative flex min-h-[400px] w-full flex-1 flex-col rounded-2xl border border-[#c9846f]/40 bg-[#141414] p-8 pt-10 text-left text-white shadow-md transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:shadow-2xl">
            <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:bg-black">
              {item.packName}
            </span>
            <h3 className="text-center font-heading text-xl leading-snug">
              {item.title}
            </h3>
            <div className="mt-4 flex-1 whitespace-pre-line text-sm text-white/85 transition-colors duration-300 group-hover:text-[#141414]/80">
              {item.text}
              <p className="mt-4 text-sm text-gold transition-colors duration-300 group-hover:text-[#141414]">
                ⭐ {item.star}
              </p>
            </div>
            <span className="mt-6 inline-block self-center rounded-full bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-black">
              {item.cta}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
