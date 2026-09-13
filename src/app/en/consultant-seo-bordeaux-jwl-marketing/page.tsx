import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import ProofCards from "@/components/ProofCards";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";
import SiteHeader from "@/components/SiteHeader";
import GoogleColors from "@/components/GoogleColors";

export const metadata: Metadata = {
  title: "Freelance SEO Consultant Bordeaux | JWL Marketing",
  description:
    "Freelance SEO Consultant in Bordeaux. I turn your Google visibility into client acquisition. 10 years of B2B sales experience. Free audit.",
};

const ZONES = [
  "Bordeaux",
  "Mérignac",
  "Pessac",
  "Talence",
  "Bègles",
  "Villenave-d'Ornon",
  "Le Bouscat",
  "Cenon",
  "Lormont",
  "Gradignan",
];

const COLLABORATIONS = [
  {
    tag: "Audit & strategy",
    title: "Audit",
    text: "A clear diagnosis of your visibility and positioning, to know where you're losing clients.",
  },
  {
    tag: "Website & Google listing",
    title: "Build or manage",
    text: "A site designed to convert, from a One Page to a full ecosystem.",
  },
  {
    tag: "Monthly follow-up",
    title: "Measured results",
    text: "Monthly follow-up to steer your results over time, month after month.",
  },
];

const FEATURES = [
  { title: "Single point of contact", note: "✦ Zero turnover" },
  { title: "Revenue-focused vision", note: "✦ Results-driven SEO" },
  { title: "B2B experience", note: "✦ 10 years, including the IAC group" },
  { title: "Clear priorities", note: "✦ No fluff" },
  { title: "Teaching approach", note: "✦ Direct communication" },
  { title: "Autonomy", note: "✦ Progressive independence" },
];

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/consultant-seo-bordeaux-jwl-marketing" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-base leading-[1.6] text-black">
            A freelance strategy, backed by the quality of a boutique
            agency. In Bordeaux, some come for the grand crus, others for
            the cannelés. Your future clients, meanwhile, come to <GoogleColors /> to
            find you.
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="italic text-[#c9846f]">
              Freelance SEO Consultant
            </span>
            <br />
            <span className="font-medium">in Bordeaux.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full border-2 border-gold px-8 py-[13px] font-medium text-black transition-colors hover:bg-[#faf3ea]"
            >
              FREE AUDIT
            </a>
          </div>
        </div>
        <Image
          src="/images/consultante-seo-visibilite-web-bordeaux.jpg"
          alt="Jodie Lapaillerie — Freelance SEO Consultant Bordeaux"
          width={494}
          height={580}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* They trust me */}
      <section className="bg-black py-10 text-center">
        <h2 className="font-heading text-3xl text-white">
          They trust me!
        </h2>
      </section>
      <section className="py-6">
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Market context */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="space-y-5 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            In Bordeaux, wine and cannelés make the city's reputation. Make
            your business a reference on <GoogleColors />. In a dynamic metropolis
            where businesses innovate and competition is strong, being
            visible on <GoogleColors /> has become a genuine growth lever. Having a
            website isn't enough anymore: you need to show up when your
            future clients are searching for your products or services.
          </p>
          <p>
            As a freelance SEO consultant, you work directly with me. No
            agency, no subcontracting, no middleman. I analyse your
            business, your market and your goals to build a tailored SEO
            strategy suited to your business and the reality of the
            Bordeaux market.
          </p>
          <p>
            I study the searches made by your future clients, the
            opportunities in your industry, local competition and your
            site's performance. I then optimise the technical side, the
            content, internal linking, local SEO, user experience and
            every criterion <GoogleColors /> takes into account to durably improve
            your visibility.
          </p>
          <p>
            My goal is simple: turn <GoogleColors /> searches into quote requests,
            appointments and new clients in Bordeaux, across Gironde and
            anywhere you want to grow your business.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
          Bordeaux attracts new businesses, new talent and new investors
          every year. This dynamic also creates stronger competition. To
          get chosen, a nice website isn't enough anymore. Your future
          clients also need to be able to find it when they run a <GoogleColors />
          search.
        </p>
        <div className="mx-auto mt-6 max-w-[700px] space-y-2 text-left text-[15px] text-[#1a1a1a]">
          <p>— Every day, new businesses are trying to gain visibility.</p>
          <p>— The top positions on <GoogleColors /> capture most of the clicks.</p>
          <p>
            — While some wait, their competitors are already building
            their online presence.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Whether your business is based in Bordeaux, Mérignac, Pessac,
          Talence, Bègles or elsewhere in Gironde, a well adapted SEO
          strategy lets you show up in front of the people genuinely
          searching for your services.
        </p>
      </section>

      {/* Proof in numbers */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">The proof</span>{" "}
          <span className="font-medium">is in the numbers.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] text-[15px] text-[#555]">
          Measured results, tracked with Google Analytics 4.
        </p>
        <div className="mt-10">
          <ProofCards />
        </div>
      </section>

      {/* Let's talk + audit widget */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Let's talk</span>{" "}
          <span className="font-medium">about your project.</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              You may have already invested in a website… without getting
              the results you hoped for. Your site looks great, but it's
              hard to find on <GoogleColors />. You publish content, but it doesn't
              generate calls or quote requests.
            </p>
            <p>
              In Bordeaux, many businesses have a visually strong website.
              Yet without a proper SEO strategy, it often goes unnoticed.
              My role is to turn your site into a genuine growth tool.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration: 3 ways to work together */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <TypewriterText className="italic text-[#c9846f]" text="Collaboration." />
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] text-[15px] text-[#555]">
          3 ways to work with me
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COLLABORATIONS.map((c) => (
            <div key={c.title} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                {c.tag}
              </p>
              <h3 className="mt-2 font-heading text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-[21px] text-white/80">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">My expertise,</span>
          <br />
          <span className="font-medium">I study the searches made by real users.</span>
        </h2>
        <div className="mt-8 space-y-5 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            As an SEO consultant in Bordeaux, my role isn't just to
            improve your ranking on <GoogleColors />. My goal is to make your
            business visible to people who are already searching for your
            products or services.
          </p>
          <p>
            I work on every lever that influences your visibility: your
            site's architecture, its technical performance, your content,
            internal linking, local SEO, your Google Business Profile and
            every criterion <GoogleColors /> takes into account.
          </p>
          <p>
            I support businesses, shopkeepers, craftsmen, independent
            professionals and self-employed workers in Bordeaux, as well
            as in Mérignac, Pessac, Talence, Bègles, Villenave-d'Ornon and
            more broadly across all of Gironde.
          </p>
        </div>
      </section>

      {/* JWL Marketing — features */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="font-medium">JWL</span>{" "}
          <span className="italic text-[#c9846f]">Marketing</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#141414] p-6 text-center text-white">
              <h3 className="font-heading text-lg">{f.title}</h3>
              <p className="mt-3 text-xs italic text-[#c9a84c]">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I travel anywhere in France</span>
          <br />
          <span className="font-medium">
            Depending on your project in Bordeaux, I can come and meet you
            in person.
          </span>
        </h3>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ZONES.map((z) => (
            <span
              key={z}
              className="rounded-full bg-[#1a1207] px-5 py-2 text-sm text-white"
            >
              {z}
            </span>
          ))}
        </div>
      </section>

      {/* Generate more clients */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Generate more clients.</span>
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-[#1a1a1a]">
          The problem is that if your website, your SEO, your local SEO or
          your Google Business Profile aren't properly optimised, <GoogleColors />
          will simply put one of your competitors forward instead. While
          you're busy working, they're the ones picking up the calls, the
          quote requests and the new clients.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Optimise your website</span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          with <GoogleColors />, starting now.
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Your future clients are already searching for your services on
          <GoogleColors />. The goal is simple: make sure they find your business
          before your competitors in Bordeaux, Mérignac, Pessac, Talence
          or elsewhere in Gironde.
        </p>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Ready to make your business a reference on <GoogleColors /> in Bordeaux?
        </a>
      </section>
    </div>
  );
}
