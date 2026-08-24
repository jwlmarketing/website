import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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

export default function QuiSuisJe() {
  return (
    <div>
      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <span className="inline-block rounded-full bg-[#faf3ea] px-4 py-1.5 text-sm font-semibold text-gold">
            Aix-en-Provence
          </span>
          <h1 className="mt-4 font-heading text-[42px] font-medium italic leading-[1.2] text-black">
            Consultante SEO{" "}
            <span className="text-[#c9846f]">&amp; Visibilité Web</span>
          </h1>
          <p className="mt-4 text-base leading-[1.6] text-[#333]">
            Une stratégie freelance, portée par la qualité d&apos;une agence à
            taille humaine. À Aix-en-Provence, Paul Cézanne a marqué
            l&apos;histoire. Et si ton entreprise marquait à son tour Google ?
          </p>
          <p className="mt-4 font-heading text-xl italic text-black">
            Bonjour, je m&apos;appelle Jodie.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <span className="text-sm font-semibold text-[#555]">
              + de 20 projets depuis 2025
            </span>
          </div>
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="mt-6 inline-block rounded-full border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            Parle moi de tes besoins SEO
          </Link>
        </div>
        <Image
          src="/images/hero-consultant-freelance-seo.webp"
          alt="Consultante SEO Aix-en-Provence — Jodie Lapaillerie"
          width={918}
          height={918}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="mx-auto grid items-center gap-8 md:grid-cols-[220px_1fr]">
          <Image
            src="/images/jodie-seo-aix-en-provence.webp"
            alt="Jodie Lapaillerie — consultante en marketing digital"
            width={555}
            height={1024}
            className="mx-auto h-auto w-full max-w-[220px] rounded-2xl object-cover"
          />
          <p className="font-heading text-2xl italic leading-snug text-black">
            Consultante en marketing digital, experte SEO et spécialiste des
            systèmes <span className="not-italic text-[#4285F4]">Google</span>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-[800px] px-6 py-10">
        <p className="text-[15px] leading-[25.5px] text-[#1a1a1a]">
          En tant que consultante SEO et développeuse commerciale
          indépendante, je pilote personnellement chaque mission afin de
          garantir un accompagnement réactif, cohérent et transparent.
        </p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold">
          Ma mission
        </p>
        <p className="mt-2 text-lg leading-relaxed text-black">
          Créer ou piloter des sites internet pensés pour générer du trafic,
          convertir les visiteurs en clients et accompagner le développement
          d&apos;une entreprise sur le long terme.
        </p>
        <div className="mt-5 space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
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
            dentistes, avocats et bien d&apos;autres.
          </p>
          <p>
            Et parce qu&apos;être visible ne suffit pas, je te propose de
            découvrir ma passion tout le long de cette page.
          </p>
        </div>
      </section>

      {/* Ambition */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <Image
          src="/images/consultant-referencement-jodie.webp"
          alt="Jodie Lapaillerie — SEO Summit Paris 2026"
          width={800}
          height={1000}
          className="mx-auto h-auto w-full max-w-[380px] rounded-2xl object-cover"
        />
        <p className="mt-2 text-xs italic text-[#999]">
          Jodie Lapaillerie / SEO Summit Paris 2026
        </p>
        <h2 className="mt-8 font-heading text-4xl italic leading-tight text-black">
          Je suis ambitieuse
          <br />
          <span className="text-[#c9846f]">Et je vise la 1ère place</span> sur
          Google.
        </h2>
        <p className="mt-4 text-[#555]">
          dans ton projet et mes clients en parlent.
        </p>
      </section>

      {/* Marché local */}
      <section className="mx-auto max-w-[800px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl italic text-black">
          <span className="text-[#c9846f]">Je m&apos;investis</span> sur
          Aix-en-Provence.
          <br />
          Je connais ton marché
        </h2>
        <div className="mt-6 space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            En tant que consultante SEO et développeuse commerciale
            indépendante, je pilote personnellement chaque mission afin de
            garantir un accompagnement réactif, cohérent et transparent.
          </p>
          <p>
            Ville d&apos;art, de droit et d&apos;université au cœur de la
            Provence, Aix-en-Provence séduit les visiteurs chaque année sans
            jamais perdre son authenticité. À Aix-en-Provence, il fait bon
            vivre. Nous vivons au rythme des cigales, des marchés colorés et
            des parfums de lavande. La culture s&apos;y mêle aux spectacles, à
            la danse musicale, inspirant chaque jour restaurateurs,
            commerçants et artisans.
          </p>
          <p>
            Mais dans une ville aussi dynamique qu&apos;exigeante, cette
            richesse appartient au monde réel. Sur Google, les règles sont
            différentes. Le digital n&apos;a ni parfum, ni saveur, ni vitrine
            pour attirer les passants. Aujourd&apos;hui, savoir parler le
            langage de Google est devenu indispensable pour 100% des sites
            entrants. Plus de 85% des consommateurs effectuent une recherche
            en ligne avant de pousser la porte d&apos;un commerçant.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-[#141414] p-8 text-center text-white">
          <p className="font-heading text-2xl italic text-gold">
            Le SEO à Aix-en-Provence, c&apos;est un terrain de jeu à fort
            potentiel
          </p>
          <p className="mt-3 text-white/80">
            Fait le test, tape « seo aix-en-provence » : tu verras JWL
            Marketing entre la 1ère et la 2ème page.
          </p>
        </div>
      </section>

      {/* J'analyse ton marché */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/audit-seo-geo.webp"
            alt="Audit SEO à Aix-en-Provence"
            width={800}
            height={600}
            className="h-auto w-full rounded-2xl object-cover"
          />
          <div>
            <h3 className="font-heading text-3xl italic text-black">
              <span className="text-[#c9846f]">J&apos;analyse</span> ton
              marché
            </h3>
            <p className="mt-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
              En tant que consultante SEO et développeuse commerciale
              indépendante, je pilote personnellement chaque mission afin de
              garantir un accompagnement réactif, cohérent et transparent.
              J&apos;étudie les recherches Google des internautes sur
              Aix-en-Provence, avant de créer ton site.
            </p>
            <Link
              href="/audit-seo-aix-en-provence"
              className="mt-4 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Voir les audits
            </Link>
          </div>
        </div>
      </section>

      {/* J'optimise ta fiche Google */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-3xl italic text-black">
              <span className="text-[#c9846f]">J&apos;optimise</span> ta
              fiche Google Profile.
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
          <Image
            src="/images/consultant-seo-paca.png"
            alt="Optimisation fiche Google Business Profile"
            width={800}
            height={600}
            className="order-1 h-auto w-full rounded-2xl object-cover md:order-2"
          />
        </div>
      </section>

      {/* Je crée un site web */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/site-web-referencement-seo.png"
            alt="Création de site internet à Aix-en-Provence"
            width={800}
            height={600}
            className="h-auto w-full rounded-2xl object-cover"
          />
          <div>
            <h3 className="font-heading text-3xl italic text-black">
              <span className="text-[#c9846f]">Je crée</span> un site web sur
              mesure pour toi.
            </h3>
            <p className="mt-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
              Chaque projet est développé selon tes besoins réels, sans modèle
              générique ni solution toute faite. Selon le contenu, les
              fonctionnalités et la densité du site, le développement peut
              être réalisé en HTML ou avec des technologies plus avancées
              comme Next.js afin d&apos;offrir les meilleures performances
              possibles. À la livraison, tu reçois une certification PDF
              détaillant les optimisations techniques réalisées ainsi que les
              bonnes pratiques mises en place.
            </p>
            <Link
              href="/site-internet-aix-en-provence"
              className="mt-4 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Découvrir l&apos;accompagnement
            </Link>
          </div>
        </div>
      </section>

      {/* Je convaincs Google */}
      <section className="mx-auto max-w-[700px] px-6 py-10 text-center">
        <Image
          src="/images/jodie-marketing-digital-seo.png"
          alt="Jodie Lapaillerie — IA 2026"
          width={800}
          height={1000}
          className="mx-auto h-auto w-full max-w-[380px] rounded-2xl object-cover"
        />
        <p className="mt-2 text-xs italic text-[#999]">
          Jodie Lapaillerie / IA 2026
        </p>
        <h3 className="mt-6 font-heading text-3xl italic text-black">
          <span className="text-[#c9846f]">Je convaincs Google</span> que tu
          es le meilleur sur Aix-en-Provence.
        </h3>
      </section>

      {/* Je me déplace */}
      <section className="mx-auto max-w-[800px] px-6 py-10 text-center">
        <h3 className="font-heading text-3xl italic text-black">
          Je me déplace <span className="text-[#c9846f]">partout en France</span>
        </h3>
        <p className="mt-4 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          Parce qu&apos;aucune entreprise ne ressemble à une autre,
          j&apos;aime découvrir ton activité sur le terrain. Du centre
          historique d&apos;Aix-en-Provence à Puyricard, des Milles à La
          Duranne, en passant par le Jas-de-Bouffan, le Val Saint-André, le
          Pont de l&apos;Arc, Corsy, Célony ou Beauregard, je me déplace pour
          comprendre ton environnement, tes clients et tes objectifs. Et si la
          distance nous sépare, la visio prend simplement le relais.
        </p>
        <p className="mt-4 font-semibold text-gold">
          Et à Aix-en-Provence, je viens te voir sans frais de déplacement.
        </p>
      </section>

      {/* Marché digital + zones */}
      <section className="mx-auto max-w-[800px] px-6 py-10">
        <div className="space-y-5 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
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
          <p>
            Mon approche est différente. Je commence par comprendre ton
            activité, tes marges, tes clients idéaux. On construit ensemble
            une stratégie qui cible les mots-clés à forte intention, ceux qui
            attirent des prospects prêts à acheter. Freelance, je suis ton
            interlocutrice unique. Décisions rapides, exécution rigoureuse,
            zéro turnover sur ton dossier.
          </p>
        </div>

        <Image
          src="/images/carte-zone-intervention-paca.png"
          alt="Zone d'intervention JWL Marketing — PACA et toute la France"
          width={2000}
          height={1414}
          className="mx-auto mt-8 h-auto w-full max-w-[600px]"
        />
        <div className="mx-auto mt-6 flex max-w-[700px] flex-wrap justify-center gap-3">
          {ZONES.map((z) => (
            <span
              key={z}
              className="rounded-full border border-gold/40 px-4 py-1.5 text-sm text-[#555]"
            >
              {z}
            </span>
          ))}
        </div>
      </section>

      {/* CTA de clôture */}
      <section className="bg-[#141414] px-6 py-16 text-center text-white">
        <h2 className="font-heading text-3xl italic">
          Parce que tu <span className="text-gold">mérites le meilleur</span>
        </h2>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-block rounded-full border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Réserver un appel
        </a>

        <p className="mt-12 text-xl font-semibold">Toujours pas convaincu ?</p>
        <p className="mt-2 text-white/70">
          Je m&apos;engage aussi auprès de partenaires dynamiques sur
          Aix-en-Provence
        </p>
        <a
          href="https://plugins.jwl-marketing.fr/"
          className="mt-4 inline-block font-medium text-gold underline"
        >
          En savoir plus
        </a>
      </section>
    </div>
  );
}
