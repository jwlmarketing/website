import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
        {title}
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-black">
        {title}
      </h1>
      <p className="mt-3 text-[#555]">{subtitle}</p>
      <div className="prose-legal mt-10 space-y-6 text-[15px] leading-[25.5px] text-[#1a1a1a] [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-black [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[#eee] [&_td]:p-2 [&_th]:border [&_th]:border-[#eee] [&_th]:bg-neutral-50 [&_th]:p-2 [&_th]:text-left [&_ul]:space-y-1.5">
        {children}
      </div>
      <p className="mt-10 text-xs text-[#999]">Dernière mise à jour : juillet 2026</p>
    </div>
  );
}
