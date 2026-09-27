import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata = buildMetadata({
  path: "/roadmap",
  locale: "fr",
  title: "JWL Roadmap | JWL Marketing",
  description: "Fais de Google ton meilleur commercial terrain.",
});

const LEVIERS = [
  {
    label: "Google My Business",
    color: "#5b6fd8",
    shade: "#adb8f2",
    desc: "Sois trouvé localement et transforme les recherches Google en contacts qualifiés.",
    href: "/google-my-business-aix-en-provence",
  },
  {
    label: "Développement commercial",
    color: "#e2493f",
    shade: "#f3a49e",
    desc: "Donnez à votre public une brève description de cette ressource.",
    href: "/developpement-commercial-aix-en-provence",
  },
  {
    label: "SEO-GEO",
    color: "#f0b429",
    shade: "#f8dd8b",
    desc: "Donnez à votre public une brève description de cette ressource.",
    href: "/site-web-seo-aix-en-provence",
  },
  {
    label: "IA",
    color: "#2fa86a",
    shade: "#9fdcbc",
    desc: "Donnez à votre public une brève description de cette ressource.",
    href: "/site-internet-aix-en-provence",
  },
  {
    label: "Réseaux sociaux",
    color: "#e2493f",
    shade: "#f3a49e",
    desc: "Donnez à votre public une brève description de cette ressource.",
    href: "/tarifs",
  },
  {
    label: "Entrepreneuri'Elles",
    color: "#f0b429",
    shade: "#f8dd8b",
    desc: "Donnez à votre public une brève description de cette ressource.",
    href: "/tarifs",
    isPartner: true,
  },
];

function LeverBadge({ color, shade }: { color: string; shade: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" aria-hidden>
      <polygon points="50,6 94,30 94,72 50,96 6,72 6,30" fill={shade} />
      <polygon points="50,20 80,36 80,66 50,82 20,66 20,36" fill={color} />
    </svg>
  );
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#fbf6f2]">
      <SiteHeader locale="fr" href="/roadmap" />

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pt-28 pb-16 md:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl leading-tight text-black md:text-5xl">
              <span className="italic text-[#c9846f]">JWL Roadmap</span> : Fais
              de Google ton meilleur commercial terrain.
            </h1>
            <p className="mt-6 max-w-[520px] text-lg leading-8 text-neutral-600">
              Transforme ta visibilité en chiffre d&apos;affaires. Bien plus
              qu&apos;un site web&nbsp;: un écosystème marketing complet pour
              gagner en visibilité, développer ton réseau et transformer
              Google en véritable outil de croissance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center rounded-full bg-[#e7c9b7] px-6 py-3 font-semibold text-[#7a3f2a]">
                À partir de 875€
              </span>
              <a
                href="#leviers"
                className="inline-flex items-center rounded-full bg-[#c9846f] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                Faire de mon site un outil qui attire les clients
              </a>
            </div>
          </div>

          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(40,30,20,0.08)]">
            <Image
              src="/images/jwl-roadmap-hero.png"
              alt="JWL Marketing"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Leviers */}
      <section id="leviers" className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="text-center">
          <p className="italic text-[#c9846f]">Les leviers d&apos;action</p>
          <h2 className="mt-2 font-heading text-3xl text-black md:text-4xl">
            qui font grandir ton entreprise
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LEVIERS.map((lever) => (
            <div key={lever.label} className="flex flex-col">
              {lever.isPartner ? (
                <div className="flex h-16 w-28 items-center justify-start">
                  <Image
                    src="/images/entrepreneurielles-logo.png"
                    alt="Entrepreneuri'Elles"
                    width={112}
                    height={40}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <LeverBadge color={lever.color} shade={lever.shade} />
              )}
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-black">
                {lever.label}
              </p>
              <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-neutral-600">
                {lever.desc}
              </p>
              <a
                href={lever.href}
                className="mt-4 inline-flex w-fit items-center rounded-full bg-[#2fa86a] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#26905a]"
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Ressources */}
      <section className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="grid gap-10 rounded-3xl border border-[#e9dfd5] bg-white p-8 shadow-[0_12px_40px_rgba(40,30,20,0.05)] md:grid-cols-2 md:p-12">
          <div>
            <p className="italic text-[#c9846f]">Les ressources :</p>
            <h2 className="mt-2 font-heading text-2xl text-black md:text-3xl">
              conçues pour accélérer ton développement
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-black">Replays :</p>
              <p className="text-neutral-600">ateliers, webinaires</p>
            </div>
            <div>
              <p className="font-bold text-black">Guides PDF :</p>
              <p className="text-neutral-600">
                Comment rejoindre ou travailler avec JWL
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
