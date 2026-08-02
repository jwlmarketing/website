import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteGroup } from "../actions";

export default async function AdminGroupsList() {
  const groups = await prisma.pageGroup.findMany({
    include: { pages: true },
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-black">
          Groupes de pages
        </h1>
        <div className="flex gap-3">
          <Link href="/admin/pages" className="text-sm text-[#555] hover:text-gold">
            ← Retour aux pages
          </Link>
          <Link
            href="/admin/pages/groups/new"
            className="rounded-[5px] border-2 border-gold bg-gold px-5 py-2.5 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            + Nouveau groupe
          </Link>
        </div>
      </div>

      <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {groups.length === 0 && (
          <p className="p-6 text-sm text-[#888]">
            Aucun groupe pour le moment. Crée-en un, ex : &quot;Services&quot;.
          </p>
        )}
        {groups.map((g) => (
          <div key={g.id} className="flex items-center justify-between p-5">
            <div>
              <p className="font-semibold text-black">{g.name}</p>
              <p className="text-xs text-[#888]">
                {g.pages.length} page{g.pages.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/pages/groups/${g.id}`} className="text-sm text-gold hover:underline">
                Modifier
              </Link>
              <form action={deleteGroup}>
                <input type="hidden" name="id" value={g.id} />
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
