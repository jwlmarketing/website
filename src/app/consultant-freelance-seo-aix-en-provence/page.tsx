import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProofCard from "@/components/ProofCard";
import FaqAccordion from "@/components/FaqAccordion";
import { PROOF_CARDS } from "@/data/proofCards";
import { QUI_SUIS_JE_FAQ } from "@/data/quiSuisJeFaq";

export const metadata: Metadata = {
  title: "Consultant Freelance SEO Aix-en-Provence | JWL Marketing",
  description:
    "Consultant SEO à Aix-en-Provence. 10 ans d'expertise commerciale et des méthodes américaines pour propulser ton acquisition client.",
};

const VALUES = [
  "Interlocutrice unique",
  "Vision CA",
  "Expérience B2B",
  "Priorités claires",
  "Pédagogie",
  "Autonomie",
];

const STEPS = [
  {
    tag: "Audit & stratégie",
    title: "Audit",
    text: "Un diagnostic clair de ta visibilité et de ton positionnement, pour savoir où tu perds des clients.",
  },
  {
    tag: "Site web et fiche Google",
    title: "Création ou Pilotage",
    text: "Un site pensé pour convertir, du One Page à l'écosystème complet.",
  },
  {
    tag: "Suivi mensuel",
    title: "Résultats mesurés",
    text: "Un suivi mensuel pour piloter tes résultats dans la durée, mois après mois.",
  },
];

export default function QuiSuisJe() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-sm italic text-[#555]">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. À Aix-en-Provence, Paul Cézanne a marqué
            l&apos;histoire. Et si ton entreprise marquait à son tour Google ?
          </p>
          <h1 className="mt-4 font-heading text-[42px] font-semibold leading-[1.25] text-black">
            Consultant Freelance SEO <br />à Aix-en-Provence.
          </h1>
          <div className="my-4 flex items-center gap-2">
            <div className="h-0.5 w-[46px] bg-gold" />
            <span className="text-base text-gold">✦</span>
          </div>
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            AUDIT GRATUIT
          </Link>
        </div>
        <Image
          src="/images/hero-consultant-freelance-seo.webp"
          alt="Consultant Freelance SEO Aix-en-Provence"
          width={918}
          height={918}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Mission */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <div className="mx-auto grid items-center gap-8 md:grid-cols-[220px_1fr]">
          <Image
            src="/images/consultant-referencement-jodie.webp"
            alt="Jodie Lapaillerie — consultante SEO Aix-en-Provence"
            width={555}
            height={1024}
            className="mx-auto h-auto w-full max-w-[220px] rounded-2xl object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Ma mission
            </p>
            <p className="mt-2 text-lg leading-relaxed text-black">
              Créer ou piloter des sites internet pensés pour générer du
              trafic, convertir les visiteurs en clients et accompagner le
              développement d&apos;une entreprise sur le long terme.
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Forte de plus de 10 ans d&apos;expérience dans le développement
            commercial, dont 4 ans auprès du groupe américain IAC, je
            comprends les enjeux d&apos;une entreprise : attirer des clients,
            les convaincre et les fidéliser. Formée par une ancienne salariée
            de Google, Sylvie Grézaud, j&apos;interviens sur l&apos;ensemble
            d&apos;un projet digital : sites vitrines, sites e-commerce,
            landing pages, stratégies de contenu, articles de blog, fiches
            produits, optimisation SEO et pilotage de la visibilité.
            J&apos;accompagne des professionnels de tous horizons : artisans,
            commerçants, professions libérales, thérapeutes, médecins,
            dentistes, avocats et bien d&apos;autres.
          </p>
          <p>
            Tu aimerais apparaître en première page de Google, mais tu ne
            sais pas par où commencer ? À Aix-en-Provence, la concurrence est
            bien présente. Chaque jour, de nouveaux entrepreneurs, artisans,
            commerçants et professions libérales cherchent à gagner en
            visibilité.
          </p>
          <p>
            Aixoise depuis plus de vingt ans, je connais ce qui fait notre
            histoire et ce qui fait vivre notre territoire. Je connais son
            marché, ses quartiers, son dynamisme et les attentes des
            entreprises locales. Avant de parler de mots-clés ou de
            technique, je prends le temps de comprendre ton activité. Qui tu
            es. Ce que tu veux apporter. Ce qui te différencie réellement de
            tes concurrents.
          </p>
          <p>
            Mon objectif ne se limite pas à améliorer ton positionnement sur
            Google. Je veux que les bonnes personnes découvrent ton
            entreprise, au bon endroit et au bon moment.
          </p>
        </div>
      </section>

      {/* Résultats */}
      <section className="bg-transparent px-5 py-[50px]" style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}>
        <SectionHeading kicker="Échangeons ensemble" title="sur ton" accent="projet." />
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-center gap-6">
          {PROOF_CARDS.map((card) => (
            <ProofCard key={card.badge} data={card} />
          ))}
        </div>
        <p className="mx-auto mt-[30px] max-w-[640px] text-center text-xs leading-relaxed text-[#999]">
          Chiffres issus de Google Search Console et Google Business Profile,
          données juillet 2026.
        </p>
      </section>

      {/* 3 étapes */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {s.tag}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-black">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            Réserve ton Audit SEO
          </Link>
        </div>
      </section>

      {/* Vision entrepreneuriale */}
      <section className="mx-auto max-w-[800px] px-6 py-16">
        <h2 className="text-center font-heading text-2xl font-semibold text-black">
          Une vision entrepreneuriale de demain.
        </h2>
        <div className="mt-8 space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>Vous avez peut-être déjà vécu cette situation :</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Votre prestataire vous parle de trafic, mais jamais de
              prospects, ni de chiffre d&apos;affaires.
            </li>
            <li>
              Vous recevez des rapports remplis de données sans savoir
              quelles actions mettre en place en priorité.
            </li>
            <li>
              Votre site attire quelques visiteurs, mais les demandes de
              devis ne suivent pas.
            </li>
          </ul>
          <p>
            Le problème n&apos;est pas toujours votre visibilité. Souvent,
            c&apos;est l&apos;absence de stratégie. Pour moi, le
            référencement naturel n&apos;a qu&apos;un seul objectif :
            développer votre activité et générer des opportunités
            commerciales.
          </p>
          <p>
            Faire appel à une consultante SEO à Aix-en-Provence, ce n&apos;est
            pas chercher à être premier sur Google à tout prix. C&apos;est
            construire une stratégie capable d&apos;attirer les bonnes
            personnes, au bon moment, lorsqu&apos;elles recherchent réellement
            tes produits ou tes services.
          </p>
          <p>
            Basée à Aix-en-Provence, j&apos;accompagne les indépendants,
            artisans, commerçants, TPE et PME qui souhaitent développer une
            visibilité durable et faire de Google leur meilleur commercial.
          </p>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <SectionHeading
          kicker="Où j'interviens"
          title="Sur place ou"
          accent="à distance."
        />
        <Image
          src="/images/carte-zone-intervention-paca.png"
          alt="Zone d'intervention JWL Marketing — PACA et toute la France"
          width={2000}
          height={1414}
          className="mx-auto h-auto w-full max-w-[700px]"
        />
      </section>

      {/* Valeurs */}
      <section className="bg-black px-6 py-16 text-center">
        <p className="font-heading text-lg font-semibold text-white">
          JWL <span className="text-gold">Marketing</span>
        </p>
        <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap justify-center gap-4">
          {VALUES.map((v) => (
            <span
              key={v}
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-white"
            >
              {v}
            </span>
          ))}
        </div>
        <Link
          href="/tarifs"
          className="mt-8 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Consulte mes tarifs
        </Link>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
          subtext="Retrouve les réponses aux questions les plus fréquentes sur le métier de consultant SEO à Aix-en-Provence."
        />
        <FaqAccordion items={QUI_SUIS_JE_FAQ} />
      </section>
    </div>
  );
}
