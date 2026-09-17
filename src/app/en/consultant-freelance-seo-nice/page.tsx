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
  title: "Freelance SEO Consultant Nice | JWL Marketing",
  description:
    "Freelance SEO Consultant in Nice. I turn your Google visibility into client acquisition. 10 years of B2B sales experience. Free audit.",
};

const ZONES = [
  "Nice",
  "La Trinité",
  "Saint-Laurent-du-Var",
  "Cagnes-sur-Mer",
  "Villefranche-sur-Mer",
  "Antibes",
  "Cannes",
  "Beaulieu-sur-Mer",
  "Saint-Jean-Cap-Ferrat",
  "Carros",
  "Saint-André-de-la-Roche",
  "Vence",
  "Vallauris",
  "Mandelieu-la-Napoule",
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
      <SiteHeader locale="en" href="/consultant-freelance-seo-nice" />

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[6%] pt-[90px] pb-[60px] lg:flex-row lg:px-[9%]">
        <div className="max-w-[600px] flex-1">
          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] lg:text-[76px] lg:leading-[1.02] text-black">
            <span className="font-medium">
              SEO Consultant
              <br />
              &amp; Web Visibility
            </span>
            <br />
            <span className="italic text-[#c9846f]">Nice</span>
          </h1>
          <p className="mt-6 text-2xl leading-[1.5] text-black">
            A freelance strategy, backed by the quality of a boutique
            agency. In Nice, every good pissaladière has its recipe. Every
            good SEO strategy has its own too.
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
            <p className="min-h-[1.2em] font-heading text-2xl italic text-[#c9846f]">
              <TypewriterText text="Hi, I'm Jodie." speed={113} />
            </p>
          </div>
        </div>
        <Image
          src="/images/consultante-seo-visibilite-web-nice.jpg"
          alt="Jodie Lapaillerie — SEO Consultant Nice, on the Promenade des Anglais in front of the Négresco"
          width={494}
          height={580}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/expert-seo-nice.jpg"
            alt="Jodie Lapaillerie — digital marketing consultant"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl object-cover"
          />
          <div className="text-center">
            <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="text-[#c9846f]">Your favourite SEO consultant,</span> expert in digital strategy and business development
            </h2>
            <div className="mt-2 text-4xl md:text-6xl">
              <GoogleColors />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:service@jwl-marketing.fr"
                className="inline-block rounded-full border-2 border-[#c9846f] bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:border-[#b8735f] hover:bg-[#b8735f]"
              >
                Tell me about your SEO needs in Nice
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_260px]">
          <div className="rounded-2xl bg-[#141414] p-8 text-white">
            <p className="text-2xl leading-[25.5px]">
              <span className="font-bold">My mission: </span>
              helping businesses in Nice attract more clients through{" "}
Google. Between Vieux-Nice, the Promenade des Anglais, the
              international airport and the many business districts, Nice
              attracts thousands of consumers, tourists and professionals
              every year.
            </p>
            <p className="mt-4 text-2xl leading-[25.5px]">
              But they still need to find your business. Thanks to my
              expertise in business development and SEO, I help you build
              lasting visibility on Google{" "}and turn that visibility into
              enquiries. My goal isn't simply to get you to appear on{" "}
Google. My goal is to help you get chosen.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/consultant-referencement-naturel-nice.jpg"
              alt="Jodie Lapaillerie — SEO Summit Paris 2026"
              width={800}
              height={1000}
              className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-2xl text-[#000]">
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
            And I'm aiming for 1st place in Nice.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/seo-nice.jpg"
            alt="Google Business Profile listing JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/strategie-seo-nice.jpg"
            alt="Impressions and clicks over time — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/geo-nice.jpg"
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
          <span className="font-medium">Nice market.</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Nice is a city where the economy doesn't rely on a single
              sector. Retail, health, real estate, tourism, business
              services or craftsmanship: competition is present in almost
              every field.
            </p>
            <p>
              In this environment, visibility is no longer decided on the
              ground alone. A large part of the client journey now starts
              on Google. If your business doesn't show up when a prospect
              is searching for a solution, it simply risks losing them to
              one of your competitors.
            </p>
          </div>
        </div>
      </section>

      {/* 1. I understand Google searches */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            I understand <GoogleColors />{" "}searches
          </span>{" "}
          <span className="font-medium">made by real users.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Before working on the SEO of a business in Nice, I analyse
              the searches made by real users.
            </p>
            <p className="mt-4 text-2xl">
              What words do they use? What questions do they have? Are
              they looking for information, a quote or an immediate
              solution?
            </p>
            <p className="mt-4 text-2xl">
              This data lets me build an SEO strategy based on the reality
              of the market rather than assumptions. Because a site that's
              visible for the wrong searches will never bring in the right
              clients.
            </p>
            <Link
              href="/en/audit-seo-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              See the audits
            </Link>
          </div>
          <Image
            src="/images/consultant-seo-cote-azur.jpg"
            alt="Google keyword planning tool, for Nice"
            width={2000}
            height={1414}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
        </div>
      </section>

      {/* 2. I analyse your market */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I analyse your market</span>{" "}
          <span className="font-medium">before building your website.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <Image
            src="/images/consultant-seo-local-nice.jpg"
            alt="Jodie Lapaillerie on a terrace — SEO market analysis Nice"
            width={880}
            height={632}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              A prime location on the Promenade des Anglais is no longer a
              guarantee of clients. Today, 83% of French people research on{" "}
Google{" "}before buying, even for a simple night out at a
              restaurant. The keyword "restaurant Nice" alone gets 50,000
              Google searches a month, and "hôtel Nice" just as many.
            </p>
            <p className="mt-4 text-2xl">
              This tourist activity mainly benefits those who are visible
              online. In summer, competition is fierce between Nice's
              shops, restaurants and hotels. The rest of the year, it's
              local searches from residents that make the difference
              between a business that thrives year-round and one that only
              survives the summer.
            </p>
          </div>
        </div>
      </section>

      {/* 3. I improve your Google listing */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
              <span className="italic text-[#c9846f]">I improve</span>{" "}
              <span className="font-medium">your Google Business profile.</span>
            </h3>
            <div className="mt-4 border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                In a city as dynamic as Nice, your future clients often
                compare several businesses before making a decision. Your{" "}
Google{" "}listing plays an essential role in that first
                impression.
              </p>
              <p className="mt-4 text-2xl">
                I optimise every important element: categories, services,
                photos, reviews, practical information and data
                consistency. The goal isn't just to appear in local
                results. The goal is to make people want to contact you
                rather than a competitor.
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
            src="/images/optimisation-seo-nice.png"
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
            src="/images/creation-site-web-sur-mesure-nice.png"
            alt="Jodie Lapaillerie — custom website creation, SEO Nice"
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
              <p className="mt-4 text-2xl">
                Every project is tailored to your activity, your goals and
                the expectations of your future clients. Depending on the
                needs, development can be done in HTML or with modern
                technologies like Next.js to ensure speed, security and a
                smooth browsing experience.
              </p>
              <p className="mt-4 text-2xl">
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
          <span className="font-medium">that you're the best in Nice.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/specialiste-seo-nice.jpg"
            alt="Jodie Lapaillerie and her AI assistant JWL Marketing"
            width={1410}
            height={2000}
            className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Before talking about SEO, I like to understand your
              business's story. Every activity has its own specifics,
              clients and challenges. That's why I favour meeting in
              person whenever possible, to discover your working
              environment and the reality of your market.
            </p>
            <p className="mt-4 text-2xl">
              In Nice as elsewhere, the best strategies often start with a
              simple conversation. And when distance doesn't allow it, a
              video call works perfectly well.
            </p>
          </div>
        </div>
      </section>

      {/* I travel anywhere in France + zones */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <h3 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I travel anywhere in France</span>
          <br />
          <span className="font-medium">
            Depending on your project in Nice, I can come and meet you in
            person.
          </span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              In Nice, being good at your craft isn't always enough to
              stand out anymore. Between shops, self-employed
              professionals, service businesses and tourism operators,
              competition is strong.
            </p>
            <p className="mt-4 text-2xl">
              And before walking into a business, many consumers now start
              with a Google{" "}search. Being visible at the right time can
              make all the difference between a won opportunity and a
              client lost to a competitor.
            </p>
          </div>
          <Image
            src="/images/carte-france-nice.png"
            alt="JWL Marketing coverage area — on-site in PACA, remote across France"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              My approach is different. Before talking about SEO, I try to
              understand your business, your goals, your ideal clients and
              your growth opportunities. Together, we build a strategy
              capable of attracting the right people at the right time,
              based on searches genuinely made by your future clients.
            </p>
            <p className="mt-4 text-2xl">
              As an independent consultant, I remain your single point of
              contact from start to finish. Simple exchanges, fast
              decisions and personalised support.
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
        <p className="mt-3 font-heading text-2xl leading-tight md:text-[54px] text-black">
          Make your digital presence a Nice strength
        </p>
        <div className="mx-auto mt-8 max-w-[900px] text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p>
            Nice benefits from an economy driven by tourism, real estate,
            retail, services and its proximity to Sophia Antipolis. Between
            the city centre, Nice Ouest, l'Arénas, Saint-Isidore, Cimiez or
            the Port, businesses need to stand out in a particularly
            competitive market.
          </p>
          <p className="mt-3 text-2xl">
            Restaurants, local shops, real estate agencies, self-employed
            professionals, craftsmen or service businesses: most client
            journeys now start with a Google{" "}search. Being visible isn't
            enough anymore. You need to be found before the others.
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
