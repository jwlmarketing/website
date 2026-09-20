import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getAllCaseStudies, getIndexPage } from "@/lib/realisations";
import { deleteCaseStudyAction } from "./actions";

export const metadata = { robots: { index: false, follow: false } };

export default async function RealisationsAdminPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const indexPage = getIndexPage();
  const caseStudies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-[900px] px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-black">
          Réalisations
        </h1>
        <Link
          href="/realisations/admin/new"
          className="rounded-full bg-[#c9846f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8735f]"
        >
          + Nouveau cas client
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border border-[#eee] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-black">
              Page d&apos;accueil — /realisations
            </p>
            <p className="text-sm text-[#888]">{indexPage.blocks.length} bloc(s)</p>
          </div>
          <Link
            href="/realisations/admin/index-page"
            className="rounded-full border border-[#ddd] px-4 py-2 text-sm font-medium text-black hover:border-gold hover:text-gold"
          >
            Modifier
          </Link>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {caseStudies.length === 0 && (
          <p className="text-sm text-[#888]">
            Aucun cas client pour l&apos;instant.
          </p>
        )}
        {caseStudies.map((cs) => (
          <div
            key={cs.slug}
            className="flex items-center justify-between rounded-2xl border border-[#eee] p-5"
          >
            <div>
              <p className="font-semibold text-black">{cs.title}</p>
              <p className="text-sm text-[#888]">
                /realisations/{cs.slug} ·{" "}
                <span
                  className={
                    cs.status === "published" ? "text-green-600" : "text-amber-600"
                  }
                >
                  {cs.status === "published" ? "Publié" : "Brouillon"}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/realisations/${cs.slug}`}
                target="_blank"
                className="rounded-full border border-[#ddd] px-4 py-2 text-sm font-medium text-black hover:border-gold hover:text-gold"
              >
                Voir
              </Link>
              <Link
                href={`/realisations/admin/${cs.slug}/edit`}
                className="rounded-full border border-[#ddd] px-4 py-2 text-sm font-medium text-black hover:border-gold hover:text-gold"
              >
                Modifier
              </Link>
              <form action={deleteCaseStudyAction}>
                <input type="hidden" name="slug" value={cs.slug} />
                <button
                  type="submit"
                  className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Supprimer
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
