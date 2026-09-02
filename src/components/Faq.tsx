"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HOME_FAQ = [
  {
    q: "Dois-je refaire mon site web ou faire un audit JWL Marketing ?",
    a: "Parce qu'un nouveau site ne résout pas toujours le problème. Avant d'investir plusieurs centaines ou milliers d'euros dans une refonte, il faut comprendre ce qui bloque réellement. Ton problème vient-il de ton offre ? De ton référencement ? De ton positionnement ? De ton expérience client ? J'ai déjà rencontré des entreprises prêtes à refaire leur site alors que le vrai problème venait simplement du message transmis aux visiteurs. Avant de changer l'outil, je préfère comprendre pourquoi il ne fonctionne pas.",
  },
  {
    q: "Pourquoi parler de stratégie digitale alors que je veux juste un site web ?",
    a: "Parce qu'un site web sans stratégie, c'est un peu comme ouvrir une boutique sans savoir quoi vendre ni à qui. Avant de créer un site, il faut comprendre qui sont tes clients, ce qu'ils recherchent et ce qui les pousse à passer à l'action. Le site arrive ensuite. Mon rôle n'est pas seulement de créer un site. Mon rôle est de créer un site qui sert un objectif commercial.",
  },
  {
    q: "Quel est le lien entre la stratégie digitale et la création d'un site web ?",
    a: "La stratégie définit le chemin. Le site web permet de le suivre. La stratégie permet de savoir quel service mettre en avant, quels clients cibler, quels mots utiliser et quelles actions faire réaliser aux visiteurs. Le site n'est que la partie visible du travail. Sans stratégie, un site peut être beau. Avec une stratégie, il peut devenir un véritable outil de développement.",
  },
  {
    q: "Quelle est la différence entre un développeur web et JWL Marketing ?",
    a: "Un développeur web construit un site. Moi, je t'aide d'abord à comprendre pourquoi il faut le construire. Je travaille sur ton positionnement, ton offre, ton développement commercial, ton SEO et l'expérience que vivra ton futur client. Ensuite seulement, vient la partie technique. D'ailleurs, il m'arrive régulièrement de conseiller à un client de ne pas refaire son site quand ce n'est pas la priorité. Je ne vends pas un site internet. Je travaille sur la stratégie qui permettra à ton entreprise de trouver plus facilement ses futurs clients.",
  },
  {
    q: "Pourquoi payer un forfait SEO mensuel alors que mon site est déjà créé ?",
    a: "C'est probablement la question la plus légitime. Créer un site web et mettre en place les bases du SEO, c'est un peu comme ouvrir une boutique et installer son enseigne. Mais cela ne garantit pas que les clients vont entrer. Google évolue. Les recherches évoluent. Tes concurrents évoluent aussi. Un référencement naturel efficace demande un suivi régulier, des ajustements, du contenu, des analyses et parfois des corrections techniques. La mise en place permet de démarrer. Le suivi permet de progresser. C'est d'ailleurs pour cette raison que certaines entreprises ont un site depuis plusieurs années sans générer de résultats. Le site existe. Le travail de visibilité, lui, s'est arrêté. Le SEO n'est pas une dépense mensuelle. C'est l'entretien de ta visibilité.",
  },
  {
    q: "Comment JWL Marketing utilise l'IA dans ses stratégies ?",
    a: "L'intelligence artificielle est un outil. Pas une stratégie. Je l'utilise pour gagner du temps sur certaines analyses, identifier des opportunités, explorer des intentions de recherche ou accélérer certaines tâches. Mais une IA ne connaît ni ton entreprise, ni ton marché, ni tes clients. Elle ne remplace pas l'expérience commerciale, le positionnement ou la compréhension d'un secteur d'activité. C'est pour cette raison que je combine l'IA avec mon expérience du développement commercial, du SEO et de la stratégie digitale. L'IA peut proposer des idées. La stratégie reste une décision humaine.",
  },
];

const QUI_SUIS_JE_FAQ = [
  {
    q: "Pourquoi prendre un consultant SEO à Aix-en-Provence plutôt qu'une agence ?",
    a: "Parce que tu n'as probablement pas besoin de quelqu'un qui te parle uniquement de mots-clés. Tu as besoin de quelqu'un qui comprenne ton activité, tes clients et les difficultés que tu rencontres au quotidien. Quand un entrepreneur me contacte, il ne me dit presque jamais : « J'ai besoin de SEO. » Il me dit : « Je manque de clients. » Ou : « Mon site ne me rapporte rien. » Chez JWL Marketing, je pars de ton problème avant de parler de référencement. Parce qu'un bon SEO commence souvent par une bonne compréhension de ton entreprise.",
  },
  {
    q: "Dans combien de temps le SEO m'apportera-t-il des clients ?",
    a: "C'est probablement la question que l'on me pose le plus souvent. Et la réponse honnête est : ça dépend. Le SEO n'est pas une publicité que l'on active aujourd'hui pour obtenir des résultats demain. Google a besoin de comprendre ton activité, d'analyser ton site et de constater que tu apportes des réponses pertinentes aux recherches de tes futurs clients. Certaines entreprises observent des premiers résultats en quelques semaines. D'autres auront besoin de plusieurs mois. Tout dépend de ton secteur, de la concurrence, de l'état actuel de ton site et du travail déjà réalisé sur le terrain avec tes clients. En revanche, une chose est sûre : plus tu attends pour commencer, plus tes concurrents prennent de l'avance. Le SEO demande du temps. Mais il peut continuer à attirer des clients longtemps après le travail réalisé.",
  },
  {
    q: "J'ai une boutique sur le Cours Mirabeau, pourquoi faire du SEO ?",
    a: "Parce que tes futurs clients ne passent pas tous devant ta vitrine. Aujourd'hui, on estime que 85% des personnes recherchent un produit, un service ou un commerce sur Google avant de se déplacer. Même avec un excellent emplacement, tu restes limité aux personnes qui passent devant ta porte sans penser à ceux qui te cherche sur internet. Avec le SEO, tu peux aussi être trouvé par les personnes qui te cherchent déjà sans te connaître. Comprend que le Cours Mirabeau te rend visible dans la rue, quant au SEO, il te rendra visible partout ailleurs.",
  },
  {
    q: "Comment adapter une stratégie SEO à une zone d'activité comme le pôle d'activité de la Duranne ?",
    a: "On ne travaille pas le SEO de la même façon dans une zone d'activité que dans un centre-ville. La Duranne regroupe des centaines d'entreprises, principalement dans les services, le tertiaire, la technologie et le B2B. L'objectif n'est donc pas seulement d'être visible sur Aix-en-Provence. Il faut comprendre comment tes futurs clients recherchent tes services : par métier, par secteur d'activité, par problématique ou par localisation. Une entreprise implantée à la Duranne n'aura pas forcément les mêmes recherches qu'une entreprise située en centre-ville ou dans une zone commerciale. C'est pour cette raison que je travaille le positionnement avant le SEO. Je cherche à comprendre qui sont tes clients, comment ils recherchent une solution et quels mots ils utilisent réellement. Le but n'est pas simplement d'être visible à la Duranne. Le but est d'être visible auprès des entreprises qui ont besoin de toi.",
  },
  {
    q: "Comment être recommandé par l'IA lorsqu'un client recherche un professionnel à Aix-en-Provence ?",
    a: "L'IA n'invente pas ses réponses. Elle s'appuie sur les informations qu'elle trouve sur Internet : ton site web, ta fiche Google, tes avis clients, tes contenus et les sources qui parlent de ton entreprise. Donc pour être recommandé, il faut déjà avoir une bonne base SEO, être visible, actif et avoir une fiche Google Business Profile. Pour cela tu dois répondre à tes avis clients, publier du contenu qui répond aux questions que se posent réellement tes futurs clients. Si Google comprend qui tu es, ce que tu fais et où tu interviens, les intelligences artificielles auront beaucoup plus de facilité à te recommander à leurs utilisateurs.",
  },
  {
    q: "Le GEO (Generative Engine Optimization) va-t-il remplacer le SEO local ?",
    a: "Non. Le GEO et le SEO local ne s'opposent pas. Ils se complètent. Le SEO local aide Google à comprendre qui tu es, ce que tu proposes et dans quelle zone géographique tu interviens. Le GEO permet d'optimiser ta présence pour les intelligences artificielles comme ChatGPT, Gemini ou les résultats enrichis de Google. Mais les IA ont besoin de sources fiables pour construire leurs réponses. Et ces sources proviennent souvent du travail réalisé en SEO local : site web optimisé, fiche Google Business Profile, avis clients, contenus de qualité et informations cohérentes sur l'entreprise. Sans SEO local, il devient plus difficile pour Google et les IA de comprendre ton activité. Le GEO ne remplace donc pas le SEO local. Il s'appuie sur lui.",
  },
];

const NICE_FAQ = [
  {
    q: "Pourquoi prendre une consultante SEO à Nice plutôt qu'une agence ?",
    a: "Parce que je ne travaille pas avec des modèles préfabriqués. Une boutique indépendante du quartier Libération n'a pas les mêmes clients ni les mêmes objectifs qu'un cabinet situé à Cimiez ou qu'une entreprise installée à Saint-Isidore. Chaque stratégie est construite autour de ton activité, pas autour d'un forfait standard. J'analyse ton activité, ton marché local et les recherches de tes futurs clients niçois. Chaque stratégie est construite autour de ton entreprise, pas autour d'un forfait.",
  },
  {
    q: "Dans combien de temps le SEO m'apportera-t-il des clients à Nice ?",
    a: "Tout dépend de ton marché, de la concurrence et de ton point de départ. Un artisan à Nice Nord, un agent immobilier ou une profession libérale ne feront pas face aux mêmes défis. En général, les premiers résultats apparaissent entre 3 et 6 mois, mais le SEO est un travail de fond. Mon objectif n'est pas de t'apporter du trafic rapidement. Mon objectif est de construire une visibilité durable capable de générer des demandes de contact sur le long terme.",
  },
  {
    q: "J'ai déjà un bon emplacement à Nice, pourquoi faire du SEO ?",
    a: "Parce qu'un bon emplacement à Nice est un avantage. Mais Google peut te rendre visible auprès de personnes qui ne connaissent pas encore ton entreprise. L'objectif n'est pas de remplacer ta vitrine. C'est de lui apporter davantage de clients.",
  },
  {
    q: "Comment adapter une stratégie SEO à une entreprise implantée dans la métropole niçoise ?",
    a: "Une stratégie SEO efficace commence par la compréhension de ton marché. Les attentes d'un artisan à Carros, d'une profession libérale à Nice ou d'une entreprise de services à Saint-Laurent-du-Var sont différentes. J'analyse ton activité, tes concurrents et les recherches de tes futurs clients pour construire une stratégie adaptée à tes objectifs. Le but n'est pas d'attirer tout le monde. Le but est d'attirer les bonnes personnes au bon moment.",
  },
  {
    q: "Le GEO (Generative Engine Optimization) va-t-il remplacer le SEO local sur Nice ?",
    a: "Non. Le GEO et le SEO local travaillent ensemble. Le SEO aide ton entreprise à être visible sur Google. Le GEO aide les intelligences artificielles comme ChatGPT, Gemini ou Perplexity à comprendre et recommander ton activité. À Nice, un restaurant, un avocat, un artisan ou une agence immobilière a toujours besoin d'une fiche Google optimisée, d'avis clients et d'un site bien référencé. La différence, c'est qu'aujourd'hui les internautes ne cherchent plus seulement sur Google. Ils demandent aussi directement à une IA : \"Quel est le meilleur artisan à Nice ?\" ou \"Quel consultant SEO choisir à Nice ?\" Mon objectif est donc de rendre ton entreprise visible à la fois sur Google et dans les réponses des IA. Parce qu'en 2026, être premier sur Google est un avantage. Être recommandé en plus par l'IA devient un véritable accélérateur de visibilité.",
  },
];

const MARSEILLE_FAQ = [
  {
    q: "J'ai déjà un bon emplacement à Marseille, pourquoi faire du SEO ?",
    a: "Ton emplacement aide les personnes qui passent devant ta porte. Le SEO aide les personnes qui te cherchent déjà sur Google. Aujourd'hui, un client tape « restaurant Marseille », « avocat Prado », « plombier 13008 » ou « consultant Marseille » avant de choisir. Si ton concurrent apparaît avant toi, il récupère le contact avant même que le prospect découvre ton adresse. Le SEO ne remplace pas un bon emplacement. Il le transforme en machine à générer des demandes. Sur Marseille, beaucoup d'entreprises investissent dans leur local mais négligent leur visibilité Google. C'est souvent là que se trouve la plus grosse opportunité.",
  },
  {
    q: "Comment adapter une stratégie SEO à une entreprise implantée dans la métropole marseillaise ?",
    a: "Marseille n'est pas une ville uniforme. Le Vieux-Port, La Joliette, Prado, Castellane, La Valentine ou Euroméditerranée n'ont pas les mêmes recherches ni les mêmes clients. Une stratégie efficace repose sur plusieurs leviers : une fiche Google Business Profile optimisée, des pages dédiées à tes services, des contenus adaptés à Marseille et à la métropole, des pages locales pour les zones stratégiques et une stratégie GEO pour les moteurs IA. L'objectif n'est pas d'attirer plus de visiteurs. L'objectif est d'attirer les bonnes demandes. C'est exactement la logique que nous appliquons sur nos prestations de Consultant SEO Marseille, SEO Local et GEO.",
  },
  {
    q: "Dans combien de temps le SEO m'apportera-t-il des clients sur Marseille ?",
    a: "Le SEO n'est pas une publicité. Tu ne paies pas pour apparaître demain. En revanche, tu construis une visibilité durable. Dans la majorité des cas : premiers signaux entre 1 et 3 mois, premiers leads réguliers entre 3 et 6 mois, résultats solides entre 6 et 12 mois. Tout dépend de trois facteurs : ton secteur, la concurrence et l'état actuel de ton site. Un cabinet dentaire ou un artisan bien positionné peut obtenir des résultats plus rapidement qu'un secteur ultra-concurrentiel. Le plus important reste la qualité de la stratégie mise en place dès le départ.",
  },
  {
    q: "Pourquoi prendre un consultant SEO à Marseille plutôt qu'une agence ?",
    a: "Parce que tu ne cherches pas forcément une équipe de 15 personnes. Tu cherches surtout des résultats. Avec un consultant SEO, tu échanges directement avec la personne qui construit la stratégie. Pas avec un commercial. Pas avec un chef de projet intermédiaire. Tu gagnes en réactivité. Tu gagnes en transparence. Tu sais exactement pourquoi chaque action est réalisée. Chez JWL Marketing, chaque recommandation est reliée à un objectif simple : plus de visibilité, plus de demandes, plus de chiffre d'affaires. Pas de jargon. Pas de rapports de 50 pages que personne ne lit.",
  },
  {
    q: "Comment l'IA choisit-elle les entreprises qu'elle recommande à Marseille ?",
    a: "Les intelligences artificielles ne choisissent pas les entreprises au hasard. Elles analysent les signaux de confiance présents sur le web. Elles regardent notamment ton site internet, ta fiche Google Business Profile, tes avis clients, tes contenus experts, les mentions de ton entreprise sur d'autres sites et la cohérence de tes informations locales. Plus ton entreprise est reconnue comme experte sur son sujet, plus elle a de chances d'être citée dans les réponses générées par l'IA. C'est précisément le rôle du GEO (Generative Engine Optimization) : rendre ton entreprise visible dans ChatGPT, Gemini, Copilot et les futurs moteurs conversationnels.",
  },
  {
    q: "Le GEO (Generative Engine Optimization) va-t-il remplacer le SEO local sur Marseille ?",
    a: "Non. Le GEO ne remplace pas le SEO. Il vient s'ajouter au SEO. Le SEO permet d'être trouvé sur Google. Le GEO permet d'être recommandé par l'intelligence artificielle. Les entreprises qui domineront demain seront celles qui travaillent les deux. Une fiche Google optimisée, un site performant et des contenus experts restent indispensables. Ensuite, le GEO renforce ta présence dans les réponses générées par l'IA. Le vrai sujet n'est donc pas de choisir entre SEO et GEO. Le vrai sujet est d'être visible partout où tes futurs clients cherchent une réponse. Tu veux savoir où ton entreprise perd actuellement des clients sur Google et dans les moteurs IA ? Découvre notre audit SEO & GEO Marseille et identifie les opportunités les plus rentables pour ton activité.",
  },
];

const FAQ_BY_PATH: Record<string, typeof HOME_FAQ> = {
  "/consultant-freelance-seo-aix-en-provence": QUI_SUIS_JE_FAQ,
  "/consultant-freelance-seo-nice": NICE_FAQ,
  "/consultant-freelance-seo-marseille-jwl-marketing": MARSEILLE_FAQ,
};

const NO_FAQ_PATHS = new Set([
  "/site-internet-aix-en-provence",
  "/google-my-business-aix-en-provence",
]);

export default function Faq() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = FAQ_BY_PATH[pathname ?? ""] ?? HOME_FAQ;

  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  if (NO_FAQ_PATHS.has(pathname ?? "")) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-black px-6 py-14 text-center md:px-12">
      <h2 className="font-heading text-4xl font-bold text-[#c9846f] underline decoration-2 underline-offset-8">
        FAQ
      </h2>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-4 text-left">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-8 py-5 text-left text-[15px] font-medium text-black"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span
                  className={`shrink-0 text-xl text-[#c9846f] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-6 text-[14px] leading-relaxed text-neutral-600">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
