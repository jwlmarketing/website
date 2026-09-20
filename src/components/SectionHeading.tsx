import type { ReactNode } from "react";

export default function SectionHeading({
  kicker,
  title,
  accent,
  subtext,
  children,
  titleClassName,
}: {
  kicker?: string;
  title: ReactNode;
  accent?: string;
  subtext?: ReactNode;
  children?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="mx-auto my-10 w-full max-w-[1400px] px-5 text-center md:my-[60px]">
      {kicker && (
        <p
          className="mb-1 text-balance text-3xl italic leading-snug text-[#c97b63] md:text-[54px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {kicker}
        </p>
      )}
      <h2
        className={
          (titleClassName ??
            "relative block w-full px-2 font-heading text-3xl not-italic leading-[1.25] text-black md:px-10 md:text-[54px] md:leading-[1.35]") +
          " text-balance"
        }
      >
        {title}
        {children}
        {accent && <span className="not-italic text-[#c9846f]"> {accent}</span>}
      </h2>
      {subtext && (
        <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-[#555]">
          {subtext}
        </p>
      )}
    </div>
  );
}
