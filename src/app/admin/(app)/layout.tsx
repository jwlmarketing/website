import "./admin.css";
import { getSession, destroySession } from "@/lib/jwlAuth";
import { countCommentsByStatus } from "@/lib/comments";
import AdminShell from "./AdminShell";

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminAppLayout({ children }: { children: React.ReactNode }) {
  const user = await getSession();
  const pendingComments = user ? countCommentsByStatus().pending : 0;

  async function logoutAction() {
    "use server";
    await destroySession();
  }

  return (
    <AdminShell user={user} logoutAction={logoutAction} pendingComments={pendingComments}>
      {children}
    </AdminShell>
  );
}
