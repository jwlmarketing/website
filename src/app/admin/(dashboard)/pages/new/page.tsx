import PageForm from "@/components/admin/PageForm";
import { savePage } from "../actions";

export default function NewPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">Nouvelle page</h1>
      <div className="mt-6 max-w-2xl">
        <PageForm action={savePage} />
      </div>
    </div>
  );
}
