import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PageForm from "@/components/admin/PageForm";
import { savePage } from "../actions";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [page, groups] = await Promise.all([
    prisma.page.findUnique({ where: { id } }),
    prisma.pageGroup.findMany({ orderBy: { order: "asc" } }),
  ]);
  if (!page) notFound();

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">
        Modifier : {page.title}
      </h1>
      <div className="mt-6 max-w-2xl">
        <PageForm
          page={{
            ...page,
            content: page.content as { blocks?: import("@/lib/blocks/types").Block[] },
          }}
          groups={groups}
          action={savePage}
        />
      </div>
    </div>
  );
}
