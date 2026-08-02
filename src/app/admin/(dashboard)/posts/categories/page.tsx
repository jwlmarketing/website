import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteCategory } from "./actions";

export default async function AdminCategoriesList() {
  const categories = await prisma.category.findMany({
    include: { posts: true },
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-black">Catégories</h1>
        <div className="flex gap-3">
          <Link href="/admin/posts" className="text-sm text-[#555] hover:text-gold">← Retour au blog</Link>
          <Link href="/admin/posts/categories/new" className="rounded-[5px] border-2 border-gold bg-gold px-5 py-2.5 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]">
            + Nouvelle catégorie
          </Link>
        </div>
      </div>

      <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {categories.length === 0 && <p className="p-6 text-sm text-[#888]">Aucune catégorie.</p>}
        {categories.map((c) => (
          <div key={c.id} className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full" style={{ backgroundColor: c.color }} />
              <div>
                <p className="font-semibold text-black">{c.name}</p>
                <p className="text-xs text-[#888]">/{c.slug} — {c.posts.length} article{c.posts.length !== 1 ? "s" : ""}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/posts/categories/${c.id}`} className="text-sm text-gold hover:underline">Modifier</Link>
              <form action={deleteCategory}>
                <input type="hidden" name="id" value={c.id} />
                <button type="submit" className="text-sm text-red-500 hover:underline">Supprimer</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
