import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import ProofCards from "@/components/ProofCards";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Freelance SEO Consultant Montpellier | JWL Marketing",
  description:
    "Freelance SEO Consultant in Montpellier. I turn your Google visibility into client acquisition. 10 years of B2B sales experience. Free audit.",
};

const ZONES = [
  "Montpellier",
  "Écusson",
  "Port Marianne",
  "Millénaire",
  "Eurêka",
  "Odysseum",
  "Antigone",
  "Castelnau-le-Lez",
  "Lattes",
  "Pérols",
  "Juvignac",
];

const STEPS = [
  {
    n: 1,
    title: "Let's talk",
    tag: "Free discovery call · 30 min",
    text: "You tell me about your business. I explain how I work. Together we see if it's a fit. No commitment.",
    note: "✦ No commitment",
  },
  {
    n: 2,
    title: "I analyse your market",
    tag: "SEO audit",
    text: "Your site, your competitors, your opportunities. I give you the real priorities — the ones that impact your revenue. Not a 200-page report.",
    note: "✦ Targeted diagnosis",
  },
  {
    n: 3,
    title: "We build your strategy",
    tag: "Keywords & action plan",
    text: "What to target, in what order, why. You validate every choice. You understand what we're doing — and for whom.",
    note: "✦ Prioritised plan",
  },
  {
    n: 4,
    title: "We take action",
    tag: "Optimisation & content",
    text: "Optimised pages, written content, technical fixes. Every action is tracked and explained. You stay in control.",
    note: "✦ Rigorous execution",
  },
  {
    n: 5,
    title: "You gain autonomy",
    tag: "Training & handover",
    text: "I pass on the right reflexes. My goal: for you to understand your market and be able to manage your visibility yourself.",
    note: "✦ Progressive independence",
  },
];

const FEATURES = [
  {
    title: "A single point of contact",
    text: "You work with me from start to finish. No account manager, no junior. One person who knows your account inside out.",
    note: "✦ Zero turnover",
  },
  {
    title: "A revenue-focused vision",
    text: "I don't chase rankings. I target the keywords that bring in clients. One feels good, the other generates business.",
    note: "✦ Results-driven SEO",
  },
  {
    title: "10 years of B2B experience",
    text: "Including 4 years at the IAC group — the famous Meetic, Tripadvisor and Travaux.com — before moving into SEO. I understand what really triggers a quote request.",
    note: "✦ Business mindset",
  },
  {
    title: "Clear priorities",
    text: "If an action isn't worth it, I'll tell you. My role: help you choose the right battles. Not drown you in options.",
    note: "✦ No fluff",
  },
  {
    title: "Transparent teaching",
    text: "I explain what I do and why. Readable monthly reporting, zero jargon. You stay in control.",
    note: "✦ Direct communication",
  },
  {
    title: "Progressive autonomy",
    text: "I don't build dependency. I bring you into the strategy so you can fly on your own.",
    note: "✦ Progressive independence",
  },
];

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/consultant-freelance-seo-montpellier-jwl-marketing" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <p className="text-base leading-[1.6] text-black">
            A freelance strategy, backed by the quality of a boutique
            agency. In Montpellier, Place de la Comédie is a landmark you
            can't miss. On Google, it's your business's turn to become one.
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="italic text-[#c9846f]">
              Freelance SEO Consultant
            </span>
            <br />
            <span className="font-medium">in Montpellier.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              CALL ME
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
          src="/images/consultant-seo-montpellier.webp"
          alt="Freelance SEO Consultant Montpellier — JWL Marketing"
          width={1190}
          height={1322}
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
            In Montpellier, it's not wine and grand crus that make the
            city's reputation — here it's Place de la Comédie and l'Écusson.
            Make your business a reference on Google. In a dynamic
            metropolis where businesses innovate and competition is strong,
            being visible on Google has become a genuine growth lever.
            Having a website isn't enough anymore: you need to show up
            when your future clients are searching for your products or
            services.
          </p>
          <p>
            As a freelance SEO consultant, you work directly with me. No
            agency, no subcontracting, no middleman. I analyse your
            business, your market and your goals to build a tailored SEO
            strategy suited to your business and the reality of the
            Montpellier market.
          </p>
          <p>
            I study the searches made by your future clients, the
            opportunities in your industry, local competition and your
            site's performance. I then optimise the technical side, the
            content, internal linking, local SEO, user experience and
            every criterion Google takes into account to durably improve
            your visibility.
          </p>
          <p>
            My goal is simple: turn Google searches into quote requests,
            appointments and new clients in Montpellier, across Occitanie
            and anywhere you want to grow your business.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
          Montpellier attracts new businesses, new talent and new investors
          every year. This dynamic also creates stronger competition. To
          get chosen, a nice website isn't enough anymore. Your future
          clients also need to be able to find it when they run a Google
          search.
        </p>
        <div className="mx-auto mt-6 max-w-[700px] space-y-2 text-left text-[15px] text-[#1a1a1a]">
          <p>
            — Every day, new businesses are trying to gain visibility.
          </p>
          <p>— The top positions on Google capture most of the clicks.</p>
          <p>
            — While some wait, their competitors are already building
            their online presence.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Whether your business is based in l'Écusson, Port Marianne, near
          Odysseum or elsewhere in the Montpellier metro area, a well
          adapted SEO strategy lets you show up in front of the people
          genuinely searching for your services.
        </p>
      </section>

      {/* Proof in numbers */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">The proof</span>{" "}
          <span className="font-medium">is in the numbers.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] text-[15px] text-[#555]">
          Sites I've built or optimised for independent professionals and
          businesses across Occitanie and throughout France. Measured
          results, not promises.
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
              Does your provider only talk about traffic, never about
              leads or revenue? Do you get reports full of data without
              knowing which actions to prioritise? Does your site attract
              a few visitors, but the quote requests don't follow?
            </p>
            <p>
              The problem isn't always your visibility. Very often, it's
              the absence of a genuine strategy that's holding your
              business back. Before even working on keywords, I analyse
              your market, your competitors, your offer and the searches
              made by your future clients in Montpellier.
            </p>
          </div>
        </div>
      </section>

      {/* WORKING TOGETHER */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <TypewriterText className="italic text-[#c9846f]" text="Working together" />
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step) => (
            <div key={step.n} className="flex flex-col rounded-2xl bg-[#141414] p-6 text-left text-white">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
                {step.n}
              </div>
              <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-wide text-gold">
                {step.tag}
              </p>
              <h3 className="mt-2 text-center font-heading text-lg">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-[21px] text-white/80">{step.text}</p>
              <p className="mt-3 text-center text-xs italic text-[#c9a84c]">{step.note}</p>
            </div>
          ))}
        </div>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-10 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Book your FREE call
        </a>
      </section>

      {/* A single point of contact — features */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="font-medium">JWL</span>{" "}
          <span className="italic text-[#c9846f]">Marketing</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
              <h3 className="font-heading text-lg">{f.title}</h3>
              <p className="mt-3 text-sm leading-[21px] text-white/80">{f.text}</p>
              <p className="mt-3 text-xs italic text-[#c9a84c]">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic location */}
      <section className="mx-auto max-w-[900px] px-6 py-10 text-center">
        <p className="text-[17px] leading-[28px] text-[#1a1a1a]">
          Having a strategic location in Montpellier no longer guarantees
          you'll find new clients. Today, most consumers research on
          Google before contacting a professional, booking a table or
          buying a product.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-[#1a1a1a]">
          Whether your business is located in l'Écusson, Port Marianne,
          near Odysseum or elsewhere in the Montpellier metro area, your
          future clients often start their search online. If your business
          doesn't show up at the right time, they'll naturally turn to a
          competitor.
        </p>
      </section>

      {/* Zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I travel anywhere in France</span>
          <br />
          <span className="font-medium">
            Depending on your project in Montpellier, I can come and meet
            you in person.
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

      {/* Closing CTA */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Get started</span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          Optimise your Montpellier website with Google, starting now.
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Your future clients are already searching for your services on
          Google. Don't let a competitor from l'Écusson, Port Marianne or
          Odysseum grab those requests instead of you.
        </p>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Ready to give Google a good reason to recommend your business?
        </a>
      </section>
    </div>
  );
}
