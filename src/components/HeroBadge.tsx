import Image from "next/image";

export default function HeroBadge() {
  return (
    <a
      href="https://www.entrepreneurielles.com/parcours-des-creatrices/"
      target="_blank"
      rel="noopener"
      className="absolute bottom-0 right-[5%] z-10 flex w-[190px] flex-col items-center gap-1.5 rounded-2xl bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.05] hover:rotate-1"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c9846f]">
        Membre
      </span>
      <Image
        src="/images/entrepreneurielles-logo.jpg"
        alt="Membre Entrepreneuri'elles"
        width={510}
        height={170}
        className="h-auto w-full object-contain"
      />
    </a>
  );
}
