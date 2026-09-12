"use client";

import { useEffect, useState } from "react";

export default function RotatingKeyword({
  words,
  className = "",
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  // "idle" | "out" | "in"
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    let outTimer: ReturnType<typeof setTimeout> | undefined;
    let inTimer: ReturnType<typeof setTimeout> | undefined;

    const id = setInterval(() => {
      setPhase("out");
      outTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("in");
        // Force la frame suivante pour laisser le navigateur peindre l'état
        // "in" (départ) avant de basculer vers "idle" (arrivée) — sinon la
        // transition ne joue pas car les deux états sont posés au même tick.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            inTimer = setTimeout(() => setPhase("idle"), 10);
          });
        });
      }, 550);
    }, interval);

    return () => {
      clearInterval(id);
      clearTimeout(outTimer);
      clearTimeout(inTimer);
    };
  }, [words.length, interval]);

  const style =
    phase === "out"
      ? { transform: "translateY(-16px) scale(0.94)", opacity: 0, filter: "blur(3px)" }
      : phase === "in"
        ? { transform: "translateY(14px) scale(0.94)", opacity: 0, filter: "blur(3px)" }
        : { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0px)" };

  return (
    <span className={`inline-flex items-center gap-1.5 overflow-hidden align-middle ${className}`}>
      <span
        key={index}
        className="inline-flex items-center gap-1.5 will-change-transform"
        style={{
          ...style,
          transition:
            "transform 0.65s cubic-bezier(.22,1,.36,1), opacity 0.55s ease, filter 0.55s ease",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="shrink-0"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        {words[index]}
      </span>
    </span>
  );
}
