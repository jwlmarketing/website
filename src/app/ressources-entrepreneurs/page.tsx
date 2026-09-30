import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";

export const metadata = buildMetadata({
  path: "/ressources-entrepreneurs",
  locale: "fr",
  title: "JWL Entrepreneuri'Elles | JWL Marketing",
  description: "Entreprendre entre Elles : ressources et ateliers pour les entrepreneuses accompagnées par JWL Marketing.",
});

const CARDS = [
  {
    title: "Le parcours des créatrice 🚀",
    desc: "Ton site ne doit pas seulement être joli : il doit être compris par Google et pensé pour attirer tes futurs clients. Télécharge le parcours pour savoir quoi mettre en place.",
    image: "/images/entrepreneurielles-parcours-cover.jpg",
  },
  {
    title: "Comment être visible localement sur Aix-en-Provence",
    desc: "Donnez à votre public une brève description de cette ressource.",
    image: "/images/entrepreneurielles-visibilite-locale.jpg",
  },
  {
    title: "En cours",
    desc: "en cours",
    image: "/images/entrepreneurielles-en-cours.jpg",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="fr" href="/ressources-entrepreneurs" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pt-28 pb-20 md:px-10 md:pt-40">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl leading-tight text-black md:text-5xl">
              <span className="text-[#c9846f]">JWL</span> Entrepreneuri&apos;
              <span className="text-[#c9846f]">Elles</span> :
              <br />
              Entreprendre entre Elles.
            </h1>
            <p className="mt-6 max-w-[520px] text-lg leading-8 text-neutral-600">
              Des femmes qui construisent ensemble leur indépendance, pour
              devenir la meilleure version d&apos;elle même.
              <br />
              Aujourd&apos;hui, deviens l&apos;une d&apos;Elle avec JWL
              Marketing.
            </p>
            <a
              href="/contact-jwl-marketing-aix-en-provence"
              className="mt-8 inline-flex items-center rounded-full bg-[#c9846f] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
            >
              Retrouve moi
            </a>
          </div>

          <Image
            src="/images/entrepreneurielles-hero.jpg"
            alt="JWL Entrepreneuri'Elles"
            width={1400}
            height={2099}
            className="mx-auto h-auto w-full max-w-[420px] rounded-3xl object-contain"
            priority
          />
        </div>
      </section>

      {/* Entreprendre Ensemble */}
      <section className="mx-auto max-w-[1440px] px-6 pb-32 md:px-10">
        <div className="text-center">
          <p className="italic text-[#c9846f]">Entreprendre</p>
          <h2 className="mt-2 font-heading text-3xl text-black md:text-4xl">
            Ensemble
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#e9dfd5] bg-white text-left shadow-sm"
            >
              {card.image ? (
                <div className="relative aspect-[16/9] w-full bg-[#faf8f5]">
                  <Image src={card.image} alt={card.title} fill className="object-contain" />
                </div>
              ) : (
                <div className="aspect-[16/9] w-full bg-[#f8dd8b]" />
              )}
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-black">
                  {card.title}
                </p>
                <p className="mt-2 text-sm text-neutral-600">{card.desc}</p>
                <span className="mt-3 inline-flex w-fit items-center rounded-full bg-[#c9846f] px-4 py-2 text-xs font-bold uppercase text-white opacity-60">
                  Je télécharge
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
