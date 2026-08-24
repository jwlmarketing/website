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
    <div className="mx-auto my-[60px] max-w-[900px] px-5 text-center">
      {kicker && (
        <p
          className="mb-1 text-[26px] font-semibold italic leading-snug text-[#c97b63]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {kicker}
        </p>
      )}
      <h2 className="relative inline-block px-10 font-heading text-[54px] font-medium italic leading-[1.35] text-black">
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
