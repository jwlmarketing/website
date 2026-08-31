import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllPosts, getCategories } from "@/lib/blog";
import { addCategoryAction, deleteCategoryAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const categories = getCategories().sort((a, b) => a.order - b.order);
  const posts = getAllPosts();
  const countFor = (slug: string) => posts.filter((p) => p.category?.slug === slug).length;

  return (
    <div className="two-col-layout">
      <div className="col-form">
        <div className="card">
          <div className="card-header">
            <h2>Nouvelle catégorie</h2>
          </div>
          <div className="card-body-p">
            <form action={addCategoryAction} className="form-grid">
              <div className="form-group">
                <label>Nom</label>
                <input name="name" required />
              </div>
              <div className="form-group">
                <label>Slug (optionnel)</label>
                <input name="slug" placeholder="généré depuis le nom si vide" />
              </div>
              <div className="form-group">
                <label>Couleur</label>
                <div className="color-row">
                  <input type="color" name="color" defaultValue="#A8874A" className="color-picker" />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" rows={2} />
              </div>
              <button type="submit" className="btn-or w-full">
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-list">
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Articles</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.slug}>
                  <td>
                    <span className="color-dot" style={{ background: c.color, marginRight: 8 }} />
                    <strong>{c.name}</strong>
                    <span className="row-meta">/{c.slug}</span>
                  </td>
                  <td>{countFor(c.slug)}</td>
                  <td>
                    <form action={deleteCategoryAction}>
                      <input type="hidden" name="slug" value={c.slug} />
                      <button type="submit" className="tbl-btn tbl-btn--danger" title="Supprimer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={3} className="empty-row">
                    Aucune catégorie.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
