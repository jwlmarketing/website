import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdminUser, destroySession } from "@/lib/jwlAuth";
import { getAllPosts } from "@/lib/blog";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminBlogList() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-black">Articles du blog</h1>
          <p className="text-sm text-[#888]">{posts.length} article{posts.length > 1 ? "s" : ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog/new"
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#b5903a]"
          >
            + Nouvel article
          </Link>
          <form
            action={async () => {
              "use server";
              await destroySession();
              redirect("/admin/login");
            }}
          >
            <button type="submit" className="text-sm text-[#888] hover:text-black">
              Se déconnecter
            </button>
          </form>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm text-[#888]">Aucun article pour le moment.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-xs uppercase tracking-wide text-[#888]">
              <tr>
                <th className="px-4 py-3">Titre</th>
                <th className="px-4 py-3">Catégorie</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Publié le</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.slug} className="border-t border-neutral-100">
                  <td className="px-4 py-3 font-medium text-black">{p.title}</td>
                  <td className="px-4 py-3 text-[#666]">{p.category?.name || "—"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        p.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {p.status === "published" ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#666]">
                    {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString("fr-FR") : "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/blog/${p.slug}`} className="text-[#888] hover:text-gold" target="_blank">
                        Voir
                      </Link>
                      <Link href={`/admin/blog/${p.slug}/edit`} className="font-semibold text-gold hover:underline">
                        Modifier
                      </Link>
                      <DeleteButton slug={p.slug} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
