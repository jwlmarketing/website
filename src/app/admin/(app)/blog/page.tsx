import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const posts = getAllPosts();
  const published = posts.filter((p) => p.status === "published");
  const recent = [...posts]
    .sort((a, b) => (b.publishedAt || b.updatedAt).localeCompare(a.publishedAt || a.updatedAt))
    .slice(0, 5);

  return (
    <>
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-icon stat-icon--or">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div>
            <div className="stat-value">{published.length}</div>
            <div className="stat-label">Articles publiés</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div>
            <div className="stat-value">—</div>
            <div className="stat-label">Vues totales (non suivi)</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-icon--green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <div className="stat-value">—</div>
            <div className="stat-label">Commentaires (aucun système)</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-icon--orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div>
            <div className="stat-value">{posts.length - published.length}</div>
            <div className="stat-label">Brouillons</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dash-panel">
          <div className="panel-header">
            <h2 className="panel-title">Derniers articles</h2>
            <Link href="/admin/blog/articles" className="panel-link">
              Voir tout
            </Link>
          </div>
          <div className="panel-body">
            {recent.length ? (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((p) => (
                    <tr key={p.slug}>
                      <td>
                        <strong>{p.title}</strong>
                      </td>
                      <td>
                        <span className={`status-badge status-${p.status === "published" ? "published" : "draft"}`}>
                          {p.status === "published" ? "Publié" : "Brouillon"}
                        </span>
                      </td>
                      <td>
                        {new Date(p.publishedAt || p.updatedAt).toLocaleDateString("fr-FR")}
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link href={`/admin/blog/${p.slug}/edit`} className="tbl-btn" title="Modifier">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </Link>
                          {p.status === "published" && (
                            <a href={`/blog/${p.slug}`} target="_blank" className="tbl-btn" title="Voir" rel="noreferrer">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="empty-msg">
                Aucun article pour le moment. <Link href="/admin/blog/new">Créer le premier</Link>
              </p>
            )}
          </div>
        </div>

        <div className="dash-panel">
          <div className="panel-header">
            <h2 className="panel-title">Actions rapides</h2>
          </div>
          <div className="panel-body">
            <div className="quick-actions">
              <Link href="/admin/blog/new" className="quick-action">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Nouvel article
              </Link>
              <Link href="/admin/blog/categories" className="quick-action">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                Catégories
              </Link>
              <Link href="/admin/blog/media" className="quick-action">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                Médiathèque
              </Link>
              <a href="/blog" target="_blank" className="quick-action" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                Voir le blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
