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
    <section className="py-14 text-center">
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
                className="logo-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrap {
          overflow: hidden;
          width: 100%;
          background: #ece7dc;
          padding: 22px 0;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 70px;
          animation: marquee-scroll 26s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
        .logo-box {
          flex: 0 0 auto;
          display: flex;
          height: 60px;
          width: 150px;
          align-items: center;
          justify-content: center;
        }
        .logo-img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          filter: grayscale(1) contrast(1.05);
          mix-blend-mode: multiply;
          transition: filter 0.3s ease;
        }
        .logo-box:hover .logo-img {
          filter: grayscale(0) contrast(1);
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
