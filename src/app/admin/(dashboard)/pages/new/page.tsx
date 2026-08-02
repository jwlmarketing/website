import { prisma } from "@/lib/prisma";
import PageForm from "@/components/admin/PageForm";
import { savePage } from "../actions";

export default async function NewPage() {
  const groups = await prisma.pageGroup.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Nouvelle page</h1>
      <div className="mt-6 max-w-2xl">
        <PageForm groups={groups} action={savePage} />
      </div>
    </div>
  );
}
