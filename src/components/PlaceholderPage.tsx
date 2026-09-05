import SectionHeading from "@/components/SectionHeading";
import LanguageToggle from "@/components/LanguageToggle";

export default function PlaceholderPage({
  title,
  locale = "fr",
  altHref,
}: {
  title: string;
  locale?: "fr" | "en";
  altHref?: string;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-[5%] py-24 text-center">
      {altHref && (
        <div className="mb-6 self-end">
          <LanguageToggle locale={locale} href={altHref} />
        </div>
      )}
      <SectionHeading
        title={title}
        subtext={
          locale === "en"
            ? "This page is currently being prepared."
            : "Cette page est en cours de préparation."
        }
      />
      <a
        href="mailto:service@jwl-marketing.fr"
        className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        {locale === "en" ? "Contact me" : "Me contacter"}
      </a>
    </div>
  );
}
