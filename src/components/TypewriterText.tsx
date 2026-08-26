"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  className = "",
  speed = 70,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [started, count, text, speed]);

  return (
    <span ref={ref} className={className}>
      {text.slice(0, count)}
      <span
        aria-hidden
        className="ml-[1px] inline-block w-[2px] animate-pulse bg-current align-middle"
        style={{ height: "0.9em", opacity: count < text.length ? 1 : 0 }}
      />
    </span>
  );
}
