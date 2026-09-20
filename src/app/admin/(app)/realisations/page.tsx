import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllCaseStudies, getIndexPage } from "@/lib/realisations";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function RealisationsAdminPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const indexPage = getIndexPage();
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <div className="table-toolbar">
        <span className="total-count">
          {caseStudies.length} cas client{caseStudies.length > 1 ? "s" : ""}
        </span>
        <Link href="/admin/realisations/new" className="btn-or btn-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Nouveau cas client
        </Link>
      </div>

      <div className="table-wrapper" style={{ marginBottom: 20 }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Page</th>
              <th>Statut</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="article-title-cell">
                  <div>
                    <strong>Page d&apos;accueil</strong>
                    <div className="slug">/realisations — {indexPage.blocks.length} bloc(s)</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="status-badge status-published">Publié</span>
              </td>
              <td>
                <div className="table-actions">
                  <a href="/realisations" target="_blank" className="tbl-btn" title="Voir" rel="noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </a>
                  <Link href="/admin/realisations/index-page" className="tbl-btn" title="Modifier">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-wrapper">
        {caseStudies.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={40} height={40}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <p>
              Aucun cas client pour le moment.{" "}
              <Link href="/admin/realisations/new" className="row-link">
                Créer le premier
              </Link>
            </p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Statut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((cs) => (
                <tr key={cs.slug}>
                  <td>
                    <div className="article-title-cell">
                      <div>
                        <strong>{cs.title}</strong>
                        <div className="slug">/realisations/{cs.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`status-badge status-${cs.status === "published" ? "published" : "draft"}`}
                    >
                      {cs.status === "published" ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <a
                        href={`/realisations/${cs.slug}`}
                        target="_blank"
                        className="tbl-btn"
                        title="Voir"
                        rel="noreferrer"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </a>
                      <Link href={`/admin/realisations/${cs.slug}/edit`} className="tbl-btn" title="Modifier">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </Link>
                      <DeleteButton slug={cs.slug} />
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
