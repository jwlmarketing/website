"use client";

import { useEffect, useRef } from "react";

export default function ScrollFillLine({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;

    let ticking = false;

    function update() {
      ticking = false;
      const parent = wrap!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.85 - rect.top) / rect.height;
      const clamped = Math.min(1, Math.max(0, progress));
      fill!.style.height = `${clamped * 100}%`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <div ref={fillRef} className="jwl-scroll-fill" />
      <style>{`
        .jwl-scroll-fill {
          width: 100%;
          height: 0%;
          background: linear-gradient(180deg, #C9846F 0%, #C9A84C 100%);
          box-shadow: 0 0 10px rgba(201,168,76,.6);
          transition: height .08s linear;
        }
      `}</style>
    </div>
  );
}
