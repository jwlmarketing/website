import { prisma } from "@/lib/prisma";

export default async function AdminMessages() {
  const messages = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-black">
        Messages reçus
      </h1>
      <div className="mt-6 space-y-4">
        {messages.length === 0 && (
          <p className="text-sm text-[#888]">Aucun message pour le moment.</p>
        )}
        {messages.map((m) => (
          <div key={m.id} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-black">{m.name}</p>
              <p className="text-xs text-[#888]">
                {new Date(m.createdAt).toLocaleString("fr-FR")}
              </p>
            </div>
            <p className="mt-1 text-sm text-[#555]">
              {m.email} {m.phone && `· ${m.phone}`} {m.activity && `· ${m.activity}`}
            </p>
            {m.website && (
              <p className="text-sm text-[#555]">Site : {m.website}</p>
            )}
            <p className="mt-3 whitespace-pre-wrap text-sm text-[#1a1a1a]">
              {m.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
