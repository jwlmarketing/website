"use client";

import { useState } from "react";

type CategoryOption = { id: string; name: string };

type PostData = {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string | null;
  metaTitle?: string | null;
  metaDesc?: string | null;
  seoKeywords?: string | null;
  coverImage?: string | null;
  coverAlt?: string | null;
  categoryId?: string | null;
  tags?: { name: string }[];
  content?: { html?: string };
  status?: "draft" | "published" | "scheduled" | "trash";
  isFeatured?: boolean;
  allowComments?: boolean;
};

export default function PostForm({
  post,
  categories,
  action,
}: {
  post?: PostData;
  categories: CategoryOption[];
  action: (formData: FormData) => void;
}) {
  const [metaTitle, setMetaTitle] = useState(post?.metaTitle ?? "");
  const [metaDesc, setMetaDesc] = useState(post?.metaDesc ?? "");

  return (
    <form action={action} className="space-y-6">
      {post?.id && <input type="hidden" name="id" value={post.id} />}

      <div>
        <label className="block text-sm font-semibold text-black">Titre</label>
        <input
          name="title"
          defaultValue={post?.title}
          required
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">
          URL (slug) — ex: comment-trouver-des-clients
        </label>
        <input
          name="slug"
          defaultValue={post?.slug}
          required
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-black">Catégorie</label>
          <select
            name="categoryId"
            defaultValue={post?.categoryId ?? ""}
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          >
            <option value="">Aucune</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-black">Statut</label>
          <select
            name="status"
            defaultValue={post?.status ?? "draft"}
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          >
            <option value="draft">Brouillon</option>
            <option value="published">Publié</option>
            <option value="scheduled">Programmé</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">
          Tags (séparés par des virgules)
        </label>
        <input
          name="tags"
          defaultValue={post?.tags?.map((t) => t.name).join(", ") ?? ""}
          placeholder="ex: SEO, Google, visibilité locale"
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">Extrait</label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt ?? ""}
          rows={2}
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-black">
            Image de couverture (URL)
          </label>
          <input
            name="coverImage"
            defaultValue={post?.coverImage ?? ""}
            placeholder="/images/mon-article.jpg"
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black">
            Texte alternatif de l&apos;image
          </label>
          <input
            name="coverAlt"
            defaultValue={post?.coverAlt ?? ""}
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">
          Contenu (HTML)
        </label>
        <textarea
          name="content"
          defaultValue={post?.content?.html}
          rows={16}
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 font-mono text-xs outline-none focus:border-gold"
        />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="isFeatured" defaultChecked={post?.isFeatured ?? false} className="h-4 w-4 accent-[#c9a84c]" />
          Article mis en avant
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="allowComments" defaultChecked={post?.allowComments ?? true} className="h-4 w-4 accent-[#c9a84c]" />
          Autoriser les commentaires
        </label>
      </div>

      <div className="rounded-2xl border border-gold bg-[#fdfaf3] p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-gold">
          Référencement (SEO)
        </p>
        <div className="mt-3">
          <label className="block text-sm font-semibold text-black">
            Titre SEO ({metaTitle.length}/60)
          </label>
          <input
            name="metaTitle"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            maxLength={70}
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
        <div className="mt-3">
          <label className="block text-sm font-semibold text-black">
            Méta-description ({metaDesc.length}/160)
          </label>
          <textarea
            name="metaDesc"
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
            maxLength={180}
            rows={2}
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
        <div className="mt-3">
          <label className="block text-sm font-semibold text-black">Mots-clés SEO</label>
          <input
            name="seoKeywords"
            defaultValue={post?.seoKeywords ?? ""}
            placeholder="mot-clé 1, mot-clé 2"
            className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
        <div className="mt-3 rounded border border-neutral-200 bg-white p-3">
          <p className="truncate text-sm text-[#1a0dab]">
            {metaTitle || post?.title || "Titre de l'article"}
          </p>
          <p className="text-xs text-[#006621]">
            jwl-marketing.fr/blog/{post?.slug || "url-article"}
          </p>
          <p className="mt-1 text-xs text-[#545454]">
            {metaDesc || "Ajoute une méta-description pour l'aperçu Google."}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
      >
        Enregistrer
      </button>
    </form>
  );
}
