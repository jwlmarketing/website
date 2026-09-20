"use client";

import { useState } from "react";
import {
  BLOCK_LABELS,
  emptyBlock,
  type Block,
  type CardItem,
  type GalleryImage,
  type TestimonialItem,
  type StatItem,
} from "@/lib/blocks/types";
import type { RealisationPage } from "@/lib/realisations";
import ImagePicker from "./ImagePicker";

const STRUCTURED_TYPES: Block["type"][] = [
  "hero",
  "heading",
  "text",
  "image",
  "gallery",
  "cta",
  "stats",
  "testimonials",
  "iconList",
  "video",
  "cards",
  "html",
];

export default function RealisationForm({
  page,
  isIndex,
  saveAction,
}: {
  page?: RealisationPage;
  isIndex: boolean;
  saveAction: (formData: FormData) => void;
}) {
  const [title, setTitle] = useState(page?.title || "");
  const [slug, setSlug] = useState(page?.slug || "");
  const [status, setStatus] = useState<"draft" | "published">(
    page?.status || "draft"
  );
  const [metaTitle, setMetaTitle] = useState(page?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    page?.metaDescription || ""
  );
  const [blocks, setBlocks] = useState<Block[]>(page?.blocks || []);

  function updateBlock(i: number, next: Block) {
    setBlocks((prev) => prev.map((b, idx) => (idx === i ? next : b)));
  }
  function removeBlock(i: number) {
    setBlocks((prev) => prev.filter((_, idx) => idx !== i));
  }
  function moveBlock(i: number, dir: -1 | 1) {
    setBlocks((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }
  function addBlock(type: Block["type"]) {
    setBlocks((prev) => [...prev, emptyBlock(type)]);
  }

  return (
    <form action={saveAction} className="mx-auto max-w-[900px] px-6 py-10">
      {page?.slug && !isIndex && (
        <input type="hidden" name="originalSlug" value={page.slug} />
      )}
      <input type="hidden" name="blocksJson" value={JSON.stringify(blocks)} />

      <h1 className="font-heading text-2xl font-semibold text-black">
        {isIndex
          ? "Page Réalisations (accueil)"
          : page
            ? `Modifier « ${page.title} »`
            : "Nouveau cas client"}
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-black">Titre</span>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
          />
        </label>

        {!isIndex && (
          <label className="block">
            <span className="text-sm font-medium text-black">
              Slug (URL : /realisations/…)
            </span>
            <input
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder={title || "dynamitz"}
              className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
            />
          </label>
        )}

        {!isIndex && (
          <label className="block">
            <span className="text-sm font-medium text-black">Statut</span>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
            >
              <option value="draft">Brouillon</option>
              <option value="published">Publié</option>
            </select>
          </label>
        )}

        <label className="block">
          <span className="text-sm font-medium text-black">
            Titre SEO (optionnel)
          </span>
          <input
            name="metaTitle"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-black">
            Description SEO (optionnel)
          </span>
          <textarea
            name="metaDescription"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={2}
            className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
          />
        </label>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold text-black">
            Contenu de la page
          </h2>
          <select
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) addBlock(e.target.value as Block["type"]);
              e.target.value = "";
            }}
            className="rounded-full border border-gold bg-white px-4 py-2 text-sm font-medium text-gold"
          >
            <option value="" disabled>
              + Ajouter un bloc
            </option>
            {STRUCTURED_TYPES.map((t) => (
              <option key={t} value={t}>
                {BLOCK_LABELS[t]}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 space-y-4">
          {blocks.length === 0 && (
            <p className="rounded-lg border border-dashed border-[#ddd] p-6 text-center text-sm text-[#888]">
              Aucun bloc pour l&apos;instant. Ajoute-en un ci-dessus.
            </p>
          )}
          {blocks.map((block, i) => (
            <div key={i} className="rounded-2xl border border-[#eee] p-4">
              <div className="flex items-center justify-between border-b border-[#eee] pb-2">
                <span className="text-sm font-semibold text-black">
                  {BLOCK_LABELS[block.type] || block.type}
                </span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => moveBlock(i, -1)}
                    disabled={i === 0}
                    className="rounded px-2 py-1 text-xs disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveBlock(i, 1)}
                    disabled={i === blocks.length - 1}
                    className="rounded px-2 py-1 text-xs disabled:opacity-30"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeBlock(i)}
                    className="rounded px-2 py-1 text-xs text-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="pt-3">
                <BlockEditor block={block} onChange={(b) => updateBlock(i, b)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-10 rounded-full bg-[#c9846f] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#b8735f]"
      >
        Enregistrer
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-[#555]">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-2 text-sm"
        />
      )}
    </label>
  );
}

function BlockEditor({
  block,
  onChange,
}: {
  block: Block;
  onChange: (b: Block) => void;
}) {
  switch (block.type) {
    case "hero":
      return (
        <div className="grid gap-3">
          <Field label="Titre" value={block.title} onChange={(v) => onChange({ ...block, title: v })} />
          <Field
            label="Sous-titre"
            value={block.subtitle || ""}
            onChange={(v) => onChange({ ...block, subtitle: v })}
          />
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Texte du bouton"
              value={block.buttonText || ""}
              onChange={(v) => onChange({ ...block, buttonText: v })}
            />
            <Field
              label="Lien du bouton"
              value={block.buttonLink || ""}
              onChange={(v) => onChange({ ...block, buttonLink: v })}
            />
          </div>
          <ImagePicker
            label="Image"
            value={block.imageUrl || ""}
            onChange={(v) => onChange({ ...block, imageUrl: v })}
          />
        </div>
      );

    case "heading":
      return (
        <div className="grid gap-3">
          <Field
            label="Kicker (petit texte au-dessus)"
            value={block.kicker || ""}
            onChange={(v) => onChange({ ...block, kicker: v })}
          />
          <Field label="Titre" value={block.title} onChange={(v) => onChange({ ...block, title: v })} />
          <Field
            label="Mot accentué (en couleur, optionnel)"
            value={block.accent || ""}
            onChange={(v) => onChange({ ...block, accent: v })}
          />
          <Field
            label="Sous-texte"
            value={block.subtext || ""}
            onChange={(v) => onChange({ ...block, subtext: v })}
            textarea
          />
        </div>
      );

    case "text":
      return (
        <Field
          label="Texte (un paragraphe par ligne vide)"
          value={block.text}
          onChange={(v) => onChange({ ...block, text: v })}
          textarea
        />
      );

    case "image":
      return (
        <div className="grid gap-3">
          <ImagePicker label="Image" value={block.url} onChange={(v) => onChange({ ...block, url: v })} />
          <Field
            label="Texte alternatif"
            value={block.alt || ""}
            onChange={(v) => onChange({ ...block, alt: v })}
          />
          <Field
            label="Légende (optionnel)"
            value={block.caption || ""}
            onChange={(v) => onChange({ ...block, caption: v })}
          />
        </div>
      );

    case "cta":
      return (
        <div className="grid gap-3">
          <Field
            label="Texte au-dessus du bouton"
            value={block.text || ""}
            onChange={(v) => onChange({ ...block, text: v })}
          />
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Texte du bouton"
              value={block.buttonText}
              onChange={(v) => onChange({ ...block, buttonText: v })}
            />
            <Field
              label="Lien du bouton"
              value={block.buttonLink}
              onChange={(v) => onChange({ ...block, buttonLink: v })}
            />
          </div>
        </div>
      );

    case "video":
      return (
        <div className="grid gap-3">
          <Field
            label="ID YouTube (ex: dQw4w9WgXcQ)"
            value={block.youtubeId}
            onChange={(v) => onChange({ ...block, youtubeId: v })}
          />
          <Field
            label="Titre (optionnel)"
            value={block.title || ""}
            onChange={(v) => onChange({ ...block, title: v })}
          />
        </div>
      );

    case "html":
      return (
        <Field
          label="HTML personnalisé"
          value={block.html}
          onChange={(v) => onChange({ ...block, html: v })}
          textarea
        />
      );

    case "gallery":
      return (
        <ListEditor<GalleryImage>
          items={block.images}
          onChange={(images) => onChange({ ...block, images })}
          empty={{ url: "" }}
          renderItem={(img, update) => (
            <div className="grid grid-cols-2 gap-2">
              <ImagePicker label="Image" value={img.url} onChange={(v) => update({ ...img, url: v })} />
              <Field label="Alt" value={img.alt || ""} onChange={(v) => update({ ...img, alt: v })} />
            </div>
          )}
          extra={
            <Field
              label="Titre de la galerie (optionnel)"
              value={block.title || ""}
              onChange={(v) => onChange({ ...block, title: v })}
            />
          }
        />
      );

    case "cards":
      return (
        <ListEditor<CardItem>
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
          empty={{ title: "", text: "" }}
          renderItem={(item, update) => (
            <div className="grid gap-2">
              <Field label="Titre" value={item.title} onChange={(v) => update({ ...item, title: v })} />
              <Field
                label="Texte"
                value={item.text}
                onChange={(v) => update({ ...item, text: v })}
                textarea
              />
            </div>
          )}
        />
      );

    case "testimonials":
      return (
        <ListEditor<TestimonialItem>
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
          empty={{ name: "", text: "" }}
          renderItem={(item, update) => (
            <div className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <Field label="Nom" value={item.name} onChange={(v) => update({ ...item, name: v })} />
                <Field
                  label="Rôle (optionnel)"
                  value={item.role || ""}
                  onChange={(v) => update({ ...item, role: v })}
                />
              </div>
              <Field
                label="Témoignage"
                value={item.text}
                onChange={(v) => update({ ...item, text: v })}
                textarea
              />
              <ImagePicker
                label="Photo (optionnel)"
                value={item.avatarUrl || ""}
                onChange={(v) => update({ ...item, avatarUrl: v })}
              />
            </div>
          )}
        />
      );

    case "stats":
      return (
        <ListEditor<StatItem>
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
          empty={{ value: "", label: "" }}
          renderItem={(item, update) => (
            <div className="grid grid-cols-2 gap-2">
              <Field label="Valeur (ex: +63)" value={item.value} onChange={(v) => update({ ...item, value: v })} />
              <Field label="Légende" value={item.label} onChange={(v) => update({ ...item, label: v })} />
            </div>
          )}
        />
      );

    case "iconList":
      return (
        <Field
          label="Liste (un élément par ligne)"
          value={block.items.join("\n")}
          onChange={(v) => onChange({ ...block, items: v.split("\n") })}
          textarea
        />
      );

    default:
      return (
        <Field
          label="JSON brut (type de bloc sans formulaire dédié)"
          value={JSON.stringify(block, null, 2)}
          onChange={(v) => {
            try {
              onChange(JSON.parse(v));
            } catch {
              // ignore invalid JSON while typing
            }
          }}
          textarea
        />
      );
  }
}

function ListEditor<T>({
  items,
  onChange,
  empty,
  renderItem,
  extra,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  empty: T;
  renderItem: (item: T, update: (next: T) => void) => React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <div className="grid gap-3">
      {extra}
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-[#eee] p-3">
          {renderItem(item, (next) =>
            onChange(items.map((it, idx) => (idx === i ? next : it)))
          )}
          <button
            type="button"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="mt-2 text-xs text-red-600"
          >
            Retirer cet élément
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, empty])}
        className="self-start rounded-full border border-gold px-3 py-1 text-xs font-medium text-gold"
      >
        + Ajouter un élément
      </button>
    </div>
  );
}
