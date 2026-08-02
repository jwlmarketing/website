"use client";

import { useState } from "react";

export default function GoogleVisibilityTest() {
  const [keyword, setKeyword] = useState("");

  function openSearch(images = false) {
    if (!keyword.trim()) return;
    const url = images
      ? `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(keyword)}`
      : `https://www.google.com/search?q=${encodeURIComponent(keyword)}`;
    window.open(url, "_blank", "noopener");
  }

  return (
    <div className="mx-auto max-w-[600px] rounded-2xl border border-gold bg-white p-8 text-center">
      <p className="font-heading text-lg font-semibold text-black">
        Teste ton positionnement Google
      </p>
      <p className="mt-1 text-sm text-[#888]">
        Entre un mot-clé comme tes clients le feraient (ex : dépannage
        Digne-les-Bains)
      </p>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Ton mot-clé"
        className="mt-4 w-full rounded border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => openSearch(false)}
          className="rounded-[5px] border-2 border-gold bg-gold px-6 py-3 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Voir sur Google
        </button>
        <button
          onClick={() => openSearch(true)}
          className="rounded-[5px] border-2 border-black px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white"
        >
          Voir sur Google Images
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-[#999]">
        Pour un résultat réel — ouvre d&apos;abord une fenêtre en navigation
        privée (Ctrl + Maj + N sur Chrome ou Ctrl + Maj + P sur Firefox),
        puis reviens taper ton mot-clé ici. Sans ça, Google personnalise les
        résultats en fonction de ton historique.
      </p>
    </div>
  );
}
