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
    <form action={savePostAction} className="space-y-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {post && <input type="hidden" name="originalSlug" value={post.slug} />}

      <div>
        <label className="mb-1 block text-sm font-semibold text-black">Titre</label>
        <input
          name="title"
          value={title}
          onChange={(e) => autoSlug(e.target.value)}
          required
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-black">Slug (URL)</label>
        <input
          name="slug"
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
        <p className="mt-1 text-xs text-[#999]">/blog/{slug || "..."}</p>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-black">Extrait</label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt || ""}
          rows={2}
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-black">Catégorie</label>
          <select
            name="category"
            defaultValue={post?.category?.slug || ""}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
          >
            <option value="">— Aucune —</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-black">Tags (séparés par des virgules)</label>
          <input
            name="tags"
            defaultValue={(post?.tags || []).join(", ")}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-black">Image de couverture (chemin)</label>
          <input
            name="coverImage"
            defaultValue={post?.coverImage || ""}
            placeholder="/images/blog/mon-image.jpg"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
          />
          <p className="mt-1 text-xs text-[#999]">
            Dépose l&apos;image dans public/images/blog/ via JWL Hub, puis colle le chemin ici.
          </p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-black">Texte alternatif de l&apos;image</label>
          <input
            name="coverAlt"
            defaultValue={post?.coverAlt || ""}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-black">Contenu (Markdown)</label>
        <textarea
          name="content"
          defaultValue={post?.content || ""}
          rows={18}
          required
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 font-mono text-sm focus:border-gold focus:outline-none"
        />
        <p className="mt-1 text-xs text-[#999]">
          Markdown standard : ## Titre, **gras**, *italique*, - liste, [lien](url)
        </p>
      </div>

      <details className="rounded-lg border border-neutral-200 p-4">
        <summary className="cursor-pointer text-sm font-semibold text-black">SEO (optionnel)</summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-black">Titre SEO</label>
            <input
              name="seoTitle"
              defaultValue={post?.seoTitle || ""}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-black">Description SEO</label>
            <textarea
              name="seoDescription"
              defaultValue={post?.seoDescription || ""}
              rows={2}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
            />
          </div>
        </div>
      </details>

      <div className="flex items-center gap-4 border-t border-neutral-100 pt-5">
        <div>
          <label className="mb-1 block text-sm font-semibold text-black">Statut</label>
          <select
            name="status"
            defaultValue={post?.status || "draft"}
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
          >
            <option value="draft">Brouillon</option>
            <option value="published">Publié</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-black">Date de publication</label>
          <input
            type="date"
            name="publishedAt"
            defaultValue={post?.publishedAt ? post.publishedAt.slice(0, 10) : ""}
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-gold focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="ml-auto rounded-lg bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#b5903a]"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
}
