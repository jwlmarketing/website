import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProofCard from "@/components/ProofCard";
import FaqAccordion from "@/components/FaqAccordion";
import { PROOF_CARDS } from "@/data/proofCards";
import { NICE_FAQ } from "@/data/niceFaq";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Nice | JWL Marketing",
  description:
    "Une stratégie freelance, portée par la qualité d'une agence à taille humaine. Consultant Freelance SEO à Nice.",
};

const STEPS = [
  { num: "01", title: "On se parle", sub: "Appel découverte gratuit · 30 min", text: "Tu me parles de ton activité. Je t'explique comment je travaille. On voit ensemble si on peut avancer.", tag: "Sans engagement" },
  { num: "02", title: "J'analyse ton marché", sub: "Audit SEO", text: "Ton site, tes concurrents, tes opportunités. Je te donne les vraies priorités — celles qui impactent ton chiffre d'affaires.", tag: "Diagnostic ciblé" },
  { num: "03", title: "On construit ta stratégie", sub: "Mots-clés & plan d'action", text: "Quoi cibler, dans quel ordre, pourquoi. Tu valides chaque choix.", tag: "Plan priorisé" },
  { num: "04", title: "On passe à l'action", sub: "Optimisations & contenus", text: "Pages optimisées, contenus rédigés, technique corrigée. Chaque action est tracée et expliquée.", tag: "Exécution rigoureuse" },
  { num: "05", title: "Tu gagnes en autonomie", sub: "Formation & transmission", text: "Je te transmets les bons réflexes pour piloter ta visibilité toi-même.", tag: "Indépendance progressive" },
];

const DIFFERENTIATORS = [
  { title: "Une interlocutrice unique", text: "Tu travailles avec moi du début à la fin. Pas de commercial, pas de junior.", tag: "Zéro turnover" },
  { title: "Une vision orientée CA", text: "Je ne chasse pas les positions. Je cible les mots-clés qui ramènent des clients.", tag: "SEO orienté résultats" },
  { title: "10 ans d'expérience B2B", text: "Dont 4 années auprès du groupe IAC (Meetic, TripAdvisor, Travaux.com).", tag: "Vision business" },
  { title: "Des priorités claires", text: "Si une action ne vaut pas la peine, je te le dis. Mon rôle : t'aider à choisir les bons combats.", tag: "Pas de blabla" },
  { title: "Une pédagogie transparente", text: "Je t'explique ce que je fais et pourquoi. Reporting mensuel lisible, zéro jargon.", tag: "Échanges directs" },
  { title: "Une autonomie progressive", text: "Je ne construis pas une dépendance. Je t'embarque dans la stratégie.", tag: "Indépendance progressive" },
];

export default function ConsultantSeoNice() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-sm italic text-[#555]">
            Une stratégie freelance, portée par la qualité d&apos;une agence
            à taille humaine.
          </p>
          <p className="mt-2 text-sm text-[#555]">
            À Nice, chaque bonne pissaladière a sa recette. Chaque bonne
            stratégie SEO a la sienne.
          </p>
          <h1 className="mt-4 font-heading text-[42px] font-semibold leading-[1.25] text-black">
            Consultant Freelance SEO <span className="text-gold">à Nice.</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-black px-8 py-[15px] font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              APPELEZ-MOI
            </Link>
            <Link
              href="/audit-seo-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              AUDIT GRATUIT
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero-seo-nice.webp"
          alt="Consultant Freelance SEO Nice"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
        />
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-[850px] px-6 py-16">
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Ton site est invisible sur Google ? Nice est une ville où la
            concurrence digitale s&apos;intensifie : commerce, tourisme,
            port, services, professions libérales… Je ne vends pas des
            positions. Je cible les mots-clés qui ramènent des clients,
            j&apos;optimise ce qui impacte ton chiffre d&apos;affaires, et
            je mesure ce qui rapporte.
          </p>
          <p>
            J&apos;analyse ton marché, les intentions de recherche, la
            concurrence locale et les performances de ton site afin de
            construire une stratégie SEO-GEO durable. Objectif : positionner
            ton site sur les requêtes qui comptent et transformer le trafic
            Google en clients à Nice et dans toute ta région de la Côte
            d&apos;Azur.
          </p>
        </div>
      </section>

      {/* Pourquoi Nice */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto max-w-[850px]">
          <SectionHeading
            kicker="Pourquoi collaborer avec un consultant SEO"
            title="à Nice ?"
            subtext="Ton business niçois mérite mieux qu'une place dans l'ombre de Google"
          />
          <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              À Nice, le marché digital s&apos;accélère. Les indépendants,
              les commerçants et les PME se multiplient… et la visibilité
              Google devient un vrai enjeu de survie.
            </p>
            <p>
              Nice concentre un tissu économique dense et varié : le Vieux
              Nice et ses commerces, le port de Nice et Nice Méridia, son
              nouveau quartier d&apos;affaires en pleine expansion, sans
              oublier la technopôle de Sophia Antipolis.
            </p>
            <p>
              Freelance, je suis ton interlocutrice unique. Décisions
              rapides, exécution rigoureuse, zéro turnover sur ton dossier.
            </p>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="bg-transparent px-5 py-[50px]" style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}>
        <SectionHeading
          kicker="Des sites que j'ai créés ou optimisés pour des indépendants et entreprises en Côte d'Azur et partout en France."
          title="La preuve par les"
          accent="chiffres."
        />
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-center gap-6">
          {PROOF_CARDS.map((card) => (
            <ProofCard key={card.badge} data={card} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <SectionHeading
          kicker="Pas de surprise. Un process clair, des étapes concrètes."
          title="Comment se passe une collaboration"
          accent="avec JWL Marketing ?"
        />
        <div className="grid gap-5 md:grid-cols-5">
          {STEPS.map((s) => (
            <div key={s.num} className="rounded-2xl border border-gold bg-white p-5">
              <span className="font-heading text-2xl font-bold text-gold/40">{s.num}</span>
              <h3 className="mt-1 font-heading text-base font-semibold text-black">{s.title}</h3>
              <p className="text-xs text-[#888]">{s.sub}</p>
              <p className="mt-2 text-sm text-[#555]">{s.text}</p>
              <p className="mt-2 text-xs font-semibold text-gold">✦ {s.tag}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            Réserve ton appel GRATUIT
          </Link>
        </div>
      </section>

      {/* Différenciateurs */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            kicker="Pas d'agence derrière. Pas de discours."
            title="Ce qui me différencie"
            accent="des autres consultants SEO à Nice ?"
          />
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-6">
                <h3 className="font-heading text-base font-semibold text-white">{d.title}</h3>
                <p className="mt-2 text-sm text-[#bbb]">{d.text}</p>
                <p className="mt-2 text-xs font-semibold text-gold">✦ {d.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat 83% */}
      <section className="mx-auto max-w-[800px] px-6 py-16 text-center">
        <h2 className="font-heading text-2xl font-semibold text-black">
          Consultant SEO à Nice : ton emplacement ne suffit plus.
        </h2>
        <p className="mt-4 text-[15px] leading-[25.5px] text-[#555]">
          <strong className="text-gold">
            83% de tes clients cherchent sur Google avant de venir te voir.
          </strong>{" "}
          Un emplacement en or sur la Promenade des Anglais, ce n&apos;est
          plus une garantie de clients. Le mot-clé &quot;restaurant
          Nice&quot; génère 50 000 recherches Google par mois, et
          &quot;hôtel Nice&quot; tout autant.
        </p>
      </section>

      {/* CTA final */}
      <section className="bg-neutral-50 px-6 py-16 text-center">
        <SectionHeading
          title="Optimise dès maintenant avec Google"
          accent="ton site web Niçois."
        />
        <p className="mx-auto max-w-[700px] text-[15px] text-[#555]">
          Tes futurs clients recherchent déjà tes services sur Google. Ne
          laisse pas ton concurrent du Vieux Nice, de Nice Méridia ou du
          Port de Nice récupérer les appels à ta place.
        </p>
        <Link
          href="/contact-jwl-marketing-aix-en-provence"
          className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Prêt à donner à Google une bonne raison de te recommander ?
        </Link>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
        />
        <FaqAccordion items={NICE_FAQ} />
      </section>
    </div>
  );
}
