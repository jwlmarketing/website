import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Consultant Freelance SEO Aix-en-Provence | JWL Marketing",
  description:
    "Consultant SEO à Aix-en-Provence. 10 ans d'expertise commerciale et des méthodes américaines pour propulser ton acquisition client.",
};

const ZONES = [
  "Aix-en-Provence",
  "Les Milles",
  "La Duranne",
  "Luynes",
  "Eguilles",
  "Venelles",
  "Calas",
  "Plan de campagne",
  "Bouc-Bel-Air",
  "Meyreuil",
  "Le Tholonet",
  "Vitrolles",
];

const HOME_REVIEW_NAMES = [
  "Proxiclic-Provence",
  "Emmanuelle Clouet",
  "Angelique Fustier",
  "jean-michel pagano",
];
const HOME_REVIEWS = HOME_REVIEW_NAMES.map((name) =>
  REVIEWS.find((r) => r.name === name)
).filter((r): r is (typeof REVIEWS)[number] => Boolean(r));

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

export default function QuiSuisJe() {
  return (
    <div>
      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="font-heading text-4xl leading-[1.05] lg:text-[54px] lg:leading-[0.95] text-black">
            <span className="font-medium">
              Consultante SEO
              <br />
              &amp; Visibilité Web
            </span>
            <br />
            <span className="italic text-[#c9846f]">Aix-en-Provence</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. À Aix-en-Provence, Paul Cézanne a marqué
            l&apos;histoire. Et si ton entreprise marquait à son tour Google ?
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
            <p className="font-heading text-2xl italic text-[#c9846f]">
              Bonjour, je m&apos;appelle Jodie.
            </p>
          </div>
        </div>
        <Image
          src="/images/qui-suis-je-hero.png"
          alt="Jodie Lapaillerie — Consultante SEO Aix-en-Provence"
          width={1244}
          height={1387}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="mx-auto grid items-center gap-8 md:grid-cols-[220px_1fr]">
          <Image
            src="/images/qui-suis-je-portrait.png"
            alt="Jodie Lapaillerie — consultante en marketing digital"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[220px] rounded-2xl object-cover"
          />
          <div className="text-center">
            <p className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              Consultante en{" "}
              <span className="text-[#c9846f]">marketing digital, experte SEO</span>{" "}
              et spécialiste des systèmes
            </p>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Parle moi de tes besoins SEO
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
              Créer ou piloter des sites internet pensés pour générer du
              trafic, convertir les visiteurs en clients et accompagner le
              développement d&apos;une entreprise sur le long terme.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
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
              dentistes, avocats et bien d&apos;autres. Et parce qu&apos;être
              visible ne suffit pas, je te propose de découvrir ma passion tout
              le long de cette page.
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
              Jodie-LAPAILLERIE / SEO summit paris 2026
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
            Et je vise la 1ère place sur <GoogleColors />.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/qui-suis-je-gmb.png"
            alt="Fiche Google Business Profile JWL Marketing"
            width={2000}
            height={1414}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/qui-suis-je-search-console.png"
            alt="Évolution des impressions et clics — Google Search Console"
            width={2000}
            height={1414}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/qui-suis-je-serp.png"
            alt="Résultat Google pour seo aix-en-provence — JWL Marketing"
            width={2000}
            height={1414}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
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
          {HOME_REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Marché local */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Je connais ton marché</span>{" "}
          <span className="font-medium">sur Aix-en-Provence.</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="rounded-2xl border-2 border-black bg-white p-8">
              <div className="flex items-center gap-2 text-2xl">
                <GoogleColors />
              </div>
              <div className="mt-8 flex items-center justify-between gap-3 rounded-full border border-[#dfe1e5] px-5 py-3">
                <span className="text-sm text-[#1a1a1a]">
                  Tape « seo aix en provence » et tu verras ma place
                </span>
                <span className="text-lg text-[#4285F4]">🔍</span>
              </div>
            </div>
            <p className="mx-auto mt-4 max-w-[420px] text-center text-[15px] leading-[25.5px] text-[#1a1a1a]">
              Le SEO à Aix-en-Provence, c&apos;est un terrain de jeu à fort
              potentiel.
            </p>
          </div>
          <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Ville d&apos;art, de droit et d&apos;université au cœur de la
              Provence, Aix-en-Provence séduit les visiteurs chaque année sans
              jamais perdre son authenticité. À Aix-en-Provence, il fait bon
              vivre. Nous vivons au rythme des cigales, des marchés colorés et
              des parfums de lavande. La culture s&apos;y mêle aux spectacles,
              à la danse musicale, inspirant chaque jour restaurateurs,
              commerçants et artisans.
            </p>
            <p>
              Mais dans une ville aussi dynamique qu&apos;exigeante, cette
              richesse appartient au monde réel. Sur Google, les règles sont
              différentes. Le digital n&apos;a ni parfum, ni saveur, ni
              vitrine pour attirer les passants. Aujourd&apos;hui, savoir
              parler le langage de Google est devenu indispensable pour 100%
              des sites entrants. Plus de 85% des consommateurs effectuent une
              recherche en ligne avant de pousser la porte d&apos;un
              commerçant.
            </p>
          </div>
        </div>
      </section>

      {/* 1. J'analyse ton marché */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">J&apos;analyse ton marché</span>{" "}
          <span className="font-medium">
            sur Aix-en-provence, avant de créer ton site.
          </span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Une vision entrepreneuriale de demain. Vous avez peut-être déjà
              vécu cette situation :
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
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
            <p className="mt-4">
              Le problème n&apos;est pas toujours votre visibilité. Souvent,
              c&apos;est l&apos;absence de stratégie. Pour moi, le
              référencement naturel n&apos;a qu&apos;un seul objectif :
              développer votre activité et générer des opportunités
              commerciales. Avant de travailler les mots-clés, j&apos;analyse
              votre marché, vos concurrents, votre offre et les recherches
              effectuées par vos futurs clients à Aix-en-Provence.
              L&apos;objectif est d&apos;identifier les opportunités qui
              peuvent réellement avoir un impact sur votre chiffre
              d&apos;affaires.
            </p>
            <Link
              href="/audit-seo-aix-en-provence"
              className="mt-4 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Voir les audits
            </Link>
          </div>
          <Image
            src="/images/qui-suis-je-terrasse.png"
            alt="Jodie Lapaillerie en terrasse — analyse de marché SEO Aix-en-Provence"
            width={880}
            height={860}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 2. J'étudie les recherches Google */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            J&apos;étudie les recherches <GoogleColors />
          </span>{" "}
          <span className="font-medium">des internautes.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-keyword-tool.png"
            alt="Outil de planification des mots-clés Google, sur Aix-en-Provence"
            width={2000}
            height={1414}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <div className="border-2 border-gold p-6 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            <p>
              Faire appel à une consultante SEO à Aix-en-Provence, ce
              n&apos;est pas chercher à être premier sur Google à tout prix.
              C&apos;est bâtir une machine de guerre capable d&apos;attirer
              les bons prospects au bon moment. Forte de 10 ans
              d&apos;expérience commerciale, dont 4 ans chez IAC
              (Travaux.com), leader mondial incontesté de l&apos;acquisition
              de leads et de la capture de projets en ligne, je maîtrise les
              mécaniques exactes pour générer des demandes qualifiées. Mon but
              unique : transformer ton site internet en un véritable
              apporteur d&apos;affaires.
            </p>
            <p className="mt-4">
              À Aix-en-Provence, le marché ne fait pas de cadeaux et le
              référencement local demande une analyse chirurgicale. En
              combinant les stratégies de vente américaines les plus
              agressives à un SEO local affûté, nous ciblons uniquement les
              intentions de recherche et les requêtes les plus rentables pour
              ton activité.
            </p>
            <p className="mt-4">
              J&apos;optimise l&apos;intégralité de ton écosystème digital :
              ton site web, ton contenu sémantique et ta Fiche Google
              Business Profile pour déclencher un maximum d&apos;appels et de
              demandes de devis. J&apos;accompagne les indépendants, artisans
              et PME à Aix-en-Provence qui refusent de faire de la figuration
              et veulent faire de Google leur meilleur commercial en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* 3. J'optimise ta fiche Google */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <StepNumber n={3} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-gmb.png"
            alt="Optimisation fiche Google Business Profile JWL Marketing"
            width={2000}
            height={1414}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">J&apos;optimise</span>{" "}
              <span className="font-medium">ta fiche Google profile.</span>
            </h3>
            <p className="mt-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
              Ta fiche Google est souvent le premier contact avec un futur
              client. Je l&apos;optimise pour qu&apos;elle inspire confiance,
              remonte dans les recherches locales et génère davantage
              d&apos;appels, de visites et de demandes de devis. Je travaille
              chaque détail : informations, catégories, services, photos et
              mots-clés stratégiques. Tu bénéficies d&apos;une présence locale
              plus forte pour attirer des prospects qualifiés au moment où ils
              recherchent tes prestations.
            </p>
            <Link
              href="/google-my-business-aix-en-provence"
              className="mt-4 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Améliorer ma visibilité locale
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Je crée un site web */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <StepNumber n={4} />
        <div className="mx-auto mt-4 max-w-[600px] text-center">
          <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
            <span className="italic text-[#c9846f]">Je crée</span>{" "}
            <span className="font-medium">un site web sur mesure pour toi.</span>
          </h3>
          <p className="mt-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
            Chaque projet est développé selon tes besoins réels, sans modèle
            générique ni solution toute faite. Selon le contenu, les
            fonctionnalités et la densité du site, le développement peut être
            réalisé en HTML ou avec des technologies plus avancées comme
            Next.js afin d&apos;offrir les meilleures performances possibles.
            À la livraison, tu reçois une certification PDF détaillant les
            optimisations techniques réalisées ainsi que les bonnes pratiques
            mises en place. L&apos;objectif est de te fournir un site rapide,
            sécurisé, évolutif et pensé dès le départ pour la visibilité sur
            Google.
          </p>
          <Link
            href="/site-internet-aix-en-provence"
            className="mt-4 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Découvrir l&apos;accompagnement
          </Link>
        </div>
      </section>

      {/* 5. Je convaincs Google */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <StepNumber n={5} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Je convaincs <GoogleColors />
          </span>{" "}
          <span className="font-medium">
            que tu es le meilleur sur Aix-en-Provence.
          </span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <p className="text-[15px] leading-[25.5px] text-[#1a1a1a]">
            Parce qu&apos;aucune entreprise ne ressemble à une autre,
            j&apos;aime découvrir ton activité sur le terrain. Du centre
            historique d&apos;Aix-en-Provence à Puyricard, des Milles à La
            Duranne, en passant par le Jas-de-Bouffan, le Val Saint-André, le
            Pont de l&apos;Arc, Corsy, Célony ou Beauregard, je me déplace
            pour comprendre ton environnement, tes clients et tes objectifs.
            Et si la distance nous sépare, la visio prend simplement le
            relais.
          </p>
          <div className="text-center">
            <Image
              src="/images/qui-suis-je-duo.png"
              alt="Jodie Lapaillerie et son assistante IA JWL Marketing"
              width={1410}
              height={2000}
              className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-xs text-black">
              Jodie-LAPAILLERIE / IA 2026
            </p>
          </div>
        </div>
      </section>

      {/* Je me déplace + Marché digital + zones */}
      <section className="mx-auto max-w-[1000px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9b896]">Je me déplace</span>{" "}
          <span className="font-medium">partout en France</span>
          <br />
          <span className="font-medium">
            Et à Aix-en-Provence, je viens te voir sans frais de déplacement.
          </span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-carte-france.png"
            alt="Zone d'intervention JWL Marketing — PACA sur place, France entière à distance"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
          <p className="text-[15px] leading-[25.5px] text-[#1a1a1a]">
            À Aix-en-Provence, le marché digital s&apos;accélère. Les
            indépendants, les commerçants et les PME se multiplient… et la
            visibilité Google devient un vrai enjeu de survie. Pas seulement
            face aux concurrents locaux. Face aussi : aux agences qui
            proposent des prestations standardisées, aux freelances qui
            livrent un audit PDF sans suite, aux entreprises qui investissent
            enfin en SEO et prennent de l&apos;avance. Aix-en-Provence
            concentre un tissu économique dense et varié : savonneries
            traditionnelles, entreprises high-tech, calissons, restaurateurs,
            boulangeries artisanales, professions libérales... Autant de
            secteurs où Google est le premier point de contact.
          </p>
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <p className="text-[15px] leading-[25.5px] text-[#1a1a1a]">
            Mon approche est différente. Je commence par comprendre ton
            activité, tes marges, tes clients idéaux. On construit ensemble
            une stratégie qui cible les mots-clés à forte intention, ceux qui
            attirent des prospects prêts à acheter. Freelance, je suis ton
            interlocutrice unique. Décisions rapides, exécution rigoureuse,
            zéro turnover sur ton dossier.
          </p>
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
          Je m&apos;engage aussi auprès de partenaire dynamique sur
          Aix-en-Provence
        </p>

        <div className="mx-auto mt-8 grid max-w-[900px] items-center gap-8 text-left md:grid-cols-[1fr_280px]">
          <div className="rounded-2xl bg-[#141414] p-6 text-sm leading-relaxed text-white/90">
            <p>
              J&apos;aime m&apos;entourer d&apos;entrepreneurs qui partagent
              les mêmes valeurs : engagement, proximité et volonté
              d&apos;aider les autres à avancer. C&apos;est le cas de Nathan,
              fondateur de Dynamitz, qui accompagne les porteurs de projet
              dans la structuration de leur entreprise et la définition de
              leur positionnement.
            </p>
            <p className="mt-3">
              Nous intervenons sur des sujets complémentaires avec un objectif
              commun : aider les entrepreneurs à construire des bases solides
              avant de développer leur visibilité et leur acquisition client.
            </p>
            <p className="mt-3">
              Parce qu&apos;une stratégie performante commence toujours par
              des fondations solides.
            </p>
          </div>
          <a
            href="https://plugins.jwl-marketing.fr/"
            className="mx-auto inline-block"
          >
            <Image
              src="/images/logo-partenaire-dynamitz.png"
              alt="Dynamitz — automatisez votre projet"
              width={2000}
              height={1414}
              className="mx-auto h-auto w-full max-w-[280px]"
            />
          </a>
        </div>
        <a
          href="https://plugins.jwl-marketing.fr/"
          className="mt-6 inline-block font-medium text-[#c9846f] underline"
        >
          En savoir plus
        </a>
      </section>
    </div>
  );
}
