import Image from "next/image";
import Link from "next/link";
import HeroBadge from "@/components/HeroBadge";
import ProofCard, { type ProofCardData } from "@/components/ProofCard";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/data/homeFaq";

const PROOF_CARDS: ProofCardData[] = [
  {
    badge: "Assistance informatique",
    siteUrl: "https://www.proxiclic-provence.fr/",
    thumbUrl: "https://image.thum.io/get/width/800/https://www.proxiclic-provence.fr/",
    stat: "3 468",
    statLabel: "vues de la fiche Google en 6 mois",
    statSub: "63 appels en 6 mois.",
    name: ["Proxiclic Provence", "Informaticien à Digne-les-Bains (04)"],
    strategy: "Faible concurrence · Stratégie locale",
    strategyLevel: "low",
    gmbShot: {
      src: "/images/gbp-capture-proxiclic.png",
      alt: "Capture Google Business Profile — 63 appels générés depuis la fiche Proxiclic Provence entre février et juillet 2026",
      caption:
        "Voir la preuve : capture de la fiche Google Business de Proxiclic Provence, montrant les 63 appels générés entre février et juillet 2026 grâce à la stratégie locale mise en place.",
    },
    metrics: ["63 appels générés en 6 mois", "80+ avis Google depuis la stratégie locale"],
    detailSections: [
      {
        title: "Mission réalisée",
        items: [
          "Création du site web (landing page)",
          "Stratégie SEO-GEO du site",
          "Stratégie locale et régionale en cours de déploiement",
        ],
      },
      {
        title: "Abonnement en place",
        items: [
          "Stratégie SEO-GEO du site web",
          "Gestion de la fiche Google Business et des avis",
        ],
      },
    ],
  },
  {
    badge: "Gestion de patrimoine",
    siteUrl: "https://gestiondepatrimoine-aix-en-provence.fr/",
    thumbUrl:
      "https://image.thum.io/get/width/800/https://gestiondepatrimoine-aix-en-provence.fr/",
    stat: "1 350",
    statLabel: "vues de la fiche Google en 4 mois",
    statSub: "7 appels clients en 4 mois",
    name: ["Groupe INOVEA", "Gestion de patrimoine à Aix-en-Provence (13)"],
    strategy: "Concurrence moyenne · Stratégie locale",
    strategyLevel: "medium",
    metrics: [
      "1 350 vues de la fiche Google",
      "71 clics vers le site en 4 mois",
      "7 appels clients en 4 mois",
    ],
    detailSections: [
      {
        title: "Mission réalisée",
        items: [
          "Création d'un site vitrine sur-mesure, à l'image du groupe",
          "Rédaction SEO des contenus du site",
          "Stratégie SEO-GEO, budget d'entrée maîtrisé",
        ],
      },
      {
        title: "Abonnement en place",
        items: ["Aucun suivi mensuel actif à ce jour"],
      },
    ],
  },
  {
    badge: "Refonte stratégie de marque",
    siteUrl: "https://bout-de-poils.vercel.app/",
    thumbUrl: "https://image.thum.io/get/width/800/https://bout-de-poils.vercel.app/",
    stat: "En cours",
    statLabel: "Site récemment lancé, indicateurs pas encore assez complets",
    name: ["Bout de Poils", "anciennement Green Beam Craft", "Sèvres (91)"],
    strategy: "Concurrence moyenne · Stratégie nationale",
    strategyLevel: "medium",
    detailSections: [
      {
        title: "Mission réalisée",
        items: [
          "Refonte du positionnement de marque (ex-Green Beam Craft)",
          "Choix de la niche et de la cible",
          "Création du produit phare (porte-clés en poils d'animaux)",
          "Stratégie de contenu SEO national (5 pages piliers)",
          "Rédaction des fiches produits SEO, avec noms de produits différenciés pour couvrir plusieurs intentions de recherche",
          "Setup de la fiche Google Business Profile",
        ],
      },
      {
        title: "Abonnement en place",
        items: [
          "Gestion et rédaction SEO du blog",
          "Stratégie SEO-GEO du site web et des produits",
          "Gestion de la fiche Google Business et des avis",
        ],
      },
    ],
  },
];

const GUARANTEES = [
  {
    title: "Transparence & Résultats",
    text: "Mon discours s'appuie toujours sur des chiffres concrets, issus des outils Google. Pas de promesse en l'air : chaque résultat est appuyé par des données que je te transmets.",
    points: [
      "Chiffres issus de Google Analytics et Search Console",
      "Compte-rendu clair envoyé après chaque mission",
    ],
  },
  {
    title: "Efficacité",
    text: "Je travaille avec rigueur, mission après mission. Chaque action est pensée pour avoir un impact réel sur ta visibilité.",
    points: [
      "Méthode structurée, rien laissé au hasard",
      "Chaque action a un objectif précis",
    ],
  },
  {
    title: "Disponibilité",
    text: "Je te réponds et je t'envoie mon avancée directement sur WhatsApp. Pas besoin d'attendre un rendez-vous pour savoir où tu en es.",
    points: [
      "Réponses et suivi via WhatsApp",
      "Tu sais toujours où en est ton projet",
    ],
  },
  {
    title: "Délivrable",
    text: "Chaque contenu, chaque livrable, t'est transmis directement. Tu sais exactement ce qui a été fait pour ton site.",
    points: [
      "Chaque rédaction SEO t'est envoyée",
      "Aucune étape laissée dans le flou",
    ],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — reconstruit à l'identique (padding, tailles, couleurs exactes du site actuel) */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 mt-2.5 font-heading text-[48px] font-semibold leading-[1.25] text-black">
            Je transforme{" "}
            <span className="text-gold">ton site web</span> en outil qui
            attire des clients.
          </h1>

          <div className="my-4 mb-6 flex items-center gap-2">
            <div className="h-0.5 w-[46px] bg-gold" />
            <span className="text-base text-gold">✦</span>
          </div>

          <p className="text-base leading-[1.6] text-[#333]">
            Résultats mesurables, Aix-en-Provence. Transforme ta présence
            digitale en commercial terrain 24h/24, sur{" "}
            <span className="font-semibold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            .
          </p>

          <div className="mt-5 flex flex-wrap gap-[15px]">
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              AUDIT GRATUIT
            </Link>
          </div>
        </div>

        <div className="relative flex flex-[1.2_1_0%] items-center justify-end">
          <Image
            src="/images/hero-jwl-marketing.webp"
            alt="JWL Marketing Aix-en-Provence"
            width={1536}
            height={1024}
            priority
            className="h-auto w-[90%] scale-105 object-contain"
          />
          <HeroBadge />
        </div>
      </div>

      <div className="border-y border-neutral-100 bg-black py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-6">
          {[
            { src: "/images/logo-webdifference.png", alt: "Web Difference - Tristan" },
            { src: "/images/logo-entrepreneurielles.png", alt: "Entrepreneuri'elles" },
            { src: "/images/logo-dynamitz.png", alt: "Nathan Dynamitz" },
            { src: "/images/logo-inovea.png", alt: "Groupe INOVEA" },
          ].map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={65}
              className="h-12 w-auto object-contain opacity-90"
            />
          ))}
        </div>
      </div>

      {/* Intro — valeurs exactes: h2 38px Playfair 600 noir, sous-titre 18px #555, corps 15px/25.5px #1a1a1a Georgia, max-width 640px */}
      <section className="mx-auto max-w-[640px] px-6 py-20 text-center">
        <h2 className="font-heading text-[38px] font-semibold leading-tight text-black">
          Et si ton prochain client te trouvait sur Google ?
        </h2>
        <p className="mt-4 text-lg text-[#555]">
          Un site web qui travaille pour ton entreprise 24h/24 afin de
          générer de nouveaux clients
        </p>
        <div className="mt-8 space-y-5 text-left text-[15px] leading-[25.5px] text-[#1a1a1a]">
          <p>
            Beaucoup d&apos;entreprises suivent leurs visites, leurs clics ou
            leurs impressions. Moi, je regarde une seule chose : combien de
            prospects deviennent tes clients. Un bon référencement ne se
            mesure pas uniquement au trafic, mais aux résultats qu&apos;il
            génère. C&apos;est pourquoi chaque stratégie est suivie, analysée
            et ajustée mois après mois afin de développer durablement ta
            visibilité et ton chiffre d&apos;affaires.
          </p>
          <p>
            Aujourd&apos;hui, ton premier rendez-vous avec un prospect
            commence sur Google. Avant de te contacter, il recherche ton
            entreprise, consulte ton site internet et compare plusieurs
            professionnels. En quelques secondes, il décide si tu inspires
            confiance ou s&apos;il préfère poursuivre ses recherches.
          </p>
          <p>
            Ton site internet est bien plus qu&apos;une simple vitrine. Il
            représente ton entreprise, valorise ton savoir-faire et montre
            pourquoi un prospect devrait te choisir plutôt qu&apos;un
            concurrent. Il doit rassurer, convaincre et donner envie de
            passer à l&apos;action.
          </p>
          <p>
            Chez JWL Marketing, je crée des sites internet pensés pour être
            visibles sur Google, offrir une expérience fluide à tes visiteurs
            et transformer cette visibilité en demandes de devis, appels et
            nouveaux clients. Je conçois des sites web pensés pour développer
            ton activité. Chaque page est construite avec une stratégie SEO
            et une logique commerciale afin d&apos;attirer des visiteurs
            qualifiés et de les transformer en prospects.
          </p>
          <p>
            Résultat : ton site devient un véritable levier de visibilité,
            d&apos;acquisition et de croissance pour ton entreprise.
          </p>
        </div>
      </section>

      {/* Résultats clients — cartes .jwl-proof-card exactes */}
      <section className="bg-transparent px-5 py-[50px]" style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-center gap-6">
          {PROOF_CARDS.map((card) => (
            <ProofCard key={card.badge} data={card} />
          ))}
        </div>
        <p className="mx-auto mt-[30px] max-w-[640px] text-center text-xs leading-relaxed text-[#999]">
          Chiffres issus de Google Search Console et Google Business Profile,
          données juillet 2026.
        </p>
      </section>

      {/* Garanties — .guarantees-section: kicker + h2 encadré, photo 40% + grille 2x2 de cartes sombres */}
      <section className="box-border bg-transparent px-[5%] py-20" style={{ fontFamily: "Poppins, sans-serif" }}>
        <SectionHeading kicker="Une collaboration" title="Et un partenariat" accent="gagnant-gagnant" />
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-10 md:flex-row">
          <div className="flex items-center md:basis-[40%]">
            <Image
              src="/images/jodie-marketing-digital-seo.png"
              alt="Jodie Lapaillerie - JWL Marketing"
              width={642}
              height={862}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-[22px] sm:grid-cols-2">
            {GUARANTEES.map((g, i) => (
              <div
                key={g.title}
                className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-7 transition-all hover:-translate-y-1.5 hover:border-gold"
              >
                <span className="relative mb-3.5 inline-block pl-[18px] text-xs font-semibold uppercase tracking-wide text-gold before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-3 before:-translate-y-1/2 before:bg-gold before:content-['']">
                  Garantie {i + 1}
                </span>
                <h3 className="mb-3.5 font-heading text-[19px] font-semibold text-white">
                  {g.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#bbb]">{g.text}</p>
                <ul className="space-y-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#ddd]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/[0.18] text-[11px] font-bold text-gold">
                        ✓
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            Demande ton offre
          </Link>
        </div>
      </section>

      {/* FAQ — vraies réponses complètes récupérées du site (accordéon Elementor natif) */}
      <section className="px-6 py-20">
        <SectionHeading
          kicker="Questions"
          title="FAQ :"
          accent="Foire Aux Questions"
          subtext="Retrouve les réponses aux questions les plus fréquentes sur le Marketing Digital"
        />
        <FaqAccordion items={HOME_FAQ} />
      </section>
    </div>
  );
}
