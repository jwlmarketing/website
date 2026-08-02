import CategoryForm from "@/components/admin/CategoryForm";
import { saveCategory } from "../actions";

export default function NewCategory() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Nouvelle catégorie</h1>
      <div className="mt-6">
        <CategoryForm action={saveCategory} />
      </div>
    </div>
  );
}
