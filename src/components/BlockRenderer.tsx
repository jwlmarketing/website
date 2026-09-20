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
    case "hero": {
      const imageOnLeft = block.imagePosition === "left";
      return (
        <div
          className={`flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] md:flex-row ${
            imageOnLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="max-w-[600px] flex-1">
            <h1
              className="font-heading text-[38px] font-semibold leading-[1.25]"
              style={{ color: block.titleColor || "#000" }}
            >
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
    }

    case "textImage": {
      const imageOnLeft = block.imagePosition === "left";
      return (
        <div
          className={`mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-6 py-12 md:flex-row ${
            imageOnLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1">
            {block.title && (
              <h2
                className="font-heading text-2xl font-semibold leading-[1.3] md:text-3xl"
                style={{ color: block.titleColor || "#000" }}
              >
                {block.title}
              </h2>
            )}
            {block.text && (
              <div className="mt-4 space-y-3 text-[15px] leading-[25.5px] text-[#1a1a1a]">
                {block.text.split(/\n\s*\n/).map((p, i) => (
                  <p key={i}>{renderInlineMarkdown(p)}</p>
                ))}
              </div>
            )}
            {block.buttonText && block.buttonLink && (
              <Link
                href={block.buttonLink}
                className="mt-6 inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
              >
                {block.buttonText}
              </Link>
            )}
          </div>
          {block.imageUrl && (
            <Image
              src={block.imageUrl}
              alt={block.title || ""}
              width={900}
              height={700}
              className="h-auto w-full flex-1 rounded-2xl object-cover"
            />
          )}
        </div>
      );
    }

    case "heading":
      return (
        <SectionHeading
          kicker={block.kicker}
          title={renderInlineColor(block.title, block.accentColor)}
          accent={block.accent}
          accentColor={block.accentColor}
          subtext={block.subtext}
        />
      );

    case "text":
      return (
        <div className="mx-auto max-w-[800px] space-y-4 px-6 py-8 text-[15px] leading-[25.5px] text-[#1a1a1a]">
          {block.text.split(/\n\s*\n/).map((chunk, i) => {
            const lines = chunk.split("\n").filter(Boolean);
            const isList = lines.length > 0 && lines.every((l) => /^[-•]\s+/.test(l));
            if (isList) {
              return (
                <ul key={i} className="list-disc space-y-1 pl-5">
                  {lines.map((l, j) => (
                    <li key={j}>{renderInlineMarkdown(l.replace(/^[-•]\s+/, ""))}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{renderInlineMarkdown(chunk)}</p>;
          })}
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
          <div className="flex flex-wrap justify-center gap-5">
            {block.items.map((t, i) => (
              <div
                key={i}
                className="w-full max-w-[320px] flex-1 rounded-2xl border border-[#ece7df] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] sm:w-[320px] sm:flex-none"
              >
                <div className="flex items-center gap-3">
                  {t.avatarUrl && (
                    <Image src={t.avatarUrl} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-black">{t.name}</p>
                    {t.role && <p className="text-xs text-[#888]">{t.role}</p>}
                  </div>
                </div>
                {!!t.rating && (
                  <div className="mt-2 text-sm text-gold" aria-hidden>
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                )}
                <p className="mt-3 text-[13px] leading-relaxed text-[#444]">{t.text}</p>
                {t.readMoreUrl && (
                  <a
                    href={t.readMoreUrl}
                    target="_blank"
                    rel="noopener"
                    className="mt-2 inline-block text-[13px] font-semibold text-gold hover:underline"
                  >
                    Lire la suite
                  </a>
                )}
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

    case "divider":
      return (
        <div className="mx-auto max-w-[900px] px-6">
          <div className="h-px bg-neutral-200" />
        </div>
      );

    case "iconBox":
      return (
        <div className="mx-auto grid max-w-[1000px] gap-5 px-6 py-8 sm:grid-cols-2 md:grid-cols-3">
          {block.items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-neutral-100 bg-white p-6 text-center">
              {it.icon && <div className="mb-2 text-3xl">{it.icon}</div>}
              <h3 className="font-heading text-base font-semibold text-black">{it.title}</h3>
              <p className="mt-1 text-sm text-[#555]">{it.text}</p>
            </div>
          ))}
        </div>
      );

    case "rating":
      return (
        <div className="px-6 py-6 text-center">
          <div className="text-2xl text-gold" aria-hidden>
            {"★".repeat(block.value)}
            {"☆".repeat(5 - block.value)}
          </div>
          {block.label && <p className="mt-1 text-sm text-[#555]">{block.label}</p>}
        </div>
      );

    case "tabs":
      return <TabsRender items={block.items} />;

    case "accordion":
      return (
        <div className="mx-auto max-w-[800px] divide-y divide-[#eee] border-t border-[#eee] px-6">
          {block.items.map((it, i) => (
            <details key={i} className="py-3">
              <summary className="cursor-pointer font-heading text-base font-medium text-black">
                {it.title}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-[#444]">{it.content}</p>
            </details>
          ))}
        </div>
      );

    case "blockquote":
      return (
        <blockquote className="mx-auto max-w-[700px] border-l-4 border-gold px-6 py-6 text-center">
          <p className="font-heading text-xl italic text-black">&quot;{block.quote}&quot;</p>
          {block.author && <p className="mt-2 text-sm text-[#888]">— {block.author}</p>}
        </blockquote>
      );

    case "alert": {
      const styles = {
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
      };
      return (
        <div className="mx-auto max-w-[800px] px-6 py-4">
          <div className={`rounded-lg border p-4 text-sm ${styles[block.style]}`}>
            {block.text}
          </div>
        </div>
      );
    }

    case "progress":
      return (
        <div className="mx-auto max-w-[700px] space-y-4 px-6 py-8">
          {block.items.map((it, i) => (
            <div key={i}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-black">{it.label}</span>
                <span className="text-[#888]">{it.percent}%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-100">
                <div
                  className="h-2 rounded-full bg-gold"
                  style={{ width: `${it.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      );

    case "priceList":
      return (
        <div className="mx-auto max-w-[700px] px-6 py-8">
          {block.title && (
            <h2 className="mb-4 font-heading text-xl font-semibold text-black">
              {block.title}
            </h2>
          )}
          <div className="divide-y divide-neutral-100">
            {block.items.map((it, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-black">{it.name}</p>
                  {it.description && <p className="text-xs text-[#888]">{it.description}</p>}
                </div>
                <p className="font-heading font-semibold text-gold">{it.price}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "googleMap":
      return (
        <div className="mx-auto max-w-[900px] px-6 py-8">
          <div className="aspect-video w-full overflow-hidden rounded-2xl">
            <iframe src={block.embedUrl} className="h-full w-full border-0" loading="lazy" />
          </div>
        </div>
      );

    case "socialIcons":
      return (
        <div className="flex justify-center gap-4 px-6 py-6">
          {block.items.map((it, i) => (
            <a
              key={i}
              href={it.url}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-black hover:border-gold hover:text-gold"
            >
              {it.platform}
            </a>
          ))}
        </div>
      );

    case "button":
      return (
        <div
          className={`px-6 py-6 ${block.align === "left" ? "text-left" : block.align === "right" ? "text-right" : "text-center"}`}
        >
          <Link
            href={block.link}
            className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 font-medium text-white transition-colors hover:border-[#b8952f] hover:bg-[#b8952f]"
          >
            {block.text}
          </Link>
        </div>
      );

    default:
      return null;
  }
}

// Lets a heading title color part of the sentence, e.g.
// "Dynamitz : transformer {{un outil complexe}} en plateforme" — the part
// inside {{...}} takes the accent color, everything else stays as-is.
function renderInlineColor(text: string, color?: string): React.ReactNode {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const match = part.match(/^\{\{([^}]+)\}\}$/);
    if (match) {
      return (
        <span key={i} style={{ color: color || "#c9846f" }}>
          {match[1]}
        </span>
      );
    }
    return part;
  });
}

// Minimal inline markdown for text blocks: **bold** and [texte](lien).
function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={i} href={link[2]} className="font-semibold text-[#c9846f] hover:underline">
          {link[1]}
        </Link>
      );
    }
    return part;
  });
}

function TabsRender({ items }: { items: { label: string; content: string }[] }) {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-8">
      {items.map((it, i) => (
        <div key={i} className="mb-2 rounded-lg border border-neutral-100">
          <p className="border-b border-neutral-100 px-4 py-2.5 font-heading text-sm font-semibold text-gold">
            {it.label}
          </p>
          <p className="px-4 py-3 text-sm text-[#444]">{it.content}</p>
        </div>
      ))}
    </div>
  );
}
