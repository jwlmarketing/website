import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CategoryForm from "@/components/admin/CategoryForm";
import { saveCategory } from "../actions";

export default async function EditCategory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) notFound();

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Modifier : {category.name}</h1>
      <div className="mt-6">
        <CategoryForm category={category} action={saveCategory} />
      </div>
    </div>
  );
}
