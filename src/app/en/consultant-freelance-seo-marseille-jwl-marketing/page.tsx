import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Freelance SEO Consultant Marseille | JWL Marketing",
  description:
    "Freelance SEO Consultant in Marseille. I turn your Google visibility into client acquisition. 10 years of B2B sales experience. Free audit.",
};

const ZONES = [
  "Marseille",
  "Aubagne",
  "Allauch",
  "Plan-de-Cuques",
  "Rognac",
  "La Penne-sur-Huveaune",
  "Cassis",
  "La Ciotat",
  "Marignane",
  "Vitrolles",
];

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <SiteHeader locale="en" href="/consultant-freelance-seo-marseille-jwl-marketing" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-[5%] py-[60px] lg:flex-row">
        <div className="max-w-[600px] flex-1">
          <h1 className="font-heading text-4xl leading-[1.05] lg:text-[60px] lg:leading-[0.95] text-black">
            <span className="font-medium">
              SEO Consultant
              <br />
              &amp; Web Visibility
            </span>
            <br />
            <span className="italic text-[#c9846f]">Marseille</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            A freelance strategy, backed by the quality of a boutique
            agency. The Vélodrome makes supporters roar. Me, I make your
            visibility work.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:0783792814"
              className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              07 83 79 28 14
            </a>
            <span className="rounded-full bg-[#faf3ea] px-5 py-[15px] text-sm font-semibold text-black">
              20+ projects since 2025
            </span>
            <p className="min-h-[1.2em] font-heading text-4xl italic text-[#c9846f]">
              <TypewriterText text="Hi, I'm Jodie." speed={113} />
            </p>
          </div>
        </div>
        <Image
          src="/images/consultant-seo-marseille-vieux-port.jpg"
          alt="Jodie Lapaillerie — SEO Consultant Marseille, in front of the Old Port and Notre-Dame de la Garde"
          width={1190}
          height={1322}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/referencement-naturel-marseille.png"
            alt="Jodie Lapaillerie — digital marketing consultant"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl object-cover"
          />
          <div className="text-center">
            <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="text-[#c9846f]"> Your favourite SEO consultant,</span> expert in digital strategy and business development
            </h2>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Tell me about your SEO needs in Marseille
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_260px]">
          <div className="rounded-2xl bg-[#141414] p-8 text-white">
            <p className="text-[15px] leading-[25.5px]">
              <span className="font-bold">My mission: </span>
              I support entrepreneurs, craftsmen, shopkeepers and business
              owners who want to grow their business through a digital
              strategy designed to attract real prospects in Marseille.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              For over 10 years, I've been working in business development.
              An expertise strengthened by 4 years at the American group
              IAC, specialised in online client acquisition.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Today, I combine this sales expertise with SEO to help
              Marseille businesses gain visibility, grow their online
              presence and turn their website into a genuine prospecting
              tool.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Showcase sites, e-commerce, SEO content, digital strategy,
              local visibility or Google Business Profile: every action
              pursues the same goal. Helping your business be found by the
              right people at the right time.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/expert-seo-marseille.webp"
              alt="Jodie Lapaillerie — SEO Summit Paris 2026"
              width={800}
              height={1000}
              className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-xs text-[#000]">
              Jodie-LAPAILLERIE / SEO summit
            </p>
          </div>
        </div>
      </section>

      {/* Ambition */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I'm ambitious</span>
          <br />
          <span className="font-medium">
            And I'm aiming for 1st place in Marseille.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/seo-local-marseille.png"
            alt="Google Business Profile listing JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/strategie-seo-marseille.png"
            alt="Impressions and clicks over time — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/geo-seo-marseille.png"
            alt="Google result for seo aix-en-provence — JWL Marketing"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* I'm invested */}
      <section className="mx-auto max-w-[800px] px-6 py-6 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I'm invested</span>{" "}
          <span className="font-medium">
            in your project, and my clients talk about it.
          </span>
        </h2>
      </section>

      {/* Client reviews */}
      <section className="py-6">
        <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 pb-4">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Local market + audit widget */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I know your</span>{" "}
          <span className="font-medium">Marseille market</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              In Marseille, your network still matters. But it's not always
              enough anymore. Today, a large part of decisions starts on{" "}
Google.
            </p>
            <p>
              Consumers search, compare and shortlist several businesses
              before making contact. My goal is to position your business
              in the right place, at the right time, in front of the right
              people.
            </p>
          </div>
        </div>
      </section>

      {/* 1. I optimise your market */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I optimise your market</span>{" "}
          <span className="font-medium">before building your website.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              In Marseille, your network still counts. But it's not always
              enough anymore. Before making a decision, many consumers
              search for information on Google, read reviews and compare
              several businesses.
            </p>
            <p className="mt-4">
              A large part of the client journey now starts online. The
              fastest-growing businesses aren't necessarily the oldest or
              the best known. They're often the ones prospects find at the
              right time.
            </p>
          </div>
          <Image
            src="/images/seo-marseille.png"
            alt="Jodie Lapaillerie on a terrace — SEO market analysis Marseille"
            width={880}
            height={632}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 2. I analyse Google searches */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            I analyse <GoogleColors />{" "}searches
          </span>{" "}
          <span className="font-medium">made by real users.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/consultant-google-marseille.png"
            alt="Google keyword planning tool, for Marseille"
            width={2000}
            height={1414}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              I analyse the search behaviour of your future clients, the
              questions they ask and the solutions they're really looking
              for.
            </p>
            <p className="mt-4">
              Some searches reflect simple curiosity. Others reveal an
              intent to buy or get in touch. My role is to identify the
              most relevant opportunities for your business in order to
              build an SEO strategy capable of attracting qualified
              prospects.
            </p>
            <p className="mt-4">
              The goal isn't to be visible everywhere. The goal is to be
              visible when a prospect is ready to act.
            </p>
          </div>
        </div>
      </section>

      {/* 3. I maximise your Google listing */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I maximise</span>{" "}
          <span className="font-medium">your Google Business Profile.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                In Marseille, people often check several businesses before
                making a choice. Your Google{" "}listing is often the first
                contact with a future client.
              </p>
              <p className="mt-4">
                I optimise the elements that really influence the decision:
                categories, services, photos, reviews, practical
                information and the consistency of your online presence.
                The goal isn't just to appear on Google. The goal is to
                build trust and prompt people to contact you.
              </p>
            </div>
            <Link
              href="/en/audit-seo-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              See the audits
            </Link>
          </div>
          <Image
            src="/images/seo-local-marseille.png"
            alt="Google Business Profile optimisation JWL Marketing"
            width={1410}
            height={950}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 4. I build a website */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={4} />
        <div className="mt-4 grid items-start gap-8 md:grid-cols-2">
          <Image
            src="/images/optimisation-site-marseille.png"
            alt="Jodie Lapaillerie — custom website creation, SEO Marseille"
            width={360}
            height={288}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">I build</span>{" "}
              <span className="font-medium">a custom website for you.</span>
            </h3>
            <div className="mt-4 border-2 border-gold p-8 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                Your website is often the first impression a future client
                gets of your business. That's why I don't just create a
                nice-looking site. I design a tool built to reassure,
                inform and make it easy to get in touch.
              </p>
              <p className="mt-4">
                Every project is tailored to your activity, your goals and
                the expectations of your future clients. Depending on the
                needs, development can be done in HTML or with modern
                technologies like Next.js to ensure speed, security and a
                smooth browsing experience.
              </p>
              <p className="mt-4">
                My goal is to create a site that can represent your
                business today while supporting its growth in the years to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. I convince Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={5} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            I convince <GoogleColors />
          </span>{" "}
          <span className="font-medium">that you're the best in Marseille.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              In Marseille, being good at your craft isn't always enough
              to be found. Google{" "}needs to understand what you do, who you
              serve and why a prospect should choose you.
            </p>
            <p className="mt-4">
              I analyse your market, your competitors and the searches
              made by your future clients to build a strategy capable of
              attracting qualified prospects. Because an invisible website
              sells nothing. A website Google{" "}understands can become a
              genuine business driver.
            </p>
          </div>
          <Image
            src="/images/ia-seo-marseille.png"
            alt="Jodie Lapaillerie and her AI assistant JWL Marketing"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* I travel anywhere in France + zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I travel anywhere in France</span>
          <br />
          <span className="font-medium">
            Nothing replaces a conversation about your business in
            Marseille.
          </span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/qui-suis-je-carte-france-marseille.png"
            alt="JWL Marketing coverage area — on-site in PACA, remote across France"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              I travel anywhere in France. Nothing replaces a conversation
              about your business. Marseille is a city that builds,
              innovates and grows. But even the best businesses can't be
              chosen if they're not visible.
            </p>
            <p className="mt-4">
              Before a call, a visit or a quote request, many prospects run
              a Google{" "}search. If your business doesn't show up at the
              right time, it's often your competitors who pick up those
              opportunities.
            </p>
          </div>
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              My approach is different. I never start with keywords. I
              start by understanding your business, your market and what
              your future clients expect. SEO isn't a one-size-fits-all
              recipe. A business in Marseille doesn't face the same
              challenges as one in Aubagne, Cassis or La Ciotat. That's why
              every strategy is built from scratch.
            </p>
            <p className="mt-4">
              As an independent consultant, I remain your single point of
              contact from start to finish.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ZONES.map((z) => (
              <span
                key={z}
                className={`rounded-full px-5 py-2 text-sm ${
                  z === "Marseille" || z === "La Ciotat"
                    ? "bg-gold text-white"
                    : "bg-[#1a1207] text-white"
                }`}
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-16 text-center">
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Because you deserve the best
        </a>
      </section>

      {/* Still not convinced */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Still not convinced?</span>
        </h3>
        <p className="mt-3 font-heading text-3xl leading-tight md:text-[54px] text-black">
          Make your digital presence a Marseille strength
        </p>
        <div className="mx-auto mt-8 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Marseille is a city of commerce, craftsmanship and
            entrepreneurship. From Prado to Château-Gombert, from
            Euroméditerranée to La Valentine, businesses operate in a
            dynamic environment where visibility has become a real growth
            lever.
          </p>
          <p className="mt-3">
            Between building tradespeople, restaurateurs, self-employed
            professionals, tourism operators, transport and logistics
            companies, and businesses set up around the Grand Port
            Maritime, every activity faces growing competition on Google.
          </p>
          <p className="mt-3">
            Today, a future client can compare several Marseille businesses
            in just a few minutes. Being visible at the right time can make
            all the difference.
          </p>
        </div>
        <a
          href="https://calendly.com/jwlm"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-block bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Learn more
        </a>
      </section>

    </div>
  );
}
