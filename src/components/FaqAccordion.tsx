"use client";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-[800px] divide-y divide-[#eee] border-t border-[#eee]">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-medium text-black marker:content-none">
            {item.q}
            <span className="shrink-0 text-xl text-gold transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div
            className="space-y-3 pb-6 text-sm leading-relaxed text-[#444] [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_ul]:space-y-1"
            dangerouslySetInnerHTML={{ __html: item.a }}
          />
        </details>
      ))}
    </div>
  );
}
