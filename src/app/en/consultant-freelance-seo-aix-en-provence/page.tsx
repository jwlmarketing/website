import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ReviewCard from "@/components/ReviewCard";
import GmbAuditWidget from "@/components/GmbAuditWidget";
import { REVIEWS } from "@/data/reviews";
import TypewriterText from "@/components/TypewriterText";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Freelance SEO Consultant Aix-en-Provence | JWL Marketing",
  description:
    "SEO Consultant in Aix-en-Provence. 10 years of sales expertise and American methods to power your client acquisition.",
};

const ZONES = [
  "Aix-en-Provence",
  "Les Milles",
  "La Duranne",
  "Luynes",
  "Eguilles",
  "Venelles",
  "Calas",
  "Plan de campagne",
  "Bouc-Bel-Air",
  "Meyreuil",
  "Le Tholonet",
  "Vitrolles",
];

function StepNumber({ n }: { n: number }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-white">
      {n}
    </div>
  );
}

export default function QuiSuisJe() {
  return (
    <div>
      {/* Logo + account, above the hero */}
      <div className="flex w-full items-center justify-between px-[5%] pt-20">
        <Link href="/en">
          <Image
            src="/images/logo-jwl-marketing.png"
            alt="JWL Marketing Aix-en-Provence"
            width={966}
            height={187}
            className="h-[36px] w-auto"
          />
        </Link>
        <div className="flex items-center gap-3">
          <a href="https://intranet.jwlmarketing.fr/" aria-label="Client area login">
            <Image
              src="/images/seco.png"
              alt="Client area login"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </a>
          <LanguageToggle locale="en" href="/consultant-freelance-seo-aix-en-provence" />
        </div>
      </div>

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
            <span className="italic text-[#c9846f]">Aix-en-Provence</span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            A freelance strategy, backed by the quality of a boutique
            agency. In Aix-en-Provence, Paul Cézanne left his mark on
            history. What if your business left its mark on Google?
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
          src="/images/consultant-seo-aix-en-provence.png"
          alt="Jodie Lapaillerie — SEO Consultant Aix-en-Provence"
          width={1244}
          height={1387}
          priority
          className="h-auto w-full max-w-[420px] rounded-2xl object-cover"
        />
      </div>

      {/* Citation photo */}
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <Image
            src="/images/expert-seo-aix-en-provence.png"
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
                Tell me about your SEO needs
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
              Build or manage websites designed to generate traffic, convert
              visitors into clients and support a business's growth over the
              long term.
            </p>
            <p className="mt-4 text-[15px] leading-[25.5px]">
              With over 10 years of experience in business development,
              including 4 years at the American group IAC, I understand what
              a business needs: attracting clients, convincing them and
              keeping them. Trained by a former Google employee, Sylvie
              Grézaud, I work across an entire digital project: showcase
              sites, e-commerce sites, landing pages, content strategy, blog
              articles, product sheets, SEO optimisation and visibility
              management. I support professionals from all backgrounds:
              craftsmen, shopkeepers, self-employed professionals,
              therapists, doctors, dentists, lawyers and many more. And
              because being visible isn't enough, I invite you to discover
              my passion throughout this page.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/seo-aix-en-provence.webp"
              alt="Jodie Lapaillerie — SEO Summit Paris 2026"
              width={800}
              height={1000}
              className="mx-auto h-auto w-full max-w-[260px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-xs text-[#000]">
              Jodie-LAPAILLERIE / SEO summit paris 2026
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
            And I'm aiming for 1st place on <GoogleColors />.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Image
            src="/images/seo-local-aix-en-provence.png"
            alt="Google Business Profile listing JWL Marketing"
            width={1410}
            height={950}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/strategie-seo-aix-en-provence.png"
            alt="Impressions and clicks over time — Google Search Console"
            width={2000}
            height={1414}
            className="aspect-video w-full rounded-2xl border border-[#eee] object-cover"
          />
          <Image
            src="/images/referencement-naturel-aix-en-provence.png"
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
          <span className="italic text-[#c9846f]">I know your market</span>{" "}
          <span className="font-medium">in Aix-en-Provence.</span>
        </h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="h-full overflow-hidden rounded-md border-2 border-black">
            <GmbAuditWidget />
          </div>
          <div className="space-y-5 self-center border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              A city of art, law and university life at the heart of
              Provence, Aix-en-Provence charms its visitors year after year
              without ever losing its authenticity. Life is good in
              Aix-en-Provence. We live to the rhythm of cicadas, colourful
              markets and the scent of lavender. Culture blends with shows
              and music and dance, inspiring restaurateurs, shopkeepers and
              craftsmen every day.
            </p>
            <p>
              But in a city as dynamic as it is demanding, this richness
              belongs to the real world. On Google, the rules are different.
              The digital world has no scent, no flavour, no shopfront to
              draw people in. Today, speaking Google's language has become
              essential for 100% of inbound sites. More than 85% of
              consumers search online before walking into a shop.
            </p>
          </div>
        </div>
      </section>

      {/* 1. I analyse your market */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={1} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I analyse your market</span>{" "}
          <span className="font-medium">before building your site.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a] md:order-1">
            <p>
              An entrepreneurial vision of tomorrow. You may already have
              experienced this situation:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Your provider talks about traffic, but never about leads or
                revenue.
              </li>
              <li>
                You receive reports full of data without knowing which
                actions to prioritise.
              </li>
              <li>
                Your site attracts a few visitors, but the quote requests
                don't follow.
              </li>
            </ul>
            <p className="mt-4">
              The problem isn't always your visibility. Often, it's the
              absence of a strategy. For me, SEO has only one goal: to grow
              your business and generate sales opportunities. Before working
              on keywords, I analyse your market, your competitors, your
              offer and the searches made by your future clients in
              Aix-en-Provence. The goal is to identify the opportunities
              that can genuinely impact your revenue.
            </p>
            <Link
              href="/en/audit-seo-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              See the audits
            </Link>
          </div>
          <Image
            src="/images/consultant-google-aix-en-provence.png"
            alt="Jodie Lapaillerie on a terrace — SEO market analysis Aix-en-Provence"
            width={946}
            height={652}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover md:order-2"
          />
        </div>
      </section>

      {/* 2. I study Google searches */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={2} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            I study <GoogleColors /> searches
          </span>{" "}
          <span className="font-medium">made by real users.</span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/optimisation-seo-aix-en-provence.png"
            alt="Google keyword planning tool, for Aix-en-Provence"
            width={2000}
            height={1414}
            className="h-auto w-full self-center rounded-2xl border border-[#eee] object-cover"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Hiring an SEO consultant in Aix-en-Provence isn't about
              chasing the top spot on Google at any cost. It's about
              building a machine capable of attracting the right prospects
              at the right time. With 10 years of sales experience,
              including 4 years at IAC (Travaux.com), the undisputed global
              leader in lead acquisition and online project capture, I
              master the exact mechanics for generating qualified leads. My
              one and only goal: turn your website into a real business
              driver.
            </p>
            <p className="mt-4">
              In Aix-en-Provence, the market shows no mercy and local SEO
              requires surgical analysis. By combining the most aggressive
              American sales strategies with sharp local SEO, we only
              target the search intents and queries that are most
              profitable for your business.
            </p>
            <p className="mt-4">
              I optimise your entire digital ecosystem: your website, your
              semantic content and your Google Business Profile to trigger
              as many calls and quote requests as possible. I support
              independent professionals, craftsmen and SMEs in
              Aix-en-Provence who refuse to just make up the numbers and
              want to turn Google into their best online salesperson.
            </p>
          </div>
        </div>
      </section>

      {/* 3. I optimise your Google listing */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <StepNumber n={3} />
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I optimise</span>{" "}
          <span className="font-medium">your Google Business profile.</span>
        </h3>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
              <p>
                Your Google listing is often the first point of contact
                with a future client. I optimise it so it inspires trust,
                ranks higher in local searches and generates more calls,
                visits and quote requests. I work on every detail:
                information, categories, services, photos and strategic
                keywords. You benefit from a stronger local presence to
                attract qualified prospects right when they're looking for
                your services.
              </p>
            </div>
            <Link
              href="/en/google-my-business-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Improve my local visibility
            </Link>
          </div>
          <Image
            src="/images/seo-local-aix-en-provence.png"
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
        <h3 className="mt-4 text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I build</span>{" "}
          <span className="font-medium">a custom website for you.</span>
        </h3>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <Image
            src="/images/ia-seo-aix-en-provence.png"
            alt="Jodie Lapaillerie — custom website creation JWL Marketing"
            width={360}
            height={288}
            className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <div className="border-2 border-gold p-8 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Every project is built around your real needs, with no
              generic template or off-the-shelf solution. Depending on the
              content, features and complexity of the site, development can
              be done in HTML or with more advanced technologies such as
              Next.js to deliver the best possible performance. On
              delivery, you receive a PDF certification detailing the
              technical optimisations carried out and the best practices
              applied. The goal is to provide you with a site that's fast,
              secure, scalable and built from the start with Google
              visibility in mind.
            </p>
            <Link
              href="/en/site-internet-aix-en-provence"
              className="mx-auto mt-4 block w-fit rounded-full bg-[#c9846f] px-8 py-3 font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Discover the service
            </Link>
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
          <span className="font-medium">
            that you're the best in Aix-en-Provence.
          </span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              Because no two businesses work the same way, I take the time
              to understand your activity before defining an SEO strategy.
              From the historic centre of Aix-en-Provence to Puyricard, Les
              Milles to La Duranne, through Jas-de-Bouffan, Val Saint-André,
              Pont de l'Arc, Corsy, Célony or Beauregard, I travel to
              discover your environment, analyse your market, identify your
              targets and understand what your future clients expect. This
              immersion lets me build a coherent digital marketing
              strategy, improve your search engine positioning and develop
              lasting visibility on Google. Every action is based on an
              analysis of your industry, your competitors, your keywords
              and your client journey to attract qualified traffic and
              generate new contacts. And when distance doesn't allow for an
              in-person meeting, video calls naturally take over to build a
              strategy tailored to your goals together.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/consultant-referencement-aix-en-provence.png"
              alt="Jodie Lapaillerie and her AI assistant JWL Marketing"
              width={1410}
              height={2000}
              className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-cover"
            />
            <p className="mt-2 text-xs text-black">
              Jodie-LAPAILLERIE / AI 2026
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
            And in Aix-en-Provence, I come to you at no extra travel cost.
          </span>
        </h3>
        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2">
          <Image
            src="/images/carte-france-aix-en-provence.png"
            alt="JWL Marketing coverage area — on-site in PACA, remote across France"
            width={2000}
            height={1414}
            className="mx-auto h-auto w-full max-w-[420px]"
          />
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              In Aix-en-Provence, the digital market is accelerating.
              Independent professionals, shopkeepers and SMEs keep growing
              in number… and Google visibility has become a real matter of
              survival. Not just against local competitors, but also
              against agencies offering standardised services, freelancers
              who deliver a one-off PDF audit with no follow-up, and
              businesses that finally invest in SEO and gain the edge.
              Aix-en-Provence has a dense and varied economic fabric:
              traditional soap makers, high-tech companies, calisson
              makers, restaurateurs, artisan bakeries, self-employed
              professionals... So many sectors where Google is the first
              point of contact.
            </p>
          </div>
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="h-full border-2 border-gold p-8 text-[17px] leading-[28px] text-[#1a1a1a]">
            <p>
              <span className="font-bold">
                My approach is different. I start by understanding your
                business, your margins, your ideal clients.
              </span>{" "}
              Together we build a strategy that targets high-intent
              keywords — the ones that attract prospects ready to buy.
              Freelance, I'm your single point of contact. Fast decisions,
              rigorous execution, zero turnover on your account.
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

      {/* I support... */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I support</span>
          <br />
          <span className="font-medium">
            dynamic partners in Aix-en-Provence
          </span>
        </h3>

        <div className="mx-auto mt-8 grid max-w-[900px] items-center gap-8 text-left md:grid-cols-[1fr_280px]">
          <div className="rounded-2xl bg-[#141414] p-6 text-sm leading-relaxed text-white/90">
            <p>
              I like to surround myself with entrepreneurs who share the
              same values: commitment, closeness and a will to help others
              move forward. That's the case with Nathan, founder of
              Dynamitz, who helps project owners structure their business
              and define their positioning.
            </p>
            <p className="mt-3">
              We work on complementary topics with a shared goal: helping
              entrepreneurs build solid foundations before growing their
              visibility and client acquisition.
            </p>
            <p className="mt-3">
              Because a high-performing strategy always starts with solid
              foundations.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/images/logo-partenaire-dynamitz.png"
              alt="Dynamitz — automate your project"
              width={2000}
              height={1414}
              className="mx-auto h-auto w-full max-w-[280px]"
            />
          </div>
        </div>
        <span className="mt-6 inline-block bg-[#c9846f] px-10 py-[15px] font-medium text-white">
          Learn more
        </span>
      </section>
    </div>
  );
}
