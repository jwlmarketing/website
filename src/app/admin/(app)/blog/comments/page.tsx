import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllComments } from "@/lib/comments";
import { approveCommentAction, markSpamAction, deleteCommentAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function CommentsPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const comments = getAllComments();

  if (comments.length === 0) {
    return (
      <div className="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={40} height={40}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <p>Aucun commentaire pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Auteur</th>
            <th>Commentaire</th>
            <th>Article</th>
            <th>Statut</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <td>
                <div className="comment-author-cell">
                  <div>
                    <strong>{c.author_name}</strong>
                    <div className="row-meta">{c.author_email}</div>
                  </div>
                </div>
              </td>
              <td className="comment-text-cell">{c.content}</td>
              <td>
                <a href={`/blog/${c.post_slug}`} target="_blank" rel="noreferrer" className="row-link">
                  {c.post_slug}
                </a>
              </td>
              <td>
                <span className={`status-badge status-${c.status}`}>
                  {c.status === "approved" ? "Approuvé" : c.status === "spam" ? "Spam" : "En attente"}
                </span>
              </td>
              <td>{new Date(c.created_at).toLocaleDateString("fr-FR")}</td>
              <td>
                <div className="table-actions">
                  {c.status !== "approved" && (
                    <form action={approveCommentAction}>
                      <input type="hidden" name="id" value={c.id} />
                      <button type="submit" className="tbl-btn tbl-btn--green" title="Approuver">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </button>
                    </form>
                  )}
                  {c.status !== "spam" && (
                    <form action={markSpamAction}>
                      <input type="hidden" name="id" value={c.id} />
                      <button type="submit" className="tbl-btn" title="Marquer comme spam">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        </svg>
                      </button>
                    </form>
                  )}
                  <form action={deleteCommentAction}>
                    <input type="hidden" name="id" value={c.id} />
                    <button type="submit" className="tbl-btn tbl-btn--danger" title="Supprimer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
