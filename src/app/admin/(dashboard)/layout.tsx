import { redirect } from "next/navigation";
import Link from "next/link";
import { auth, signOut } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const isLoginPage = false;

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
        <Link href="/admin" className="font-heading text-lg font-semibold text-black">
          JWL <span className="text-gold">Marketing</span> — Admin
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/admin/pages" className="text-[#555] hover:text-gold">Pages</Link>
          <Link href="/admin/posts" className="text-[#555] hover:text-gold">Blog</Link>
          <Link href="/admin/messages" className="text-[#555] hover:text-gold">Messages</Link>
          <span className="text-[#999]">{session.user?.email}</span>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button type="submit" className="text-[#555] hover:text-gold">
              Déconnexion
            </button>
          </form>
        </nav>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-10">{children}</main>
    </div>
  );
}
