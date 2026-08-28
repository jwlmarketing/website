"use client";

import { useState } from "react";

type ProofCard = {
  badge: string;
  url: string;
  shotUrl: string;
  stat: string;
  statLabel: string;
  statSub?: string;
  name: string;
  strategyClass: "low" | "medium";
  strategyIcon: "pin" | "world";
  strategyText: string;
  gmb?: { src: string; alt: string; caption: string };
  metrics: string[];
  missions: string[];
  subscription: string[];
};

const CARDS: ProofCard[] = [
  {
    badge: "Assistance informatique",
    url: "https://www.proxiclic-provence.fr/",
    shotUrl: "https://image.thum.io/get/width/800/https://www.proxiclic-provence.fr/",
    stat: "3 468",
    statLabel: "vues de la fiche Google en 6 mois",
    statSub: "63 appels en 6 mois.",
    name: "Proxiclic Provence\nInformaticien à Digne-les-Bains (04)",
    strategyClass: "low",
    strategyIcon: "pin",
    strategyText: "Faible concurrence · Stratégie locale",
    gmb: {
      src: "https://www.jwl-marketing.fr/wp-content/uploads/2026/07/Capture-decran-2026-07-27-a-06.34.59.png",
      alt: "Capture Google Business Profile — 63 appels générés depuis la fiche Proxiclic Provence entre février et juillet 2026",
      caption:
        "👉 Voir la preuve : capture de la fiche Google Business de Proxiclic Provence, montrant les 63 appels générés entre février et juillet 2026 grâce à la stratégie locale mise en place.",
    },
    metrics: ["63 appels générés en 6 mois", "80+ avis Google depuis la stratégie locale"],
    missions: ["Création du site web (landing page)", "Stratégie SEO-GEO du site", "Stratégie locale et régionale en cours de déploiement"],
    subscription: ["Stratégie SEO-GEO du site web", "Gestion de la fiche Google Business et des avis"],
  },
  {
    badge: "Gestion de patrimoine",
    url: "https://gestiondepatrimoine-aix-en-provence.fr/",
    shotUrl: "https://image.thum.io/get/width/800/https://gestiondepatrimoine-aix-en-provence.fr/",
    stat: "1 350",
    statLabel: "vues de la fiche Google en 4 mois",
    statSub: "7 appels clients en 4 mois",
    name: "Groupe INOVEA\nGestion de patrimoine à Aix-en-Provence (13)",
    strategyClass: "medium",
    strategyIcon: "pin",
    strategyText: "Concurrence moyenne · Stratégie locale",
    metrics: ["1 350 vues de la fiche Google", "71 clics vers le site en 4 mois", "7 appels clients en 4 mois"],
    missions: [
      "Création d'un site vitrine sur-mesure, à l'image du groupe",
      "Rédaction SEO des contenus du site",
      "Stratégie SEO-GEO, budget d'entrée maîtrisé",
    ],
    subscription: ["Aucun suivi mensuel actif à ce jour"],
  },
  {
    badge: "Refonte stratégie de marque",
    url: "https://bout-de-poils.vercel.app/",
    shotUrl: "https://image.thum.io/get/width/800/https://bout-de-poils.vercel.app/",
    stat: "En cours",
    statLabel: "Site récemment lancé, indicateurs pas encore assez complets",
    name: "Bout de Poils\nanciennement Green Beam Craft\nSèvres (91)",
    strategyClass: "medium",
    strategyIcon: "world",
    strategyText: "Concurrence moyenne · Stratégie nationale",
    metrics: [],
    missions: [
      "Refonte du positionnement de marque (ex-Green Beam Craft)",
      "Choix de la niche et de la cible",
      "Création du produit phare (porte-clés en poils d'animaux)",
      "Stratégie de contenu SEO national (5 pages piliers)",
      "Rédaction des fiches produits SEO, avec noms de produits différenciés pour couvrir plusieurs intentions de recherche",
      "Setup de la fiche Google Business Profile",
    ],
    subscription: ["Gestion et rédaction SEO du blog", "Stratégie SEO-GEO du site web et des produits", "Gestion de la fiche Google Business et des avis"],
  },
];

function StairsIcon() {
  return (
    <div className="jwl-stairs">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function Card({ card }: { card: ProofCard }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="jwl-proof-card">
      <StairsIcon />
      <div className="jwl-proof-badge-bar">{card.badge}</div>
      <a
        href={card.url}
        target="_blank"
        rel="noopener"
        className="jwl-proof-shot"
        style={{ backgroundImage: `url('${card.shotUrl}')` }}
      >
        <span className="jwl-proof-visit">Voir le site ↗</span>
      </a>
      <div className="jwl-proof-body">
        <div className="jwl-proof-stat">{card.stat}</div>
        <div className="jwl-proof-stat-label">{card.statLabel}</div>
        {card.statSub && <div className="jwl-proof-stat-sub">{card.statSub}</div>}
        <div className="jwl-proof-name">
          {card.name.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < card.name.split("\n").length - 1 && <br />}
            </span>
          ))}
        </div>
        <span className={`jwl-proof-badge-strategy ${card.strategyClass}`}>
          {card.strategyIcon === "pin" ? "📍 " : "🌍 "}
          {card.strategyText}
        </span>
        <button className={`jwl-proof-toggle${open ? " open" : ""}`} onClick={() => setOpen((o) => !o)} type="button">
          {open ? "Masquer le détail" : "Voir le détail"} <span className="ti">▾</span>
        </button>
      </div>
      <div className={`jwl-proof-detail${open ? " open" : ""}`}>
        {card.gmb && (
          <>
            <div className="jwl-proof-gmb-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.gmb.src} alt={card.gmb.alt} />
            </div>
            <p className="jwl-proof-gmb-caption-static">{card.gmb.caption}</p>
          </>
        )}
        {card.metrics.length > 0 && (
          <div className="jwl-proof-metrics">
            {card.metrics.map((m) => (
              <span className="jwl-proof-metric" key={m}>
                {m}
              </span>
            ))}
          </div>
        )}
        <div className="jwl-proof-detail-section">
          <p className="jwl-proof-detail-title">Mission réalisée</p>
          <ul className="jwl-proof-sub-list">
            {card.missions.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="jwl-proof-detail-section">
          <p className="jwl-proof-detail-title">Abonnement en place</p>
          <ul className="jwl-proof-sub-list">
            {card.subscription.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProofCards() {
  return (
    <div className="jwl-proof-section">
      <style>{`
        .jwl-proof-section{padding:20px 0 0;box-sizing:border-box;background:transparent}
        .jwl-proof-section *{box-sizing:border-box}
        .jwl-proof-grid{display:flex;gap:24px;flex-wrap:wrap;justify-content:center;align-items:flex-start;max-width:1200px;margin:0 auto}
        .jwl-proof-card{background:#fff;border-radius:16px;width:360px;overflow:hidden;display:flex;flex-direction:column;border:1px solid #ECE7DF;box-shadow:0 8px 24px rgba(0,0,0,0.05);position:relative;transition:box-shadow .25s ease,border-color .25s ease,transform .3s ease}
        .jwl-proof-card:hover{box-shadow:0 16px 36px rgba(201,123,99,0.15);border-color:#C97B63;transform:translateY(-4px)}
        .jwl-stairs{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
        .jwl-stairs span{position:absolute;left:0;right:0;height:25%;background:#F0EEE9;opacity:0;transition:opacity .3s ease}
        .jwl-stairs span:nth-child(1){bottom:0%;transition-delay:0ms}
        .jwl-stairs span:nth-child(2){bottom:25%;transition-delay:60ms}
        .jwl-stairs span:nth-child(3){bottom:50%;transition-delay:120ms}
        .jwl-stairs span:nth-child(4){bottom:75%;transition-delay:180ms}
        .jwl-proof-card:hover .jwl-stairs span{opacity:1}
        .jwl-proof-card > *:not(.jwl-stairs){position:relative;z-index:1}
        .jwl-proof-badge-bar{background:#C9A84C;color:#2C2200;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;text-align:center;padding:12px 16px}
        .jwl-proof-shot{position:relative;height:190px;min-height:190px;background-color:#E8E2D6;background-size:cover;background-position:center center;background-repeat:no-repeat;border-bottom:1px solid #ECE7DF;text-decoration:none;display:block;width:100%}
        .jwl-proof-visit{position:absolute;bottom:12px;left:12px;background:#0d0d0d;color:#fff;font-size:11px;font-weight:600;padding:6px 12px;border-radius:20px;display:flex;align-items:center;gap:5px;opacity:0;transform:translateY(6px);transition:opacity .2s ease,transform .2s ease;text-decoration:none;box-shadow:0 3px 10px rgba(0,0,0,0.35)}
        .jwl-proof-shot:hover .jwl-proof-visit{opacity:1;transform:translateY(0)}
        .jwl-proof-body{padding:26px 24px 20px;text-align:center}
        .jwl-proof-stat{font-size:42px;font-weight:700;color:#C97B63;line-height:1;margin:0 0 6px}
        .jwl-proof-stat-label{font-size:13px;color:#888;margin:0 0 4px;line-height:1.4}
        .jwl-proof-name{font-size:15px;font-weight:700;color:#0d0d0d;margin:14px 0 4px;line-height:1.5}
        .jwl-proof-badge-strategy{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;padding:5px 12px;border-radius:20px;margin-top:8px}
        .jwl-proof-badge-strategy.low{background:#EAF3E4;color:#3B6D11}
        .jwl-proof-badge-strategy.medium{background:#FDF1DF;color:#9A5A00}
        .jwl-proof-toggle{margin:16px auto 0;display:inline-flex;align-items:center;gap:6px;background:none;border:none;outline:none;box-shadow:none;color:#C97B63;font-size:13px;font-weight:700;cursor:pointer;padding:8px 0;text-decoration:none}
        .jwl-proof-toggle:hover,.jwl-proof-toggle:focus{color:#9A5A3C;background:none;outline:none;box-shadow:none;border:none;text-decoration:none}
        .jwl-proof-toggle .ti{font-size:15px;transition:transform .2s ease;display:inline-block}
        .jwl-proof-toggle.open .ti{transform:rotate(180deg)}
        .jwl-proof-detail{display:none;text-align:left;padding:4px 24px 24px;border-top:1px solid #ECE7DF;margin-top:4px}
        .jwl-proof-detail.open{display:block}
        .jwl-proof-detail-section{margin-top:16px}
        .jwl-proof-detail-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#C9A84C;margin:0 0 8px}
        .jwl-proof-metrics{display:flex;gap:8px;flex-wrap:wrap}
        .jwl-proof-metric{background:#FAF3EC;border:1px solid #EAD9C8;border-radius:20px;padding:6px 12px;font-size:12px;color:#9A5A3C;font-weight:600}
        .jwl-proof-sub-list{list-style:none;margin:0;padding:0}
        .jwl-proof-sub-list li{font-size:13px;color:#444;line-height:1.6;padding:6px 0 6px 20px;position:relative}
        .jwl-proof-sub-list li::before{content:'';position:absolute;left:0;top:13px;width:8px;height:8px;border-radius:50%;background:#C97B63}
        .jwl-proof-note{text-align:center;max-width:640px;margin:30px auto 0;font-size:12px;color:#999;line-height:1.6}
        .jwl-proof-stat-sub{font-size:13px;font-weight:700;color:#C97B63;margin:0 0 4px}
        .jwl-proof-gmb-shot{margin:4px 0 10px;border-radius:10px;overflow:hidden;border:1px solid #ECE7DF}
        .jwl-proof-gmb-shot img{display:block;width:100%;height:auto}
        .jwl-proof-gmb-caption-static{font-size:12.5px;color:#666;line-height:1.5;margin:0 0 16px}
        @media (max-width:768px){.jwl-proof-card{width:100%;max-width:400px}}
      `}</style>
      <div className="jwl-proof-grid">
        {CARDS.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </div>
      <p className="jwl-proof-note">Chiffres issus de Google Search Console et Google Business Profile, données juillet 2026.</p>
    </div>
  );
}
