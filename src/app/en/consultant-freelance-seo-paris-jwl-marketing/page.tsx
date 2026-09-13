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
  title: "Freelance SEO Consultant Paris | JWL Marketing",
  description:
    "Freelance SEO Consultant in Paris. I turn your Google visibility into client acquisition. 10 years of B2B sales experience. Free audit.",
};

const ZONES = [
  "Paris",
  "Boulogne-Billancourt",
  "Levallois-Perret",
  "Neuilly-sur-Seine",
  "Vincennes",
  "Saint-Mandé",
  "Montrouge",
  "Issy-les-Moulineaux",
  "Saint-Denis",
  "Créteil",
  "Nanterre",
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
      <SiteHeader locale="en" href="/consultant-freelance-seo-paris-jwl-marketing" />

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
            <span className="italic text-[#c9846f]">Paris</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            A freelance strategy, backed by the quality of a boutique
            agency. Your success starts under the lights of Paris.
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
          src="/images/consultant-seo-paris-tour-eiffel.jpg"
          alt="Jodie Lapaillerie — SEO Consultant Paris, in front of the Eiffel Tower"
          width={1086}
          height={1448}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/expert-seo-paris.png"
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
                Tell me about your SEO needs in Paris
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
              Paris is home to thousands of businesses, shops, self-employed
              professionals and service companies. In such a competitive
              environment, being good at what you do isn't always enough to
              get chosen.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              I help entrepreneurs, independent professionals and business
              owners build a digital presence capable of attracting
              qualified prospects and supporting their growth over the long
              term.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              With over 10 years of experience in sales and business
              development, including 4 years at the American group IAC, I
              now combine sales strategy, SEO and digital visibility.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              Website, local SEO, content, Google Business Profile,
              acquisition strategy or client experience optimisation: every
              action is designed to serve one simple goal. Helping your
              business gain visibility among people genuinely searching for
              your services in Paris.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/consultant-seo-paris.webp"
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
            And I'm aiming for 1st place in Paris.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/seo-local-paris.png"
            alt="Google Business Profile listing JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/strategie-seo-paris.png"
            alt="Impressions and clicks over time — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/referencement-naturel-paris.png"
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
          <span className="font-medium">Paris market</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Paris offers immense potential. So does the competition. In
              most sectors, your future clients are spoilt for choice.
            </p>
            <p>
              Before contacting a business, they often run several Google{" "}searches. My role is to make sure your business is one of
              the solutions they discover at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* 1. I optimise your market before building your website */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I optimise your market</span>{" "}
          <span className="font-medium">before building your website.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Paris offers immense potential. So does the competition.
              Today, in most sectors, your future clients are spoilt for
              choice.
            </p>
            <p className="mt-4">
              Before making a decision, they often run several Google{" "}searches to compare businesses and available solutions. In
              this context, my role is to make sure your business is one
              of the solutions they discover at the right time. The goal
              is simple: to be there when a prospect is ready to act.
            </p>
          </div>
          <Image
            src="/images/consultant-referencement-paris.png"
            alt="Jodie Lapaillerie — SEO market analysis Paris"
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
            src="/images/optimisation-seo-paris.png"
            alt="Google keyword planning tool, for Paris"
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
              intent to buy or get in touch. That's precisely why I
              identify the most relevant opportunities for your business
              in order to build an SEO strategy capable of attracting
              qualified prospects.
            </p>
            <p className="mt-4">
              In Paris, attracting traffic is relatively easy. Attracting
              the right clients is another story entirely. At its core,
              the goal isn't to be visible everywhere. The real challenge
              is to show up when your future clients are actively looking
              for a solution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. I maximise your Google listing */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">I maximise</span>{" "}
              <span className="font-medium">your Google Business profile.</span>
            </h3>
            <div className="mt-4 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                In Paris, competition is often just a few clicks away.
                Before making a decision, people check several profiles,
                compare reviews and weigh up the information available. In
                this context, your Google Business Profile is often the
                first contact with your future client.
              </p>
              <p className="mt-4">
                That's why I optimise the elements that really influence
                the decision: categories, services, photos, reviews,
                practical information and consistency of your presence on{" "}
Google. The goal isn't just to appear on Google. It's also
                to reassure people about your credibility and make them
                want to choose you over another business.
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
            src="/images/seo-local-paris.png"
            alt="Google Business Profile optimisation JWL Marketing"
            width={1410}
            height={950}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 4. I design a custom website */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={4} />
        <div className="mx-auto mt-4 max-w-[600px] text-center">
          <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
            <span className="italic text-[#c9846f]">I design</span>{" "}
            <span className="font-medium">a custom website for you.</span>
        </h3>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <Image
            src="/images/ia-seo-paris.png"
            alt="Jodie Lapaillerie — custom website creation JWL Marketing"
            width={360}
            height={288}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <div className="border-2 border-gold p-8 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Your website is often the first impression a future client
              gets of your business. That's why I don't just create a
              nice-looking site. I design a tool built to reassure, inform
              and make it easy to get in touch.
            </p>
            <p className="mt-4">
              Every project is tailored to your activity, your goals and
              the expectations of your future clients. Depending on the
              needs, development can be done in HTML or with modern
              technologies like Next.js to ensure speed, security and a
              smooth browsing experience.
            </p>
            <p className="mt-4">
              Beyond the technical side, the goal remains the same: create
              a site capable of representing your business today while
              supporting its growth in the years to come. Because in
              Paris, a website shouldn't just look good. It should also
              help you stand out in a particularly competitive
              environment.
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
          <span className="font-medium">that you're the best in Paris.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              In Paris, being excellent at your craft doesn't guarantee
              you'll be found. Google{" "}needs to understand what you do, who
              you serve and why a prospect should choose you over another
              business.
            </p>
            <p className="mt-4">
              That's why I analyse your market, your competitors and the
              searches made by your future clients to build a strategy
              capable of attracting qualified prospects. In such a
              competitive environment, being present online isn't enough.
              You also need to be understood by Google. Because an
              invisible website sells nothing. A well-positioned website,
              on the other hand, can become a genuine business driver.
            </p>
          </div>
          <Image
            src="/images/consultant-google-paris.png"
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
          <span className="italic text-[#c9b896]">I travel anywhere in France</span>
          <br />
          <span className="font-medium">Including in Paris.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Today, before a call, a visit or a quote request, many
              prospects run several Google{" "}searches to compare available
              solutions.
            </p>
            <p className="mt-4">
              In this context, being visible at the right time becomes a
              real competitive advantage. Because if your business doesn't
              meet that demand, it's often other market players who
              capture the attention and the opportunity.
            </p>
          </div>
          <Image
            src="/images/carte-france-paris.png"
            alt="JWL Marketing coverage area — on-site in Paris, remote across France"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Above all, I try to understand your business, your market
              and what your future clients expect. Because SEO isn't a
              one-size-fits-all recipe. A business based in Paris doesn't
              face the same challenges as one in Boulogne-Billancourt,
              Saint-Denis, Vincennes or Levallois-Perret. That's why every
              strategy is built from scratch, based on your goals and your
              competitive environment.
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
                className="rounded-full bg-[#1a1207] px-5 py-2 text-sm text-white"
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
          Make your digital presence a Paris strength
        </p>
        <div className="mx-auto mt-8 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            From La Défense to Le Marais, from Saint-Lazare to Bercy,
            businesses operate in a particularly competitive environment
            where online visibility has become a real growth lever.
          </p>
          <p className="mt-3">
            Between shopkeepers, self-employed professionals, startups,
            consulting firms, service businesses, real estate players and
            companies based in the main business districts, every player
            has to find its place amid heavy competition on Google.
          </p>
          <p className="mt-3">
            Consumer habits have also changed. Before booking an
            appointment, requesting a quote or contacting a business,
            Parisians take the time to compare several solutions, check
            client reviews and research the business.
          </p>
          <p className="mt-3">
            Today, a future client can compare several Paris businesses in
            just a few minutes. In this context, being visible at the
            right time can make all the difference between a won
            opportunity and a prospect choosing a competitor.
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
