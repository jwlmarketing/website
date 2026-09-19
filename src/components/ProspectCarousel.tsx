"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/jwl-prospect-message-1.png",
  "/images/jwl-prospect-message-2.png",
  "/images/jwl-prospect-message-3.png",
];

const ROTATIONS = [-3, 0, 3];

export default function ProspectCarousel() {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  function next() {
    setIndex((i) => (i + 1) % IMAGES.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }

  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
    dragging.current = true;
  }
  function onPointerUp(e: React.PointerEvent) {
    if (!dragging.current || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    dragging.current = false;
    dragStartX.current = null;
  }

  return (
    <div
      className="relative mx-auto mt-10 h-[520px] max-w-[1400px] select-none touch-pan-y sm:h-[680px] lg:h-[820px]"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={() => {
        dragging.current = false;
        dragStartX.current = null;
      }}
    >
      {IMAGES.map((src, i) => {
        const total = IMAGES.length;
        let offset = i - index;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        const isFront = offset === 0;
        const translateX = offset * 320;
        const scale = isFront ? 1.2 : 0.6;
        const rotate = isFront ? 0 : ROTATIONS[(i + 1) % ROTATIONS.length];
        const zIndex = isFront ? 30 : 10 - Math.abs(offset);
        const opacity = Math.abs(offset) > 1 ? 0 : isFront ? 1 : 0.65;

        return (
          <button
            key={src}
            type="button"
            aria-label={`Voir le message ${i + 1}`}
            onClick={() => setIndex(i)}
            className="absolute left-1/2 top-1/2 h-[480px] w-[380px] cursor-grab active:cursor-grabbing sm:h-[620px] sm:w-[480px] lg:h-[760px] lg:w-[580px]"
            style={{
              transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
              zIndex,
              opacity,
              transition: "transform 0.5s ease, opacity 0.5s ease",
            }}
          >
            <Image
              src={src}
              alt="Message d'un prospect qualifié — JWL Marketing"
              fill
              className="pointer-events-none object-contain drop-shadow-xl"
            />
          </button>
        );
      })}
    </div>
  );
}
