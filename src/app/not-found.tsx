import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/logo-jwl-marketing.png"
        alt="JWL Marketing"
        width={966}
        height={187}
        className="mb-8 h-10 w-auto"
      />
      <p className="text-[110px] leading-none">🚀</p>
      <p className="mt-2 font-heading text-[110px] font-bold leading-none text-gold">
        404
      </p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-black">
        Cette page a décollé... sans nous prévenir.
      </h1>
      <p className="mt-4 max-w-md text-[#555]">
        Même Google ne l&apos;a jamais indexée. Soit elle n&apos;existe pas,
        soit elle a été déplacée — ou alors elle fait un tour de l&apos;espace
        et redescend bientôt. En attendant, pas de panique : on va te
        remettre sur une orbite qui fonctionne.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3.5 font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact-jwl-marketing-aix-en-provence"
          className="inline-block rounded-[5px] border-2 border-black px-8 py-3.5 font-medium text-black transition-colors hover:bg-black hover:text-white"
        >
          Contacter JWL Marketing
        </Link>
      </div>
    </div>
  );
}
