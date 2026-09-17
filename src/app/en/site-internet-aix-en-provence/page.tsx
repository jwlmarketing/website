import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GoogleColors from "@/components/GoogleColors";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import Lightbox from "@/components/Lightbox";
import ProofCards from "@/components/ProofCards";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Website Creation | JWL Marketing",
  description:
    "Discover the power of a website designed by a sales expert. Solid structure, SEO-GEO copywriting, cited by AI. Available across France.",
};

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
      <SiteHeader locale="en" href="/site-internet-aix-en-provence" />

      {/* Hero */}
      <div className="flex w-full flex-col items-start justify-between gap-10 bg-white px-[6%] pt-[90px] pb-[60px] lg:flex-row lg:px-[9%]">
        <div className="max-w-[720px] flex-1">
          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] lg:text-[76px] lg:leading-[1.02] text-black">
            <span className="font-medium">Website creation</span>
            <br />
            <span className="italic text-[#c9846f]">that works for you</span>
            <br />
            <span className="italic text-[#c9846f]">
              while you're working
            </span>
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-black">
            Sole traders, micro-businesses, SMEs and business owners: grow
            your Google{" "}visibility and attract qualified prospects all
            year round.
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
          </div>
        </div>
        <Image
          src="/images/creation-site-web.webp"
          alt="Jodie Lapaillerie — Website creation JWL Marketing"
          width={712}
          height={582}
          priority
          className="h-auto w-full max-w-[500px] object-contain"
        />
      </div>

      {/* Your next client is on Google */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            Your next client is on <GoogleColors />.
          </span>
          <br />
          <span className="font-medium">Your website should be too.</span>
        </h2>
        <div className="mt-10">
          <ProofCards />
        </div>
        <p className="mt-8 text-lg text-black">
          So your prospects can find you easily, even if they don't know
          you yet.
        </p>
      </section>

      {/* My method */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">My method</span>
          <br />
          <span className="font-medium">
            Turn your website into a client machine.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <Image
              src="/images/conception-site-web.png"
              alt="I understand how your clients search for you — JWL Marketing"
              width={466}
              height={346}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
            <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                I understand how your clients search for you
              </p>
              <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                Study of your business, your competitors and the keywords
                used on Google.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Image
              src="/images/site-web-sur-mesure.png"
              alt="I build a website designed to be found — JWL Marketing"
              width={466}
              height={344}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
            <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                I build a website designed to be found
              </p>
              <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                Structure, content, service pages and SEO optimisation
                built in from the start.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Image
              src="/images/conception-site-web.png"
              alt="I analyse the data and improve the Google Search Console connection — JWL Marketing"
              width={466}
              height={346}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
            <div className="rounded-b-2xl bg-[#141414] p-4 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                I analyse the data and improve the Google Search Console
                connection
              </p>
              <p className="mt-2 text-[14px] leading-[22px] text-white/80">
                To understand visitor behaviour and identify opportunities
                for improvement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* I build your website */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <h2 className="text-center font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">
            I build your website
          </span>
          <br />
          <span className="font-medium">
            Custom-coded, and it belongs to you
          </span>
        </h2>
        <ScrollReveal>
          <Image
            src="/images/creation-site-vitrine.png"
            alt="Responsive website on all screens — JWL Marketing"
            width={842}
            height={348}
            className="mx-auto mt-8 h-auto w-full max-w-[420px] object-contain"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[28px] text-[#1a1a1a]">
            Your site doesn't need to be complete on day one — the data
            then shows us what needs strengthening and what content to
            create next. That way your site grows gradually alongside your
            business.
          </p>
        </ScrollReveal>
      </section>

      {/* Staggered: 3 steps */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <div className="space-y-6">
          <ScrollReveal delay={0} className="mx-auto w-full rounded-2xl bg-[#141414] p-8 text-white">
            <h3 className="font-heading text-2xl">
              <span className="italic text-[#c9a84c]">I build or migrate</span>{" "}
              your website
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              Your site belongs to you. You remain the owner of your
              domain name and your site. I handle the migration. Already
              have a Wix, Local.fr or WordPress site? I can take it over
              and grow it. No complicated changeover.
            </p>
          </ScrollReveal>
          <ScrollReveal
            delay={150}
            className="mx-auto w-full max-w-[85%] rounded-2xl bg-[#141414] p-8 text-white"
          >
            <h3 className="font-heading text-2xl">
              I host your site on a{" "}
              <span className="italic text-[#c9a84c]">
                high-performance, secure infrastructure
              </span>
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              Maintenance and security handled for you. I take care of
              updates, security and making sure your site runs smoothly.
            </p>
          </ScrollReveal>
          <ScrollReveal
            delay={300}
            className="mx-auto w-full max-w-[70%] rounded-2xl bg-[#141414] p-8 text-white"
          >
            <h3 className="font-heading text-2xl">
              At the end of the project you'll receive a{" "}
              <span className="italic text-[#c9a84c]">
                legal certificate
              </span>
            </h3>
            <p className="mt-3 text-[15px] leading-[25.5px] text-white/90">
              The code, content and access details are handed over at the
              end of the project through your personal space. If you
              choose not to continue with another provider after your
              website is built, JWL Marketing can't be held responsible
              for any changes, malfunctions or developments made to the
              site afterwards. An ownership transfer document is provided
              to formalise this legally.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={450}>
          <Image
            src="/images/creation-site-personnalise.png"
            alt="Timestamped proof of authorship — Copyright01"
            width={414}
            height={600}
            className="mx-auto mt-8 h-auto w-full max-w-[280px]"
          />
        </ScrollReveal>
      </section>

      {/* Every month I monitor */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Every month I monitor</span>
          <br />
          <span className="font-medium">
            and improve your position on <GoogleColors />
          </span>
        </h2>
        <ScrollReveal>
          <Image
            src="/images/developpement-site-web.png"
            alt="Google monitoring and tracking — JWL Marketing"
            width={462}
            height={346}
            className="mx-auto mt-8 h-auto w-full max-w-[400px] rounded-2xl object-cover"
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <StepNumber n={1} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                I review your Google Search Console tracking
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                In plain terms: what people type into Google{" "}and how your
                site shows up.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <StepNumber n={2} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                I analyse what people are typing into Google
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                How your site is performing and what can be improved.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <StepNumber n={3} />
            <div className="mt-4 rounded-2xl bg-[#141414] p-6 text-left text-white">
              <p className="text-[15px] font-semibold leading-[22px]">
                I adjust your strategy accordingly
              </p>
              <p className="mt-2 text-sm leading-[21px] text-white/80">
                I evolve your pages and your content.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <p className="mx-auto mt-8 max-w-[800px] text-[17px] leading-[28px] text-[#1a1a1a]">
          Depending on your package, I can either guide you through the
          adjustments to make or make them for you. And if you write your
          own blog articles after SEO copywriting training, I'll point you
          to the topics and optimisations to work on.
        </p>
      </section>

      {/* I optimise your strategy */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I optimise your strategy</span>
          <br />
          <span className="font-medium">
            Monthly, with hard data and clear support
          </span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0} className="text-left">
            <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
              I can see when <span className="font-bold">you have no strategy</span>
            </p>
            <Lightbox
              src="/images/creation-site-entreprise-graph1.png"
              alt="Search Console — with no SEO strategy"
              width={640}
              height={352}
              className="mt-3 h-auto w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              When you have no strategy.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Google{" "}doesn't surface you to users
              <br />
              The clicks you do get match your clients
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="text-left">
            <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
              When <span className="font-bold">you have an SEO strategy</span> but
              no sales strategy on your website
            </p>
            <Lightbox
              src="/images/creation-site-entreprise-graph2.png"
              alt="Search Console — SEO strategy with no sales strategy"
              width={638}
              height={356}
              className="mt-3 h-auto w-full max-w-[380px] rounded-2xl border border-[#eee] object-cover"
            />
            <p className="mt-3 text-sm text-[#1a1a1a]">
              When you have an SEO strategy but no sales strategy on your
              website.
            </p>
            <p className="mt-2 text-sm italic text-[#7c5fd6]">
              Your curve rises because Google{" "}understands you
              <br />
              You still get few clicks, you're not converting
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={300} className="mx-auto mt-8 max-w-[380px] text-left">
          <p className="text-[17px] leading-[26px] text-[#1a1a1a]">
            Or when you've invested in your strategy.
          </p>
          <Lightbox
            src="/images/creation-site-entreprise-graph3.png"
            alt="Search Console — invested SEO strategy"
            width={618}
            height={314}
            className="mt-3 h-auto w-full rounded-2xl border border-[#eee] object-cover"
          />
          <p className="mt-2 text-sm italic text-[#7c5fd6]">
            Google{" "}surfaces you for the right keywords
            <br />
            You get clicks from real users
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-[800px] space-y-4 text-left text-[17px] leading-[28px] text-[#1a1a1a]">
          <p className="font-semibold text-black">
            The goal is to have a website that works for you while you do
            your job, prospect, or take a nap.
          </p>
        </div>
        <a
          href="/en/tarifs"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Discover the packages
        </a>
      </section>

      {/* What budget should you plan for? */}
      <section className="mx-auto max-w-[1000px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px]">
          <span className="italic text-[#c9846f]">What budget should you plan for?</span>
        </h2>
        <p className="mt-2 text-[15px] text-[#555]">To build or optimise your site?</p>

        <div className="mx-auto mt-10 flex flex-col gap-8 md:flex-row">
          <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-left text-white">
            <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
              From
              <br />
              €1990
            </span>
            <h3 className="font-heading text-xl text-center underline decoration-gold underline-offset-4">
              JWL Business
            </h3>
            <p className="mt-2 italic text-white/90">« I build a custom website. »</p>
            <p className="mt-4 text-sm uppercase tracking-wide text-gold">Included:</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/85">
              {[
                "Strategic audit",
                "Sales positioning",
                "Page architecture",
                "Custom development",
                "Deployed on Vercel",
                "Technical optimisation",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm uppercase tracking-wide text-gold">
              What makes the difference:
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[#c9846f]">
              {[
                "Fast site",
                "No subscription",
                "No yearly hosting fee",
                "Scalable",
                "Ownership certificate delivered to the client (legally binding)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-1 flex-col rounded-md bg-[#141414] p-8 pt-14 text-left text-white">
            <span className="absolute -top-6 left-6 flex h-[76px] w-[76px] -rotate-6 items-center justify-center rounded-full bg-gold text-center text-[13px] leading-tight text-white shadow-md">
              From
              <br />
              €4500
            </span>
            <h3 className="font-heading text-xl text-center underline decoration-gold underline-offset-4">
              JWL Visible
            </h3>
            <p className="mt-2 italic text-white/90">« I'm growing, I want clients. »</p>
            <p className="mt-4 text-sm uppercase tracking-wide text-gold">Included:</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/85">
              {[
                "Custom website + SEO strategy",
                "Strategic audit",
                "SEO positioning",
                "Website development",
                "Technical SEO optimisation",
                "SEO copywriting",
                "Google Business Profile",
                "Blog",
                "Local, regional or national strategy",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* I move at your pace */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">I move at your pace</span>
          <br />
          <span className="font-medium">
            And I'm here for you, whatever happens
          </span>
        </h2>
        <svg viewBox="0 0 120 120" className="mx-auto mt-8 h-28 w-28 animate-spin">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#d9d9d9" strokeWidth="14" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="14"
            strokeDasharray={`${2 * Math.PI * 52 * 0.22} ${2 * Math.PI * 52}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
            <p className="text-[15px] font-semibold leading-[22px]">
              I offer you a starting point that fits your budget
            </p>
            <p className="mt-2 text-sm leading-[21px] text-white/80">
              We start with the essentials, then grow it based on the
              results.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
            <p className="text-[15px] font-semibold leading-[22px]">
              I suggest training you in SEO copywriting
            </p>
            <p className="mt-2 text-sm leading-[21px] text-white/80">
              Who better than you to talk about your trade? You write your
              blog posts. I keep an eye on what gets published.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300} className="rounded-2xl bg-[#141414] p-6 text-left text-white">
            <p className="text-[15px] font-semibold leading-[22px]">
              If you'd rather delegate, I'll handle it
            </p>
            <p className="mt-2 text-sm leading-[21px] text-white/80">
              I take action for you, from writing to publishing.
            </p>
          </ScrollReveal>
        </div>
        <a
          href="/en/tarifs"
          className="mt-8 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
        >
          Discover the packages
        </a>
      </section>

      {/* Projects that speak for themselves */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <span className="italic text-[#c9846f]">Projects</span>
          <br />
          <span className="font-medium">that speak for themselves</span>
        </h2>
        <div className="mx-auto mt-8 grid max-w-[900px] gap-6 md:grid-cols-2">
          <ScrollReveal delay={0}>
            <Image
              src="/images/refonte-site-web.webp"
              alt="Star Limousine Paris — website built by JWL Marketing"
              width={1123}
              height={562}
              className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Image
              src="/images/creation-site-professionnel.png"
              alt="Impressions and clicks over time — Google Search Console, JWL Marketing"
              width={1034}
              height={532}
              className="h-auto w-full rounded-2xl border border-[#eee] object-cover"
            />
          </ScrollReveal>
        </div>
        <p className="mt-3 text-xs text-[#888]">
          Screenshot from a client's Google Search Console account.
          Sensitive queries and data have been hidden.
        </p>
      </section>

      {/* Your project deserves more than a simple website */}
      <section className="bg-white px-6 py-16 text-center">
        <h3 className="font-heading text-3xl leading-tight md:text-[54px] text-black">
          <TypewriterText
            className="italic text-[#c9846f]"
            text="Your project deserves more than a simple website"
          />
        </h3>
        <ScrollReveal>
          <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[28px] text-[#1a1a1a]">
            You remain the owner of your site, your domain name and your
            data.
            <br />
            Ready to attract your next clients?
          </p>
        </ScrollReveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/jwlm"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-full bg-[#c9846f] px-10 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
          >
            Book a call
          </a>
          <a
            href="/en/tarifs"
            className="inline-block rounded-full border-2 border-[#c9846f] px-10 py-[15px] font-medium text-[#c9846f] transition-colors hover:bg-[#faf3ea]"
          >
            Discover
          </a>
        </div>
      </section>
    </div>
  );
}
