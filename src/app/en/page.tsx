import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroBadge from "@/components/HeroBadge";
import YoutubeLite from "@/components/YoutubeLite";
import VisibilityChart from "@/components/VisibilityChart";
import SectionHeading from "@/components/SectionHeading";
import GoogleColors from "@/components/GoogleColors";
import ClientResultsWidget from "@/components/ClientResultsWidget";
import { REVIEWS } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import GuaranteesCards from "@/components/GuaranteesCards";
import EscalierReveal from "@/components/EscalierReveal";
import TypewriterText from "@/components/TypewriterText";
import TrustedPartners from "@/components/TrustedPartners";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "JWL Marketing | Digital Marketing in Aix-en-Provence",
  description:
    "Tired of an invisible website? Discover my world built around client acquisition, SEO and AI. Based in Aix-en-Provence, working across France.",
};

const METHODE_STEPS = [
  {
    image: "/images/accompagnement-digital.png",
    title: "I find out",
    lead: "I identify why Google isn't bringing you enough clients.",
    items: [
      "SEO audit",
      "Sales audit",
      "Competitor analysis",
      "Google Business Profile analysis",
    ],
    cta: "Book a call",
    href: "/en/contact-jwl-marketing-aix-en-provence",
  },
  {
    image: "/images/strategie-marketing.png",
    title: "I take action",
    lead: "I build an ecosystem that works for your business.",
    items: [
      "Google Business Profile",
      "Website",
      "SEO pages",
      "Blog articles",
      "AI and GEO optimisation",
    ],
    cta: "Learn more",
    href: "/en/site-internet-aix-en-provence",
  },
  {
    image: "/images/developpement-digital.png",
    title: "Google finds you",
    lead: "I measure, adjust and grow your visibility.",
    items: [
      "Ranking tracking",
      "Performance analysis",
      "New SEO opportunities",
      "Monthly support",
    ],
    cta: "Learn more",
    href: "/en/audit-seo-aix-en-provence",
  },
];

const OFFERS_STARTER = [
  {
    price: "690",
    title: "JWL Diagnostic",
    subtitle: "« I want to know where I stand before investing. »",
    lead: "I deliver:",
    items: [
      "sales audit",
      "marketing audit",
      "SEO audit",
      "competitive analysis",
      "visibility analysis",
      "growth opportunities",
      "roadmap",
    ],
    footer:
      "Whether you're a dentist, plumber, therapist, creator or lawyer.",
    cta: "Book a call",
    href: "/en/contact-jwl-marketing-aix-en-provence",
  },
  {
    price: "1990",
    title: "JWL Business",
    subtitle: "« I build a custom website. »",
    lead: "Included:",
    items: [
      "Strategic audit",
      "Sales positioning",
      "Page architecture",
      "Custom development",
      "Deployed on Vercel",
      "Technical optimisation",
    ],
    lead2: "What makes the difference:",
    items2: [
      "Fast site",
      "No subscription",
      "No yearly hosting fee",
      "Scalable",
      "Ownership certificate delivered to the client (legally binding)",
    ],
    cta: "Learn more",
    href: "/en/site-internet-aix-en-provence",
  },
  {
    price: "4500",
    title: "JWL Visible",
    subtitle: "« I'm growing, I want clients. »",
    lead: "Included:",
    items: [
      "Custom website + SEO strategy",
      "Strategic audit",
      "SEO positioning",
      "Website development",
      "Technical SEO optimisation",
      "SEO copywriting",
      "Google Business Profile",
      "Blog",
      "Local, regional or national strategy",
    ],
    cta: "Learn more",
    href: "/en/audit-seo-aix-en-provence",
  },
];

const OFFERS_NEXT = [
  {
    price: "645",
    perMonth: true,
    title: "JWL Growth",
    lead: "Includes:",
    items: [
      "Monthly support (one to one)",
      "Access to Google performance tools",
      "Ranking tracking",
      "Performance analysis",
      "SEO strategy adjustments",
    ],
    objectif: "Become the local or regional reference in your market.",
    cta: "see the packages",
    href: "/en/site-internet-aix-en-provence",
  },
  {
    price: "950",
    title: "JWL Master SEO Copywriting",
    lead: "Includes:",
    items: [
      "Understand the identified SEO opportunities",
      "Use strategic keywords",
      "Build an editorial calendar",
      "Write optimised articles",
      "Use TextOptimizer or your own optimisation tool",
      "Understand search intent",
      "Structure content that Google likes",
    ],
    objectif: "Become the local or regional reference in your market.",
    cta: "see the packages",
    href: "/en/site-internet-aix-en-provence",
  },
];

function OfferCard({
  offer,
}: {
  offer: (typeof OFFERS_STARTER)[number] | (typeof OFFERS_NEXT)[number];
}) {
  const hasSubtitle = "subtitle" in offer;
  const hasLead2 = "lead2" in offer && offer.lead2;
  const hasFooter = "footer" in offer && offer.footer;
  const hasObjectif = "objectif" in offer && offer.objectif;
  const perMonth = "perMonth" in offer && offer.perMonth;

  return (
    <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-white">
      <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
        From
        <br />
        {offer.price}€{perMonth && <><br />per month</>}
      </span>
      <h3 className="font-heading text-xl underline decoration-gold underline-offset-4">
        {offer.title}
      </h3>
      {hasSubtitle && (
        <p className="mt-2 min-h-[2.5em] italic text-white/90">
          <TypewriterText
            text={(offer as (typeof OFFERS_STARTER)[number]).subtitle}
          />
        </p>
      )}
      <p className="mt-4 text-sm uppercase tracking-wide text-gold">
        {offer.lead}
      </p>
      <ul className="mt-2 flex-1 space-y-1.5 text-sm text-white/85">
        {offer.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {hasLead2 && (
        <>
          <p className="mt-4 text-sm uppercase tracking-wide text-gold">
            {(offer as (typeof OFFERS_STARTER)[number]).lead2}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-[#c9846f]">
            {(offer as (typeof OFFERS_STARTER)[number]).items2!.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {hasFooter && (
        <p className="mt-4 text-sm text-white/70">
          {(offer as (typeof OFFERS_STARTER)[number]).footer}
        </p>
      )}
      {hasObjectif && (
        <p className="mt-4 min-h-[3em] text-sm text-white/85">
          <span className="uppercase tracking-wide text-gold">
            Goal:
          </span>{" "}
          <TypewriterText
            text={(offer as (typeof OFFERS_NEXT)[number]).objectif}
          />
        </p>
      )}
      <Link
        href={offer.href}
        className="mt-6 inline-block self-center rounded-[5px] bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
      >
        {offer.cta}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <SiteHeader locale="en" href="/" />

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[5%] pb-[60px] pt-20 lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="m-0 mb-1 mt-2.5 font-heading text-4xl leading-[1.15] text-black lg:text-[60px] lg:leading-[1.2]">
            <span>
              A website
              <br />
              that attracts
            </span>
            <br />
            <span className="font-heading italic text-[#c9846f]">
              new clients
            </span>
          </h1>

          <p className="mt-4 text-lg leading-[1.6] text-[#333]">
            Google has to find you. AI has to understand you. Your future
            clients have to choose you.
          </p>

          <div className="mt-6 flex flex-wrap gap-[15px]">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <Link
              href="/en/contact-jwl-marketing-aix-en-provence"
              className="inline-block rounded-full bg-[#faf3ea] px-9 py-[18px] text-lg font-medium text-[#000000] transition-colors hover:bg-[#f2e6d4]"
            >
              FREE Marketing Audit
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-base">
            <span className="text-lg font-normal text-[#1a2b6b]">5/5</span>
            <span className="text-gold">★★★★★</span>
            <span className="text-[#555]">16 Google reviews</span>
            <span className="text-[#999]">·</span>
            <a
              href="http://api.jwl-marketing.fr/redirects/gmb/jwl.html"
              target="_blank"
              rel="noopener"
              className="font-normal text-[#1a2b6b] underline"
            >
              Add a review
            </a>
          </div>
        </div>

        <div className="relative flex min-w-0 flex-[1.4_1_0%] items-start justify-end">
          <video
            src="/videos/hero-jodie-etoile.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Jodie Lapaillerie - JWL Marketing"
            className="-mt-10 h-auto max-h-[70vh] w-full max-w-full object-contain md:-mt-16"
          />
          <HeroBadge />
        </div>
      </div>

      <TrustedPartners />

      {/* What if your next client... */}
      <section className="flex flex-col items-center justify-between gap-10 px-[5%] py-20 md:flex-row">
        <div className="flex-[1.4_1_0%] overflow-hidden rounded-[40px] bg-black p-10">
          <div className="mx-auto aspect-video w-full max-w-[650px] overflow-hidden rounded-xl">
            <YoutubeLite videoId="-btM09DQ4zg" title="JWL Marketing" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center text-center">
          <h2 className="mx-auto max-w-[560px] font-heading text-3xl font-normal leading-[1.2] text-black md:text-[54px] md:leading-[1.1]">
            What if <span className="italic text-[#c9846f]">your next</span>
            <br />
            <span className="italic text-[#c9846f]">client</span> found you
            <br />
            thanks to <GoogleColors />
            <span className="text-black">?</span>
          </h2>
        </div>
      </section>

      {/* Client case */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading title="What JWL MARKETING put in place">
          <br />
          for one of{" "}
          <span className="italic text-[#c9846f]">these clients</span>
        </SectionHeading>
        <ClientResultsWidget />
      </section>

      {/* The method */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading kicker="The method" title="JWL MARKETING" />
        <EscalierReveal
          className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3"
          itemClassName="flex flex-col overflow-hidden rounded-2xl bg-black text-white"
        >
          {METHODE_STEPS.map((step, i) => (
            <Fragment key={step.title}>
              <Image
                src={step.image}
                alt={step.title}
                width={455}
                height={340}
                className="h-[220px] w-full object-cover"
              />
              <div className="border-b border-white/15 px-6 py-6">
                <h3 className="min-h-[1.6em] font-heading text-xl">
                  <TypewriterText text={step.title} startDelay={i * 150 + 650} />
                </h3>
                <p className="mt-3 text-sm text-white/85">{step.lead}</p>
              </div>
              <ul className="flex-1 space-y-2 px-6 py-6 text-sm text-white/85">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="px-6 pb-8 text-center">
                <Link
                  href={step.href}
                  className="inline-block rounded-full bg-[#c9846f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b8735f]"
                >
                  {step.cta}
                </Link>
              </div>
            </Fragment>
          ))}
        </EscalierReveal>
      </section>

      {/* Why businesses choose JWL Marketing */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading kicker="Why businesses choose" title="JWL MARKETING" />
        <GuaranteesCards />
      </section>

      {/* Your visibility isn't a matter of luck */}
      <section className="px-[5%] py-16 text-center">
        <SectionHeading
          kicker="Your visibility"
          title="isn't a matter of luck"
        />

        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 md:flex-row">
          <VisibilityChart />
          <span className="block max-w-[300px] shrink-0 text-left text-black">
            1. Be found
            <br />
            2. Be understood
            <br />
            3. Be chosen
          </span>
        </div>

        <div className="mx-auto my-10 w-full max-w-[1400px] px-5 text-center md:my-[60px]">
          <h2 className="font-heading text-3xl leading-[1.2] md:text-[54px] md:leading-[1.35]">
            <span className="italic text-[#c9846f]">Choose the support</span>{" "}
            <span className="text-black">that fits your goals</span>
          </h2>
        </div>
        <EscalierReveal
          className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row"
          itemClassName="flex flex-1 flex-col"
        >
          {OFFERS_STARTER.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </EscalierReveal>

        <div className="mx-auto mt-10 flex max-w-[1200px] justify-center">
          <Link
            href="/en/contact-jwl-marketing-aix-en-provence"
            className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Not sure which to choose? Ask for free advice
          </Link>
        </div>

        <SectionHeading
          kicker="What's next?"
          title="continue the journey together or on your own"
        />
        <EscalierReveal
          className="mx-auto flex max-w-[820px] flex-col gap-8 md:flex-row"
          itemClassName="flex flex-1 flex-col"
        >
          {OFFERS_NEXT.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </EscalierReveal>

        <div className="mx-auto mt-10 flex max-w-[820px] justify-center">
          <Link
            href="/en/site-internet-aix-en-provence"
            className="inline-block rounded-full bg-[#c9846f] px-9 py-[18px] text-lg font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            JWL Master, see the programme
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 px-6 py-16">
        <div className="mx-auto my-10 max-w-[700px] px-5 text-center md:my-[60px]">
          <h2 className="font-heading text-3xl leading-[1.2] md:text-[54px] md:leading-[1.35]">
            <span className="italic text-[#c9846f]">They're cashing in,</span>{" "}
            <span className="text-black">with JWL MARKETING</span>
          </h2>
        </div>
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-2 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>
    </div>
  );
}
