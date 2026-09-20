import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import RealisationForm from "../RealisationForm";
import { saveCaseStudyAction } from "../actions";

export default async function NewCaseStudyPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  return <RealisationForm isIndex={false} saveAction={saveCaseStudyAction} />;
}
