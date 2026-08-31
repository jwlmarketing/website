"use client";

import { useState } from "react";
import { savePostAction } from "./actions";
import type { BlogCategory, BlogPost } from "@/lib/blog";

export default function PostForm({
  post,
  categories,
}: {
  post?: BlogPost | null;
  categories: BlogCategory[];
}) {
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [slugTouched, setSlugTouched] = useState(!!post);
  const [status, setStatus] = useState(post?.status || "draft");

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

  return (
    <form action={savePostAction}>
      {post && <input type="hidden" name="originalSlug" value={post.slug} />}

      <div className="editor-layout">
        <div className="editor-main">
          <div className="title-group">
            <input
              className="title-input"
              name="title"
              placeholder="Titre de l'article"
              value={title}
              onChange={(e) => autoSlug(e.target.value)}
              required
            />
            <div className="slug-row">
              <span className="slug-prefix">/blog/</span>
              <input
                className="slug-input"
                name="slug"
                placeholder="slug-de-larticle"
                value={slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setSlug(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="editor-panel">
            <div className="panel-body">
              <div className="form-group">
                <label>Extrait</label>
                <textarea name="excerpt" defaultValue={post?.excerpt || ""} rows={2} />
              </div>
            </div>
          </div>

          <div className="editor-panel">
            <div className="panel-toggle">Contenu (Markdown)</div>
            <div className="panel-body">
              <div className="form-group">
                <textarea
                  name="content"
                  defaultValue={post?.content || ""}
                  rows={20}
                  required
                  style={{ fontFamily: "'SF Mono','Fira Mono',monospace", fontSize: "0.82rem" }}
                />
                <small>Markdown standard : ## Titre, **gras**, *italique*, - liste, [lien](url)</small>
              </div>
            </div>
          </div>

          <div className="editor-panel">
            <div className="panel-toggle">SEO (optionnel)</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Titre SEO</label>
                <input name="seoTitle" defaultValue={post?.seoTitle || ""} />
              </div>
              <div className="form-group">
                <label>Description SEO</label>
                <textarea name="seoDescription" defaultValue={post?.seoDescription || ""} rows={2} />
              </div>
            </div>
          </div>
        </div>

        <div className="editor-sidebar">
          <div className="editor-panel">
            <div className="panel-toggle">Publication</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Statut</label>
                <select name="status" value={status} onChange={(e) => setStatus(e.target.value as "draft" | "published")}>
                  <option value="draft">Brouillon</option>
                  <option value="published">Publié</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date de publication</label>
                <input
                  type="date"
                  name="publishedAt"
                  defaultValue={post?.publishedAt ? post.publishedAt.slice(0, 10) : ""}
                />
              </div>
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
            <div className="panel-toggle">Catégorie & tags</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Catégorie</label>
                <select name="category" defaultValue={post?.category?.slug || ""}>
                  <option value="">— Aucune —</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Tags (séparés par des virgules)</label>
                <input name="tags" defaultValue={(post?.tags || []).join(", ")} />
              </div>
            </div>
          </div>

          <div className="editor-panel">
            <div className="panel-toggle">Image de couverture</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Chemin de l&apos;image</label>
                <input
                  name="coverImage"
                  defaultValue={post?.coverImage || ""}
                  placeholder="/images/blog/mon-image.jpg"
                />
                <small>Dépose l&apos;image dans public/images/blog/ via JWL Hub, puis colle le chemin ici.</small>
              </div>
              <div className="form-group">
                <label>Texte alternatif</label>
                <input name="coverAlt" defaultValue={post?.coverAlt || ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
