import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  path: "/redaction-seo",
  locale: "fr",
  title: "Rédaction Web SEO : attirez, convainquez, convertissez | JWL Marketing",
  description:
    "Ne publiez plus pour publier. Faites de vos contenus un véritable levier commercial grâce à une rédaction web SEO pensée pour attirer et convertir.",
});

const PROCESS_STEPS = [
  {
    title: "Ton site web est optimisé",
    text: "Ta structure SEO est en place",
  },
  {
    title: "Je t'aide à rédiger des pages stratégiques SEO",
    text: "Tes contenus répondent au langage Google",
  },
  {
    title: "Google et les IA te comprennent",
    text: "Ils te proposent dans les recherches",
  },
  {
    title: "Le prospect te trouve",
    text: "Il découvre une solution à son problème",
  },
];

const MODULE_1_ITEMS = [
  "Balises et structure d'un article",
  "Mots-clés, champs sémantiques et connecteurs",
  "Intention de recherche, se fier à la google search console",
  "Maillage interne entre les pages",
  "Optimisation avec l'outil Textoptimizer",
  "Utiliser ChatGPT pour gagner du temps sans perdre sa personnalité",
  "Relayer ses articles sur sa fiche Google Business Profile",
];

const MODULE_2_STEPS = [
  "choix de la requête",
  "structure",
  "rédaction",
  "optimisation",
  "correction",
  "maillage",
  "publication",
];

const CORRECTION_CHECKS = [
  "structure H1/H2/H3",
  "utilisation de la requête",
  "sémantique",
  "connecteurs",
  "lisibilité",
  "intention de recherche",
  "optimisation avec l'outil",
  "maillage interne",
  "cohérence commerciale",
];

function RocketIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/redaction-seo-rocket.png"
      alt=""
      width={190}
      height={230}
      className={className}
    />
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="fr" href="/en/redaction-seo" />

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-[110px] md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ScrollReveal>
            <h1 className="font-heading text-4xl leading-tight text-black md:text-5xl">
              <span className="italic text-[#c9846f]">JWL Connect :</span>{" "}
              Rédaction SEO, l&apos;art de convaincre.
            </h1>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[26px] text-neutral-600">
              Des mots justes pour un impact fort. Chaque texte est une
              occasion pour toi de transformer un prospect en client.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#c9846f] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                On en parle ?
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative mx-auto h-[420px] w-full max-w-[460px] md:h-[520px]">
              <Image
                src="/images/redaction-seo-hero.png"
                alt="JWL Marketing"
                width={1414}
                height={2000}
                priority
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Qui rédige tes articles */}
      <section className="mx-auto max-w-[1000px] px-6 pb-20 text-center md:px-10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl text-black md:text-4xl">
            Qui rédige tes <span className="text-[#c9846f]">articles SEO</span>{" "}
            de blog&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-[26px] text-neutral-600">
            Tu as optimisé ton site pour le SEO, travaillé sa structure et
            réalisé ton audit de mots-clés. Mais c&apos;est toi qui rédiges tes
            contenus ? Je te fournis la stratégie, tu apprends à
            l&apos;exécuter.
          </p>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl bg-black p-8 text-white">
              <h3 className="font-heading text-xl text-gold">
                Tu as de la visibilité, mais peu de résultats&nbsp;?
              </h3>
              <p className="mt-4 text-[15px] leading-[24px] text-neutral-300">
                Être visible, c&apos;est une chose. Être trouvé par les bonnes
                personnes, c&apos;en est une autre. Je t&apos;aide à travailler
                ton référencement naturel (SEO) et tes contenus pour attirer
                les bons prospects et les transformer en clients.
              </p>
            </div>
            <div className="rounded-2xl bg-black p-8 text-white">
              <h3 className="font-heading text-xl text-gold">
                Tu ne retrouves pas tes articles dans les recherches
                Google&nbsp;?
              </h3>
              <p className="mt-4 text-[15px] leading-[24px] text-neutral-300">
                Site internet, réseaux sociaux, référencement, newsletters...
                Je t&apos;aide à identifier les canaux les plus pertinents
                pour ton activité et à les utiliser efficacement.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Comment Google et les IA te propose */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl text-black md:text-4xl">
            Comment <span className="text-[#c9846f]">Google et les IA</span>{" "}
            te proposent&nbsp;?
          </h2>
        </ScrollReveal>

        {/* Étape 1 (gauche) -> fusée horizontale -> Étape 2 (droite) */}
        <div className="mt-12 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <ScrollReveal>
            <div className="text-center md:text-left">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[0].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[0].text}
              </p>
            </div>
          </ScrollReveal>
          <Image
            src="/images/redaction-seo-rocket-horizontal.png"
            alt=""
            width={205}
            height={110}
            className="mx-auto hidden h-10 w-auto md:block"
          />
          <ScrollReveal delay={100}>
            <div className="text-center md:text-left">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[1].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[1].text}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Descend vers étape 3 (centre) + mockup Google */}
        <div className="mt-6 flex flex-col items-center">
          <RocketIcon className="my-5 h-12 w-auto" />
          <ScrollReveal delay={200}>
            <div className="text-center">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[2].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[2].text}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Image
              src="/images/redaction-seo-google.png"
              alt="Qu'avez-vous en tête aujourd'hui ?"
              width={780}
              height={265}
              className="mt-5 h-auto w-full max-w-[420px] rounded-xl shadow-sm"
            />
          </ScrollReveal>

          {/* Descend vers étape 4 (centre) */}
          <RocketIcon className="my-5 h-12 w-auto" />
          <ScrollReveal delay={350}>
            <div className="text-center">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[3].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[3].text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* La méthode JWL Connect */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 text-center md:px-10">
        <ScrollReveal>
          <p className="font-heading text-2xl font-bold italic text-[#c9846f] md:text-3xl">
            La méthode JWL Connect
          </p>
          <h2 className="mt-2 font-heading text-2xl text-black md:text-3xl">
            Rédige toi-même ton contenu ou délègue
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-[24px] text-neutral-600">
            Crée du contenu qui se positionne en 1ère page... et qui convertit
            pour de vrai.
            <br />
            Marre de rédiger des articles qui finissent dans les limbes
            d&apos;Internet ? Découvre la formation SEO 100% axée Contenu &amp;
            Conversion. Apprends à dompter les moteurs de recherche (search
            engine) et à convaincre tes prospects grâce à une stratégie basée
            sur l&apos;expertise, la qualité humaine, et zéro blabla
            technique.
          </p>
        </ScrollReveal>
      </section>

      {/* RDV offert + vidéo */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-[280px]">
              <Image
                src="/images/contact-echange-illustration.png"
                alt=""
                width={1024}
                height={768}
                className="mx-auto h-auto w-full max-w-[220px] object-contain"
              />
              <div className="mx-auto mt-2 max-w-[220px] rounded-md bg-black px-4 py-3 text-center text-[13px] leading-[18px] text-white">
                <span className="font-semibold">RDV offert</span> pour faire
                le point ensemble sur tes besoins et tes attentes
              </div>
            </div>

            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl bg-black">
              <video
                src="/videos/jwl-connect-rdv.mp4"
                controls
                playsInline
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <a
                href="https://calendar.app.google/MZrdz3xprTy4kfwy9"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                Je réserve mon rendez-vous gratuit
              </a>
              <a
                href="https://calendar.app.google/MZrdz3xprTy4kfwy9"
                target="_blank"
                rel="noopener"
                className="hidden -rotate-6 font-heading text-sm font-semibold italic text-gold underline sm:inline-block"
              >
                Rendez-vous
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 text-left">
              <a
                href="https://wa.me/33783792814"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 0 0 0-.4c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.5 4c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
                </svg>
              </a>
              <p className="text-[14px] leading-[22px] text-neutral-600">
                Suivi WhatsApp/Slack de 10h à 13h + suivi de 30 min après la
                formation pour répondre à tes questions et t&apos;aider à
                mettre en pratique.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Formation SEO modules */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-2xl text-[#c9846f] md:text-3xl">
              Une formation SEO
            </h2>
            <h3 className="font-heading text-2xl text-black md:text-3xl">
              adaptée à tes besoins
            </h3>
            <p className="mt-4 text-[15px] text-neutral-600">
              Apprends à rédiger tes contenus SEO comme un vrai{" "}
              <em>copywriter</em>.
            </p>
          </div>

          <div className="relative mt-10 space-y-6 rounded-2xl bg-black p-6 md:p-10">
            <span className="absolute -top-5 right-6 flex h-[72px] w-[72px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[12px] leading-tight text-white shadow-md">
              À partir de
              <br />
              675&nbsp;€
            </span>

            <div className="rounded-xl bg-[#0d0d0d] p-6">
              <p className="text-center font-heading text-lg text-white">
                Module 1 — 6 h : apprendre la méthode
              </p>
              <p className="mt-2 text-center text-[14px] text-neutral-400">
                Comprendre ton audit SEO et les requêtes à travailler.
                Construire ton calendrier éditorial sur 12 mois.
              </p>
              <ul className="mt-5 space-y-2 text-[14px] text-neutral-300">
                {MODULE_1_ITEMS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c9846f]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#0d0d0d] p-6">
              <p className="text-center font-heading text-lg text-white">
                Module 2 — 6 h : on rédige ensemble
              </p>
              <p className="mt-2 text-center text-[14px] text-neutral-400">
                Tu rédiges ton premier article devant moi. Je t&apos;accompagne
                étape par étape&nbsp;:
              </p>
              <ul className="mt-5 space-y-2 text-[14px] text-neutral-300">
                {MODULE_2_STEPS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c9846f]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[14px] text-neutral-300">
                À la fin, tu sais reproduire la méthode seul.
              </p>
              <p className="mt-4 text-[14px] font-semibold text-white">
                Et ensuite ?
              </p>
              <p className="mt-2 text-[14px] text-neutral-300">
                « Je vérifie ton travail » : relecture d&apos;un article le
                mois suivant, corrections SEO, optimisation, conseils.
              </p>
              <p className="mt-3 text-[12px] italic text-neutral-500">
                * Le prix dépend du nombre de participants, de tes besoins et
                de ton accompagnement. Tarif adhérent JWL Booster 675€. Prix
                évolutif.
              </p>
            </div>

            <div className="rounded-xl bg-[#0d0d0d] p-6">
              <p className="text-center font-heading text-lg text-white">
                🔖 Option — Correction &amp; optimisation SEO
              </p>
              <p className="mt-3 text-center text-[14px] text-neutral-300">
                À partir de 75 € / article.
                <br />
                Tu rédiges ton article, puis tu me l&apos;envoies. Je vérifie
                notamment&nbsp;:
              </p>
              <ul className="mx-auto mt-4 grid max-w-[460px] grid-cols-1 gap-x-8 gap-y-2 text-[14px] text-neutral-300 sm:grid-cols-2">
                {CORRECTION_CHECKS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c9846f]">-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-[14px] text-neutral-300">
                Puis je te renvoie les corrections et recommandations
                nécessaires pour améliorer ton score d&apos;optimisation.
              </p>
              <div className="mx-auto mt-5 max-w-[300px] space-y-1 text-[14px]">
                <p className="flex items-center justify-between">
                  <span className="text-neutral-300">
                    🟢 Déjà bien optimisé
                  </span>
                  <span className="text-white">75 €</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-neutral-300">
                    🟡 Quelques corrections à faire
                  </span>
                  <span className="text-white">98 €</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-neutral-300">
                    🔴 Gros travail d&apos;optimisation
                  </span>
                  <span className="text-white">150 €</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="/contact"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                Je demande mon offre adaptée
              </a>
              <a
                href="/contact"
                className="inline-block rounded-full border-2 border-white px-8 py-[13px] text-center font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contacte
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Cette formation est faite pour toi si */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-heading text-2xl text-black md:text-3xl">
            Cette <span className="text-[#c9846f]">formation</span> est faite
            pour toi, si&nbsp;:
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-heading text-lg font-semibold text-gold">
                Tu as un métier, tu n&apos;as pas le temps de devenir community
                manager à plein temps.
              </p>
              <p className="mt-3 text-[15px] leading-[24px] text-neutral-600">
                Ton métier te prend du temps. Ta vie de famille aussi. Alors
                apprends à déléguer ce qui semble secondaire, mais qui reste
                essentiel pour ton activité.
              </p>
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-gold">
                Tu ne sais pas quoi dire, où comment cadrer tes idées&nbsp;?
              </p>
              <p className="mt-3 text-[15px] leading-[24px] text-neutral-600">
                Tu as plein de choses à dire... mais aucune idée de comment les
                dire ?
              </p>
            </div>
            <div className="md:col-start-2">
              <p className="font-heading text-lg font-semibold text-gold">
                Pour ceux qui communiquent au hasard
              </p>
              <p className="mt-3 text-[15px] leading-[24px] text-neutral-600">
                Tu postes quand tu y penses ? Et quand tu n&apos;y penses
                pas... rien ne se passe.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/ressources/kit/signature"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
            >
              Curieux, je découvre les astuces SEO
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Et si tes contenus travaillaient */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-heading text-2xl text-black md:text-3xl">
            Et si tes <span className="text-[#c9846f]">contenus</span>{" "}
            travaillaient vraiment pour ton entreprise&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-center text-[15px] leading-[24px] text-neutral-600">
            Et si tes contenus bossaient pendant que toi, tu bossais sur ton
            métier ? Des contenus pensés pour attirer les bons clients,
            développer ta visibilité et servir tes objectifs commerciaux.
          </p>
          <Image
            src="/images/redaction-seo-contenus.png"
            alt="Étude de cas — Consultante SEO & Visibilité Web Aix-en-Provence"
            width={1500}
            height={1061}
            className="mx-auto mt-10 h-auto w-full max-w-[1100px] rounded-2xl"
          />
        </ScrollReveal>
      </section>

      {/* Besoin d'un coup de main - WhatsApp + formulaire */}
      <section className="mx-auto max-w-[1000px] px-6 pb-24 md:px-10">
        <h2 className="text-center font-heading text-2xl text-black md:text-3xl">
          Besoin d&apos;<span className="text-[#c9846f]">un coup de main</span>{" "}
          pour tes contenus&nbsp;?
        </h2>
        <div className="mt-10 grid gap-8 text-left md:grid-cols-2">
          <ScrollReveal>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-black p-8 text-center">
              <p className="text-[15px] leading-[22px] text-white">
                Une question avant de démarrer ? Écris-moi sur WhatsApp, le
                message est déjà préparé pour aller droit au but.
              </p>
              <a
                href="https://wa.me/33783792814?text=Bonjour%20Jodie%2C%20j%27ai%20une%20question%20avant%20de%20d%C3%A9marrer%20la%20formation%20r%C3%A9daction%20SEO%C2%A0%3A"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#25D366] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe57]"
              >
                Poser ma question sur WhatsApp
              </a>
              <a
                href="https://calendar.app.google/MZrdz3xprTy4kfwy9"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
              >
                Réserve un appel découverte
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="rounded-2xl border border-[#eee] p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
