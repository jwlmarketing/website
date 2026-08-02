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
  const page = await prisma.page.findUnique({ where: { id } });
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
            content: page.content as { html?: string },
          }}
          action={savePage}
        />
      </div>
    </div>
  );
}
