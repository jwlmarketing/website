import type { ProofCardData } from "@/components/ProofCard";

export const PROOF_CARDS: ProofCardData[] = [
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
