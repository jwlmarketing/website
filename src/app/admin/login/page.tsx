import { signIn } from "@/lib/auth";

export default function AdminLogin() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-heading text-2xl font-bold text-black">Espace admin JWL Marketing</h1>
      <p className="max-w-sm text-sm text-[#666]">
        Connecte-toi avec ton compte Google autorisé pour gérer le blog.
      </p>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/admin/blog" });
        }}
      >
        <button
          type="submit"
          className="rounded-lg bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#b5903a]"
        >
          Se connecter avec Google
        </button>
      </form>
    </div>
  );
}
