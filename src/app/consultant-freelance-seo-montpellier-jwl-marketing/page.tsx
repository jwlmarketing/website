import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import ProofCards from "@/components/ProofCards";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Montpellier | JWL Marketing",
  description:
    "Consultante Freelance SEO à Montpellier. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
};

const ZONES = [
  "Montpellier",
  "Écusson",
  "Port Marianne",
  "Millénaire",
  "Eurêka",
  "Odysseum",
  "Antigone",
  "Castelnau-le-Lez",
  "Lattes",
  "Pérols",
  "Juvignac",
];

const STEPS = [
  {
    n: 1,
    title: "On se parle",
    tag: "Appel découverte gratuit · 30 min",
    text: "Tu me parles de ton activité. Je t'explique comment je travaille. On voit ensemble si on peut avancer. Sans engagement.",
    note: "✦ Sans engagement",
  },
  {
    n: 2,
    title: "J'analyse ton marché",
    tag: "Audit SEO",
    text: "Ton site, tes concurrents, tes opportunités. Je te donne les vraies priorités — celles qui impactent ton chiffre d'affaires. Pas un rapport de 200 pages.",
    note: "✦ Diagnostic ciblé",
  },
  {
    n: 3,
    title: "On construit ta stratégie",
    tag: "Mots-clés & plan d'action",
    text: "Quoi cibler, dans quel ordre, pourquoi. Tu valides chaque choix. Tu comprends ce qu'on fait — et pour qui.",
    note: "✦ Plan priorisé",
  },
  {
    n: 4,
    title: "On passe à l'action",
    tag: "Optimisations & contenus",
    text: "Pages optimisées, contenus rédigés, technique corrigée. Chaque action est tracée et expliquée. Tu restes décisionnaire.",
    note: "✦ Exécution rigoureuse",
  },
  {
    n: 5,
    title: "Tu gagnes en autonomie",
    tag: "Formation & transmission",
    text: "Je te transmets les bons réflexes. Mon objectif : que tu comprennes ton marché et que tu puisses piloter ta visibilité toi-même.",
    note: "✦ Indépendance progressive",
  },
];

const FEATURES = [
  {
    title: "Une interlocutrice unique",
    text: "Tu travailles avec moi du début à la fin. Pas de commercial, pas de junior. Une seule personne qui connaît ton dossier par cœur.",
    note: "✦ Zéro turnover",
  },
  {
    title: "Une vision orientée CA",
    text: "Je ne chasse pas les positions. Je cible les mots-clés qui ramènent des clients. L'un fait plaisir, l'autre génère du business.",
    note: "✦ SEO orienté résultats",
  },
  {
    title: "10 ans d'expérience B2B",
    text: "Dont 4 années auprès du groupe IAC, le célèbre Meetic, Tripadvisor et Travaux.com avant d'explorer le SEO. Je comprends ce qui déclenche vraiment une demande de devis.",
    note: "✦ Vision business",
  },
  {
    title: "Des priorités claires",
    text: "Si une action ne vaut pas la peine, je te le dis. Mon rôle : t'aider à choisir les bons combats. Pas à te noyer dans les options.",
    note: "✦ Pas de blabla",
  },
  {
    title: "Une pédagogie transparente",
    text: "Je t'explique ce que je fais et pourquoi. Reporting mensuel lisible, zéro jargon. Tu restes décisionnaire.",
    note: "✦ Échanges directs",
  },
  {
    title: "Une autonomie progressive",
    text: "Je ne construis pas une dépendance. Je t'embarque dans la stratégie pour que tu puisses voler de tes propres ailes.",
    note: "✦ Indépendance progressive",
  },
];

export default function Page() {
  return (
    <div>
      {/* Logo + compte, au-dessus du hero */}
      <div className="flex w-full items-center justify-between px-[5%] pt-20">
        <Link href="/">
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing Montpellier"
            width={966}
            height={187}
            className="h-[36px] w-auto"
          />
        </Link>
        <a href="https://intranet.jwlmarketing.fr/" aria-label="Connexion espace client">
          <Image
            src="/images/seco.png"
            alt="Connexion espace client"
            width={28}
            height={28}
            className="h-7 w-7"
          />
        </a>
      </div>

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. À Montpellier, la place de la Comédie est une
            scène incontournable. Sur Google, c&apos;est à ton entreprise de
            devenir une représentation indispensable.
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="italic text-[#c9846f]">
              Consultant Freelance SEO
            </span>
            <br />
            <span className="font-medium">à Montpellier.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              APPELEZ-MOI
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
          src="/images/consultant-freelance-seo-montpellier.webp"
          alt="Consultant Freelance SEO Montpellier — JWL Marketing"
          width={1190}
          height={1322}
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
            À Montpellier, le vin et les cannelés font la réputation de la
            ville — non, ici c&apos;est la place de la Comédie et l&apos;Écusson.
            Fais de ton entreprise une référence sur Google. Dans une
            métropole dynamique où les entreprises innovent et où la
            concurrence est bien présente, être visible sur Google est
            devenu un véritable levier de développement. Il ne suffit plus
            d&apos;avoir un site internet : il faut apparaître au moment où
            tes futurs clients recherchent tes produits ou tes services.
          </p>
          <p>
            Consultante SEO freelance, tu échanges directement avec moi. Pas
            d&apos;agence, pas de sous-traitance, pas d&apos;intermédiaire.
            J&apos;analyse ton activité, ton marché et tes objectifs afin de
            construire une stratégie de référencement naturel sur mesure,
            adaptée à ton entreprise et à la réalité du marché montpelliérain.
          </p>
          <p>
            J&apos;étudie les recherches de tes futurs clients, les
            opportunités de ton secteur, la concurrence locale et les
            performances de ton site. J&apos;optimise ensuite la technique,
            les contenus, le maillage interne, le référencement local,
            l&apos;expérience utilisateur et tous les critères pris en compte
            par Google afin d&apos;améliorer durablement ta visibilité.
          </p>
          <p>
            Mon objectif est simple : transformer les recherches Google en
            demandes de devis, en rendez-vous et en nouveaux clients à
            Montpellier, dans toute l&apos;Occitanie et partout où tu
            souhaites développer ton activité.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
          Montpellier attire chaque année de nouvelles entreprises, de
          nouveaux talents et de nouveaux investisseurs. Cette dynamique crée
          aussi une concurrence plus forte. Pour être choisi, il ne suffit
          plus d&apos;avoir un beau site internet. Encore faut-il que tes
          futurs clients puissent le trouver lorsqu&apos;ils effectuent une
          recherche sur Google.
        </p>
        <div className="mx-auto mt-6 max-w-[700px] space-y-2 text-left text-[15px] text-[#1a1a1a]">
          <p>
            — Chaque jour, de nouvelles entreprises cherchent à gagner en
            visibilité.
          </p>
          <p>— Les premières positions sur Google attirent l&apos;essentiel des clics.</p>
          <p>
            — Pendant que certains attendent, leurs concurrents développent
            déjà leur présence en ligne.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Que ton activité soit implantée à l&apos;Écusson, à Port Marianne,
          près d&apos;Odysseum ou ailleurs dans la métropole montpelliéraine,
          une stratégie SEO adaptée permet d&apos;apparaître devant les
          personnes qui recherchent réellement tes services.
        </p>
      </section>

      {/* La preuve par les chiffres */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">La preuve</span>{" "}
          <span className="font-medium">par les chiffres.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] text-[15px] text-[#555]">
          Des sites que j&apos;ai créés ou optimisés pour des indépendants et
          entreprises en Occitanie et partout en France. Des résultats
          mesurés, pas des promesses.
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
              Ton prestataire te parle de trafic, mais jamais de prospects ni
              de chiffre d&apos;affaires ? Tu reçois des rapports remplis de
              données sans savoir quelles actions mettre en place en
              priorité ? Ton site attire quelques visiteurs, mais les
              demandes de devis ne suivent pas ?
            </p>
            <p>
              Le problème ne vient pas toujours de ta visibilité. Bien
              souvent, c&apos;est l&apos;absence d&apos;une véritable
              stratégie qui freine le développement de ton activité. Avant
              même de travailler les mots-clés, j&apos;analyse ton marché,
              tes concurrents, ton offre et les recherches effectuées par tes
              futurs clients à Montpellier.
            </p>
          </div>
        </div>
      </section>

      {/* TRAVAILLER ENSEMBLE */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <TypewriterText className="italic text-[#c9846f]" text="Travailler ensemble" />
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step) => (
            <div key={step.n} className="flex flex-col rounded-2xl bg-[#141414] p-6 text-left text-white">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
                {step.n}
              </div>
              <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-wide text-gold">
                {step.tag}
              </p>
              <h3 className="mt-2 text-center font-heading text-lg">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-[21px] text-white/80">{step.text}</p>
              <p className="mt-3 text-center text-xs italic text-[#c9a84c]">{step.note}</p>
            </div>
          ))}
        </div>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-10 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Réserve ton appel GRATUIT
        </a>
      </section>

      {/* Une interlocutrice unique — features */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="font-medium">JWL</span>{" "}
          <span className="italic text-[#c9846f]">Marketing</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
              <h3 className="font-heading text-lg">{f.title}</h3>
              <p className="mt-3 text-sm leading-[21px] text-white/80">{f.text}</p>
              <p className="mt-3 text-xs italic text-[#c9a84c]">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emplacement stratégique */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
          Être installé dans un emplacement stratégique à Montpellier ne
          garantit plus de trouver de nouveaux clients. Aujourd&apos;hui, la
          majorité des consommateurs se renseignent sur Google avant de
          faire appel à un professionnel, réserver une table ou acheter un
          produit.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-[#1a1a1a]">
          Que ton activité soit située dans l&apos;Écusson, à Port Marianne,
          près d&apos;Odysseum ou ailleurs dans la métropole montpelliéraine,
          tes futurs clients commencent souvent leur recherche en ligne. Si
          ton entreprise n&apos;apparaît pas au bon moment, ils se tourneront
          naturellement vers un concurrent.
        </p>
      </section>

      {/* Zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je me déplace partout en France</span>
          <br />
          <span className="font-medium">
            Selon ton projet à Montpellier, je peux venir directement à ta rencontre.
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

      {/* CTA de clôture */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Lance-toi</span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          Optimise dès maintenant avec Google ton site web Montpelliérain.
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Tes futurs clients recherchent déjà tes services sur Google. Ne
          laisse pas un concurrent de l&apos;Écusson, de Port Marianne ou
          d&apos;Odysseum récupérer les demandes à ta place.
        </p>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Prêt à donner à Google une bonne raison de recommander ton entreprise ?
        </a>
      </section>
    </div>
  );
}
