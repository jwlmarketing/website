import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { deleteMediaAction } from "./actions";
import UploadForm from "./UploadForm";

export const dynamic = "force-dynamic";

const MEDIA_DIR = path.join(process.cwd(), "content/uploads/blog");

export default async function MediaPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const files = fs.existsSync(MEDIA_DIR)
    ? fs
        .readdirSync(MEDIA_DIR)
        .filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
        .sort()
    : [];

  return (
    <>
      <UploadForm />

      {files.length === 0 ? (
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={40} height={40}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p>Aucune image pour le moment.</p>
        </div>
      ) : (
        <div className="media-grid">
          {files.map((f) => (
            <div key={f} className="media-item">
              <div className="media-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/blog/${f}`} alt={f} />
                <div className="media-overlay">
                  <form action={deleteMediaAction}>
                    <input type="hidden" name="name" value={f} />
                    <button type="submit" className="media-delete-btn" title="Supprimer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <div className="media-info">
                <span className="media-name">{f}</span>
                <span className="media-size">/images/blog/{f}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
