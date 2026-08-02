import GroupForm from "@/components/admin/GroupForm";
import { saveGroup } from "../../actions";

export default function NewGroup() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Nouveau groupe</h1>
      <div className="mt-6">
        <GroupForm action={saveGroup} />
      </div>
    </div>
  );
}
