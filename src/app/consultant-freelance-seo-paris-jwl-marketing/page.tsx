import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Paris | JWL Marketing",
  description:
    "Consultante Freelance SEO à Paris. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
};

const ZONES = [
  "Paris",
  "Boulogne-Billancourt",
  "Levallois-Perret",
  "Neuilly-sur-Seine",
  "Vincennes",
  "Saint-Mandé",
  "Montrouge",
  "Issy-les-Moulineaux",
  "Saint-Denis",
  "Créteil",
  "Nanterre",
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
            alt="JWL Marketing Paris"
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
            <span className="italic text-[#c9846f]">Paris</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. Votre réussite commence sous les lumières de
            Paris.
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
          src="/images/consultant-seo-paris-tour-eiffel.jpg"
          alt="Jodie Lapaillerie — Consultante SEO Paris, devant la Tour Eiffel"
          width={1086}
          height={1448}
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
              Ta meilleure consultant SEO, experte en <span className="text-[#c9846f]">stratégie digitale, et développement commercial</span>
            </h2>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Parle moi de tes besoins SEO sur Paris
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
              Paris concentre des milliers d&apos;entreprises, de commerces,
              de professions libérales et de sociétés de services. Dans un
              environnement aussi concurrentiel, être compétent ne suffit
              plus toujours à être choisi.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              J&apos;aide les entrepreneurs, indépendants et dirigeants à
              construire une présence digitale capable d&apos;attirer des
              prospects qualifiés et de soutenir leur développement
              commercial sur le long terme.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Forte de plus de 10 ans d&apos;expérience dans la vente et le
              développement commercial, dont 4 années au sein du groupe
              américain IAC, j&apos;associe aujourd&apos;hui stratégie
              commerciale, référencement naturel et visibilité digitale.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Site internet, SEO local, contenus, Google Business Profile,
              stratégie d&apos;acquisition ou optimisation de l&apos;expérience
              client : chaque action est pensée pour répondre à un objectif
              simple. Permettre à ton entreprise de gagner en visibilité
              auprès des personnes qui recherchent réellement tes services à
              Paris.
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
            Et je vise la 1ère place sur Paris.
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

      {/* Je m'investis */}
      <section className="mx-auto max-w-[800px] px-6 py-6 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je m&apos;investis</span>{" "}
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
          <span className="font-medium">Parisien</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Paris offre un potentiel immense. La concurrence aussi. Dans la
              plupart des secteurs, tes futurs clients ont l&apos;embarras du
              choix.
            </p>
            <p>
              Avant de contacter une entreprise, ils effectuent souvent
              plusieurs recherches sur Google. Mon rôle consiste à faire en
              sorte que ton entreprise fasse partie des solutions
              qu&apos;ils découvrent au bon moment.
            </p>
          </div>
        </div>
      </section>

      {/* 1. J'optimise ton marché avant de bâtir ton site web */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">J&apos;optimise ton marché</span>{" "}
          <span className="font-medium">avant de bâtir ton site web.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Paris offre un potentiel immense. La concurrence aussi.
              Aujourd&apos;hui, dans la plupart des secteurs, tes futurs
              clients ont l&apos;embarras du choix.
            </p>
            <p className="mt-4">
              Avant de prendre une décision, ils effectuent souvent plusieurs
              recherches sur Google afin de comparer les entreprises et les
              solutions disponibles. Dans ce contexte, mon rôle consiste à
              faire en sorte que ton entreprise fasse partie des solutions
              qu&apos;ils découvrent au bon moment. L&apos;objectif est
              simple : être présent lorsqu&apos;un prospect est prêt à passer
              à l&apos;action.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-terrasse.png"
            alt="Jodie Lapaillerie — analyse de marché SEO Paris"
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
            alt="Outil de planification des mots-clés Google, sur Paris"
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
              Car certaines recherches traduisent une simple curiosité. À
              l&apos;inverse, d&apos;autres révèlent une intention
              d&apos;achat ou de prise de contact. C&apos;est précisément
              pour cette raison que j&apos;identifie les opportunités les
              plus pertinentes pour ton activité afin de construire une
              stratégie SEO capable d&apos;attirer des prospects qualifiés.
            </p>
            <p className="mt-4">
              À Paris, attirer du trafic est relativement simple. En
              revanche, attirer les bons clients est une autre histoire. Au
              fond, le but n&apos;est pas d&apos;être visible partout. Le
              véritable enjeu est d&apos;apparaître lorsque tes futurs
              clients recherchent activement une solution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Je maximilise ta fiche Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">Je maximilise</span>{" "}
              <span className="font-medium">ta fiche Google profile.</span>
            </h3>
            <div className="mt-4 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                À Paris, la concurrence est souvent à quelques clics. Avant
                de prendre une décision, les internautes consultent plusieurs
                profils, comparent les avis et évaluent les informations
                disponibles. Dans ce contexte, ta fiche Google Business
                Profile représente souvent le premier contact avec ton futur
                client.
              </p>
              <p className="mt-4">
                C&apos;est pourquoi j&apos;optimise les éléments qui
                influencent réellement la décision : catégories, services,
                photos, avis clients, informations pratiques et cohérence de
                la présence sur Google. L&apos;objectif n&apos;est pas
                seulement d&apos;apparaître sur Google. L&apos;objectif est
                également de rassurer sur ta crédibilité et de leur donner
                envie de te choisir plutôt qu&apos;une autre entreprise.
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

      {/* 4. Je dessine un site web sur mesure */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={4} />
        <div className="mx-auto mt-4 max-w-[600px] text-center">
          <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
            <span className="italic text-[#c9846f]">Je dessine</span>{" "}
            <span className="font-medium">un site web sur mesure pour toi.</span>
          </h3>
          <div className="mt-4 h-full border-2 border-gold p-8 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Ton site internet est souvent la première impression que se
              fait ton futur client de ton entreprise. C&apos;est pourquoi je
              ne me contente pas de créer un site esthétique. Je conçois un
              outil pensé pour rassurer, informer et faciliter la prise de
              contact.
            </p>
            <p className="mt-4">
              Chaque projet est ainsi adapté à ton activité, à tes objectifs
              et aux attentes de tes futurs clients. Selon les besoins, le
              développement peut être réalisé en HTML ou avec des
              technologies modernes comme Next.js afin de garantir rapidité,
              sécurité et confort de navigation.
            </p>
            <p className="mt-4">
              Au-delà de l&apos;aspect technique, l&apos;objectif reste le
              même : créer un site capable de représenter ton entreprise
              aujourd&apos;hui tout en accompagnant son développement dans
              les années à venir. Car à Paris, un site internet ne doit pas
              seulement être beau. Il doit aussi t&apos;aider à te démarquer
              dans un environnement particulièrement concurrentiel.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Je convaincs Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={5} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Je convaincs <GoogleColors />
          </span>{" "}
          <span className="font-medium">que tu es le meilleur sur Paris.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Paris, être excellent dans son métier ne garantit pas
              d&apos;être trouvé. En effet, Google doit comprendre ce que tu
              fais, à qui tu t&apos;adresses et pourquoi un prospect devrait
              te choisir plutôt qu&apos;une autre entreprise.
            </p>
            <p className="mt-4">
              C&apos;est pourquoi j&apos;analyse ton marché, tes concurrents
              et les recherches effectuées par tes futurs clients afin de
              construire une stratégie capable d&apos;attirer des prospects
              qualifiés. Dans un environnement aussi concurrentiel, il ne
              suffit pas d&apos;être présent en ligne. Il faut également être
              compris par Google. Car un site invisible ne vend rien. À
              l&apos;inverse, un site bien positionné peut devenir un
              véritable apporteur d&apos;affaires.
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
          <span className="italic text-[#c9b896]">Je me déplace partout en France</span>
          <br />
          <span className="font-medium">Y compris sur Paris.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Aujourd&apos;hui, avant un appel, une visite ou une demande de
              devis, de nombreux prospects effectuent plusieurs recherches
              sur Google afin de comparer les solutions disponibles.
            </p>
            <p className="mt-4">
              Dans ce contexte, être visible au bon moment devient un
              véritable avantage concurrentiel. Car, si ton entreprise ne
              répond pas à cette demande, ce sont souvent les acteurs du
              marché qui captent son attention et ses opportunités.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-carte-france.png"
            alt="Zone d'intervention JWL Marketing — Paris sur place, France entière à distance"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Avant tout, je cherche à comprendre ton activité, ton marché et
              les attentes de tes futurs clients. Car le SEO n&apos;est pas
              une recette universelle. Une entreprise implantée à Paris
              n&apos;a pas les mêmes enjeux qu&apos;une entreprise située à
              Boulogne-Billancourt, Saint-Denis, Vincennes ou
              Levallois-Perret. C&apos;est pourquoi chaque stratégie est
              construite sur mesure, en fonction de tes objectifs et de ton
              environnement concurrentiel.
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
          Fait de ta présence digital une force Parisienne
        </p>
        <div className="mx-auto mt-8 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Du quartier de La Défense au Marais, de Saint-Lazare à Bercy, les
            entreprises évoluent dans un environnement particulièrement
            concurrentiel où la visibilité en ligne devient un véritable
            levier de développement.
          </p>
          <p className="mt-3">
            Entre les commerçants, les professions libérales, les startups,
            les cabinets de conseil, les entreprises de services, les acteurs
            de l&apos;immobilier ou encore les sociétés implantées dans les
            principaux quartiers d&apos;affaires, chaque acteur doit trouver
            sa place face à une concurrence importante sur Google.
          </p>
          <p className="mt-3">
            Les habitudes des consommateurs ont également évolué. Avant de
            prendre rendez-vous, de demander un devis ou de contacter une
            entreprise, les Parisiens prennent le temps de comparer plusieurs
            solutions, de consulter les avis clients et de rechercher des
            informations sur l&apos;activité.
          </p>
          <p className="mt-3">
            Aujourd&apos;hui, un futur client peut comparer plusieurs
            entreprises parisiennes en quelques minutes seulement. Dans ce
            contexte, être visible au bon moment peut faire toute la
            différence entre une opportunité gagnée et un prospect qui
            choisit un concurrent.
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
