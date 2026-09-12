"use client";

import { useEffect, useState } from "react";

export default function RotatingKeyword({
  words,
  className = "",
  interval = 1800,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlying(true);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFlying(false);
      }, 320);
      return () => clearTimeout(swap);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-flex items-center gap-1.5 overflow-hidden align-middle ${className}`}
    >
      <span
        key={index}
        className="inline-flex items-center gap-1.5 transition-all duration-300 ease-in"
        style={{
          transform: flying ? "translateY(-14px)" : "translateY(0)",
          opacity: flying ? 0 : 1,
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
