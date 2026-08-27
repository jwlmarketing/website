import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Marseille | JWL Marketing",
  description:
    "Consultante Freelance SEO à Marseille. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
};

const ZONES = [
  "Marseille",
  "Aubagne",
  "Allauch",
  "Plan-de-Cuques",
  "Rognac",
  "La Penne-sur-Huveaune",
  "Cassis",
  "La Ciotat",
  "Marignane",
  "Vitrolles",
];

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      {/* Logo + compte, au-dessus du hero */}
      <div className="flex w-full items-center justify-between px-[5%] pt-20">
        <Link href="/">
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing Marseille"
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
          <h1 className="font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="font-medium">
              Consultante SEO
              <br />
              &amp; Visibilité Web
            </span>
            <br />
            <span className="italic text-[#c9846f]">Marseille</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. Le Vélodrome fait vibrer les supporters. Moi, je
            fais travailler ta visibilité.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <span className="rounded-full bg-[#faf3ea] px-5 py-[15px] text-sm font-semibold text-black">
              + de 20 projets depuis 2025
            </span>
            <p className="min-h-[1.2em] font-heading text-4xl italic text-[#c9846f]">
              <TypewriterText text="Bonjour, je m'appelle Jodie." speed={113} />
            </p>
          </div>
        </div>
        <Image
          src="/images/consultant-seo-marseille-vieux-port.jpg"
          alt="Jodie Lapaillerie — Consultante SEO Marseille, devant le Vieux-Port et Notre-Dame de la Garde"
          width={1190}
          height={1322}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/qui-suis-je-portrait.png"
            alt="Jodie Lapaillerie — consultante en marketing digital"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl object-cover"
          />
          <div className="text-center">
            <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="text-[#c9846f]"> Ta consultante SEO préférée,</span> experte en stratégie digitale et développement commercial
            </h2>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Parle moi de tes besoins SEO sur Marseille
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_260px]">
          <div className="rounded-2xl bg-[#141414] p-8 text-white">
            <p className="text-[15px] leading-[25.5px]">
              <span className="font-bold">Ma mission : </span>
              J&apos;accompagne les entrepreneurs, artisans, commerçants et
              dirigeants qui souhaitent développer leur activité grâce à une
              stratégie digitale pensée pour attirer de vrais prospects à
              Marseille.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Depuis plus de 10 ans, j&apos;évolue dans l&apos;univers du
              développement commercial. Une expérience renforcée par 4 années
              au sein du groupe américain IAC, spécialisé dans
              l&apos;acquisition de clients sur Internet.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Aujourd&apos;hui, j&apos;associe cette expertise commerciale au
              référencement naturel pour aider les entreprises marseillaises à
              gagner en visibilité, développer leur présence en ligne et
              transformer leur site internet en véritable outil de
              prospection.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Sites vitrines, e-commerce, contenus SEO, stratégie digitale,
              visibilité locale ou Google Business Profile : chaque action
              poursuit le même objectif. Aider ton entreprise à être trouvée
              par les bonnes personnes au bon moment.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/jodie-seo-aix-en-provence.webp"
              alt="Jodie Lapaillerie — SEO Summit Paris 2026"
              width={800}
              height={1000}
              className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-xs text-[#000]">
              Jodie-LAPAILLERIE / SEO summit
            </p>
          </div>
        </div>
      </section>

      {/* Ambition */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je suis ambitieuse</span>
          <br />
          <span className="font-medium">
            Et je vise la 1ère place sur Marseille.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/qui-suis-je-gmb-card.png"
            alt="Fiche Google Business Profile JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/qui-suis-je-search-console.png"
            alt="Évolution des impressions et clics — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/qui-suis-je-serp.png"
            alt="Résultat Google pour seo aix-en-provence — JWL Marketing"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* Je m'engage */}
      <section className="mx-auto max-w-[800px] px-6 py-6 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je m&apos;engage</span>{" "}
          <span className="font-medium">
            dans ton projet et mes clients en parlent.
          </span>
        </h2>
      </section>

      {/* Avis clients */}
      <section className="py-6">
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Marché local + widget audit */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je connais ton marché</span>{" "}
          <span className="font-medium">Marseillais</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Marseille, le réseau reste important. Mais il ne suffit plus
              toujours. Aujourd&apos;hui, une grande partie des décisions
              commence sur Google.
            </p>
            <p>
              Les consommateurs recherchent, comparent et sélectionnent
              plusieurs entreprises avant de prendre contact. Mon objectif est
              de positionner ton entreprise au bon endroit, au bon moment et
              devant les bonnes personnes.
            </p>
          </div>
        </div>
      </section>

      {/* 1. J'optimise ton marché */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">J&apos;optimise ton marché</span>{" "}
          <span className="font-medium">avant de développer ton site web.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Marseille, le réseau compte encore. Mais il ne suffit plus
              toujours. Avant de prendre une décision, de nombreux
              consommateurs recherchent des informations sur Google,
              consultent les avis et comparent plusieurs entreprises.
            </p>
            <p className="mt-4">
              Une grande partie du parcours client commence désormais en
              ligne. Les entreprises qui se développent le plus vite ne sont
              pas forcément les plus anciennes ou les plus connues. Ce sont
              souvent celles que les prospects trouvent au bon moment.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-terrasse.png"
            alt="Jodie Lapaillerie en terrasse — analyse de marché SEO Marseille"
            width={880}
            height={632}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 2. J'analyse les recherches Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            J&apos;analyse les recherches <GoogleColors />
          </span>{" "}
          <span className="font-medium">des internautes.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-keyword-tool.png"
            alt="Outil de planification des mots-clés Google, sur Marseille"
            width={2000}
            height={1414}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              J&apos;analyse les comportements de recherche de tes futurs
              clients, les questions qu&apos;ils se posent et les solutions
              qu&apos;ils cherchent réellement.
            </p>
            <p className="mt-4">
              Certaines recherches traduisent une simple curiosité.
              D&apos;autres révèlent une intention d&apos;achat ou de prise de
              contact. Mon rôle consiste à identifier les opportunités les
              plus pertinentes pour ton activité afin de construire une
              stratégie SEO capable d&apos;attirer des prospects qualifiés.
            </p>
            <p className="mt-4">
              Le but n&apos;est pas d&apos;être visible partout. Le but est
              d&apos;être visible lorsqu&apos;un prospect est prêt à agir.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Je maximilise ta fiche Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je maximise</span>{" "}
          <span className="font-medium">ta fiche Google profile.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                À Marseille, les internautes consultent souvent plusieurs
                entreprises avant de faire leur choix. Ta fiche Google est
                souvent le premier contact avec un futur client.
              </p>
              <p className="mt-4">
                J&apos;optimise les éléments qui influencent réellement la
                décision : catégories, services, photos, avis clients,
                informations pratiques et cohérence de ta présence en ligne.
                L&apos;objectif n&apos;est pas seulement d&apos;apparaître sur
                Google. L&apos;objectif est de donner confiance et
                d&apos;inciter à te contacter.
              </p>
            </div>
            <Link
              href="/audit-seo-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Voir les audits
            </Link>
          </div>
          <Image
            src="/images/qui-suis-je-gmb-card.png"
            alt="Optimisation fiche Google Business Profile JWL Marketing"
            width={1410}
            height={950}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 4. Je fabrique un site web */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={4} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">Je fabrique</span>{" "}
              <span className="font-medium">un site web sur mesure pour toi.</span>
            </h3>
            <div className="mt-4 h-full border-2 border-gold p-8 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                Ton site internet est souvent la première impression que se
                fait un futur client de ton entreprise. C&apos;est pourquoi
                je ne me contente pas de créer un site esthétique. Je conçois
                un outil pensé pour rassurer, informer et faciliter la prise
                de contact.
              </p>
              <p className="mt-4">
                Chaque projet est adapté à ton activité, à tes objectifs et
                aux attentes de tes futurs clients. Selon les besoins, le
                développement peut être réalisé en HTML ou avec des
                technologies modernes comme Next.js pour garantir rapidité,
                sécurité et confort de navigation.
              </p>
              <p className="mt-4">
                Mon objectif est de créer un site capable de représenter ton
                entreprise aujourd&apos;hui, tout en accompagnant son
                développement dans les années à venir.
              </p>
            </div>
          </div>
          <Image
            src="/images/creation-site-web-sur-mesure-nice.png"
            alt="Jodie Lapaillerie — création de site web sur mesure, SEO Marseille"
            width={360}
            height={288}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 5. Je convaincs Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={5} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Je convaincs <GoogleColors />
          </span>{" "}
          <span className="font-medium">que tu es le meilleur sur Marseille.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Marseille, être bon dans son métier ne suffit pas toujours à
              être trouvé. Google doit comprendre ce que tu fais, à qui tu
              t&apos;adresses et pourquoi un prospect devrait te choisir.
            </p>
            <p className="mt-4">
              J&apos;analyse ton marché, tes concurrents et les recherches de
              tes futurs clients pour construire une stratégie capable
              d&apos;attirer des prospects qualifiés. Parce qu&apos;un site
              invisible ne vend rien. Un site compris par Google peut devenir
              un véritable apporteur d&apos;affaires.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-duo.png"
            alt="Jodie Lapaillerie et son assistante IA JWL Marketing"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Je me déplace + Marché digital + zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je me déplace partout en France</span>
          <br />
          <span className="font-medium">
            Rien ne remplace une discussion autour de ton activité sur
            Marseille.
          </span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-carte-france-marseille.png"
            alt="Zone d'intervention JWL Marketing — PACA sur place, France entière à distance"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Je me déplace partout en France. Rien ne remplace une
              discussion autour de ton activité. Marseille est une ville qui
              entreprend, innove et se développe. Mais même les meilleures
              entreprises ne peuvent être choisies si elles ne sont pas
              visibles.
            </p>
            <p className="mt-4">
              Avant un appel, une visite ou une demande de devis, de nombreux
              prospects effectuent une recherche sur Google. Si ton entreprise
              n&apos;apparaît pas au bon moment, ce sont souvent tes
              concurrents qui récupèrent ces opportunités.
            </p>
          </div>
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Mon approche est différente. Je ne commence jamais par les
              mots-clés. Je commence par comprendre ton activité, ton marché
              et les attentes de tes futurs clients. Le SEO n&apos;est pas
              une recette universelle. Une entreprise située à Marseille
              n&apos;a pas les mêmes enjeux qu&apos;une activité à Aubagne,
              Cassis ou La Ciotat. C&apos;est pour cette raison que chaque
              stratégie est construite sur mesure.
            </p>
            <p className="mt-4">
              En tant que consultante indépendante, je reste ton
              interlocutrice unique du début à la fin du projet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ZONES.map((z) => (
              <span
                key={z}
                className="rounded-full bg-[#1a1207] px-5 py-2 text-sm text-white"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de clôture */}
      <section className="bg-white px-6 py-16 text-center">
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Parce que tu mérites le meilleur
        </a>
      </section>

      {/* Toujours pas convaincu */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Toujours pas convaincu?</span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          Fais de ta présence digitale une force Marseillaise
        </p>
        <div className="mx-auto mt-8 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Marseille est une ville de commerce, d&apos;artisanat et
            d&apos;entrepreneuriat. Du Prado à Château-Gombert,
            d&apos;Euroméditerranée à La Valentine, les entreprises évoluent
            dans un environnement dynamique où la visibilité devient un
            véritable levier de développement.
          </p>
          <p className="mt-3">
            Entre les artisans du bâtiment, les restaurateurs, les
            professions libérales, les acteurs du tourisme, les entreprises
            du transport, de la logistique ou encore les sociétés installées
            autour du Grand Port Maritime, chaque activité fait face à une
            concurrence croissante sur Google.
          </p>
          <p className="mt-3">
            Aujourd&apos;hui, un futur client peut comparer plusieurs
            entreprises marseillaises en quelques minutes seulement. Être
            visible au bon moment peut faire toute la différence.
          </p>
        </div>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-block bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          En savoir plus
        </a>
      </section>

    </div>
  );
}
