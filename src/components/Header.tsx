import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact-jwl-marketing-aix-en-provence", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-heading text-xl font-semibold tracking-tight">
          JWL <span className="text-gold">Marketing</span>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-700 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+33"
          className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold md:inline-block"
        >
          Appelle-moi
        </a>
      </div>
    </header>
  );
}
