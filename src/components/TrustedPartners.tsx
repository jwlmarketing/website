import Image from "next/image";

const PARTNERS = [
  { src: "/images/partenaires/dynamitz.webp", alt: "Dynamitz", width: 2866, height: 1342 },
  { src: "/images/partenaires/inovea.webp", alt: "Inovea", width: 2866, height: 1342 },
  { src: "/images/partenaires/web-difference.png", alt: "Web Différence", width: 391, height: 183 },
];

export default function TrustedPartners() {
  return (
    <section className="px-[5%] py-14 text-center">
      <p
        className="mb-8 font-heading text-2xl font-semibold italic text-black md:text-3xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Mon réseau de confiance
      </p>
      <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center gap-x-14 gap-y-8">
        {PARTNERS.map((p) => (
          <div
            key={p.src}
            className="flex h-[70px] w-[160px] items-center justify-center rounded-xl bg-white p-3"
          >
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
    </section>
  );
}
