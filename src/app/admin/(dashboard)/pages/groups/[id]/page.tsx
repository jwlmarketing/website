import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import GroupForm from "@/components/admin/GroupForm";
import { saveGroup } from "../../actions";

export default async function EditGroup({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = await prisma.pageGroup.findUnique({ where: { id } });
  if (!group) notFound();

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">
        Modifier : {group.name}
      </h1>
      <div className="mt-6">
        <GroupForm group={group} action={saveGroup} />
      </div>
    </div>
  );
}
