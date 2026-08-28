"use client";

import { useEffect, useRef, useState } from "react";

export default function ClientResultsWidget() {
  const imgWrapRef = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="widget">
      <div className="stats-left">
        <div className="stat-card">
          <div className="position-main">
            N°1 sur&nbsp;
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>
          <div className="position-sub">« Dépannage informatique Digne-les-Bains »</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Appels qualifiés</div>
          <div className="stat-value">
            <span className="accent">+ 63 appels</span>
            <span className="stat-value-label">Appels qualifiés</span>
          </div>
          <div className="stat-sub">générés en 6 mois, soit + de 10 appels/mois</div>
        </div>
      </div>

      <div className="browser-col">
        <div className="promo-badge">Stratégie mensuelle SEO</div>
        <div className="browser">
          <div className="browser-bar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <div className="browser-url">www.proxiclic-provence.fr</div>
          </div>
          <a
            href="https://www.proxiclic-provence.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="browser-content"
            ref={imgWrapRef}
          >
            <img
              className={inView ? "in-view" : ""}
              src="https://api.jwl-marketing.fr/proxiclic-provence/proxiclic-site.webp"
              alt="Site Proxiclic-Provence"
            />
          </a>
        </div>
      </div>

      <div className="stats-right">
        <div className="stat-card">
          <div className="stat-label">Avis Google</div>
          <div className="stat-value">
            <span className="accent">16 avis</span>
            <span className="stat-value-label">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-green">l</span>
              <span className="g-red">e</span>
            </span>
          </div>
          <div className="stat-sub">soit une moyenne de 5/5</div>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-value">
            <span className="accent">+ 3 500 vues</span>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="stat-sub">vues de la fiche Google en 6 mois</div>
          <div className="ring-row">
            <div className="gauge-ring">
              <svg viewBox="0 0 56 56" width="52" height="52">
                <circle className="ring-bg" cx="28" cy="28" r="23"></circle>
                <circle
                  className="ring-fg"
                  cx="28"
                  cy="28"
                  r="23"
                  strokeDasharray="144.5"
                  strokeDashoffset="18"
                ></circle>
              </svg>
            </div>
            <div className="ring-trend">
              Visibilité Google Business <b>multipliée</b> en 6 mois
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .widget {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .stats-left,
        .stats-right {
          flex: 1 1 220px;
          max-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .stats-left {
          order: 1;
        }
        .browser-col {
          order: 2;
        }
        .stats-right {
          order: 3;
        }

        .browser-col {
          flex: 1 1 560px;
          max-width: 600px;
          position: relative;
        }
        .browser {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e6e1d6;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }
        .browser-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: #f1efe9;
          border-bottom: 1px solid #e6e1d6;
        }
        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          flex: 0 0 auto;
        }
        .dot.red {
          background: #ff5f57;
        }
        .dot.yellow {
          background: #febc2e;
        }
        .dot.green {
          background: #28c840;
        }
        .browser-url {
          flex: 1;
          text-align: center;
          color: #7a7a7a;
          font-size: 13px;
          background: #fff;
          border: 1px solid #e6e1d6;
          border-radius: 6px;
          padding: 5px 12px;
          margin-left: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .browser-content {
          position: relative;
          display: block;
          overflow: hidden;
          cursor: pointer;
        }
        .browser-content :global(img) {
          display: block;
          width: 100%;
          height: auto;
          transform: scale(1);
          transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .browser-content :global(img.in-view) {
          animation: proxiclic-breathe 6s ease-in-out 1.4s infinite;
          transform: scale(1.06);
        }
        .browser-content:hover :global(img) {
          transform: scale(1.1);
        }
        @keyframes proxiclic-breathe {
          0%,
          100% {
            transform: scale(1.06) translateY(0);
          }
          50% {
            transform: scale(1.09) translateY(-3px);
          }
        }

        .promo-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #d4af37, #b8892e);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 999px;
          box-shadow: 0 10px 25px rgba(184, 137, 46, 0.45);
          cursor: default;
          z-index: 2;
          white-space: nowrap;
          max-width: 90%;
          text-align: center;
        }
        .promo-badge::after {
          content: "Plan sélectionné pour obtenir ces résultats";
          position: absolute;
          top: 120%;
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #1f1f1f;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 10px;
          white-space: normal;
          width: 200px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .promo-badge:hover::after {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e6e1d6;
          border-radius: 20px;
          padding: 20px 22px;
          color: #1f1f1f;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
        }
        .stat-label {
          font-size: 13px;
          color: #7a7a7a;
          margin-bottom: 10px;
        }
        .stat-value {
          font-size: 26px;
          font-weight: 700;
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: #1f1f1f;
          flex-wrap: wrap;
        }
        .stat-value :global(.accent) {
          color: #b8892e;
        }
        .stat-value-label {
          font-size: 13px;
          font-weight: 500;
          color: #7a7a7a;
          line-height: 1.3;
        }
        .stat-sub {
          font-size: 13px;
          color: #7a7a7a;
          margin-top: 4px;
        }
        .icon {
          width: 17px;
          height: 17px;
          fill: none;
          stroke: #b8892e;
          stroke-width: 2;
          flex: 0 0 auto;
        }

        .ring-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 14px;
        }
        .gauge-ring {
          position: relative;
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
        }
        .gauge-ring :global(svg) {
          transform: rotate(-90deg);
        }
        .gauge-ring :global(.ring-bg) {
          fill: none;
          stroke: #ece7db;
          stroke-width: 6;
        }
        .gauge-ring :global(.ring-fg) {
          fill: none;
          stroke: #b8892e;
          stroke-width: 6;
          stroke-linecap: round;
        }
        .ring-trend {
          flex: 1;
          font-size: 12.5px;
          color: #7a7a7a;
          line-height: 1.4;
        }
        .ring-trend :global(b) {
          color: #b8892e;
        }

        .stars {
          display: flex;
          gap: 3px;
          margin-top: 10px;
        }
        .stars :global(svg) {
          width: 16px;
          height: 16px;
          fill: #b8892e;
        }

        .position-main {
          font-size: 20px;
          font-weight: 700;
          color: #b8892e;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
        }
        .position-sub {
          font-size: 13px;
          color: #7a7a7a;
          margin-top: 4px;
        }

        .g-blue {
          color: #4285f4;
        }
        .g-red {
          color: #ea4335;
        }
        .g-yellow {
          color: #fbbc05;
        }
        .g-green {
          color: #34a853;
        }

        @media (max-width: 860px) {
          .widget {
            gap: 16px;
          }
          .stats-left,
          .stats-right {
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 100%;
            justify-content: center;
          }
          .stat-card {
            flex: 1 1 240px;
          }
        }

        @media (max-width: 560px) {
          .widget {
            gap: 14px;
          }

          .browser-col {
            flex: 1 1 100%;
            max-width: 100%;
          }
          .browser {
            border-radius: 14px;
          }
          .browser-bar {
            padding: 10px 12px;
          }
          .browser-url {
            font-size: 11px;
            padding: 4px 8px;
          }

          .stats-left,
          .stats-right {
            flex-direction: column;
            max-width: 100%;
          }
          .stat-card {
            padding: 16px;
            flex: 1 1 100%;
          }
          .stat-value {
            font-size: 20px;
          }
          .position-main {
            font-size: 17px;
          }

          .promo-badge {
            font-size: 11px;
            padding: 8px 14px;
            top: -12px;
          }
          .promo-badge::after {
            width: 180px;
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}
