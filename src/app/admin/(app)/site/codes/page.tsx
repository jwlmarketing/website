import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getPageCode } from "@/lib/gatedContent";
import CodeForm from "./CodeForm";

export const dynamic = "force-dynamic";

const KNOWN_PAGES = [{ slug: "roadmap", label: "/roadmap" }];

export default async function SiteCodesPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const pages = KNOWN_PAGES.map((p) => ({ ...p, code: getPageCode(p.slug) }));

  return (
    <div className="table-wrapper" style={{ padding: 24 }}>
      <p style={{ marginBottom: 20, color: "#8a8a8a" }}>
        Ce code est demandé aux visiteurs avant d&apos;accéder à la page. Laisse-le
        vide pour ne pas protéger la page.
      </p>
      <div className="form-grid">
        {pages.map((p) => (
          <CodeForm key={p.slug} pageSlug={p.slug} pageLabel={p.label} initialCode={p.code} />
        ))}
      </div>
    </div>
  );
}
