import { signIn } from "@/lib/auth";

export default function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-2xl font-semibold text-black">
        JWL <span className="text-gold">Marketing</span> — Admin
      </p>
      <p className="mt-2 text-sm text-[#555]">
        Connexion réservée à l&apos;équipe JWL Marketing.
      </p>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/admin" });
        }}
      >
        <button
          type="submit"
          className="mt-8 inline-flex items-center gap-3 rounded-[5px] border-2 border-gold bg-gold px-8 py-3.5 font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Se connecter avec Google
        </button>
      </form>
      <AdminLoginError searchParams={searchParams} />
    </div>
  );
}

async function AdminLoginError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  if (!error) return null;
  return (
    <p className="mt-4 text-sm text-red-600">
      Accès refusé — ce compte Google n&apos;est pas autorisé.
    </p>
  );
}
