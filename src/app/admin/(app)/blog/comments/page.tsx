import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";

export default async function CommentsPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={40} height={40}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <p>
        Ce blog n&apos;a pas (encore) de système de commentaires — le site est statique, basé sur des
        fichiers Markdown, sans base de données pour stocker des commentaires.
      </p>
    </div>
  );
}
