import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { ENTREPRENEUR_FAQ } from "@/data/entrepreneurFaq";

export const metadata: Metadata = {
  title: "Futur entrepreneur : tu anticipes tes dépenses, mais pas ton site web | JWL Marketing",
  description:
    "Entrepreneur individuel : construis ta visibilité Google dès le lancement de ton activité.",
};

const STAGES = [
  { num: "01", title: "Je lance mon activité", text: "Pars sur des bases solides et attire tes premiers clients rapidement avec un site optimisé dès le départ.", cta: "Démarrer mon projet" },
  { num: "02", title: "J'ai déjà un site", text: "Audit complet, identification des blocages et plan d'action concret pour que ton site travaille vraiment pour toi.", cta: "Améliorer mon site" },
  { num: "03", title: "Je veux développer", text: "Stratégie SEO complète, ciblage de mots-clés et suivi mensuel pour une croissance locale durable.", cta: "Attirer plus de clients" },
];

const PROJECTS = [
  { name: "Proxiclic Provence", tag: "Indépendant · SEO local", loc: "Informatique — Digne-les-Bains (04)", items: ["Stratégie Business complète", "Abonnement stratégique", "Création logo", "Création site web", "Rédaction SEO"], results: ['1ère page Google sur "dépannage Digne-les-Bains", "service informatique Digne-les-Bains"', "+80 avis Google My Business"], url: "https://www.proxiclic-provence.fr/" },
  { name: "GreenBeamCraft", tag: "Artisan indépendant · E-commerce", loc: "Paris (92)", items: ["Artisanat", "E-commerce", "Optimisation homepage", "Rédaction articles SEO"], results: ["En cours"], url: "https://bout-de-poils.vercel.app/" },
  { name: "Groupe INOVEA", tag: "Conseil financier", loc: "Aix-en-Provence (13)", items: ["Stratégie acquisition", "SEO local", "Création site web", "Outil simulation épargne", "Photos IA"], results: ["En cours", "+12 avis Google My Business"], url: "https://gestiondepatrimoine-aix-en-provence.fr/" },
];

const PRESTATIONS = [
  { cat: "Stratégie & SEO", items: ["Audit SEO complet", "Analyse de la concurrence", "Positionnement local (SEO géo)"] },
  { cat: "Identité Visuelle", items: ["Logo professionnel", "Charte graphique", "Univers de marque"] },
  { cat: "Visibilité Digitale", items: ["Création & optimisation Google My Business", "Site web optimisé SEO"] },
];

export default function Entrepreneur() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-sm italic text-[#555]">
            &quot;Aujourd&apos;hui, tes clients te cherchent déjà sur
            Google.&quot;
          </p>
          <p className="mt-2 text-sm text-[#555]">
            Attendre de lancer son activité c&apos;est déjà perdre des
            clients.
          </p>
          <h1 className="mt-4 font-heading text-[38px] font-semibold leading-[1.25] text-black">
            Entrepreneur individuel : construis ta visibilité{" "}
            <span className="text-gold">Google</span> dès le lancement de
            ton activité
          </h1>
          <div className="my-4 flex flex-wrap items-center gap-3">
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              PARLONS DE TON PROJET
            </Link>
            <Link
              href="/audit-seo-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-black px-8 py-[15px] font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              AUDIT GRATUIT
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero-entrepreneur.webp"
          alt="Stratégies marketing personnalisées JWL"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
        />
      </div>

      {/* Jean Claude anecdote */}
      <section className="mx-auto max-w-[850px] px-6 py-16">
        <p className="text-center font-heading text-xl italic text-black">
          &quot;Je veux un site web qui cartonne ! Pour 2000€ max !&quot;
          <br />
          <span className="text-sm not-italic text-[#888]">
            dit Jean Claude, Apple en main, stratégie client en option.
          </span>
        </p>
        <SectionHeading
          kicker="Sauf qu'un site qui cartonne te ramène du cash, le design ne suffit pas"
          title="Quand la stratégie manque,"
          accent="l'entrepreneur s'emmêle"
        />
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            <strong>Ce que tu paies vraiment, c&apos;est la réflexion.</strong>{" "}
            Si tu penses qu&apos;une machine de guerre commerciale coûte le
            prix d&apos;un iPhone, c&apos;est que notre marché est malade.
            Quand je te propose un pack avec stratégie marketing, il ne
            s&apos;agit pas simplement de créer un site internet SEO.
          </p>
          <p>
            Travailler avec moi, c&apos;est investir dans une stratégie
            pensée sur le long terme. Un site web avec une vraie structure
            technique, des liens cohérents entre les pages, une logique
            commerciale et une navigation fluide.
          </p>
          <p>
            Parce qu&apos;un site qui cartonne ne se résume pas à un joli
            design. Un site performant te ramène des clients, du trafic et
            du chiffre d&apos;affaires.{" "}
            <strong className="text-gold">
              Le design attire l&apos;œil. La stratégie, elle, fait avancer
              ton business.
            </strong>
          </p>
        </div>
      </section>

      {/* Où en es-tu */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading
            kicker="Ton activité tourne. Tes clients suivent ?"
            title="Où en es-tu"
            accent="dans ton projet ?"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STAGES.map((s) => (
              <div key={s.num} className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-7">
                <span className="text-xs font-bold text-gold">{s.num}</span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#bbb]">{s.text}</p>
                <Link
                  href="/contact-jwl-marketing-aix-en-provence"
                  className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
                >
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <SectionHeading
          title="Tu as pensé à tout pour ton entreprise."
          accent="Sauf à ton site web."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gold bg-white p-6">
              <p className="text-xs font-semibold uppercase text-gold">{p.tag}</p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-black">{p.name}</h3>
              <p className="text-xs text-[#888]">{p.loc}</p>
              <ul className="mt-3 space-y-1 text-xs text-[#555]">
                {p.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
              <div className="mt-3 border-t border-neutral-100 pt-3 text-xs font-semibold text-[#333]">
                {p.results.map((r) => <p key={r}>▼ {r}</p>)}
              </div>
              <a href={p.url} target="_blank" rel="noopener" className="mt-3 inline-block text-xs font-semibold text-gold hover:underline">
                ↗ Voir le site
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Priorités */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading
            title="Beaucoup d'entrepreneurs pensent au logo"
            accent="avant la stratégie."
          />
          <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Tu as réfléchi à ton nom, ton logo, ton budget, tes réseaux
              sociaux… Mais ton site internet est souvent passé tout en bas
              de la liste. Pourtant, pendant que ton activité démarre, des
              prospects recherchent déjà tes services sur Google. Et
              aujourd&apos;hui, ils tombent surtout sur tes concurrents.
            </p>
            <p>
              La vraie question n&apos;est donc plus : &quot;Ai-je besoin
              d&apos;un site internet ?&quot; Mais plutôt :{" "}
              <strong className="text-gold">
                &quot;Combien de clients suis-je en train de perdre sans un
                site pensé pour les attirer ?&quot;
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Ce que je propose */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        <SectionHeading title="Ce que je te propose avec" accent='"JWL MARKETING"' />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Orienté résultats — Chaque action est pensée pour vous apporter des clients.",
            "Visibilité sur Google — Votre entreprise apparaît là où vos clients vous cherchent.",
            "Site web efficace — Un site conçu pour transformer vos visiteurs en clients.",
            "Sur-mesure — Des solutions adaptées à votre activité.",
            "Automatisation & IA — Gagnez du temps avec des outils intelligents.",
            "Espace client dédié — Suivez vos documents, audits, devis et factures.",
          ].map((f) => (
            <div key={f} className="rounded-xl border border-neutral-100 bg-white p-5 text-sm text-[#444]">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Aide financement */}
      <section className="bg-[#fdfaf3] px-6 py-10 text-center">
        <p className="mx-auto max-w-[700px] text-[15px] leading-relaxed text-[#1a1a1a]">
          Ton projet digital peut être financé jusqu&apos;à{" "}
          <strong className="text-gold">50 %</strong> par la Région Sud,
          entre <strong className="text-gold">2 000 et 5 000 €</strong> de
          subvention pour les auto-entrepreneurs, artisans, commerçants et
          indépendants non réglementés de PACA (coach, consultant,
          thérapeute...).
        </p>
        <p className="mt-2 text-xs text-[#888]">
          Tape dans Google : francenum.gouv.fr, ou
          mesaidespubliques.infogreffe.fr en filtrant par région PACA.
        </p>
      </section>

      {/* Pack */}
      <section className="mx-auto max-w-[900px] px-6 py-16 text-center">
        <SectionHeading title="Es-tu prêt à booster ta" accent="visibilité ?" />
        <div className="grid gap-6 text-left sm:grid-cols-3">
          {PRESTATIONS.map((p) => (
            <div key={p.cat} className="rounded-2xl border border-gold bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-gold">{p.cat}</h3>
              <ul className="mt-2 space-y-1 text-sm text-[#444]">
                {p.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#555]">
          + Accompagnement stratégique sur 6 mois : un point mensuel en
          visio one-to-one ou en présentiel pour faire le bilan digital et
          terrain.
        </p>
        <p className="mt-4 font-heading text-3xl font-bold text-black">
          4 500 €
        </p>
        <Link
          href="/contact-jwl-marketing-aix-en-provence"
          className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Discutons ensemble de votre projet
        </Link>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions des Entrepreneurs"
          subtext="Retrouve les réponses aux questions des créateurs, artisans et libéraux."
        />
        <FaqAccordion items={ENTREPRENEUR_FAQ} />
      </section>
    </div>
  );
}
