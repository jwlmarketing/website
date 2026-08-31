import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";

export default async function SettingsPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="settings-card">
      <h2>À propos de ce blog</h2>
      <div className="form-row">
        <label>Nom du site</label>
        <div className="form-control" style={{ background: "var(--bg)", cursor: "default" }}>
          JWL Marketing Blog
        </div>
        <p className="form-help">Défini dans le code (src/app/blog) — pas de réglages en base de données.</p>
      </div>
      <div className="form-row">
        <label>Stockage des articles</label>
        <div className="form-control" style={{ background: "var(--bg)", cursor: "default" }}>
          content/blog/*.mdx (fichiers Markdown, versionnés sur JWL Hub)
        </div>
      </div>
      <div className="form-row">
        <label>Catégories</label>
        <div className="form-control" style={{ background: "var(--bg)", cursor: "default" }}>
          content/categories.json — gérées depuis{" "}
          <a href="/admin/blog/categories" className="row-link">
            l&apos;écran Catégories
          </a>
        </div>
      </div>
    </div>
  );
}
