import Link from "next/link";

export default function LanguageToggle({
  locale,
  href,
}: {
  locale: "fr" | "en";
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-full border border-[#ddd] px-3 py-1 text-xs font-semibold text-black transition-colors hover:border-[#c9846f] hover:text-[#c9846f]"
    >
      {locale === "fr" ? "EN" : "FR"}
    </Link>
  );
}
