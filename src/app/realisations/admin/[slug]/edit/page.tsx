import { redirect, notFound } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getCaseStudy } from "@/lib/realisations";
import RealisationForm from "../../RealisationForm";
import { saveCaseStudyAction } from "../../actions";

export const metadata = { robots: { index: false, follow: false } };

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

  return (
    <RealisationForm page={page} isIndex={false} saveAction={saveCaseStudyAction} />
  );
}
