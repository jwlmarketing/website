import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata = buildMetadata({
  path: "/google-my-business-aix-en-provence",
  locale: "en",
  title: "Google Business Profile Aix-en-Provence | JWL Marketing",
  description: "Is your Google My Business listing neglected? Take back control of your local visibility. With me, anywhere in France.",
});

export default function Page() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="mb-2 self-end">
        <LanguageToggle locale="en" href="/google-my-business-aix-en-provence" />
      </div>
      <Image
        src="/images/logo-jwl-marketing.png"
        alt="JWL Marketing"
        width={966}
        height={187}
        className="h-9 w-auto"
      />
      <h1 className="font-heading text-3xl text-black">Page under construction</h1>
      <p className="max-w-md text-black/70">
        This page is currently being prepared. Come back soon to discover our
        Google Business Profile offer.
      </p>
      <Link
        href="/en"
        className="mt-2 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        Back to home
      </Link>
    </div>
  );
}
