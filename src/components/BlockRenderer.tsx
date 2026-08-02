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

    case "html":
      return (
        <div
          className="mx-auto max-w-[1000px] px-6 py-8"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "gallery":
      return (
        <div className="mx-auto max-w-[1100px] px-6 py-10">
          {block.title && (
            <h2 className="mb-6 text-center font-heading text-2xl font-semibold text-black">
              {block.title}
            </h2>
          )}
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${block.columns}, minmax(0, 1fr))` }}
          >
            {block.images.map((img, i) => (
              <Image
                key={i}
                src={img.url}
                alt={img.alt || ""}
                width={600}
                height={600}
                className="h-auto w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      );

    case "video":
      return (
        <div className="mx-auto max-w-[850px] px-6 py-10">
          {block.title && (
            <h2 className="mb-4 text-center font-heading text-2xl font-semibold text-black">
              {block.title}
            </h2>
          )}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={`https://www.youtube.com/embed/${block.youtubeId}`}
              title={block.title || "Vidéo"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      );

    case "testimonials":
      return (
        <div className="mx-auto max-w-[1100px] px-6 py-10">
          {block.title && (
            <h2 className="mb-6 text-center font-heading text-2xl font-semibold text-black">
              {block.title}
            </h2>
          )}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {block.items.map((t, i) => (
              <div key={i} className="rounded-2xl border border-[#ece7df] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3">
                  {t.avatarUrl && (
                    <Image src={t.avatarUrl} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-black">{t.name}</p>
                    {t.role && <p className="text-xs text-[#888]">{t.role}</p>}
                  </div>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-[#444]">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "iconList":
      return (
        <div className="mx-auto max-w-[700px] px-6 py-8">
          {block.title && (
            <h2 className="mb-4 font-heading text-xl font-semibold text-black">
              {block.title}
            </h2>
          )}
          <ul className="space-y-2.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#1a1a1a]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/[0.18] text-[11px] font-bold text-gold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "stats":
      return (
        <div className="mx-auto grid max-w-[1000px] gap-6 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {block.items.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-3xl font-bold text-gold">{s.value}</p>
              <p className="mt-1 text-xs text-[#555]">{s.label}</p>
            </div>
          ))}
        </div>
      );

    case "spacer": {
      const h = block.height === "small" ? "h-6" : block.height === "large" ? "h-24" : "h-12";
      return <div className={h} />;
    }

    default:
      return null;
  }
}
