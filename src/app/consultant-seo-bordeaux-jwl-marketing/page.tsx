import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import ProofCards from "@/components/ProofCards";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";
import SiteHeader from "@/components/SiteHeader";
import GoogleColors from "@/components/GoogleColors";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Bordeaux | JWL Marketing",
  description:
    "Consultante Freelance SEO à Bordeaux. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
};

const ZONES = [
  "Bordeaux",
  "Mérignac",
  "Pessac",
  "Talence",
  "Bègles",
  "Villenave-d'Ornon",
  "Le Bouscat",
  "Cenon",
  "Lormont",
  "Gradignan",
];

const COLLABORATIONS = [
  {
    tag: "Audit & stratégie",
    title: "Audit",
    text: "Un diagnostic clair de ta visibilité et de ton positionnement, pour savoir où tu perds des clients.",
  },
  {
    tag: "Site web et fiche Google",
    title: "Création ou pilotage",
    text: "Un site pensé pour convertir, du One Page à l'écosystème complet.",
  },
  {
    tag: "Suivi mensuel",
    title: "Résultats mesurés",
    text: "Un suivi mensuel pour piloter tes résultats dans la durée, mois après mois.",
  },
];

const FEATURES = [
  { title: "Interlocutrice unique", note: "✦ Zéro turnover" },
  { title: "Vision CA", note: "✦ SEO orienté résultats" },
  { title: "Expérience B2B", note: "✦ 10 ans, dont le groupe IAC" },
  { title: "Priorités claires", note: "✦ Pas de blabla" },
  { title: "Pédagogie", note: "✦ Échanges directs" },
  { title: "Autonomie", note: "✦ Indépendance progressive" },
];

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/consultant-seo-bordeaux-jwl-marketing" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. À Bordeaux, certains viennent pour les grands
            crus, d&apos;autres pour les cannelés. Tes futurs clients, eux,
            viennent sur <GoogleColors /> pour te trouver.
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="italic text-[#c9846f]">
              Consultant Freelance SEO
            </span>
            <br />
            <span className="font-medium">à Bordeaux.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full border-2 border-gold px-8 py-[13px] font-medium text-black transition-colors hover:bg-[#faf3ea]"
            >
              AUDIT GRATUIT
            </a>
          </div>
        </div>
        <Image
          src="/images/consultante-seo-visibilite-web-bordeaux.jpg"
          alt="Jodie Lapaillerie — Consultante Freelance SEO Bordeaux"
          width={494}
          height={580}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Ils me font confiance */}
      <section className="bg-black py-10 text-center">
        <h2 className="font-heading text-3xl text-white">
          Ils me font confiance !
        </h2>
      </section>
      <section className="py-6">
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Contexte marché */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="space-y-5 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            À Bordeaux, le vin et les cannelés font la réputation de la
            ville. Fais de ton entreprise une référence sur <GoogleColors />. Dans une
            métropole dynamique où les entreprises innovent et où la
            concurrence est bien présente, être visible sur <GoogleColors /> est
            devenu un véritable levier de développement. Il ne suffit plus
            d&apos;avoir un site internet : il faut apparaître au moment où
            tes futurs clients recherchent tes produits ou tes services.
          </p>
          <p>
            Consultante SEO freelance, tu échanges directement avec moi. Pas
            d&apos;agence, pas de sous-traitance, pas d&apos;intermédiaire.
            J&apos;analyse ton activité, ton marché et tes objectifs afin de
            construire une stratégie de référencement naturel sur mesure,
            adaptée à ton entreprise et à la réalité du marché bordelais.
          </p>
          <p>
            J&apos;étudie les recherches de tes futurs clients, les
            opportunités de ton secteur, la concurrence locale et les
            performances de ton site. J&apos;optimise ensuite la technique,
            les contenus, le maillage interne, le référencement local,
            l&apos;expérience utilisateur et tous les critères pris en compte
            par <GoogleColors /> afin d&apos;améliorer durablement ta visibilité.
          </p>
          <p>
            Mon objectif est simple : transformer les recherches <GoogleColors /> en
            demandes de devis, en rendez-vous et en nouveaux clients à
            Bordeaux, dans toute la Gironde et partout où tu souhaites
            développer ton activité.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
          Bordeaux attire chaque année de nouvelles entreprises, de nouveaux
          talents et de nouveaux investisseurs. Cette dynamique crée aussi
          une concurrence plus forte. Pour être choisi, il ne suffit plus
          d&apos;avoir un beau site internet. Encore faut-il que tes futurs
          clients puissent le trouver lorsqu&apos;ils effectuent une
          recherche sur <GoogleColors />.
        </p>
        <div className="mx-auto mt-6 max-w-[700px] space-y-2 text-left text-[15px] text-[#1a1a1a]">
          <p>— Chaque jour, de nouvelles entreprises cherchent à gagner en visibilité.</p>
          <p>— Les premières positions sur <GoogleColors /> attirent l&apos;essentiel des clics.</p>
          <p>
            — Pendant que certains attendent, leurs concurrents développent
            déjà leur présence en ligne.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Que ton activité soit implantée à Bordeaux, Mérignac, Pessac,
          Talence, Bègles ou ailleurs en Gironde, une stratégie SEO adaptée
          permet d&apos;apparaître devant les personnes qui recherchent
          réellement tes services.
        </p>
      </section>

      {/* La preuve par les chiffres */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">La preuve</span>{" "}
          <span className="font-medium">par les chiffres.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] text-[15px] text-[#555]">
          Des résultats chiffrés, mesurés avec Google Analytics 4.
        </p>
        <div className="mt-10">
          <ProofCards />
        </div>
      </section>

      {/* Échangeons ensemble + widget audit */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Échangeons ensemble</span>{" "}
          <span className="font-medium">sur ton projet.</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Tu as peut-être déjà investi dans un site internet… sans
              obtenir les résultats espérés. Ton site est esthétique, mais il
              reste difficile à trouver sur <GoogleColors />. Tu publies du contenu,
              mais il ne génère ni appels ni demandes de devis.
            </p>
            <p>
              À Bordeaux, de nombreuses entreprises disposent d&apos;un site
              internet performant sur le plan visuel. Pourtant, sans une
              stratégie de référencement naturel adaptée, il passe souvent
              inaperçu. Mon rôle est de transformer ton site en un véritable
              outil de développement.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration : 3 façons de travailler */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <TypewriterText className="italic text-[#c9846f]" text="Collaboration." />
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] text-[15px] text-[#555]">
          3 façons de travailler avec moi
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COLLABORATIONS.map((c) => (
            <div key={c.title} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                {c.tag}
              </p>
              <h3 className="mt-2 font-heading text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-[21px] text-white/80">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Mon expertise,</span>
          <br />
          <span className="font-medium">j&apos;étudie les recherches des internautes.</span>
        </h2>
        <div className="mt-8 space-y-5 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Consultante SEO à Bordeaux, mon rôle ne consiste pas uniquement à
            améliorer ton positionnement sur <GoogleColors />. Mon objectif est de
            rendre ton entreprise visible auprès des personnes qui
            recherchent déjà tes produits ou tes services.
          </p>
          <p>
            J&apos;interviens sur tous les leviers qui influencent ta
            visibilité : l&apos;architecture de ton site, ses performances
            techniques, tes contenus, ton maillage interne, ton
            référencement local, ta fiche Google Business Profile et
            l&apos;ensemble des critères pris en compte par <GoogleColors />.
          </p>
          <p>
            J&apos;accompagne les entreprises, commerçants, artisans,
            indépendants et professions libérales de Bordeaux, mais aussi de
            Mérignac, Pessac, Talence, Bègles, Villenave-d&apos;Ornon et plus
            largement de toute la Gironde.
          </p>
        </div>
      </section>

      {/* JWL Marketing — features */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="font-medium">JWL</span>{" "}
          <span className="italic text-[#c9846f]">Marketing</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#141414] p-6 text-center text-white">
              <h3 className="font-heading text-lg">{f.title}</h3>
              <p className="mt-3 text-xs italic text-[#c9a84c]">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je me déplace partout en France</span>
          <br />
          <span className="font-medium">
            Selon ton projet à Bordeaux, je peux venir directement à ta rencontre.
          </span>
        </h3>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ZONES.map((z) => (
            <span
              key={z}
              className="rounded-full bg-[#1a1207] px-5 py-2 text-sm text-white"
            >
              {z}
            </span>
          ))}
        </div>
      </section>

      {/* Génère plus de clients */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Génère plus de clients.</span>
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-[#1a1a1a]">
          Le problème, c&apos;est que si ton site internet, ton référencement
          naturel, ton SEO local ou ta fiche Google Business Profile ne sont
          pas correctement optimisés, <GoogleColors /> mettra simplement un de tes
          concurrents en avant. Pendant que tu travailles, ce sont eux qui
          récupèrent les appels, les demandes de devis et les nouveaux
          clients.
        </p>
      </section>

      {/* CTA de clôture */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Optimise dès maintenant</span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          avec <GoogleColors /> ton site web.
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Tes futurs clients recherchent déjà tes services sur <GoogleColors />.
          L&apos;objectif est simple : faire en sorte qu&apos;ils trouvent
          ton entreprise avant celle de tes concurrents à Bordeaux,
          Mérignac, Pessac, Talence ou ailleurs en Gironde.
        </p>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Prêt à faire de ton entreprise une référence sur <GoogleColors /> à Bordeaux ?
        </a>
      </section>
    </div>
  );
}
