import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export default async function TagsPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const posts = getAllPosts();
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.tags || []) {
      counts.set(t, (counts.get(t) || 0) + 1);
    }
  }
  const tags = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Tags</h2>
        <span className="row-meta">Générés automatiquement depuis les articles</span>
      </div>
      <div className="card-body-p">
        {tags.length === 0 ? (
          <p className="empty-msg">Aucun tag pour le moment. Ajoute des tags depuis l&apos;éditeur d&apos;article.</p>
        ) : (
          <div className="tags-cloud">
            {tags.map(([tag, count]) => (
              <div key={tag} className="tag-row">
                <span className="tag-chip">#{tag}</span>
                <span className="tag-count">{count} article{count > 1 ? "s" : ""}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
