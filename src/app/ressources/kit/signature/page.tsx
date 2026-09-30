import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import LeviersGrid, { type Lever } from "@/components/LeviersGrid";
import GatedDocumentCard from "@/components/GatedDocumentCard";
import { listPublicDocuments, type PublicGatedDocument } from "@/lib/gatedContent";

export const metadata = buildMetadata({
  path: "/ressources/kit/signature",
  locale: "fr",
  title: "JWL Signature | JWL Marketing",
  description: "Fais de Google ton meilleur commercial terrain.",
});

export const dynamic = "force-dynamic";

const LEVIERS: Lever[] = [
  {
    label: "Google My Business Profile",
    image: "/images/levier-google-my-business.jpg",
    desc: "Sois trouvé localement et transforme les recherches Google en contacts qualifiés.",
    href: "/ressources/kit-google-my-business",
  },
  {
    label: "Développement commercial",
    image: "/images/levier-developpement-commercial.jpg",
    desc: "Attire, convaincs, convertis : découvre les méthodes et astuces commerciales pour passer du premier contact au client.",
    href: "/ressources/kit-commercial",
  },
  {
    label: "Référencement naturel : SEO-GEO",
    image: "/images/levier-seo-geo.jpg",
    desc: "Sois visible sur Google. Sois cité par les IA. Maîtrise le SEO et le GEO pour faire grandir ta visibilité.",
    href: "/ressources/kit-visibilite",
  },
  {
    label: "IA",
    image: "/images/levier-ia.jpg",
    desc: "Google te trouve. Les IA te recommandent. Apprends à optimiser ta visibilité avec le SEO, le GEO et l'IA.",
    href: "/ressources/kit-ia",
  },
  {
    label: "Réseaux sociaux",
    image: "/images/levier-reseaux-sociaux.jpg",
    desc: "Crée. Publie. Engage. Développe ta visibilité grâce aux réseaux sociaux.",
    href: "/ressources/kit-reseaux-sociaux",
  },
  {
    label: "Entrepreneuri'Elles",
    image: "/images/levier-entrepreneurielles.jpg",
    desc: "Tes ateliers, tes outils, tes ressources : tout pour faire grandir tes projets et ton réseau.",
    href: "/ressources-entrepreneurs",
  },
];

export default async function RoadmapPage() {
  const documents: PublicGatedDocument[] = listPublicDocuments("roadmap");

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="fr" href="/ressources/kit/signature" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pt-28 pb-20 md:px-10 md:pt-40">
{/* Ligne 58 modifiée */}
<div className="grid items-start gap-14 md:grid-cols-2">
  <div>
<h1 className="font-heading text-5xl leading-tight text-black md:text-6xl">
  <span className="italic text-[#c9846f]">JWL Signature</span> :{" "}
  Fais de Google ton meilleur commercial{"\u00a0"}terrain.
</h1>
    {/* ... reste du code ... */}
            <p className="mt-6 max-w-[560px] text-xl leading-8 text-neutral-600">
              Un écosystème à 360° pour développer ta visibilité, ton
              activité et ton réseau.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-[#e7c9b7] px-6 py-3 font-semibold text-[#7a3f2a]">
                À partir de 875€
              </span>
              <a
                href="/consultant-freelance-seo-aix-en-provence"
                className="inline-flex items-center rounded-full bg-[#c9846f] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                Découvrir JWL
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/jwl-roadmap-hero.png"
              alt="JWL Marketing"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Ton parcours de visibilité */}
      <section className="mx-auto max-w-[1000px] px-6 pb-24 text-center md:px-10">
        <p className="italic text-[#c9846f]">Ton parcours de visibilité</p>
        <h2 className="mt-2 font-heading text-3xl text-black md:text-4xl">
          Parce qu&apos;être visible ne suffit pas.
          <br />
          Il faut transformer cette visibilité en opportunités.
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[26px] text-neutral-600">
          JWL Signature rassemble les différents leviers dont une
          entrepreneure a besoin pour développer son activité : visibilité,
          Google, SEO, réseaux sociaux, développement commercial, IA et
          réseau.
        </p>

        <ol className="mx-auto mt-10 flex max-w-[700px] flex-col gap-4 text-left">
          {[
            { n: 1, title: "Être trouvé", desc: "Google My Business + SEO/GEO" },
            { n: 2, title: "Être choisi", desc: "Site web + preuve sociale + réseaux sociaux" },
            { n: 3, title: "Être contacté", desc: "Développement commercial + parcours client" },
            { n: 4, title: "Accélérer", desc: "IA + automatisation + outils" },
          ].map((step) => (
            <li key={step.n} className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-base font-bold text-white">
                {step.n}
              </span>
              <p className="text-[17px] text-black">
                <span className="font-semibold">{step.title}</span>
                <span className="text-neutral-600"> — {step.desc}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Leviers */}
      <section id="leviers" className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10">
        <div className="text-center">
          <p className="italic text-[#c9846f]">Les leviers d&apos;action</p>
          <h2 className="mt-2 font-heading text-3xl text-black md:text-4xl">
            qui font grandir ton entreprise
          </h2>
        </div>

        <LeviersGrid leviers={LEVIERS} />
      </section>

      {/* Ressources */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10">
        <div className="rounded-3xl bg-[#faf8f5] p-8 text-center md:p-16">
          <p className="italic text-[#c9846f]">Les ressources :</p>
          <h2 className="mt-2 font-heading text-2xl text-black md:text-3xl">
            conçues pour accélérer ton développement
          </h2>

          {documents.length === 0 ? (
            <p className="mt-8 text-sm text-neutral-400">Rien pour le moment.</p>
          ) : (
            <div className="mx-auto mt-8 grid max-w-[900px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc) => (
                <GatedDocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Replays */}
      <section className="mx-auto max-w-[1440px] px-6 pb-32 text-center md:px-10">
        <p className="italic text-[#c9846f]">Replays :</p>
        <h2 className="mt-2 font-heading text-2xl text-black md:text-3xl">
          ateliers, webinaires
        </h2>

        <a
          href="https://www.tiktok.com/@jwl.marketing"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-black transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
            <path
              fill="#fff"
              d="M16.6 5.82a4.28 4.28 0 0 1-1.7-3.42h-3.07v13.44a2.6 2.6 0 1 1-1.85-2.49V10.2a5.65 5.65 0 1 0 4.92 5.6V9.08a7.3 7.3 0 0 0 4.4 1.48V7.5a4.27 4.27 0 0 1-2.7-1.68z"
            />
          </svg>
        </a>
      </section>
    </div>
  );
}
