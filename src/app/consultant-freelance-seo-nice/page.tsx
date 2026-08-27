import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "Consultante Freelance SEO Nice | JWL Marketing",
  description:
    "Consultante Freelance SEO à Nice. Je transforme ta visibilité Google en acquisition client. 10 ans de commerce B2B. Audit gratuit.",
};

const ZONES = [
  "Nice",
  "La Trinité",
  "Saint-Laurent-du-Var",
  "Cagnes-sur-Mer",
  "Villefranche-sur-Mer",
  "Antibes",
  "Cannes",
  "Beaulieu-sur-Mer",
  "Saint-Jean-Cap-Ferrat",
  "Carros",
  "Saint-André-de-la-Roche",
  "Vence",
  "Vallauris",
  "Mandelieu-la-Napoule",
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
            alt="JWL Marketing Nice"
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
            <span className="italic text-[#c9846f]">Nice</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. À Nice, chaque bonne pissaladière a sa recette.
            Chaque bonne stratégie SEO a la sienne.
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
          src="/images/consultante-seo-visibilite-web-nice.jpg"
          alt="Jodie Lapaillerie — Consultante SEO Nice, sur la Promenade des Anglais devant le Négresco"
          width={494}
          height={580}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/expert-seo-nice.jpg"
            alt="Jodie Lapaillerie — consultante en marketing digital"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl object-cover"
          />
          <div className="text-center">
            <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="text-[#c9846f]">Ta consultante SEO préférée,</span> experte en stratégie digitale et développement commercial
            </h2>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Parle moi de tes besoins SEO sur Nice
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
              aider les entreprises de Nice à attirer plus de clients grâce à
              Google. Entre le Vieux-Nice, la Promenade des Anglais,
              l&apos;aéroport international et les nombreux quartiers
              d&apos;affaires, Nice attire chaque année des milliers de
              consommateurs, touristes et professionnels.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Encore faut-il qu&apos;ils trouvent ton entreprise. Grâce à mon
              expertise en développement commercial et en référencement
              naturel, je t&apos;aide à construire une visibilité durable sur
              Google et à transformer cette visibilité en demandes de contact.
              Mon objectif n&apos;est pas simplement de te faire apparaître sur
              Google. Mon objectif est de t&apos;aider à être choisi.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/consultant-referencement-naturel-nice.jpg"
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
            Et je vise la 1ère place sur Nice.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/seo-nice.jpg"
            alt="Fiche Google Business Profile JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/strategie-seo-nice.jpg"
            alt="Évolution des impressions et clics — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/geo-nice.jpg"
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
          <span className="font-medium">Niçois.</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Nice est une ville où l&apos;activité économique ne repose pas sur
              un seul secteur. Commerce, santé, immobilier, tourisme, services
              aux entreprises ou artisanat : la concurrence est présente dans
              presque tous les domaines.
            </p>
            <p>
              Dans cet environnement, la visibilité ne se joue plus uniquement
              sur le terrain. Une grande partie du parcours client commence
              désormais sur Google. Si ton entreprise n&apos;apparaît pas
              lorsqu&apos;un prospect recherche une solution, il risque
              simplement de trouver l&apos;un de tes concurrents avant toi.
            </p>
          </div>
        </div>
      </section>

      {/* 1. J'assimile les recherches Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            J&apos;assimile les recherches <GoogleColors />
          </span>{" "}
          <span className="font-medium">des internautes.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Avant de travailler le référencement d&apos;une entreprise à
              Nice, j&apos;analyse les recherches effectuées par les
              internautes.
            </p>
            <p className="mt-4">
              Quels mots utilisent-ils ? Quelles questions se posent-ils ?
              Cherchent-ils une information, un devis ou une solution
              immédiate ?
            </p>
            <p className="mt-4">
              Ces données permettent de construire une stratégie SEO basée sur
              la réalité du marché plutôt que sur des suppositions. Parce
              qu&apos;un site visible sur de mauvaises recherches
              n&apos;apportera jamais les bons clients.
            </p>
            <Link
              href="/audit-seo-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Voir les audits
            </Link>
          </div>
          <Image
            src="/images/consultant-seo-cote-azur.jpg"
            alt="Outil de planification des mots-clés Google, sur Nice"
            width={2000}
            height={1414}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 2. J'analyse ton marché */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">J&apos;analyse ton marché</span>{" "}
          <span className="font-medium">avant de bâtir ton site web.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/consultant-seo-local-nice.jpg"
            alt="Jodie Lapaillerie en terrasse — analyse de marché SEO Nice"
            width={880}
            height={632}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Un emplacement en or sur la Promenade des Anglais, ce n&apos;est
              plus une garantie de clients. Aujourd&apos;hui, 83% des Français
              se renseignent sur Google avant d&apos;acheter, même pour une
              simple sortie au restaurant. Rien que le mot-clé « restaurant
              Nice » génère 50 000 recherches Google par mois et « hôtel Nice »
              tout autant.
            </p>
            <p className="mt-4">
              Cette activité touristique profite d&apos;abord à ceux qui sont
              visibles en ligne. L&apos;été, la concurrence est rude entre
              commerces, restaurants et hôtels niçois. Le reste de
              l&apos;année, ce sont les recherches locales des habitants qui
              font la différence entre un commerce qui vit toute
              l&apos;année et un commerce qui ne vit que l&apos;été.
            </p>
          </div>
        </div>
      </section>

      {/* 3. J'améliore ta fiche Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">J&apos;améliore</span>{" "}
              <span className="font-medium">ta fiche Google profile.</span>
            </h3>
            <div className="mt-4 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                Dans une ville aussi dynamique que Nice, tes futurs clients
                comparent souvent plusieurs entreprises avant de prendre une
                décision. Ta fiche Google joue alors un rôle essentiel dans
                cette première impression.
              </p>
              <p className="mt-4">
                J&apos;optimise chaque élément important : catégories,
                services, photos, avis, informations pratiques et cohérence
                des données. Le but n&apos;est pas seulement d&apos;apparaître
                dans les résultats locaux. Le but est de donner envie de te
                contacter plutôt qu&apos;un concurrent.
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

      {/* 4. Je bâtis un site web */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={4} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">Je bâtis</span>{" "}
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
            alt="Jodie Lapaillerie — création de site web sur mesure, SEO Nice"
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
          <span className="font-medium">que tu es le meilleur sur Nice.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/specialiste-seo-nice.jpg"
            alt="Jodie Lapaillerie et son assistante IA JWL Marketing"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Avant de parler SEO, j&apos;aime comprendre l&apos;histoire de
              ton entreprise. Chaque activité possède ses particularités, ses
              clients et ses défis. C&apos;est pourquoi je privilégie les
              échanges sur le terrain lorsque cela est possible, afin de
              découvrir ton environnement de travail et la réalité de ton
              marché.
            </p>
            <p className="mt-4">
              À Nice comme ailleurs, les meilleures stratégies commencent
              souvent par une simple discussion. Et lorsque la distance ne le
              permet pas, la visio fait parfaitement l&apos;affaire.
            </p>
          </div>
        </div>
      </section>

      {/* Je me déplace + Marché digital + zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9b896]">Je me déplace partout en France</span>
          <br />
          <span className="font-medium">
            Selon ton projet à Nice, je peux venir directement à ta rencontre.
          </span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              À Nice, être bon dans son métier ne suffit plus toujours à se
              démarquer. Entre les commerces, les professions libérales, les
              entreprises de services et les acteurs du tourisme, la
              concurrence est forte.
            </p>
            <p className="mt-4">
              Et avant de pousser la porte d&apos;une entreprise, beaucoup de
              consommateurs commencent désormais par une recherche Google.
              Être visible au bon moment peut faire toute la différence entre
              une opportunité gagnée et un client perdu au profit d&apos;un
              concurrent.
            </p>
          </div>
          <Image
            src="/images/qui-suis-je-carte-france-nice.png"
            alt="Zone d'intervention JWL Marketing — PACA sur place, France entière à distance"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Mon approche est différente. Avant de parler SEO, je cherche à
              comprendre ton activité, tes objectifs, tes clients idéaux et
              les opportunités de développement de ton entreprise. Ensemble,
              nous construisons une stratégie capable d&apos;attirer les
              bonnes personnes au bon moment, grâce à des recherches réellement
              effectuées par tes futurs clients.
            </p>
            <p className="mt-4">
              En tant que consultante indépendante, je reste ton
              interlocutrice unique du début à la fin du projet. Des échanges
              simples, des décisions rapides et un accompagnement personnalisé.
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
          Fait de ta présence digital une force Niçoise
        </p>
        <div className="mx-auto mt-8 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Nice bénéficie d&apos;une économie portée par le tourisme,
            l&apos;immobilier, le commerce, les services et la proximité de
            Sophia Antipolis. Entre le centre-ville, Nice Ouest,
            l&apos;Arénas, Saint-Isidore, Cimiez ou le Port, les entreprises
            doivent se démarquer dans un marché particulièrement concurrentiel.
          </p>
          <p className="mt-3">
            Restaurants, commerces de proximité, agences immobilières,
            professions libérales, artisans ou entreprises de services : la
            majorité des parcours clients commencent aujourd&apos;hui par une
            recherche Google. Être visible ne suffit plus. Il faut être
            trouvé avant les autres.
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
