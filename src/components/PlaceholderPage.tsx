import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-[5%] py-24 text-center">
      <SectionHeading title={title} subtext="Cette page est en cours de préparation." />
      <Link
        href="/contact-jwl-marketing-aix-en-provence"
        className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        Me contacter
      </Link>
    </div>
  );
}
