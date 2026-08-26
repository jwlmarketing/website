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
    <div className="mx-auto my-10 w-full max-w-[1400px] px-5 text-center md:my-[60px]">
      {kicker && (
        <p
          className="mb-1 text-3xl font-semibold italic leading-snug text-[#c97b63] md:text-[54px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {kicker}
        </p>
      )}
      <h2 className="relative block w-full px-2 font-heading text-3xl font-medium not-italic leading-[1.25] text-black md:px-10 md:text-[54px] md:leading-[1.35]">
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
