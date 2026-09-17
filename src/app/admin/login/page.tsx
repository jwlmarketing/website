import { authorizeUrl } from "@/lib/jwlAuth";

export default async function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const state = crypto.randomUUID();
  const url = authorizeUrl(state);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-heading text-2xl font-bold text-black">Espace admin JWL Marketing</h1>
      <p className="max-w-sm text-sm text-[#666]">
        Connecte-toi avec ton compte JWL Auth pour gérer le blog.
      </p>
      {error && (
        <p className="text-sm text-red-600">
          Connexion refusée. Vérifie que ton compte est autorisé.
        </p>
      )}
      <a
        href={url}
        className="rounded-lg bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#b5903a]"
      >
        Se connecter avec JWL Auth
      </a>
    </div>
  );
}
