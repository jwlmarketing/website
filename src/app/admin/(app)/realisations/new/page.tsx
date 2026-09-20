import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import RealisationForm from "../RealisationForm";
import { saveCaseStudyAction } from "../actions";
import { listPublishedCaseStudies } from "@/lib/realisations";

export default async function NewCaseStudyPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const allCaseStudies = listPublishedCaseStudies().map((p) => ({ slug: p.slug, title: p.title }));

  return <RealisationForm isIndex={false} saveAction={saveCaseStudyAction} allCaseStudies={allCaseStudies} />;
}
