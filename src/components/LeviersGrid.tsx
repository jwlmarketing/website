import Image from "next/image";
import Link from "next/link";

export type Lever = {
  label: string;
  image: string;
  desc: string;
  href: string;
};

export default function LeviersGrid({ leviers }: { leviers: Lever[] }) {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {leviers.map((lever) => (
        <Link
          key={lever.label}
          href={lever.href}
          className="flex flex-col items-start text-left transition hover:opacity-80"
        >
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={lever.image}
              alt={lever.label}
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-black">
            {lever.label}
          </p>
          <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-neutral-600">
            {lever.desc}
          </p>
          <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[#c9846f] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#b56f5a]">
            En savoir plus
          </span>
        </Link>
      ))}
    </div>
  );
}
