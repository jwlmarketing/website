import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [pageCount, postCount, messageCount] = await Promise.all([
    prisma.page.count(),
    prisma.post.count(),
    prisma.contactSubmission.count(),
  ]);

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">
        Tableau de bord
      </h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <Link href="/admin/pages" className="rounded-2xl border border-neutral-200 bg-white p-6 hover:border-gold">
          <p className="font-heading text-3xl font-bold text-gold">{pageCount}</p>
          <p className="mt-1 text-sm text-[#555]">Pages</p>
        </Link>
        <Link href="/admin/posts" className="rounded-2xl border border-neutral-200 bg-white p-6 hover:border-gold">
          <p className="font-heading text-3xl font-bold text-gold">{postCount}</p>
          <p className="mt-1 text-sm text-[#555]">Articles de blog</p>
        </Link>
        <Link href="/admin/messages" className="rounded-2xl border border-neutral-200 bg-white p-6 hover:border-gold">
          <p className="font-heading text-3xl font-bold text-gold">{messageCount}</p>
          <p className="mt-1 text-sm text-[#555]">Messages reçus</p>
        </Link>
      </div>
    </div>
  );
}
