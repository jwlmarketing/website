import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { listDocuments } from "@/lib/gatedContent";
import UploadForm from "./UploadForm";
import DocumentsTable from "./DocumentsTable";

export const dynamic = "force-dynamic";

const KNOWN_PAGES = [{ slug: "roadmap", label: "/roadmap" }];

export default async function SiteDownloadsPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  const documents = listDocuments();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div className="table-wrapper" style={{ padding: 24 }}>
        <p style={{ marginBottom: 20, color: "#8a8a8a" }}>
          Importe un PDF, choisis la page et la catégorie (le nom du levier
          affiché sur la page) et donne-lui un code. Le visiteur devra saisir
          ce code exact pour pouvoir le télécharger.
        </p>
        <UploadForm pages={KNOWN_PAGES} />
      </div>

      <div className="table-wrapper">
        <DocumentsTable documents={documents} pages={KNOWN_PAGES} />
      </div>
    </div>
  );
}
