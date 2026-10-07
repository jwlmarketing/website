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
import VideoPicker from "./VideoPicker";

const STRUCTURED_TYPES: Block["type"][] = [
  "hero",
  "carousel",
  "textImage",
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
  allCaseStudies = [],
}: {
  page?: RealisationPage;
  isIndex: boolean;
  saveAction: (formData: FormData) => void;
  allCaseStudies?: { slug: string; title: string }[];
}) {
  const [title, setTitle] = useState(page?.title || "");
  const [slug, setSlug] = useState(page?.slug || "");
  const [slugTouched, setSlugTouched] = useState(!!page);
  const [status, setStatus] = useState<"draft" | "published">(
    page?.status || "draft"
  );
  const [coverImage, setCoverImage] = useState(page?.coverImage || "");
  const [metaTitle, setMetaTitle] = useState(page?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    page?.metaDescription || ""
  );
  const [blocks, setBlocks] = useState<Block[]>(page?.blocks || []);

  function autoSlug(v: string) {
    setTitle(v);
    if (!slugTouched) {
      setSlug(
        v
          .toLowerCase()
          .normalize("NFD")
          .replace(/[̀-ͯ]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      );
    }
  }

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
    <form action={saveAction}>
      {page?.slug && !isIndex && (
        <input type="hidden" name="originalSlug" value={page.slug} />
      )}
      <input type="hidden" name="blocksJson" value={JSON.stringify(blocks)} />
      {isIndex && <input type="hidden" name="status" value="published" />}

      <div className="editor-layout">
        <div className="editor-main">
          <div className="title-group">
            <input
              className="title-input"
              name="title"
              placeholder={isIndex ? "Titre de la page" : "Titre du cas client"}
              value={title}
              onChange={(e) => autoSlug(e.target.value)}
              required
            />
            {!isIndex && (
              <div className="slug-row">
                <span className="slug-prefix">/realisations/</span>
                <input
                  className="slug-input"
                  name="slug"
                  placeholder="dynamitz"
                  value={slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setSlug(e.target.value);
                  }}
                />
              </div>
            )}
          </div>

          <div className="editor-panel">
            <div className="panel-toggle">Contenu</div>
            <div className="panel-body">
              <div className="table-toolbar" style={{ marginBottom: 0 }}>
                <span className="total-count">
                  {blocks.length} bloc{blocks.length > 1 ? "s" : ""}
                </span>
                <select
                  defaultValue=""
                  className="btn-secondary btn-sm"
                  onChange={(e) => {
                    if (e.target.value) addBlock(e.target.value as Block["type"]);
                    e.target.value = "";
                  }}
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

              {blocks.length === 0 ? (
                <div className="empty-state">
                  <p>Aucun bloc pour l&apos;instant. Ajoute-en un ci-dessus.</p>
                </div>
              ) : (
                blocks.map((block, i) => (
                  <div key={i} className="block-card">
                    <div className="block-card-header">
                      <span>{BLOCK_LABELS[block.type] || block.type}</span>
                      <div className="table-actions">
                        <button
                          type="button"
                          className="tbl-btn"
                          title="Monter"
                          onClick={() => moveBlock(i, -1)}
                          disabled={i === 0}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                            <line x1="12" y1="19" x2="12" y2="5" />
                            <polyline points="5 12 12 5 19 12" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="tbl-btn"
                          title="Descendre"
                          onClick={() => moveBlock(i, 1)}
                          disabled={i === blocks.length - 1}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="tbl-btn tbl-btn--danger"
                          title="Supprimer ce bloc"
                          onClick={() => removeBlock(i)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="block-card-body">
                      <BlockEditor block={block} onChange={(b) => updateBlock(i, b)} allCaseStudies={allCaseStudies} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="editor-sidebar">
          {!isIndex && (
            <div className="editor-panel">
              <div className="panel-toggle">Image de couverture</div>
              <div className="panel-body">
                <input type="hidden" name="coverImage" value={coverImage} />
                <ImagePicker
                  label="Utilisée si ce projet est ajouté dans un bloc carrousel"
                  value={coverImage}
                  onChange={setCoverImage}
                />
              </div>
            </div>
          )}

          <div className="editor-panel">
            <div className="panel-toggle">Publication</div>
            <div className="panel-body">
              {!isIndex && (
                <div className="form-group">
                  <label>Statut</label>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                  </select>
                </div>
              )}
              <div className="pub-actions">
                <button type="submit" className="btn-publish">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Enregistrer
                </button>
              </div>
            </div>
          </div>

          <div className="editor-panel">
            <div className="panel-toggle">SEO (optionnel)</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Titre SEO</label>
                <input
                  name="metaTitle"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Description SEO</label>
                <textarea
                  name="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <div className="form-group">
      <label>{label}</label>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={4} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

function ColorField({
  label,
  value,
  defaultColor,
  onChange,
}: {
  label: string;
  value: string | undefined;
  defaultColor: string;
  onChange: (v: string | undefined) => void;
}) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="color"
          value={value || defaultColor}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: 40, height: 32, padding: 2, cursor: "pointer" }}
        />
        {value && (
          <button type="button" className="small-link" onClick={() => onChange(undefined)}>
            Réinitialiser
          </button>
        )}
      </div>
    </div>
  );
}

function ImagePositionField({
  value,
  onChange,
}: {
  value: "left" | "right" | undefined;
  onChange: (v: "left" | "right") => void;
}) {
  return (
    <div className="form-group">
      <label>Position de l&apos;image</label>
      <select value={value || "right"} onChange={(e) => onChange(e.target.value as "left" | "right")}>
        <option value="right">Image à droite</option>
        <option value="left">Image à gauche</option>
      </select>
    </div>
  );
}

function BlockEditor({
  block,
  onChange,
  allCaseStudies = [],
}: {
  block: Block;
  onChange: (b: Block) => void;
  allCaseStudies?: { slug: string; title: string }[];
}) {
  switch (block.type) {
    case "carousel": {
      const cBlock = block;
      const toggleSlug = (slug: string) => {
        const slugs = cBlock.slugs.includes(slug)
          ? cBlock.slugs.filter((s) => s !== slug)
          : [...cBlock.slugs, slug];
        onChange({ ...cBlock, slugs });
      };
      const moveSlug = (i: number, dir: -1 | 1) => {
        const slugs = [...cBlock.slugs];
        const j = i + dir;
        if (j < 0 || j >= slugs.length) return;
        [slugs[i], slugs[j]] = [slugs[j], slugs[i]];
        onChange({ ...cBlock, slugs });
      };
      return (
        <div className="form-grid">
          {allCaseStudies.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>
              Aucune réalisation publiée pour l&apos;instant.
            </p>
          ) : (
            <>
              <div className="form-group">
                <label>Réalisations disponibles</label>
                {allCaseStudies.map((cs) => (
                  <label key={cs.slug} className="toggle-row">
                    <input
                      type="checkbox"
                      checked={cBlock.slugs.includes(cs.slug)}
                      onChange={() => toggleSlug(cs.slug)}
                    />
                    <span>{cs.title}</span>
                  </label>
                ))}
              </div>
              {cBlock.slugs.length > 0 && (
                <div className="form-group">
                  <label>Ordre dans le carrousel</label>
                  {cBlock.slugs.map((slug, i) => {
                    const cs = allCaseStudies.find((c) => c.slug === slug);
                    return (
                      <div key={slug} className="list-item-card">
                        <span>{cs?.title || slug}</span>
                        <div className="table-actions">
                          <button type="button" className="tbl-btn" onClick={() => moveSlug(i, -1)} disabled={i === 0}>
                            ↑
                          </button>
                          <button type="button" className="tbl-btn" onClick={() => moveSlug(i, 1)} disabled={i === cBlock.slugs.length - 1}>
                            ↓
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      );
    }
    case "hero":
      return (
        <div className="form-grid">
          <Field
            label="Titre (entoure un passage de {{ }} pour le mettre en couleur, ex: {{Un site web}} qui inspire confiance)"
            value={block.title}
            onChange={(v) => onChange({ ...block, title: v })}
            textarea
          />
          <ColorField
            label="Couleur des passages entre {{ }}"
            value={block.titleColor}
            defaultColor="#c9846f"
            onChange={(v) => onChange({ ...block, titleColor: v })}
          />
          <div className="form-group">
            <label>Taille du titre (px, vide = taille par défaut du site)</label>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="number"
                min={16}
                max={120}
                placeholder="38"
                value={block.titleSize ?? ""}
                onChange={(e) =>
                  onChange({
                    ...block,
                    titleSize: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                style={{ width: 90 }}
              />
              {block.titleSize !== undefined && (
                <button
                  type="button"
                  className="small-link"
                  onClick={() => onChange({ ...block, titleSize: undefined })}
                >
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
          <Field
            label="Sous-titre"
            value={block.subtitle || ""}
            onChange={(v) => onChange({ ...block, subtitle: v })}
          />
          <div className="form-grid form-grid-2">
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
          <ImagePositionField
            value={block.imagePosition}
            onChange={(v) => onChange({ ...block, imagePosition: v })}
          />
        </div>
      );

    case "textImage":
      return (
        <div className="form-grid">
          <Field
            label="Titre (optionnel)"
            value={block.title || ""}
            onChange={(v) => onChange({ ...block, title: v })}
          />
          <ColorField
            label="Couleur du titre"
            value={block.titleColor}
            defaultColor="#000000"
            onChange={(v) => onChange({ ...block, titleColor: v })}
          />
          <Field
            label="Texte (un paragraphe par ligne vide · **gras** · [texte](lien) · lignes commençant par «- » = liste à puces)"
            value={block.text || ""}
            onChange={(v) => onChange({ ...block, text: v })}
            textarea
          />
          <div className="form-grid form-grid-2">
            <Field
              label="Texte du bouton (optionnel)"
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
            value={block.imageUrl}
            onChange={(v) => onChange({ ...block, imageUrl: v })}
          />
          <ImagePositionField
            value={block.imagePosition}
            onChange={(v) => onChange({ ...block, imagePosition: v })}
          />
        </div>
      );

    case "heading":
      return (
        <div className="form-grid">
          <Field
            label="Kicker (petit texte au-dessus)"
            value={block.kicker || ""}
            onChange={(v) => onChange({ ...block, kicker: v })}
          />
          <Field
            label="Titre (entoure un passage de {{ }} pour le mettre en couleur, ex: transformer {{un outil complexe}} en plateforme)"
            value={block.title}
            onChange={(v) => onChange({ ...block, title: v })}
            textarea
          />
          <Field
            label="Mot accentué à la fin (en couleur, optionnel)"
            value={block.accent || ""}
            onChange={(v) => onChange({ ...block, accent: v })}
          />
          <ColorField
            label="Couleur (mot accentué + passages entre {{ }})"
            value={block.accentColor}
            defaultColor="#c9846f"
            onChange={(v) => onChange({ ...block, accentColor: v })}
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
          label="Texte (un paragraphe par ligne vide · **gras** · [texte](lien) · lignes commençant par «- » = liste à puces)"
          value={block.text}
          onChange={(v) => onChange({ ...block, text: v })}
          textarea
        />
      );

    case "image":
      return (
        <div className="form-grid">
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
        <div className="form-grid">
          <Field
            label="Texte au-dessus du bouton"
            value={block.text || ""}
            onChange={(v) => onChange({ ...block, text: v })}
          />
          <div className="form-grid form-grid-2">
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
        <div className="form-grid">
          <VideoPicker
            label="Vidéo importée (MP4, WEBM, MOV)"
            value={block.videoUrl || ""}
            onChange={(v) => onChange({ ...block, videoUrl: v })}
          />
          <Field
            label="Ou ID YouTube (ex: dQw4w9WgXcQ) — ignoré si une vidéo est importée ci-dessus"
            value={block.youtubeId || ""}
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
            <div className="form-grid">
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
            <div className="form-grid">
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
            <div className="form-grid">
              <div className="form-grid form-grid-2">
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
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label>Note (0 = aucune)</label>
                  <select
                    value={String(item.rating ?? 0)}
                    onChange={(e) => update({ ...item, rating: Number(e.target.value) || undefined })}
                  >
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n === 0 ? "Aucune" : "★".repeat(n)}
                      </option>
                    ))}
                  </select>
                </div>
                <Field
                  label="Lien 'Lire la suite' (optionnel)"
                  value={item.readMoreUrl || ""}
                  onChange={(v) => update({ ...item, readMoreUrl: v })}
                />
              </div>
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
            <div className="form-grid form-grid-2">
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
    <div className="form-grid">
      {extra}
      {items.map((item, i) => (
        <div key={i} className="list-item-card">
          {renderItem(item, (next) =>
            onChange(items.map((it, idx) => (idx === i ? next : it)))
          )}
          <button
            type="button"
            className="small-link"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
          >
            Retirer cet élément
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn-secondary btn-sm"
        style={{ alignSelf: "flex-start" }}
        onClick={() => onChange([...items, empty])}
      >
        + Ajouter un élément
      </button>
    </div>
  );
}
