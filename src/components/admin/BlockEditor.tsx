"use client";

import { useState } from "react";
import {
  BLOCK_LABELS,
  emptyBlock,
  type Block,
  type FaqItem,
  type CardItem,
  type GalleryImage,
  type TestimonialItem,
  type StatItem,
  type IconBoxItem,
  type TabItem,
  type AccordionItem,
  type ProgressItem,
  type PriceListItem,
  type SocialItem,
} from "@/lib/blocks/types";

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

  if (block.type === "html") {
    return (
      <div>
        <label className={labelCls}>HTML personnalisé</label>
        <textarea
          rows={8}
          className={inputCls + " font-mono"}
          value={block.html}
          onChange={(e) => onChange({ ...block, html: e.target.value })}
        />
        <p className="mt-1 text-xs text-[#999]">
          Échappatoire pour insérer n&apos;importe quel code HTML/CSS (ex :
          widget d&apos;un service tiers, mise en page spéciale).
        </p>
      </div>
    );
  }

  if (block.type === "gallery") {
    const galleryBlock = block;
    const images = galleryBlock.images;
    const updateImg = (i: number, img: GalleryImage) => {
      onChange({ ...galleryBlock, images: images.map((it, idx) => (idx === i ? img : it)) });
    };
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Titre (optionnel)</label>
          <input className={inputCls} value={galleryBlock.title ?? ""} onChange={(e) => onChange({ ...galleryBlock, title: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Colonnes</label>
          <select
            className={inputCls}
            value={galleryBlock.columns}
            onChange={(e) => onChange({ ...galleryBlock, columns: Number(e.target.value) as 2 | 3 | 4 })}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        {images.map((img, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input
              className={inputCls}
              placeholder="URL de l'image"
              value={img.url}
              onChange={(e) => updateImg(i, { ...img, url: e.target.value })}
            />
            <input
              className={inputCls}
              placeholder="Texte alternatif"
              value={img.alt ?? ""}
              onChange={(e) => updateImg(i, { ...img, alt: e.target.value })}
            />
            <button
              type="button"
              onClick={() => onChange({ ...galleryBlock, images: images.filter((_, idx) => idx !== i) })}
              className="mt-1 text-xs text-red-500 hover:underline"
            >
              Supprimer cette image
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange({ ...galleryBlock, images: [...images, { url: "" }] })}
          className="text-xs font-semibold text-gold hover:underline"
        >
          + Ajouter une image
        </button>
      </div>
    );
  }

  if (block.type === "video") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Titre (optionnel)</label>
          <input className={inputCls} value={block.title ?? ""} onChange={(e) => onChange({ ...block, title: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>ID vidéo YouTube (ex : -btM09DQ4zg)</label>
          <input className={inputCls} value={block.youtubeId} onChange={(e) => onChange({ ...block, youtubeId: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "testimonials") {
    const testiBlock = block;
    const items = testiBlock.items;
    const updateItem = (i: number, item: TestimonialItem) => {
      onChange({ ...testiBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Titre (optionnel)</label>
          <input className={inputCls} value={testiBlock.title ?? ""} onChange={(e) => onChange({ ...testiBlock, title: e.target.value })} />
        </div>
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input className={inputCls} placeholder="Nom" value={it.name} onChange={(e) => updateItem(i, { ...it, name: e.target.value })} />
            <input className={inputCls} placeholder="Rôle / entreprise (optionnel)" value={it.role ?? ""} onChange={(e) => updateItem(i, { ...it, role: e.target.value })} />
            <input className={inputCls} placeholder="Photo (URL, optionnel)" value={it.avatarUrl ?? ""} onChange={(e) => updateItem(i, { ...it, avatarUrl: e.target.value })} />
            <textarea className={inputCls} placeholder="Témoignage" rows={3} value={it.text} onChange={(e) => updateItem(i, { ...it, text: e.target.value })} />
            <button
              type="button"
              onClick={() => onChange({ ...testiBlock, items: items.filter((_, idx) => idx !== i) })}
              className="mt-1 text-xs text-red-500 hover:underline"
            >
              Supprimer ce témoignage
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange({ ...testiBlock, items: [...items, { name: "", text: "" }] })}
          className="text-xs font-semibold text-gold hover:underline"
        >
          + Ajouter un témoignage
        </button>
      </div>
    );
  }

  if (block.type === "iconList") {
    const listBlock = block;
    const items = listBlock.items;
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Titre (optionnel)</label>
          <input className={inputCls} value={listBlock.title ?? ""} onChange={(e) => onChange({ ...listBlock, title: e.target.value })} />
        </div>
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <input
              className={inputCls}
              value={it}
              onChange={(e) =>
                onChange({ ...listBlock, items: items.map((v, idx) => (idx === i ? e.target.value : v)) })
              }
            />
            <button
              type="button"
              onClick={() => onChange({ ...listBlock, items: items.filter((_, idx) => idx !== i) })}
              className="shrink-0 text-xs text-red-500 hover:underline"
            >
              Suppr.
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange({ ...listBlock, items: [...items, ""] })}
          className="text-xs font-semibold text-gold hover:underline"
        >
          + Ajouter une ligne
        </button>
      </div>
    );
  }

  if (block.type === "stats") {
    const statsBlock = block;
    const items = statsBlock.items;
    const updateItem = (i: number, item: StatItem) => {
      onChange({ ...statsBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <input className={inputCls} placeholder="Valeur (ex: 3 468)" value={it.value} onChange={(e) => updateItem(i, { ...it, value: e.target.value })} />
            <input className={inputCls} placeholder="Libellé" value={it.label} onChange={(e) => updateItem(i, { ...it, label: e.target.value })} />
            <button
              type="button"
              onClick={() => onChange({ ...statsBlock, items: items.filter((_, idx) => idx !== i) })}
              className="shrink-0 text-xs text-red-500 hover:underline"
            >
              Suppr.
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange({ ...statsBlock, items: [...items, { value: "", label: "" }] })}
          className="text-xs font-semibold text-gold hover:underline"
        >
          + Ajouter un chiffre
        </button>
      </div>
    );
  }

  if (block.type === "spacer") {
    return (
      <div>
        <label className={labelCls}>Hauteur</label>
        <select
          className={inputCls}
          value={block.height}
          onChange={(e) => onChange({ ...block, height: e.target.value as "small" | "medium" | "large" })}
        >
          <option value="small">Petit</option>
          <option value="medium">Moyen</option>
          <option value="large">Grand</option>
        </select>
      </div>
    );
  }

  if (block.type === "divider") {
    return <p className="text-xs text-[#888]">Aucun réglage — une simple ligne de séparation.</p>;
  }

  if (block.type === "iconBox") {
    const iconBlock = block;
    const items = iconBlock.items;
    const updateItem = (i: number, item: IconBoxItem) => {
      onChange({ ...iconBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input className={inputCls} placeholder="Emoji / icône (ex: ✓)" value={it.icon ?? ""} onChange={(e) => updateItem(i, { ...it, icon: e.target.value })} />
            <input className={inputCls} placeholder="Titre" value={it.title} onChange={(e) => updateItem(i, { ...it, title: e.target.value })} />
            <textarea className={inputCls} placeholder="Texte" rows={2} value={it.text} onChange={(e) => updateItem(i, { ...it, text: e.target.value })} />
            <button type="button" onClick={() => onChange({ ...iconBlock, items: items.filter((_, idx) => idx !== i) })} className="mt-1 text-xs text-red-500 hover:underline">
              Supprimer
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onChange({ ...iconBlock, items: [...items, { title: "", text: "" }] })} className="text-xs font-semibold text-gold hover:underline">
          + Ajouter un bloc icône
        </button>
      </div>
    );
  }

  if (block.type === "rating") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Note (1 à 5)</label>
          <input type="number" min={1} max={5} className={inputCls} value={block.value} onChange={(e) => onChange({ ...block, value: Number(e.target.value) })} />
        </div>
        <div>
          <label className={labelCls}>Légende (optionnel)</label>
          <input className={inputCls} value={block.label ?? ""} onChange={(e) => onChange({ ...block, label: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "tabs") {
    const tabsBlock = block;
    const items = tabsBlock.items;
    const updateItem = (i: number, item: TabItem) => {
      onChange({ ...tabsBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input className={inputCls} placeholder="Nom de l'onglet" value={it.label} onChange={(e) => updateItem(i, { ...it, label: e.target.value })} />
            <textarea className={inputCls} placeholder="Contenu" rows={2} value={it.content} onChange={(e) => updateItem(i, { ...it, content: e.target.value })} />
            <button type="button" onClick={() => onChange({ ...tabsBlock, items: items.filter((_, idx) => idx !== i) })} className="mt-1 text-xs text-red-500 hover:underline">
              Supprimer
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onChange({ ...tabsBlock, items: [...items, { label: "", content: "" }] })} className="text-xs font-semibold text-gold hover:underline">
          + Ajouter un onglet
        </button>
      </div>
    );
  }

  if (block.type === "accordion") {
    const accBlock = block;
    const items = accBlock.items;
    const updateItem = (i: number, item: AccordionItem) => {
      onChange({ ...accBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input className={inputCls} placeholder="Titre" value={it.title} onChange={(e) => updateItem(i, { ...it, title: e.target.value })} />
            <textarea className={inputCls} placeholder="Contenu" rows={2} value={it.content} onChange={(e) => updateItem(i, { ...it, content: e.target.value })} />
            <button type="button" onClick={() => onChange({ ...accBlock, items: items.filter((_, idx) => idx !== i) })} className="mt-1 text-xs text-red-500 hover:underline">
              Supprimer
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onChange({ ...accBlock, items: [...items, { title: "", content: "" }] })} className="text-xs font-semibold text-gold hover:underline">
          + Ajouter un élément
        </button>
      </div>
    );
  }

  if (block.type === "blockquote") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Citation</label>
          <textarea className={inputCls} rows={3} value={block.quote} onChange={(e) => onChange({ ...block, quote: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Auteur (optionnel)</label>
          <input className={inputCls} value={block.author ?? ""} onChange={(e) => onChange({ ...block, author: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "alert") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Style</label>
          <select className={inputCls} value={block.style} onChange={(e) => onChange({ ...block, style: e.target.value as "info" | "success" | "warning" })}>
            <option value="info">Info (bleu)</option>
            <option value="success">Succès (vert)</option>
            <option value="warning">Attention (orange)</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Texte</label>
          <textarea className={inputCls} rows={2} value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
        </div>
      </div>
    );
  }

  if (block.type === "progress") {
    const progBlock = block;
    const items = progBlock.items;
    const updateItem = (i: number, item: ProgressItem) => {
      onChange({ ...progBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <input className={inputCls} placeholder="Libellé" value={it.label} onChange={(e) => updateItem(i, { ...it, label: e.target.value })} />
            <input type="number" min={0} max={100} className={inputCls} placeholder="%" value={it.percent} onChange={(e) => updateItem(i, { ...it, percent: Number(e.target.value) })} />
            <button type="button" onClick={() => onChange({ ...progBlock, items: items.filter((_, idx) => idx !== i) })} className="shrink-0 text-xs text-red-500 hover:underline">
              Suppr.
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onChange({ ...progBlock, items: [...items, { label: "", percent: 50 }] })} className="text-xs font-semibold text-gold hover:underline">
          + Ajouter une barre
        </button>
      </div>
    );
  }

  if (block.type === "priceList") {
    const plBlock = block;
    const items = plBlock.items;
    const updateItem = (i: number, item: PriceListItem) => {
      onChange({ ...plBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Titre (optionnel)</label>
          <input className={inputCls} value={plBlock.title ?? ""} onChange={(e) => onChange({ ...plBlock, title: e.target.value })} />
        </div>
        {items.map((it, i) => (
          <div key={i} className="rounded border border-neutral-100 p-3">
            <input className={inputCls} placeholder="Nom" value={it.name} onChange={(e) => updateItem(i, { ...it, name: e.target.value })} />
            <input className={inputCls} placeholder="Prix" value={it.price} onChange={(e) => updateItem(i, { ...it, price: e.target.value })} />
            <input className={inputCls} placeholder="Description (optionnel)" value={it.description ?? ""} onChange={(e) => updateItem(i, { ...it, description: e.target.value })} />
            <button type="button" onClick={() => onChange({ ...plBlock, items: items.filter((_, idx) => idx !== i) })} className="mt-1 text-xs text-red-500 hover:underline">
              Supprimer
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onChange({ ...plBlock, items: [...items, { name: "", price: "" }] })} className="text-xs font-semibold text-gold hover:underline">
          + Ajouter une ligne
        </button>
      </div>
    );
  }

  if (block.type === "googleMap") {
    return (
      <div>
        <label className={labelCls}>URL d&apos;intégration Google Maps (Embed)</label>
        <input className={inputCls} value={block.embedUrl} onChange={(e) => onChange({ ...block, embedUrl: e.target.value })} />
        <p className="mt-1 text-xs text-[#999]">
          Sur Google Maps : Partager → Intégrer une carte → copie l&apos;URL du champ src.
        </p>
      </div>
    );
  }

  if (block.type === "socialIcons") {
    const socBlock = block;
    const items = socBlock.items;
    const updateItem = (i: number, item: SocialItem) => {
      onChange({ ...socBlock, items: items.map((it, idx) => (idx === i ? item : it)) });
    };
    return (
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <input className={inputCls} placeholder="Nom (ex: Instagram)" value={it.platform} onChange={(e) => updateItem(i, { ...it, platform: e.target.value })} />
            <input className={inputCls} placeholder="URL" value={it.url} onChange={(e) => updateItem(i, { ...it, url: e.target.value })} />
            <button type="button" onClick={() => onChange({ ...socBlock, items: items.filter((_, idx) => idx !== i) })} className="shrink-0 text-xs text-red-500 hover:underline">
              Suppr.
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onChange({ ...socBlock, items: [...items, { platform: "", url: "" }] })} className="text-xs font-semibold text-gold hover:underline">
          + Ajouter un réseau
        </button>
      </div>
    );
  }

  if (block.type === "button") {
    return (
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Texte du bouton</label>
          <input className={inputCls} value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Lien</label>
          <input className={inputCls} value={block.link} onChange={(e) => onChange({ ...block, link: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Alignement</label>
          <select className={inputCls} value={block.align} onChange={(e) => onChange({ ...block, align: e.target.value as "left" | "center" | "right" })}>
            <option value="left">Gauche</option>
            <option value="center">Centre</option>
            <option value="right">Droite</option>
          </select>
        </div>
      </div>
    );
  }

  return null;
}
