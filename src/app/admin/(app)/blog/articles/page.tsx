import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllPosts } from "@/lib/blog";
import DeleteButton from "../DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminBlogList() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const posts = getAllPosts();

  return (
    <>
      <div className="table-toolbar">
        <span className="total-count">{posts.length} article{posts.length > 1 ? "s" : ""}</span>
        <Link href="/admin/blog/new" className="btn-or btn-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Nouvel article
        </Link>
      </div>

      <div className="table-wrapper">
        {posts.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={40} height={40}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <p>
              Aucun article pour le moment.{" "}
              <Link href="/admin/blog/new" className="row-link">
                Créer le premier
              </Link>
            </p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Statut</th>
                <th>Publié le</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.slug}>
                  <td>
                    <div className="article-title-cell">
                      <div>
                        <strong>{p.title}</strong>
                        <div className="slug">/blog/{p.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {p.category ? (
                      <span>
                        <span
                          className="color-dot"
                          style={{ background: p.category.color, marginRight: 6 }}
                        />
                        {p.category.name}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>
                    <span className={`status-badge status-${p.status === "published" ? "published" : "draft"}`}>
                      {p.status === "published" ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td>{p.publishedAt ? new Date(p.publishedAt).toLocaleDateString("fr-FR") : "—"}</td>
                  <td>
                    <div className="table-actions">
                      <a href={`/blog/${p.slug}`} target="_blank" className="tbl-btn" title="Voir" rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </a>
                      <Link href={`/admin/blog/${p.slug}/edit`} className="tbl-btn" title="Modifier">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </Link>
                      <DeleteButton slug={p.slug} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
