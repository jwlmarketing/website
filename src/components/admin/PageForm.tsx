"use client";

import { useState } from "react";

type PageData = {
  id?: string;
  slug?: string;
  title?: string;
  metaTitle?: string | null;
  metaDesc?: string | null;
  content?: { html?: string };
  published?: boolean;
};

export default function PageForm({
  page,
  action,
}: {
  page?: PageData;
  action: (formData: FormData) => void;
}) {
  const [metaTitle, setMetaTitle] = useState(page?.metaTitle ?? "");
  const [metaDesc, setMetaDesc] = useState(page?.metaDesc ?? "");

  return (
    <form action={action} className="space-y-6">
      {page?.id && <input type="hidden" name="id" value={page.id} />}

      <div>
        <label className="block text-sm font-semibold text-black">Titre</label>
        <input
          name="title"
          defaultValue={page?.title}
          required
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">
          URL (slug) — ex: audit-seo-aix-en-provence
        </label>
        <input
          name="slug"
          defaultValue={page?.slug}
          required
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">
          Contenu (HTML)
        </label>
        <textarea
          name="content"
          defaultValue={page?.content?.html}
          rows={14}
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 font-mono text-xs outline-none focus:border-gold"
        />
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
        <div className="mt-3 rounded border border-neutral-200 bg-white p-3">
          <p className="truncate text-sm text-[#1a0dab]">
            {metaTitle || page?.title || "Titre de la page"}
          </p>
          <p className="text-xs text-[#006621]">
            jwl-marketing.fr/{page?.slug || "url-de-la-page"}
          </p>
          <p className="mt-1 text-xs text-[#545454]">
            {metaDesc || "Ajoute une méta-description pour l'aperçu Google."}
          </p>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="published"
          defaultChecked={page?.published ?? true}
          className="h-4 w-4 accent-[#c9a84c]"
        />
        Publiée
      </label>

      <button
        type="submit"
        className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
      >
        Enregistrer
      </button>
    </form>
  );
}
