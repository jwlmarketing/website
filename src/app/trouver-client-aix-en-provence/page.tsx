import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { TROUVER_CLIENT_FAQ } from "@/data/trouverClientFaq";

export const metadata: Metadata = {
  title: "Acquisition Clients & Stratégie SEO | JWL Marketing",
  description:
    "Comment trouver des clients à Aix-en-Provence, sans prospecter ? Génère des clients avec une vraie mécanique, pas un seul levier.",
};

const OPTIONS = [
  { budget: "5–12k€/an", title: "Gérer soi-même", pros: ["Autonomie totale", "Contrôle sur ses actions", "Investissement limité"], cons: ["Temps conséquent", "Pas d'expertise SEO", "Résultats incertains"] },
  { budget: "15–40k€/an", title: "Acheter des contacts", pros: ["Résultats rapides", "Volume immédiat", "Aucune mise en place"], cons: ["Leads non exclusifs", "Peu qualifiés", "Dépendance totale"] },
  { budget: "30–55k€/an", title: "Recruter un commercial", pros: ["Relation humaine", "Présence terrain", "Pipeline prévisible"], cons: ["Coût élevé (salaire + charges)", "Résultats variables", "Formation longue"] },
  { budget: "3 300€/an", title: "JWL Marketing", best: true, pros: ["Stratégie Google complète", "Expertise SEO & ciblage", "Suivi & optimisation inclus", "Gain de temps considérable", "Outils pro inclus"], cons: ["Résultats progressifs", "Engagement long terme"] },
];

const LEVERS = [
  { tag: "Visibilité locale", title: "Stratégie SEO locale", text: "Ton site remonte sur Google quand tes prospects cherchent tes services dans ta ville ou ta région." },
  { tag: "Conversion", title: "Site web qui convertit", text: "Un site structuré pour transformer un visiteur en lead qualifié. Pas juste un beau site — un site qui travaille." },
  { tag: "Diagnostic", title: "Audit de visibilité", text: "On part de ta situation réelle. J'analyse ce qui bloque ton acquisition avant de proposer quoi que ce soit." },
  { tag: "Pilotage", title: "Analytics & pilotage", text: "Tu sais d'où viennent tes leads, lesquels convertissent et comment optimiser. Zéro décision à l'aveugle." },
];

export default function TrouverClient() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-sm italic text-[#555]">
            &quot;Ton acquisition client mérite mieux que le
            bouche-à-oreille.&quot;
          </p>
          <p className="mt-2 text-sm text-[#555]">
            Générer des clients ne repose pas sur un seul levier, mais sur
            une vraie mécanique.
          </p>
          <h1 className="mt-4 font-heading text-[38px] font-semibold leading-[1.25] text-black">
            Comment trouver des clients à{" "}
            <span className="text-gold">Aix-en-Provence</span>, sans
            prospecter ?
          </h1>
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            Je passe à l&apos;action !
          </Link>
        </div>
        <Image
          src="/images/hero-trouver-client.webp"
          alt="JWL Marketing stratégie acquisition client Aix-en-Provence"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
        />
      </div>

      {/* Comparatif */}
      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <SectionHeading
          title="Attirer de nouveaux clients"
          accent="devient une priorité"
          subtext="Plusieurs approches existent. Laquelle correspond à votre budget ?"
        />
        <div className="grid gap-5 md:grid-cols-4">
          {OPTIONS.map((o) => (
            <div
              key={o.title}
              className={`rounded-2xl border p-6 ${o.best ? "border-2 border-gold bg-[#fdfaf3]" : "border-neutral-200 bg-white"}`}
            >
              {o.best && (
                <p className="mb-1 text-xs font-bold uppercase text-gold">✦ Meilleur choix</p>
              )}
              <p className="font-heading text-xl font-bold text-black">{o.budget}</p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-gold">{o.title}</h3>
              <p className="mt-3 text-xs font-bold uppercase text-[#888]">Avantages</p>
              <ul className="mt-1 space-y-1 text-xs text-[#444]">
                {o.pros.map((p) => <li key={p}>✓ {p}</li>)}
              </ul>
              <p className="mt-3 text-xs font-bold uppercase text-[#888]">Inconvénients</p>
              <ul className="mt-1 space-y-1 text-xs text-[#444]">
                {o.cons.map((c) => <li key={c}>✕ {c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Structure vs effort */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-center font-heading text-2xl font-semibold text-black">
            Tu bosses dur. Mais tes clients n&apos;arrivent pas
            régulièrement. Ce n&apos;est pas un problème d&apos;effort.
          </h2>
          <p className="mt-2 text-center font-heading text-xl italic text-gold">
            C&apos;est un problème de structure.
          </p>
          <div className="mt-6 space-y-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Sans stratégie claire, tu alternes entre périodes chargées et
              creux qui stressent. Tu testes des actions sans fil
              conducteur. Le bouche-à-oreille ne suffit plus.
            </p>
            <p>
              L&apos;achat de contacts ou de leads est souvent la première
              solution envisagée. Cependant, ces contacts sont rarement
              exclusifs, ce qui réduit fortement le taux de conversion — un
              budget qui peut atteindre entre 15 000 € et 40 000 € par an,
              sans garantie de résultats durables.
            </p>
            <p>
              Recruter un commercial peut sembler efficace, mais entre le
              salaire, les charges, la formation et le suivi, le coût annuel
              dépasse souvent 30 000 € à 55 000 €.
            </p>
            <p>
              Chez JWL Marketing, l&apos;objectif est différent. Je
              construis une stratégie Google pensée pour attirer des clients
              qualifiés grâce au référencement naturel, à votre visibilité
              digitale et à une vraie compréhension de votre marché.
            </p>
          </div>
        </div>
      </section>

      {/* Valorisation */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-heading text-2xl font-semibold md:text-3xl">
            Votre site sans SEO vaut <span className="text-gold">60 000 €.</span>
            <br />
            Avec ? Il peut en valoir <span className="text-gold">120 000 €.</span>
          </h2>
          <p className="mt-3 text-sm text-[#bbb]">
            Investir dans le SEO aujourd&apos;hui, c&apos;est construire un
            actif que vous revendez demain.
          </p>
          <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-6">
              <p className="text-xs font-bold uppercase text-[#888]">Entreprise A</p>
              <p className="mt-1 text-sm text-[#bbb]">
                Site vitrine sans SEO, trafic quasi nul, clients venus
                uniquement par bouche-à-oreille.
              </p>
              <p className="mt-3 font-heading text-2xl font-bold text-white">
                1,5× l&apos;EBE → ~60 000 €
              </p>
            </div>
            <div className="rounded-2xl border border-gold bg-[#1a1a1a] p-6">
              <p className="text-xs font-bold uppercase text-gold">Entreprise B</p>
              <p className="mt-1 text-sm text-[#bbb]">
                Site optimisé SEO, fiche Google My Business active, 25 à 70%
                de trafic organique, leads réguliers, de vrais avis Google.
              </p>
              <p className="mt-3 font-heading text-2xl font-bold text-gold">
                2,5 à 3× l&apos;EBE → 100 000 à 120 000 €
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#bbb]">
            Pour un investissement SEO de 3 300 €/an sur 4 ans, soit 13 200 €
            au total, la plus-value potentielle dépasse{" "}
            <strong className="text-gold">40 000 €</strong>.
          </p>
        </div>
      </section>

      {/* Ce que je mets en place */}
      <section className="mx-auto max-w-[1000px] px-6 py-16">
        <SectionHeading title="Ce que je mets en place pour" accent="toi." />
        <div className="grid gap-5 sm:grid-cols-2">
          {LEVERS.map((l) => (
            <div key={l.title} className="rounded-2xl border border-gold bg-white p-6">
              <p className="text-xs font-semibold uppercase text-gold">{l.tag}</p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-black">{l.title}</h3>
              <p className="mt-2 text-sm text-[#555]">{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-neutral-50 px-6 py-16 text-center">
        <SectionHeading
          title="Attire des leads qualifiés"
          accent="au lieu de prospecter dans le vide"
          subtext="Transforme ta visibilité en opportunités concrètes."
        />
        <Link
          href="/audit-seo-aix-en-provence"
          className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Testez mon SEO local
        </Link>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
          subtext="Retrouve les réponses aux questions les plus fréquentes"
        />
        <FaqAccordion items={TROUVER_CLIENT_FAQ} />
      </section>
    </div>
  );
}
