"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function EscalierReveal({
  children,
  className = "",
  itemClassName = "",
}: {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => children.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          data-idx={i}
          className={itemClassName}
          style={{
            opacity: visible[i] ? 1 : 0,
            transform: visible[i] ? "translateY(0)" : "translateY(45px)",
            transition: `opacity .6s ease ${i * 0.15}s, transform .6s cubic-bezier(.22,1,.36,1) ${i * 0.15}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
