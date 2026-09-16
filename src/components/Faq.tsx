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
    a: "Un local bien placé sur le Vieux-Port ou près de Castellane est un atout. Mais aujourd'hui, tes futurs clients cherchent d'abord sur Google. Le SEO te permet d'apparaître avant tes concurrents quand quelqu'un recherche tes services à Marseille. Résultat : plus d'appels, plus de devis et plus de visites.",
  },
  {
    q: "Comment adapter une stratégie SEO à une entreprise implantée dans la métropole marseillaise ?",
    a: "Une bonne stratégie SEO à Marseille doit tenir compte de ta zone d'intervention. Entre La Valentine, Euroméditerranée, ou Aubagne, les recherches ne sont pas les mêmes. L'objectif est de cibler les quartiers et villes où se trouvent tes futurs clients pour générer des demandes qualifiées.",
  },
  {
    q: "Dans combien de temps le SEO m'apportera-t-il des clients sur Marseille ?",
    a: "Les premiers résultats apparaissent souvent entre 3 et 6 mois. Sur certains secteurs moins concurrentiels, cela peut être plus rapide ou plus long. Le SEO est un investissement durable : une fois bien positionné, tu continues à recevoir des prospects sans payer chaque clic.",
  },
  {
    q: "Pourquoi prendre un consultant SEO à Marseille plutôt qu'une agence ?",
    a: "Avec un consultant, tu échanges directement avec la personne qui travaille sur ton référencement. Pas d'intermédiaires ni de dossier qui change de mains. Tu bénéficies d'un accompagnement plus personnalisé et d'une stratégie adaptée à la réalité du marché marseillais.",
  },
  {
    q: "Comment l'IA choisit-elle les entreprises qu'elle recommande à Marseille ?",
    a: "Les IA analysent les mêmes signaux que Google : qualité du site, avis clients, présence locale, expertise et cohérence des informations en ligne. Une entreprise bien référencée et active sur sa fiche Google Business Profile a plus de chances d'être recommandée.",
  },
  {
    q: "Le GEO (Generative Engine Optimization) va-t-il remplacer le SEO local sur Marseille ?",
    a: "Non. Le GEO complète le SEO local. Pour être cité par ChatGPT, Gemini ou les futurs moteurs IA, il faut déjà être visible sur Google. Un bon référencement local reste la base pour apparaître dans les réponses générées par l'intelligence artificielle.",
  },
];

const CREATION_SITE_WEB_FAQ = [
  {
    q: "Pourquoi créer un site web pour mon entreprise ?",
    a: "Les réseaux sociaux te rendent visible. Ton site web te permet de convertir cette visibilité en clients. C'est ta preuve sociale : les internautes, toi y compris, vérifient un site avant de faire confiance à une entreprise. Il rassure, présente tes services et peut générer des demandes 24h/24.",
  },
  {
    q: "Dois-je absolument créer un site web si je suis déjà présent sur les réseaux sociaux ?",
    a: "Oui, surtout si tu travailles localement. Un artisan à Paris, un commerçant à Marseille ou un professionnel à Bordeaux sera souvent recherché sur Google avant d'être contacté. Un site optimisé localement permet d'apparaître sur ces recherches et de capter des clients qui ne te connaissent pas encore.",
  },
  {
    q: "Je veux créer mon site moi-même tout en ayant un bon SEO. Comment faire ?",
    a: "Créer un site est aujourd'hui accessible. Le plus difficile reste le référencement. Je te propose une formation personnalisée qui te permettra d'apprendre les bases du SEO, de structurer tes pages correctement et d'éviter les erreurs qui bloquent souvent la visibilité sur Google.",
  },
  {
    q: "Je paie déjà un abonnement pour mon site internet. Est-ce problématique ?",
    a: "Pas forcément. Tout dépend de ce que comprend cet abonnement. Certains incluent uniquement l'hébergement et la maintenance. D'autres ajoutent des services marketing ou SEO. Un audit permet de vérifier si cet investissement est réellement rentable pour ton activité. Je peux te proposer plusieurs solutions en fonction de ton niveau d'engagement et de ce que révélera l'audit concernant les prestations et les promesses de la plateforme.",
  },
  {
    q: "J'ai déjà un site internet. Pourquoi investir dans le SEO ?",
    a: "Un site sans référencement ressemble à une boutique située dans une rue où personne ne passe. Le SEO permet d'attirer des visiteurs qualifiés depuis Google et d'augmenter les demandes de devis ou de contact sans dépendre uniquement de la publicité.",
  },
  {
    q: "J'ai déjà un site, mais j'ai changé de clientèle cible. Que dois-je faire ?",
    a: "Ton référencement doit évoluer avec ton activité. Si tu changes de cible, de secteur ou de zone géographique, il est souvent nécessaire de revoir le positionnement du site, les mots-clés et certaines pages stratégiques. Un audit SEO permet d'identifier les ajustements à réaliser pour attirer les bons prospects.",
  },
];

const GMB_FAQ = [
  {
    q: "Ma fiche Google est créée. Pourquoi n'apparaît-elle pas dans les premiers résultats ?",
    a: "Créer une fiche Google Business Profile ne suffit pas. Google prend aussi en compte les avis, les photos, les publications, la catégorie choisie et la cohérence de tes informations. Une fiche optimisée a plus de chances d'apparaître devant tes concurrents.",
  },
  {
    q: "Puis-je être visible sur Google Maps sans avoir de site internet ?",
    a: "Oui, mais un site web renforce considérablement la crédibilité de ta fiche et tu risques de passer à côté de recherches locales ou ciblées. Google privilégie souvent les entreprises qui disposent d'une présence web cohérente et bien optimisée.",
  },
  {
    q: "Pourquoi mes concurrents apparaissent-ils avant moi sur Google Maps ?",
    a: "Google compare la pertinence, la proximité et la notoriété des entreprises. Une fiche plus active, avec davantage d'avis et de contenu, peut obtenir un meilleur classement.",
  },
  {
    q: "Combien de temps faut-il pour améliorer la visibilité d'une fiche Google ?",
    a: "Les premiers résultats peuvent apparaître en quelques semaines. Tout dépend de la concurrence locale, de l'état actuel de la fiche et des optimisations mises en place.",
  },
  {
    q: "Dois-je publier régulièrement sur ma fiche Google ?",
    a: "Oui. Les publications montrent que ton entreprise est active. Elles peuvent renforcer ta visibilité et donner davantage d'informations aux prospects.",
  },
  {
    q: "J'ai plusieurs établissements. Dois-je créer plusieurs fiches Google ?",
    a: "Oui, chaque établissement physique peut disposer de sa propre fiche. Cela permet d'améliorer la visibilité locale de chaque point de vente.",
  },
  {
    q: "Est-ce qu'un audit de ma fiche Google est vraiment utile ?",
    a: "Oui. Il permet d'identifier ce qui fonctionne, ce qui freine ta visibilité et les actions prioritaires à mettre en place pour attirer plus de clients localement.",
  },
];

const HOME_FAQ_EN = [
  {
    q: "Should I redo my website or get a JWL Marketing audit?",
    a: "Because a new website doesn't always solve the problem. Before investing several hundred or thousand euros in a redesign, you need to understand what's really holding you back. Does the problem come from your offer? Your SEO? Your positioning? Your customer experience? I've already met businesses ready to rebuild their site when the real problem was simply the message shown to visitors. Before changing the tool, I prefer to understand why it isn't working.",
  },
  {
    q: "Why talk about digital strategy when I just want a website?",
    a: "Because a website without a strategy is a bit like opening a shop without knowing what to sell or to whom. Before creating a site, you need to understand who your customers are, what they're looking for and what pushes them to take action. The website comes after. My role isn't just to create a site. My role is to create a site that serves a business goal.",
  },
  {
    q: "What's the link between digital strategy and building a website?",
    a: "Strategy defines the path. The website lets you follow it. Strategy tells you which service to highlight, which customers to target, which words to use and which actions to get visitors to take. The site is only the visible part of the work. Without strategy, a site can look nice. With a strategy, it can become a real growth tool.",
  },
  {
    q: "What's the difference between a web developer and JWL Marketing?",
    a: "A web developer builds a site. I first help you understand why it needs to be built. I work on your positioning, your offer, your sales development, your SEO and the experience your future customer will go through. Only then comes the technical part. I regularly advise clients not to redo their site when it isn't the priority. I don't sell a website. I work on the strategy that will let your business find its future customers more easily.",
  },
  {
    q: "Why pay a monthly SEO retainer when my site is already built?",
    a: "That's probably the most legitimate question. Building a website and setting up the basics of SEO is a bit like opening a shop and putting up a sign. But that doesn't guarantee customers will walk in. Google evolves. Searches evolve. Your competitors evolve too. Effective organic search requires regular follow-up, adjustments, content, analysis and sometimes technical fixes. The setup gets you started. The follow-up lets you progress. That's exactly why some businesses have had a site for years without generating results. The site exists. The visibility work stopped. SEO isn't a monthly expense. It's the upkeep of your visibility.",
  },
  {
    q: "How does JWL Marketing use AI in its strategies?",
    a: "Artificial intelligence is a tool. Not a strategy. I use it to save time on certain analyses, spot opportunities, explore search intent or speed up certain tasks. But an AI knows neither your business, nor your market, nor your customers. It doesn't replace business experience, positioning, or an understanding of an industry. That's why I combine AI with my experience in sales development, SEO and digital strategy. AI can suggest ideas. Strategy remains a human decision.",
  },
];

const QUI_SUIS_JE_FAQ_EN = [
  {
    q: "Why hire an SEO consultant in Aix-en-Provence rather than an agency?",
    a: "Because you probably don't need someone who only talks about keywords. You need someone who understands your business, your customers and the challenges you face day to day. When an entrepreneur contacts me, they almost never say: \"I need SEO.\" They say: \"I'm short on customers.\" Or: \"My site isn't bringing me anything.\" At JWL Marketing, I start from your problem before talking about search rankings. Because good SEO often starts with a good understanding of your business.",
  },
  {
    q: "How long before SEO brings me customers?",
    a: "That's probably the question I get asked the most. And the honest answer is: it depends. SEO isn't an ad you switch on today to get results tomorrow. Google needs to understand your business, analyze your site and see that you provide relevant answers to your future customers' searches. Some businesses see first results within a few weeks. Others need several months. It all depends on your industry, the competition, your site's current state and the work already done on the ground with your customers. One thing is certain though: the longer you wait to start, the more your competitors get ahead. SEO takes time. But it can keep attracting customers long after the work is done.",
  },
  {
    q: "I have a shop on the Cours Mirabeau, why bother with SEO?",
    a: "Because not all your future customers walk past your shop window. Today, an estimated 85% of people search for a product, service or business on Google before travelling. Even with a great location, you're still limited to people who walk past your door, missing those who search for you online. With SEO, you can also be found by people already looking for you without knowing you yet. Think of it this way: the Cours Mirabeau makes you visible on the street, while SEO makes you visible everywhere else.",
  },
  {
    q: "How do you adapt an SEO strategy to a business park like the Pôle d'activité de la Duranne?",
    a: "SEO isn't worked the same way in a business park as in a city centre. La Duranne hosts hundreds of businesses, mainly in services, tertiary industries, technology and B2B. So the goal isn't just to be visible in Aix-en-Provence. You need to understand how your future customers search for your services: by trade, by industry, by problem or by location. A business based in La Duranne won't necessarily have the same searches as one located downtown or in a retail area. That's why I work on positioning before SEO. I try to understand who your customers are, how they search for a solution and which words they actually use. The goal isn't simply to be visible in La Duranne. The goal is to be visible to the businesses that need you.",
  },
  {
    q: "How can I be recommended by AI when a client searches for a professional in Aix-en-Provence?",
    a: "AI doesn't invent its answers. It relies on information found online: your website, your Google profile, your customer reviews, your content and the sources that talk about your business. So to be recommended, you first need a solid SEO foundation, to be visible, active and to have a Google Business Profile. To do that, you need to reply to your customer reviews and publish content that answers the questions your future customers actually ask. If Google understands who you are, what you do and where you operate, AI tools will find it much easier to recommend you to their users.",
  },
  {
    q: "Will GEO (Generative Engine Optimization) replace local SEO?",
    a: "No. GEO and local SEO don't compete. They complement each other. Local SEO helps Google understand who you are, what you offer and in which geographic area you operate. GEO optimizes your presence for AI tools like ChatGPT, Gemini or Google's enriched results. But AI needs reliable sources to build its answers. And those sources often come from local SEO work: an optimized website, a Google Business Profile, customer reviews, quality content and consistent information about the business. Without local SEO, it becomes harder for Google and AI to understand your business. So GEO doesn't replace local SEO. It builds on it.",
  },
];

const NICE_FAQ_EN = [
  {
    q: "Why hire an SEO consultant in Nice rather than an agency?",
    a: "Because I don't work with prefabricated templates. An independent shop in the Libération district doesn't have the same customers or goals as a firm in Cimiez or a business based in Saint-Isidore. Each strategy is built around your business, not around a standard package. I analyze your business, your local market and the searches of your future customers in Nice. Each strategy is built around your business, not around a package.",
  },
  {
    q: "How long before SEO brings me customers in Nice?",
    a: "It all depends on your market, the competition and your starting point. A tradesperson in Nice Nord, a real estate agent or a self-employed professional won't face the same challenges. Generally, first results appear between 3 and 6 months, but SEO is long-term groundwork. My goal isn't to bring you traffic quickly. My goal is to build lasting visibility capable of generating contact requests over the long run.",
  },
  {
    q: "I already have a good location in Nice, why bother with SEO?",
    a: "Because a good location in Nice is an advantage. But Google can make you visible to people who don't yet know your business. The goal isn't to replace your shop window. It's to bring it more customers.",
  },
  {
    q: "How do you adapt an SEO strategy to a business established in the Nice metro area?",
    a: "An effective SEO strategy starts with understanding your market. The expectations of a tradesperson in Carros, a self-employed professional in Nice or a service business in Saint-Laurent-du-Var are different. I analyze your business, your competitors and the searches of your future customers to build a strategy tailored to your goals. The goal isn't to attract everyone. The goal is to attract the right people at the right time.",
  },
  {
    q: "Will GEO (Generative Engine Optimization) replace local SEO in Nice?",
    a: "No. GEO and local SEO work together. SEO helps your business be visible on Google. GEO helps AI tools like ChatGPT, Gemini or Perplexity understand and recommend your business. In Nice, a restaurant, a lawyer, a tradesperson or a real estate agency still needs an optimized Google profile, customer reviews and a well-ranked website. The difference is that today, internet users no longer search only on Google. They also ask an AI directly: \"What's the best tradesperson in Nice?\" or \"Which SEO consultant should I choose in Nice?\" My goal is to make your business visible both on Google and in AI answers. Because in 2026, ranking first on Google is an advantage. Being recommended by AI on top of that becomes a real visibility accelerator.",
  },
];

const MARSEILLE_FAQ_EN = [
  {
    q: "I already have a good location in Marseille, why bother with SEO?",
    a: "A well-placed shop near the Vieux-Port or Castellane is an asset. But today, your future customers search on Google first. SEO lets you appear ahead of your competitors when someone searches for your services in Marseille. Result: more calls, more quote requests and more visits.",
  },
  {
    q: "How do you adapt an SEO strategy to a business established in the Marseille metro area?",
    a: "A good SEO strategy in Marseille has to account for your service area. Searches differ between La Valentine, Euroméditerranée or Aubagne. The goal is to target the neighbourhoods and towns where your future customers are, to generate qualified leads.",
  },
  {
    q: "How long before SEO brings me customers in Marseille?",
    a: "First results often appear between 3 and 6 months. In some less competitive industries, it can be faster or slower. SEO is a lasting investment: once well positioned, you keep receiving leads without paying for every click.",
  },
  {
    q: "Why hire an SEO consultant in Marseille rather than an agency?",
    a: "With a consultant, you talk directly with the person working on your SEO. No middlemen, no file passed from hand to hand. You get more personalized support and a strategy tailored to the reality of the Marseille market.",
  },
  {
    q: "How does AI choose which businesses to recommend in Marseille?",
    a: "AI tools analyze the same signals as Google: site quality, customer reviews, local presence, expertise and consistency of information online. A well-ranked business that's active on its Google Business Profile has a better chance of being recommended.",
  },
  {
    q: "Will GEO (Generative Engine Optimization) replace local SEO in Marseille?",
    a: "No. GEO complements local SEO. To be cited by ChatGPT, Gemini or future AI engines, you first need to be visible on Google. Solid local SEO remains the foundation for appearing in AI-generated answers.",
  },
];

const CREATION_SITE_WEB_FAQ_EN = [
  {
    q: "Why create a website for my business?",
    a: "Social media makes you visible. Your website lets you turn that visibility into customers. It's your social proof: internet users, yourself included, check a website before trusting a business. It reassures, presents your services and can generate requests around the clock.",
  },
  {
    q: "Do I absolutely need a website if I'm already active on social media?",
    a: "Yes, especially if you work locally. A tradesperson in Paris, a shop owner in Marseille or a professional in Bordeaux will often be searched for on Google before being contacted. A locally optimized website lets you appear in those searches and reach customers who don't know you yet.",
  },
  {
    q: "I want to build my own site while still getting good SEO. How do I do that?",
    a: "Building a site is accessible today. The hardest part remains SEO. I offer personalized training that will teach you the basics of SEO, help you structure your pages correctly and avoid the mistakes that often hold back Google visibility.",
  },
  {
    q: "I already pay a subscription for my website. Is that a problem?",
    a: "Not necessarily. It all depends on what that subscription includes. Some only cover hosting and maintenance. Others add marketing or SEO services. An audit checks whether that spend is actually worthwhile for your business. I can suggest several options depending on your level of commitment and what the audit reveals about the platform's services and promises.",
  },
  {
    q: "I already have a website. Why invest in SEO?",
    a: "A site without SEO is like a shop on a street nobody walks down. SEO attracts qualified visitors from Google and increases quote or contact requests without relying solely on advertising.",
  },
  {
    q: "I already have a site, but my target customers have changed. What should I do?",
    a: "Your SEO needs to evolve with your business. If you change your target audience, industry or geographic area, it's often necessary to revisit the site's positioning, keywords and certain key pages. An SEO audit identifies the adjustments needed to attract the right prospects.",
  },
];

const GMB_FAQ_EN = [
  {
    q: "My Google profile is created. Why doesn't it appear in the top results?",
    a: "Creating a Google Business Profile isn't enough. Google also factors in reviews, photos, posts, the chosen category and the consistency of your information. An optimized profile has a better chance of appearing ahead of your competitors.",
  },
  {
    q: "Can I be visible on Google Maps without a website?",
    a: "Yes, but a website considerably strengthens your profile's credibility, and you risk missing out on local or targeted searches. Google tends to favour businesses with a consistent, well-optimized web presence.",
  },
  {
    q: "Why do my competitors appear before me on Google Maps?",
    a: "Google compares relevance, proximity and reputation between businesses. A more active profile, with more reviews and content, can achieve a better ranking.",
  },
  {
    q: "How long does it take to improve a Google profile's visibility?",
    a: "First results can appear within a few weeks. It all depends on local competition, the profile's current state and the optimizations put in place.",
  },
  {
    q: "Should I post regularly on my Google profile?",
    a: "Yes. Posts show that your business is active. They can strengthen your visibility and give prospects more information.",
  },
  {
    q: "I have several locations. Should I create several Google profiles?",
    a: "Yes, each physical location can have its own profile. This improves the local visibility of each point of sale.",
  },
  {
    q: "Is an audit of my Google profile really useful?",
    a: "Yes. It identifies what's working, what's holding back your visibility, and the priority actions to take to attract more customers locally.",
  },
];

const FAQ_BY_PATH: Record<string, typeof HOME_FAQ> = {
  "/site-internet-aix-en-provence": CREATION_SITE_WEB_FAQ,
  "/google-my-business-aix-en-provence": GMB_FAQ,
  "/": HOME_FAQ,
  "/consultant-freelance-seo-aix-en-provence": QUI_SUIS_JE_FAQ,
  "/consultant-freelance-seo-nice": NICE_FAQ,
  "/consultant-freelance-seo-marseille-jwl-marketing": MARSEILLE_FAQ,
  "/en": HOME_FAQ_EN,
  "/en/site-internet-aix-en-provence": CREATION_SITE_WEB_FAQ_EN,
  "/en/google-my-business-aix-en-provence": GMB_FAQ_EN,
  "/en/consultant-freelance-seo-aix-en-provence": QUI_SUIS_JE_FAQ_EN,
  "/en/consultant-freelance-seo-nice": NICE_FAQ_EN,
  "/en/consultant-freelance-seo-marseille-jwl-marketing": MARSEILLE_FAQ_EN,
};

export default function Faq() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = FAQ_BY_PATH[pathname ?? ""] ?? [];

  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

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
