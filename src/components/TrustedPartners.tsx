"use client";

import Image from "next/image";

const PARTNERS = [
  { src: "/images/partenaires/dynamitz.webp", alt: "Dynamitz", width: 2866, height: 1342 },
  { src: "/images/partenaires/inovea.webp", alt: "Inovea", width: 2866, height: 1342 },
  { src: "/images/partenaires/web-difference.png", alt: "Web Différence", width: 391, height: 183 },
];

const TRACK = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function TrustedPartners() {
  return (
    <section className="bg-white py-14 text-center">
      <p
        className="mb-8 px-[5%] font-heading text-2xl font-semibold italic text-black md:text-3xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Mon réseau de confiance
      </p>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {TRACK.map((p, i) => (
            <div className="logo-box" key={`${p.src}-${i}`}>
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="h-full w-full object-contain grayscale transition-all duration-300 ease-out hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrap {
          overflow: hidden;
          width: 100%;
          background: #fff;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 64px;
          animation: marquee-scroll 26s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
        .logo-box {
          flex: 0 0 auto;
          display: flex;
          height: 56px;
          width: 140px;
          align-items: center;
          justify-content: center;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </section>
  );
}
