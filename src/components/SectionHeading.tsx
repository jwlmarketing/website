import type { ReactNode } from "react";

export default function SectionHeading({
  kicker,
  title,
  accent,
  subtext,
  children,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  subtext?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto my-[60px] max-w-[700px] px-5 text-center">
      {kicker && (
        <p
          className="mb-1 text-[26px] font-semibold leading-snug text-[#c97b63]"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          {kicker}
        </p>
      )}
      <h2 className="relative inline-block px-10 font-heading text-[36px] font-medium italic leading-[1.35] text-black before:absolute before:left-0 before:top-[-8px] before:h-6 before:w-6 before:border-l-2 before:border-t-2 before:border-gold before:content-[''] after:absolute after:right-0 after:top-[-8px] after:h-6 after:w-6 after:border-r-2 after:border-t-2 after:border-gold after:content-['']">
        {title}
        {children}
        {accent && <span className="font-semibold not-italic text-gold"> {accent}</span>}
      </h2>
      {subtext && (
        <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-[#555]">
          {subtext}
        </p>
      )}
    </div>
  );
}
