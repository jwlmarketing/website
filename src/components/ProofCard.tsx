"use client";

import { useState } from "react";
import Image from "next/image";

type DetailSection = { title: string; items: string[] };

export type ProofCardData = {
  badge: string;
  siteUrl: string;
  thumbUrl: string;
  stat: string;
  statLabel: string;
  statSub?: string;
  name: string[];
  strategy: string;
  strategyLevel: "low" | "medium";
  metrics?: string[];
  gmbShot?: { src: string; alt: string; caption: string };
  detailSections: DetailSection[];
};

export default function ProofCard({ data }: { data: ProofCardData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex w-[360px] flex-col overflow-hidden rounded-2xl border border-[#ece7df] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:border-[#c97b63] hover:shadow-[0_16px_36px_rgba(201,123,99,0.15)]">
      <div className="bg-gold py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-[#2c2200]">
        {data.badge}
      </div>

      <a
        href={data.siteUrl}
        target="_blank"
        rel="noopener"
        className="group relative block h-[190px] min-h-[190px] w-full border-b border-[#ece7df] bg-cover bg-center"
        style={{ backgroundImage: `url('${data.thumbUrl}')`, backgroundColor: "#e8e2d6" }}
      >
        <span className="absolute bottom-3 left-3 rounded-full bg-[#0d0d0d] px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition-all group-hover:translate-y-0 group-hover:opacity-100">
          Voir le site ↗
        </span>
      </a>

      <div className="px-6 pb-5 pt-[26px] text-center">
        <div className="text-[42px] font-bold leading-none text-[#c97b63]">
          {data.stat}
        </div>
        <div className="mb-1 text-[13px] leading-tight text-[#888]">
          {data.statLabel}
        </div>
        {data.statSub && (
          <div className="text-[13px] font-bold text-[#c97b63]">
            {data.statSub}
          </div>
        )}
        <div className="my-3.5 text-[15px] font-bold leading-snug text-[#0d0d0d]">
          {data.name.map((line, i) => (
            <span key={i}>
              {line}
              {i < data.name.length - 1 && <br />}
            </span>
          ))}
        </div>
        <span
          className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold ${
            data.strategyLevel === "low"
              ? "bg-[#eaf3e4] text-[#3b6d11]"
              : "bg-[#fdf1df] text-[#9a5a00]"
          }`}
        >
          {data.strategy}
        </span>
        <button
          onClick={() => setOpen((o) => !o)}
          className="mx-auto mt-4 flex items-center gap-1.5 text-[13px] font-bold text-[#c97b63] hover:text-[#9a5a3c]"
        >
          Voir le détail
          <span className={`transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
        </button>
      </div>

      {open && (
        <div className="mt-1 border-t border-[#ece7df] px-6 pb-6 pt-1 text-left">
          {data.gmbShot && (
            <>
              <div className="mb-2.5 mt-1 overflow-hidden rounded-[10px] border border-[#ece7df]">
                <Image
                  src={data.gmbShot.src}
                  alt={data.gmbShot.alt}
                  width={1200}
                  height={640}
                  className="block h-auto w-full"
                />
              </div>
              <p className="mb-4 text-[12.5px] leading-relaxed text-[#666]">
                👉 {data.gmbShot.caption}
              </p>
            </>
          )}

          {data.metrics && (
            <div className="flex flex-wrap gap-2">
              {data.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-[#ead9c8] bg-[#faf3ec] px-3 py-1.5 text-xs font-semibold text-[#9a5a3c]"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          {data.detailSections.map((sec) => (
            <div key={sec.title} className="mt-4">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gold">
                {sec.title}
              </p>
              <ul className="space-y-1.5">
                {sec.items.map((item) => (
                  <li key={item} className="relative pl-5 text-[13px] leading-relaxed text-[#444]">
                    <span className="absolute left-0 top-[9px] h-2 w-2 rounded-full bg-[#c97b63]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
