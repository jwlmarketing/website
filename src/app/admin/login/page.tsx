import { signIn } from "@/lib/auth";
import AutoSubmitForm from "@/components/admin/AutoSubmitForm";

export default async function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  async function googleSignIn() {
    "use server";
    await signIn("google", { redirectTo: "/admin" });
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-2xl font-semibold text-black">
        JWL <span className="text-gold">Marketing</span> — Admin
      </p>

      {error ? (
        <>
          <p className="mt-4 text-sm text-red-600">
            Accès refusé — ce compte Google n&apos;est pas autorisé.
          </p>
          <form action={googleSignIn}>
            <button
              type="submit"
              className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
            >
              Réessayer avec un autre compte
            </button>
          </form>
        </>
      ) : (
        <AutoSubmitForm action={googleSignIn} />
      )}
    </div>
  );
}
