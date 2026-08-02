"use client";

import { useState } from "react";
import { BLOCK_LABELS, emptyBlock, type Block, type FaqItem, type CardItem } from "@/lib/blocks/types";

export default function BlockEditor({
  name,
  initialBlocks,
}: {
  name: string;
  initialBlocks: Block[];
}) {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [adding, setAdding] = useState(false);

  function update(i: number, next: Block) {
    setBlocks((bs) => bs.map((b, idx) => (idx === i ? next : b)));
  }

  function remove(i: number) {
    setBlocks((bs) => bs.filter((_, idx) => idx !== i));
  }

  function move(i: number, dir: -1 | 1) {
    setBlocks((bs) => {
      const next = [...bs];
      const j = i + dir;
      if (j < 0 || j >= next.length) return bs;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  function addBlock(type: Block["type"]) {
    setBlocks((bs) => [...bs, emptyBlock(type)]);
    setAdding(false);
  }

  return (
    <div>
      <input type="hidden" name={name} value={JSON.stringify(blocks)} />

      <div className="space-y-4">
        {blocks.map((block, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wide text-gold">
                {BLOCK_LABELS[block.type]}
              </p>
              <div className="flex gap-2 text-xs">
                <button type="button" onClick={() => move(i, -1)} className="text-[#888] hover:text-black">
                  ↑
                </button>
                <button type="button" onClick={() => move(i, 1)} className="text-[#888] hover:text-black">
                  ↓
                </button>
                <button type="button" onClick={() => remove(i)} className="text-red-500 hover:underline">
                  Supprimer
                </button>
              </div>
            </div>
            <BlockFields block={block} onChange={(b) => update(i, b)} />
          </div>
        ))}
      </div>

      <div className="mt-4">
        {adding ? (
          <div className="flex flex-wrap gap-2 rounded-2xl border border-gold bg-[#fdfaf3] p-4">
            {(Object.keys(BLOCK_LABELS) as Block["type"][]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => addBlock(t)}
                className="rounded-full border border-gold px-4 py-2 text-xs font-medium text-black hover:bg-gold hover:text-white"
              >
                {BLOCK_LABELS[t]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setAdding(false)}
              className="rounded-full px-4 py-2 text-xs text-[#888]"
            >
              Annuler
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="w-full rounded-2xl border-2 border-dashed border-gold py-4 text-sm font-medium text-gold hover:bg-[#fdfaf3]"
          >
            + Ajouter un bloc
          </button>
        )}
      </div>
    </div>
  );
}

function BlockFields({
  block,
  onChange,
}: {
  block: Block;
  onChange: (b: Block) => void;
}) {
  const inputCls =
    "mt-1 w-full rounded border border-[#ddd] px-3 py-2 text-sm outline-none focus:border-gold";
  const labelCls = "block text-xs font-semibold text-black";

  if (block.type === "hero") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Titre</label>
          <input className={inputCls} value={block.title} onChange={(e) => onChange({ ...block, title: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Sous-titre</label>
          <input className={inputCls} value={block.subtitle ?? ""} onChange={(e) => onChange({ ...block, subtitle: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Texte du bouton</label>
            <input className={inputCls} value={block.buttonText ?? ""} onChange={(e) => onChange({ ...block, buttonText: e.target.value })} />
          </div>
          <div>
            <label className={labelCls}>Lien du bouton</label>
            <input className={inputCls} value={block.buttonLink ?? ""} onChange={(e) => onChange({ ...block, buttonLink: e.target.value })} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Image (URL)</label>
          <input className={inputCls} value={block.imageUrl ?? ""} onChange={(e) => onChange({ ...block, imageUrl: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "heading") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Kicker (petit texte au-dessus)</label>
          <input className={inputCls} value={block.kicker ?? ""} onChange={(e) => onChange({ ...block, kicker: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Titre</label>
          <input className={inputCls} value={block.title} onChange={(e) => onChange({ ...block, title: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Accent (partie dorée du titre)</label>
          <input className={inputCls} value={block.accent ?? ""} onChange={(e) => onChange({ ...block, accent: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Sous-texte</label>
          <input className={inputCls} value={block.subtext ?? ""} onChange={(e) => onChange({ ...block, subtext: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "text") {
    return (
      <div>
        <label className={labelCls}>Texte (laisse une ligne vide entre les paragraphes)</label>
        <textarea rows={6} className={inputCls} value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Image (URL)</label>
          <input className={inputCls} value={block.url} onChange={(e) => onChange({ ...block, url: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Texte alternatif</label>
          <input className={inputCls} value={block.alt ?? ""} onChange={(e) => onChange({ ...block, alt: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Légende</label>
          <input className={inputCls} value={block.caption ?? ""} onChange={(e) => onChange({ ...block, caption: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "cta") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Texte (optionnel)</label>
          <input className={inputCls} value={block.text ?? ""} onChange={(e) => onChange({ ...block, text: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Texte du bouton</label>
            <input className={inputCls} value={block.buttonText} onChange={(e) => onChange({ ...block, buttonText: e.target.value })} />
          </div>
          <div>
            <label className={labelCls}>Lien du bouton</label>
            <input className={inputCls} value={block.buttonLink} onChange={(e) => onChange({ ...block, buttonLink: e.target.value })} />
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "faq") {
    const faqBlock = block;
    const items = faqBlock.items;
    const updateItem = (i: number, item: FaqItem) => {
      onChange({ ...faqBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input
              className={inputCls}
              placeholder="Question"
              value={it.q}
              onChange={(e) => updateItem(i, { ...it, q: e.target.value })}
            />
            <textarea
              className={inputCls}
              placeholder="Réponse"
              rows={3}
              value={it.a}
              onChange={(e) => updateItem(i, { ...it, a: e.target.value })}
            />
            <button
              type="button"
              onClick={() => onChange({ ...faqBlock, items: items.filter((_, idx) => idx !== i) })}
              className="mt-1 text-xs text-red-500 hover:underline"
            >
              Supprimer cette question
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange({ ...faqBlock, items: [...items, { q: "", a: "" }] })}
          className="text-xs font-semibold text-gold hover:underline"
        >
          + Ajouter une question
        </button>
      </div>
    );
  }

  if (block.type === "cards") {
    const cardsBlock = block;
    const items = cardsBlock.items;
    const updateItem = (i: number, item: CardItem) => {
      onChange({ ...cardsBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input
              className={inputCls}
              placeholder="Titre de la carte"
              value={it.title}
              onChange={(e) => updateItem(i, { ...it, title: e.target.value })}
            />
            <textarea
              className={inputCls}
              placeholder="Texte"
              rows={2}
              value={it.text}
              onChange={(e) => updateItem(i, { ...it, text: e.target.value })}
            />
            <button
              type="button"
              onClick={() => onChange({ ...cardsBlock, items: items.filter((_, idx) => idx !== i) })}
              className="mt-1 text-xs text-red-500 hover:underline"
            >
              Supprimer cette carte
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange({ ...cardsBlock, items: [...items, { title: "", text: "" }] })}
          className="text-xs font-semibold text-gold hover:underline"
        >
          + Ajouter une carte
        </button>
      </div>
    );
  }

  return null;
}
