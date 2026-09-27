"use client";

import { useState } from "react";
import Image from "next/image";
import type { PublicGatedDocument } from "@/lib/gatedContent";
import GatedDocumentsModal from "@/components/GatedDocumentsModal";

export type Lever = {
  label: string;
  color: string;
  shade: string;
  desc: string;
  isPartner?: boolean;
};

function LeverBadge({ color, shade }: { color: string; shade: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" aria-hidden>
      <polygon points="50,6 94,30 94,72 50,96 6,72 6,30" fill={shade} />
      <polygon points="50,20 80,36 80,66 50,82 20,66 20,36" fill={color} />
    </svg>
  );
}

export default function LeviersGrid({
  leviers,
  documentsByCategory,
}: {
  leviers: Lever[];
  documentsByCategory: Record<string, PublicGatedDocument[]>;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {leviers.map((lever) => (
          <button
            key={lever.label}
            type="button"
            onClick={() => setActive(lever.label)}
            className="flex flex-col items-start text-left transition hover:opacity-80"
          >
            {lever.isPartner ? (
              <div className="flex h-16 w-28 items-center justify-start">
                <Image
                  src="/images/entrepreneurielles-logo.png"
                  alt="Entrepreneuri'Elles"
                  width={112}
                  height={40}
                  className="h-auto w-full object-contain"
                />
              </div>
            ) : (
              <LeverBadge color={lever.color} shade={lever.shade} />
            )}
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-black">
              {lever.label}
            </p>
            <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-neutral-600">
              {lever.desc}
            </p>
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[#2fa86a] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#26905a]">
              En savoir plus
            </span>
          </button>
        ))}
      </div>

      {active && (
        <GatedDocumentsModal
          category={active}
          documents={documentsByCategory[active] || []}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
