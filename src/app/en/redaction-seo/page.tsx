import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";
import PopReveal from "@/components/PopReveal";
import AutoPlayVideo from "@/components/AutoPlayVideo";
import ContactForm from "@/components/ContactForm";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  path: "/redaction-seo",
  locale: "en",
  title: "SEO Copywriting: attract, convince, convert | JWL Marketing",
  description:
    "Stop publishing just to publish. Turn your content into a real sales lever with SEO copywriting designed to attract and convert.",
});

const PROCESS_STEPS = [
  {
    title: "Your website is optimized",
    text: "Your SEO structure is in place",
  },
  {
    title: "I help you write strategic SEO pages",
    text: "Your content speaks Google's language",
  },
  {
    title: "Google and AI understand you",
    text: "They recommend you in search results",
  },
  {
    title: "The prospect finds you",
    text: "They discover a solution to their problem",
  },
];

const MODULE_1_ITEMS = [
  "Tags and structure of an article",
  "Keywords, semantic fields and connectors",
  "Search intent, relying on Google Search Console",
  "Internal linking between pages",
  "Optimization with the Textoptimizer tool",
  "Using ChatGPT to save time without losing your voice",
  "Sharing your articles on your Google Business Profile",
];

const MODULE_2_STEPS = [
  "choosing the query",
  "structure",
  "writing",
  "optimization",
  "correction",
  "internal linking",
  "publishing",
];

const CORRECTION_CHECKS = [
  "H1/H2/H3 structure",
  "use of the target query",
  "semantics",
  "connectors",
  "readability",
  "search intent",
  "optimization with the tool",
  "internal linking",
  "business coherence",
];

function RocketIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/redaction-seo-rocket.png"
      alt=""
      width={190}
      height={230}
      className={className}
    />
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader locale="en" href="/redaction-seo" />

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-[110px] md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ScrollReveal>
            <h1
              className="font-heading leading-tight text-black"
              style={{ fontSize: "clamp(30px, 7vw, 56px) !important" } as React.CSSProperties}
            >
              <span className="italic text-[#c9846f]">JWL Connect:</span>{" "}
              SEO copywriting, the art of persuasion.
            </h1>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[26px] text-neutral-600">
              The right words for real impact. Every piece of content is a
              chance to turn a prospect into a client.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/en/contact"
                className="inline-flex items-center rounded-full bg-[#c9846f] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                Let&apos;s talk?
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative mx-auto h-[420px] w-full max-w-[460px] md:h-[520px]">
              <Image
                src="/images/redaction-seo-hero.png"
                alt="JWL Marketing"
                width={1061}
                height={1500}
                priority
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who writes your SEO articles */}
      <section className="mx-auto max-w-[1000px] px-6 pb-20 text-center md:px-10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl text-black md:text-4xl">
            Who writes your <span className="text-[#c9846f]">SEO blog</span>{" "}
            articles?
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-[26px] text-neutral-600">
            You&apos;ve optimized your site for SEO, worked on its structure
            and run your keyword audit. But are you the one writing your
            content? I provide the strategy, you learn to execute it.
          </p>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl bg-black p-8 text-white">
              <h3 className="font-heading text-xl text-gold">
                You have visibility, but few results?
              </h3>
              <p className="mt-4 text-[15px] leading-[24px] text-neutral-300">
                Being visible is one thing. Being found by the right people
                is another. I help you work on your SEO and your content to
                attract the right prospects and turn them into clients.
              </p>
            </div>
            <div className="rounded-2xl bg-black p-8 text-white">
              <h3 className="font-heading text-xl text-gold">
                Can&apos;t find your articles in Google search?
              </h3>
              <p className="mt-4 text-[15px] leading-[24px] text-neutral-300">
                Website, social media, SEO, newsletters... I help you
                identify the channels that matter most for your business and
                use them effectively.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* How Google and AI recommend you */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl text-black md:text-4xl">
            How do <span className="text-[#c9846f]">Google and AI</span>{" "}
            recommend you?
          </h2>
        </ScrollReveal>

        {/* Step 1 (left) -> horizontal rocket -> Step 2 (right) */}
        <div className="mt-12 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <ScrollReveal>
            <div className="text-center md:text-left">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[0].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[0].text}
              </p>
            </div>
          </ScrollReveal>
          <Image
            src="/images/redaction-seo-rocket-horizontal.png"
            alt=""
            width={205}
            height={110}
            className="mx-auto hidden h-10 w-auto md:block"
          />
          <ScrollReveal delay={100}>
            <div className="text-center md:text-left">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[1].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[1].text}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Down to step 3 (center) + Google mockup */}
        <div className="mt-6 flex flex-col items-center">
          <RocketIcon className="my-5 h-12 w-auto" />
          <ScrollReveal delay={200}>
            <div className="text-center">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[2].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[2].text}
              </p>
            </div>
          </ScrollReveal>
          <PopReveal delay={250} className="mx-auto mt-5 w-full max-w-[420px]">
            <Image
              src="/images/redaction-seo-google.png"
              alt="What's on your mind today?"
              width={780}
              height={265}
              className="h-auto w-full rounded-xl shadow-sm"
            />
          </PopReveal>

          {/* Down to step 4 (center) */}
          <RocketIcon className="my-5 h-12 w-auto" />
          <ScrollReveal delay={350}>
            <div className="text-center">
              <p className="font-heading text-lg font-semibold text-black">
                {PROCESS_STEPS[3].title}
              </p>
              <p className="mt-1 text-[15px] italic text-neutral-500">
                {PROCESS_STEPS[3].text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The JWL Connect method */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 text-center md:px-10">
        <ScrollReveal>
          <p className="font-heading text-2xl font-bold italic text-[#c9846f] md:text-3xl">
            The JWL Connect method
          </p>
          <h2 className="mt-2 font-heading text-2xl text-black md:text-3xl">
            Write your own content or delegate it
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-[24px] text-neutral-600">
            Create content that ranks on page 1... and actually converts.
            <br />
            Tired of writing articles that vanish into the depths of the
            internet? Discover the SEO training 100% focused on Content &amp;
            Conversion. Learn to master search engines and convince your
            prospects with a strategy built on expertise, human quality, and
            zero technical jargon.
          </p>
        </ScrollReveal>
      </section>

      {/* Autoplay video on scroll */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-2xl">
            <AutoPlayVideo
              src="/videos/jwl-connect-rdv.mp4"
              className="h-full w-full"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* SEO training modules */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-2xl text-[#c9846f] md:text-3xl">
              SEO training
            </h2>
            <h3 className="font-heading text-2xl text-black md:text-3xl">
              tailored to your needs
            </h3>
            <p className="mt-4 text-[15px] text-neutral-600">
              Learn to write your SEO content like a real{" "}
              <em>copywriter</em>.
            </p>
          </div>

          <div className="relative mt-10 space-y-6 rounded-2xl bg-black p-6 md:p-10">
            <span className="absolute -top-5 right-6 flex h-[72px] w-[72px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[12px] leading-tight text-white shadow-md">
              From
              <br />
              €675
            </span>

            <div className="rounded-xl bg-[#0d0d0d] p-6">
              <p className="text-center font-heading text-lg text-white">
                Module 1 — 6h: learn the method
              </p>
              <p className="mt-2 text-center text-[14px] text-neutral-400">
                Understand your SEO audit and the queries to target. Build
                your editorial calendar for the next 12 months.
              </p>
              <ul className="mx-auto mt-5 max-w-[460px] space-y-2 text-[14px] text-neutral-300">
                {MODULE_1_ITEMS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c9846f]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#0d0d0d] p-6">
              <p className="text-center font-heading text-lg text-white">
                Module 2 — 6h: we write together
              </p>
              <p className="mt-2 text-center text-[14px] text-neutral-400">
                You write your first article in front of me. I guide you
                step by step:
              </p>
              <ul className="mx-auto mt-5 grid max-w-[360px] grid-cols-1 gap-x-8 gap-y-2 text-[14px] text-neutral-300 sm:grid-cols-2">
                {MODULE_2_STEPS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c9846f]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-center text-[14px] text-neutral-300">
                By the end, you can reproduce the method on your own.
              </p>
              <p className="mt-4 text-center text-[14px] font-semibold text-white">
                And then?
              </p>
              <p className="mx-auto mt-2 max-w-[460px] text-center text-[14px] text-neutral-300">
                &quot;I check your work&quot;: proofreading of an article the
                following month, SEO corrections, optimization, advice.
              </p>
              <p className="mx-auto mt-3 max-w-[460px] text-center text-[12px] italic text-neutral-500">
                * The price depends on the number of participants, your
                needs and your level of support. JWL Booster member rate
                €675. Price subject to change.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="/en/contact"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] text-center font-semibold text-white transition hover:bg-[#b56f5a]"
              >
                I want my tailored offer
              </a>
              <a
                href="/en/contact"
                className="inline-block rounded-full border-2 border-white px-8 py-[13px] text-center font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Separate card for SEO correction option */}
          <div className="mt-8 rounded-2xl bg-black border border-white/10 p-6 md:p-10 shadow-xl">
            <div className="rounded-xl bg-[#0d0d0d] p-6 md:p-8">
              <p className="text-center font-heading text-xl text-white">
                🔖 Option — SEO correction &amp; optimization
              </p>
              <p className="mt-3 text-center text-[14px] text-neutral-300">
                From €75 / article.
                <br />
                You write your article, then send it to me. I check in
                particular:
              </p>
              <ul className="mx-auto mt-4 grid max-w-[460px] grid-cols-1 gap-x-8 gap-y-2 text-[14px] text-neutral-300 sm:grid-cols-2">
                {CORRECTION_CHECKS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c9846f]">-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-[14px] text-neutral-300">
                I then send you back the corrections and recommendations
                needed to improve your optimization score.
              </p>
              <div className="mx-auto mt-5 max-w-[300px] space-y-1 text-[14px]">
                <p className="flex items-center justify-between">
                  <span className="text-neutral-300">
                    🟢 Already well optimized
                  </span>
                  <span className="text-white">€75</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-neutral-300">
                    🟡 A few corrections needed
                  </span>
                  <span className="text-white">€98</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-neutral-300">
                    🔴 Major optimization work
                  </span>
                  <span className="text-white">€150</span>
                </p>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="/en/contact"
                  className="inline-block rounded-full bg-[#c9846f] px-8 py-[14px] text-center font-semibold text-white transition hover:bg-[#b56f5a]"
                >
                  Request article correction
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* This training is for you if */}
      <section className="mx-auto max-w-[900px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-heading text-2xl text-black md:text-3xl">
            This <span className="text-[#c9846f]">training</span> is for you,
            if:
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-heading text-lg font-semibold text-gold">
                You have a job and no time to become a full-time community
                manager.
              </p>
              <p className="mt-3 text-[15px] leading-[24px] text-neutral-600">
                Your job takes up your time. So does your family life. So
                learn to delegate what feels secondary but stays essential
                for your business.
              </p>
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-gold">
                You don&apos;t know what to say, or how to frame your
                ideas?
              </p>
              <p className="mt-3 text-[15px] leading-[24px] text-neutral-600">
                You have plenty to say... but no idea how to say it?
              </p>
            </div>
            <div className="md:col-start-2">
              <p className="font-heading text-lg font-semibold text-gold">
                For those who post at random
              </p>
              <p className="mt-3 text-[15px] leading-[24px] text-neutral-600">
                You post when you think of it? And when you don&apos;t...
                nothing happens.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/ressources/kit/signature"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#b56f5a]"
            >
              Curious, I&apos;ll check out the SEO tips
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* What if your content really worked for you */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 md:px-10">
        <ScrollReveal>
          <h2 className="text-center font-heading text-2xl text-black md:text-3xl">
            What if your <span className="text-[#c9846f]">content</span>{" "}
            really worked for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-center text-[15px] leading-[24px] text-neutral-600">
            What if your content kept working while you focused on your
            craft? Content designed to attract the right clients, build
            your visibility and serve your business goals.
          </p>
          <Image
            src="/images/redaction-seo-contenus.png"
            alt="Case study — SEO Consultant & Web Visibility Aix-en-Provence"
            width={1500}
            height={1061}
            className="mx-auto mt-10 h-auto w-full max-w-[1100px] rounded-2xl"
          />
        </ScrollReveal>
      </section>

      {/* Need a hand - WhatsApp + form */}
      <section className="mx-auto max-w-[1000px] px-6 pb-24 md:px-10">
        <h2 className="text-center font-heading text-2xl text-black md:text-3xl">
          Need <span className="text-[#c9846f]">a hand</span> with your
          content?
        </h2>
        <div className="mt-10 grid gap-8 text-left md:grid-cols-2">
          <ScrollReveal>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-black p-8 text-center">
              <p className="text-[15px] leading-[22px] text-white">
                Got a question before getting started? Message me on
                WhatsApp, the message is already drafted to get straight to
                the point.
              </p>
              <a
                href="https://wa.me/33783792814?text=Hi%20Jodie%2C%20I%20have%20a%20question%20before%20starting%20the%20SEO%20copywriting%20training%3A"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#25D366] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe57]"
              >
                Ask my question on WhatsApp
              </a>
              <a
                href="https://calendar.app.google/MZrdz3xprTy4kfwy9"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
              >
                Book my discovery call
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="rounded-2xl border border-[#eee] p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
