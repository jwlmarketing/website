import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePost } from "./actions";

export default async function AdminPostsList() {
  const posts = await prisma.post.findMany({ orderBy: { updatedAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-black">Blog</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-[5px] border-2 border-gold bg-gold px-5 py-2.5 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          + Nouvel article
        </Link>
      </div>

      <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {posts.length === 0 && (
          <p className="p-6 text-sm text-[#888]">Aucun article pour le moment.</p>
        )}
        {posts.map((p) => (
          <div key={p.id} className="flex items-center justify-between p-5">
            <div>
              <p className="font-semibold text-black">{p.title}</p>
              <p className="text-xs text-[#888]">
                /blog/{p.slug} — {p.published ? "Publié" : "Brouillon"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/posts/${p.id}`} className="text-sm text-gold hover:underline">
                Modifier
              </Link>
              <form action={deletePost}>
                <input type="hidden" name="id" value={p.id} />
                <button type="submit" className="text-sm text-red-500 hover:underline">
                  Supprimer
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
