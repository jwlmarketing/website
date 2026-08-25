"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReviewCard({
  name,
  when,
  avatar,
  text,
}: {
  name: string;
  when: string;
  avatar: string;
  text: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 220;
  const shown = expanded || !isLong ? text : text.slice(0, 220) + "…";

  return (
    <div className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-[#ece7df] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
      <div className="mb-3 flex items-center gap-3">
        <Image src={avatar} alt={`${name} — avis Google`} width={40} height={40} className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold text-black">{name}</p>
          <p className="text-xs text-[#888]">{when}</p>
        </div>
      </div>
      <div className="mb-2 text-gold" aria-hidden>
        ★★★★★
      </div>
      <p className="flex-1 whitespace-pre-line text-[13px] leading-relaxed text-[#444]">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 self-start text-xs font-semibold text-gold hover:text-[#9a5a3c]"
        >
          {expanded ? "Réduire" : "Lire la suite"}
        </button>
      )}
    </div>
  );
}
