"use client";

import { useTransition } from "react";
import type { GatedDocument } from "@/lib/gatedContent";
import { deleteGatedDocumentAction } from "../actions";

export default function DocumentsTable({
  documents,
  pages,
}: {
  documents: GatedDocument[];
  pages: { slug: string; label: string }[];
}) {
  const [pending, startTransition] = useTransition();
  const labelFor = (slug: string) => pages.find((p) => p.slug === slug)?.label || slug;

  function onDelete(id: string, pageSlug: string) {
    if (!confirm("Supprimer ce document ?")) return;
    startTransition(async () => {
      await deleteGatedDocumentAction(id, pageSlug);
    });
  }

  if (documents.length === 0) {
    return (
      <div className="empty-state" style={{ padding: 24 }}>
        Aucun document pour le moment.
      </div>
    );
  }

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Page</th>
          <th>Catégorie</th>
          <th>Titre</th>
          <th>Code</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc) => (
          <tr key={doc.id}>
            <td>{labelFor(doc.pageSlug)}</td>
            <td>{doc.category}</td>
            <td>{doc.title}</td>
            <td>{doc.code}</td>
            <td>
              <button
                type="button"
                className="tbl-btn"
                disabled={pending}
                onClick={() => onDelete(doc.id, doc.pageSlug)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
