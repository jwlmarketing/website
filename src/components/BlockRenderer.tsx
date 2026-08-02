import Image from "next/image";
import Link from "next/link";
import type { Block } from "@/lib/blocks/types";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockItem key={i} block={block} />
      ))}
    </>
  );
}

function BlockItem({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return (
        <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row">
          <div className="max-w-[600px] flex-1">
            <h1 className="font-heading text-[38px] font-semibold leading-[1.25] text-black">
              {block.title}
            </h1>
            {block.subtitle && (
              <p className="mt-4 text-base text-[#555]">{block.subtitle}</p>
            )}
            {block.buttonText && block.buttonLink && (
              <Link
                href={block.buttonLink}
                className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
              >
                {block.buttonText}
              </Link>
            )}
          </div>
          {block.imageUrl && (
            <Image
              src={block.imageUrl}
              alt={block.title}
              width={1200}
              height={800}
              className="h-auto w-full max-w-[500px] rounded-2xl object-cover"
            />
          )}
        </div>
      );

    case "heading":
      return (
        <SectionHeading
          kicker={block.kicker}
          title={block.title}
          accent={block.accent}
          subtext={block.subtext}
        />
      );

    case "text":
      return (
        <div className="mx-auto max-w-[800px] space-y-4 px-6 py-8 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          {block.text.split(/\n\s*\n/).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );

    case "image":
      return (
        <figure className="mx-auto max-w-[900px] px-6 py-8">
          <Image
            src={block.url}
            alt={block.alt || ""}
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl object-cover"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-[#888]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "cta":
      return (
        <div className="px-6 py-12 text-center">
          {block.text && (
            <p className="mx-auto mb-5 max-w-[600px] text-[15px] text-[#555]">
              {block.text}
            </p>
          )}
          <Link
            href={block.buttonLink}
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-10 py-[15px] font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            {block.buttonText}
          </Link>
        </div>
      );

    case "faq":
      return (
        <div className="px-6 py-12">
          <FaqAccordion items={block.items} />
        </div>
      );

    case "cards":
      return (
        <div className="mx-auto grid max-w-[1000px] gap-5 px-6 py-8 sm:grid-cols-2 md:grid-cols-3">
          {block.items.map((c, i) => (
            <div key={i} className="rounded-2xl border border-gold bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-black">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-[#555]">{c.text}</p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
