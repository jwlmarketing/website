import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import PageGateForm from "@/components/PageGateForm";
import LeviersGrid, { type Lever } from "@/components/LeviersGrid";
import GatedDocumentCard from "@/components/GatedDocumentCard";
import { hasPageAccess } from "@/lib/pageGate";
import { listPublicDocuments, type PublicGatedDocument } from "@/lib/gatedContent";

export const metadata = buildMetadata({
  path: "/roadmap",
  locale: "fr",
  title: "JWL Roadmap | JWL Marketing",
  description: "Fais de Google ton meilleur commercial terrain.",
});

export const dynamic = "force-dynamic";

const LEVIERS: Lever[] = [
  {
    label: "Google My Business",
    color: "#5b6fd8",
    shade: "#adb8f2",
    desc: "Sois trouvé localement et transforme les recherches Google en contacts qualifiés.",
  },
  {
    label: "Développement commercial",
    color: "#e2493f",
    shade: "#f3a49e",
    desc: "Donnez à votre public une brève description de cette ressource.",
  },
  {
    label: "SEO-GEO",
    color: "#f0b429",
    shade: "#f8dd8b",
    desc: "Donnez à votre public une brève description de cette ressource.",
  },
  {
    label: "IA",
    color: "#2fa86a",
    shade: "#9fdcbc",
    desc: "Donnez à votre public une brève description de cette ressource.",
  },
  {
    label: "Réseaux sociaux",
    color: "#e2493f",
    shade: "#f3a49e",
    desc: "Donnez à votre public une brève description de cette ressource.",
  },
  {
    label: "Entrepreneuri'Elles",
    color: "#f0b429",
    shade: "#f8dd8b",
    desc: "Donnez à votre public une brève description de cette ressource.",
    isPartner: true,
  },
];

export default async function RoadmapPage() {
  const unlocked = await hasPageAccess("roadmap");
  if (!unlocked) {
    return <PageGateForm pageSlug="roadmap" />;
  }

  const documents = listPublicDocuments("roadmap");
  const documentsByCategory = documents.reduce<Record<string, PublicGatedDocument[]>>(
    (acc, doc) => {
      (acc[doc.category] ??= []).push(doc);
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="fr" href="/roadmap" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pt-28 pb-20 md:px-10 md:pt-40">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-5xl leading-tight text-black md:text-6xl">
              <span className="italic text-[#c9846f]">JWL Roadmap</span> : Fais
              de Google ton meilleur commercial terrain.
            </h1>
            <p className="mt-6 max-w-[560px] text-xl leading-8 text-neutral-600">
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

      {/* Leviers */}
      <section id="leviers" className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10">
        <div className="text-center">
          <p className="italic text-[#c9846f]">Les leviers d&apos;action</p>
          <h2 className="mt-2 font-heading text-3xl text-black md:text-4xl">
            qui font grandir ton entreprise
          </h2>
        </div>

        <LeviersGrid leviers={LEVIERS} documentsByCategory={documentsByCategory} />
      </section>

      {/* Ressources */}
      <section className="mx-auto max-w-[1440px] px-6 pb-32 md:px-10">
        <div className="rounded-3xl bg-[#faf8f5] p-8 md:p-16">
          <p className="italic text-[#c9846f]">Les ressources :</p>
          <h2 className="mt-2 font-heading text-2xl text-black md:text-3xl">
            conçues pour accélérer ton développement
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold text-black">Replays</p>
              <p className="mt-1 text-sm text-neutral-600">ateliers, webinaires</p>
              {(documentsByCategory["Replays"] || []).length === 0 ? (
                <p className="mt-4 text-sm text-neutral-400">Rien pour le moment.</p>
              ) : (
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {documentsByCategory["Replays"].map((doc) => (
                    <GatedDocumentCard key={doc.id} doc={doc} />
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="font-bold text-black">Guides PDF</p>
              <p className="mt-1 text-sm text-neutral-600">
                Comment rejoindre ou travailler avec JWL
              </p>
              {(documentsByCategory["Guides PDF"] || []).length === 0 ? (
                <p className="mt-4 text-sm text-neutral-400">Rien pour le moment.</p>
              ) : (
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {documentsByCategory["Guides PDF"].map((doc) => (
                    <GatedDocumentCard key={doc.id} doc={doc} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
