import Image from "next/image";

export default function HeroBadge() {
  return (
    <a
      href="https://www.entrepreneurielles.com/parcours-des-creatrices/"
      target="_blank"
      rel="noopener"
      className="absolute bottom-0 right-[5%] z-10 h-[140px] w-[140px] transition-transform duration-300 [filter:drop-shadow(0_4px_12px_rgba(0,0,0,0.15))] hover:scale-[1.08] hover:rotate-3"
    >
      <Image
        src="/images/badge-entrepreneurielles.png"
        alt="Membre Entrepreneuri'elles"
        width={274}
        height={272}
        className="h-full w-full object-contain"
      />
    </a>
  );
}
