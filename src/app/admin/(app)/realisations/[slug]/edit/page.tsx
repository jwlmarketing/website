import { redirect, notFound } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getCaseStudy, listPublishedCaseStudies } from "@/lib/realisations";
import RealisationForm from "../../RealisationForm";
import { saveCaseStudyAction } from "../../actions";

export default async function EditCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const { slug } = await params;
  const page = getCaseStudy(slug);
  if (!page) notFound();

  const allCaseStudies = listPublishedCaseStudies().map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <RealisationForm page={page} isIndex={false} saveAction={saveCaseStudyAction} allCaseStudies={allCaseStudies} />
  );
}
