import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePage } from "./actions";

export default async function AdminPagesList() {
  const [groups, ungrouped] = await Promise.all([
    prisma.pageGroup.findMany({
      include: { pages: { orderBy: { updatedAt: "desc" } } },
      orderBy: { order: "asc" },
    }),
    prisma.page.findMany({
      where: { groupId: null },
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-black">Pages</h1>
        <div className="flex gap-3">
          <Link href="/admin/pages/groups" className="rounded-[5px] border-2 border-black px-5 py-2.5 text-sm font-medium text-black hover:bg-black hover:text-white">
            Gérer les groupes
          </Link>
          <Link
            href="/admin/pages/new"
            className="rounded-[5px] border-2 border-gold bg-gold px-5 py-2.5 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            + Nouvelle page
          </Link>
        </div>
      </div>

      {groups.map((g) => (
        <div key={g.id} className="mt-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gold">
            {g.name}
          </p>
          <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {g.pages.length === 0 && (
              <p className="p-5 text-sm text-[#888]">Aucune page dans ce groupe.</p>
            )}
            {g.pages.map((p) => (
              <PageRow key={p.id} page={p} />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#888]">
          Sans groupe
        </p>
        <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {ungrouped.length === 0 && (
            <p className="p-5 text-sm text-[#888]">Aucune page.</p>
          )}
          {ungrouped.map((p) => (
            <PageRow key={p.id} page={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PageRow({ page: p }: { page: { id: string; title: string; slug: string; published: boolean } }) {
  return (
    <div className="flex items-center justify-between p-5">
      <div>
        <p className="font-semibold text-black">{p.title}</p>
        <p className="text-xs text-[#888]">
          /{p.slug} — {p.published ? "Publiée" : "Brouillon"}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link href={`/admin/pages/${p.id}`} className="text-sm text-gold hover:underline">
          Modifier
        </Link>
        <form action={deletePage}>
          <input type="hidden" name="id" value={p.id} />
          <button type="submit" className="text-sm text-red-500 hover:underline">
            Supprimer
          </button>
        </form>
      </div>
    </div>
  );
}
