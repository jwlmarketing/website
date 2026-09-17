"use client";

import { useState } from "react";
import { saveSettingsAction } from "./actions";
import type { BlogSettings } from "@/lib/blog";

const TABS = ["Général", "SEO", "Réseaux sociaux"] as const;

export default function SettingsForm({ settings }: { settings: BlogSettings }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Général");

  return (
    <form action={saveSettingsAction}>
      <div className="settings-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            className={`tab-btn ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={`settings-section ${tab === "Général" ? "active" : ""}`}>
        <div className="settings-card">
          <h2>Identité du blog</h2>
          <div className="form-row">
            <label>Nom du site</label>
            <input className="form-control" name="siteName" defaultValue={settings.siteName} />
          </div>
          <div className="form-row">
            <label>Accroche (hero du blog)</label>
            <input className="form-control" name="tagline" defaultValue={settings.tagline} />
          </div>
          <div className="form-row">
            <label>Description</label>
            <textarea className="form-control" name="description" defaultValue={settings.description} rows={2} />
          </div>
          <div className="form-row">
            <label>Texte du pied de page</label>
            <input className="form-control" name="footerText" defaultValue={settings.footerText} />
          </div>
          <p className="form-help">
            Les catégories se gèrent depuis l&apos;écran{" "}
            <a href="/admin/blog/categories" className="row-link">
              Catégories
            </a>
            . Les articles sont stockés en fichiers Markdown (content/blog/*.mdx), versionnés sur JWL Hub.
          </p>
        </div>
      </div>

      <div className={`settings-section ${tab === "SEO" ? "active" : ""}`}>
        <div className="settings-card">
          <h2>Référencement</h2>
          <div className="form-row">
            <label>Titre SEO (balise title)</label>
            <input className="form-control" name="seoTitle" defaultValue={settings.seoTitle} />
          </div>
          <div className="form-row">
            <label>Meta description</label>
            <textarea className="form-control" name="seoDescription" defaultValue={settings.seoDescription} rows={2} />
          </div>
        </div>
      </div>

      <div className={`settings-section ${tab === "Réseaux sociaux" ? "active" : ""}`}>
        <div className="settings-card">
          <h2>Liens réseaux sociaux</h2>
          <div className="form-grid">
            <div className="form-row">
              <label>Facebook</label>
              <input className="form-control" name="socialFacebook" defaultValue={settings.socialFacebook} placeholder="https://facebook.com/..." />
            </div>
            <div className="form-row">
              <label>Instagram</label>
              <input className="form-control" name="socialInstagram" defaultValue={settings.socialInstagram} placeholder="https://instagram.com/..." />
            </div>
            <div className="form-row">
              <label>LinkedIn</label>
              <input className="form-control" name="socialLinkedin" defaultValue={settings.socialLinkedin} placeholder="https://linkedin.com/..." />
            </div>
            <div className="form-row">
              <label>Twitter / X</label>
              <input className="form-control" name="socialTwitter" defaultValue={settings.socialTwitter} placeholder="https://x.com/..." />
            </div>
            <div className="form-row">
              <label>YouTube</label>
              <input className="form-control" name="socialYoutube" defaultValue={settings.socialYoutube} placeholder="https://youtube.com/..." />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn-or">
        Enregistrer
      </button>
    </form>
  );
}
