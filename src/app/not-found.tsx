import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/logo-jwl-marketing.webp"
        alt="JWL Marketing"
        width={160}
        height={125}
        className="mb-8 h-16 w-auto"
      />
      <p className="font-heading text-[120px] font-semibold leading-none text-gold">
        404
      </p>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-black">
        Cette page s&apos;est perdue en route.
      </h1>
      <p className="mt-4 max-w-md text-[#555]">
        La page que tu cherches n&apos;existe pas, ou a été déplacée. Pas de
        panique — comme pour ton référencement, on va te remettre sur la
        bonne voie.
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
