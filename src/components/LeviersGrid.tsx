"use client";

import { useState } from "react";
import Image from "next/image";
import type { PublicGatedDocument } from "@/lib/gatedContent";
import GatedDocumentsModal from "@/components/GatedDocumentsModal";

export type Lever = {
  label: string;
  image: string;
  desc: string;
  note?: string;
};

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
            <div className="aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src={lever.image}
                alt={lever.label}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-black">
              {lever.label}
            </p>
            <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-neutral-600">
              {lever.desc}
            </p>
            {lever.note && (
              <p className="mt-1 max-w-[320px] text-sm text-[#2fa86a]">{lever.note}</p>
            )}
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[#c9846f] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#b56f5a]">
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
