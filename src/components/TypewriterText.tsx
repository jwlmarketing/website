"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  className = "",
  speed = 70,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  /** Delai (ms) avant le debut de la frappe, une fois l'element visible — utile pour
   * laisser une carte en effet escalier finir son animation d'apparition avant d'ecrire. */
  startDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => setStarted(true), startDelay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDelay]);

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
