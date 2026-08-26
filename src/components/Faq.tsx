"use client";

import { useState } from "react";

const FAQ_ITEMS = [
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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="rounded-2xl bg-black px-6 py-14 text-center md:px-12">
      <h2 className="font-heading text-4xl font-bold text-[#c9846f] underline decoration-2 underline-offset-8">
        FAQ
      </h2>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-4 text-left">
        {FAQ_ITEMS.map((item, i) => {
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
