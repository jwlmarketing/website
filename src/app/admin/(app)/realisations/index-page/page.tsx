import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getIndexPage, listPublishedCaseStudies } from "@/lib/realisations";
import RealisationForm from "../RealisationForm";
import { saveIndexAction } from "../actions";

export default async function EditIndexPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const allCaseStudies = listPublishedCaseStudies().map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <RealisationForm page={getIndexPage()} isIndex saveAction={saveIndexAction} allCaseStudies={allCaseStudies} />
  );
}
