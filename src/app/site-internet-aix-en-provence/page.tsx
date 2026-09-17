import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SiteHeader from "@/components/SiteHeader";
import TrustedPartners from "@/components/TrustedPartners";
import ProofCards from "@/components/ProofCards";
import ContactForm from "@/components/ContactForm";
import ScrollFillLine from "@/components/ScrollFillLine";

export const metadata: Metadata = {
  title: "Création de site web | JWL Marketing",
  description:
    "Découvre la puissance d'un site web conçu par une experte commerciale. Structure saine, rédaction SEO-GEO et cité par l'IA. France entière.",
};

const CONFETTI_COLORS = ["#C9846F", "#C9A84C", "#141414", "#E8C9A0", "#B86A4F"];
const CONFETTI = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2 + (i % 2 === 0 ? 0.15 : -0.15);
  const dist = 70 + ((i * 37) % 50);
  return {
    dx: Math.round(Math.cos(angle) * dist),
    dy: Math.round(-Math.sin(angle) * dist + 30),
    rot: (i * 53) % 360,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: (i % 7) * 0.02,
  };
});

const STEP_ICONS = {
  binoculars: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="15" r="4" />
      <circle cx="17" cy="15" r="4" />
      <path d="M9.5 12 8 6h2l2 5M14.5 12 16 6h-2l-2 5" />
    </svg>
  ),
  pencil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="M14 6l4 4" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="M12.5 13.5 21 3" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l2 2M14 9l2 2" />
    </svg>
  ),
};

function StepCard({
  n,
  icon,
  title,
  text,
}: {
  n: number;
  icon: keyof typeof STEP_ICONS;
  title: string;
  text: string;
}) {
  return (
    <div className="jwl-step-card group relative w-full max-w-[340px] rounded-2xl bg-[#141414] p-6 pt-8 text-center text-white transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(201,132,111,0.35)]">
      <span className="jwl-step-badge-ring absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full" />
      <span className="jwl-step-badge absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-xl font-bold text-white shadow-md">
        {n}
      </span>
      <div className="jwl-step-icon mx-auto mt-2 h-8 w-8 text-[#c9846f] transition-transform duration-300 group-hover:scale-125">
        {STEP_ICONS[icon]}
      </div>
      <p className="jwl-step-title mt-2 font-heading text-lg text-[#c9846f]">{title}</p>
      <p className="mt-2 text-[13.5px] leading-[20px] text-white/85">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <SiteHeader locale="fr" href="/en/site-internet-aix-en-provence" />

      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-between gap-10 overflow-hidden bg-white px-[6%] pt-[60px] lg:flex-row lg:items-end lg:gap-24 lg:px-[9%] lg:pb-0">
        <div className="max-w-[720px] flex-1 self-start pb-[90px] lg:pt-[30px]">
          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] lg:text-[72px] lg:leading-[1.02] text-black">
            <span className="text-[#c9846f]">JWL Business</span>
            <span className="font-bold"> : un site web qui inpire confiance</span>
            <br />
          </h1>
          <p className="mt-7 text-2xl leading-[1.5] text-black">
            Création ou refonte : je m&apos;occupe de tout. Résultat ? Un site sur mesure pensé pour votre image, vos clients et votre développement commercial.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg font-semibold text-black">
            {["1 personne dédiée", "100 % sur mesure", "100 % propriétaire de ton site web"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-sm text-white">
                    ✓
                  </span>
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-gold px-8 py-[19px] text-lg font-bold text-white">
              À partir de 1 200 €
            </span>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-[#c9846f] px-10 py-[19px] text-lg font-bold text-white transition-colors hover:bg-[#b8735f]"
            >
              Créer mon site
            </a>
          </div>
        </div>
        <div className="flex h-[420px] w-full flex-1 items-end justify-center sm:h-[520px] lg:h-[660px] lg:justify-end">
          <div className="jwl-hero-glow-wrap relative h-full w-auto">
            <div className="jwl-hero-glow-seam" />
            <Image
              src="/images/hero-creation-site-duo.png"
              alt="Jodie Lapaillerie — Création de site web JWL Marketing"
              width={353}
              height={606}
              priority
              className="relative z-10 h-full w-auto max-w-none object-contain"
            />
          <style>{`
            .jwl-hero-glow-seam {
              position: absolute;
              top: 4%;
              left: 49%;
              width: 16px;
              height: 90%;
              transform: translateX(-50%);
              z-index: 5;
              border-radius: 999px;
              background: linear-gradient(180deg, transparent 0%, #FFD97A 12%, #FFF6DE 50%, #FFD97A 88%, transparent 100%);
              box-shadow: 0 0 22px 8px rgba(255, 214, 100, .85), 0 0 50px 18px rgba(255, 214, 100, .4);
              filter: blur(2px);
              animation: jwl-hero-glow-pulse 2.4s ease-in-out infinite;
              pointer-events: none;
            }
            @keyframes jwl-hero-glow-pulse {
              0%, 100% { opacity: .75; width: 14px; box-shadow: 0 0 18px 6px rgba(255,214,100,.7), 0 0 40px 14px rgba(255,214,100,.3); }
              50% { opacity: 1; width: 22px; box-shadow: 0 0 30px 12px rgba(255,214,100,1), 0 0 65px 26px rgba(255,214,100,.55); }
            }
            @media (prefers-reduced-motion: reduce) {
              .jwl-hero-glow-seam { animation: none; opacity: .9; }
            }
          `}</style>
          </div>
        </div>
      </div>

      {/* Mon réseau de confiance */}
      <TrustedPartners />

      {/* Un site web professionnel, conçu pour évoluer avec ton entreprise */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Un site web professionnel, conçu pour
          <br />
          <span className="text-[#c9846f]">évoluer</span>{" "}
          <span className="font-medium">avec ton entreprise.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[26px] text-[#1a1a1a]">
          Une base solide, rapide et optimisée selon les bonnes pratiques du
          web. Ton site t&apos;appartient à 100 % et peut évoluer à tout
          moment vers une stratégie SEO, e-commerce ou marketing plus
          avancée.
        </p>
        <div className="mt-10">
          <ProofCards />
        </div>
      </section>

      {/* JWL Business est fait / pas fait pour toi */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="font-medium">JWL Business</span>
          <br />
          <span className="text-[#c9846f]">est fait pour toi</span>
          <span className="font-medium"> si tu veux :</span>
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-8 max-w-[820px] rounded-2xl bg-[#141414] p-8 text-left text-white">
            <ul className="space-y-2 text-[15px] leading-[24px]">
              {[
                "Un site web à moins de 2000 €",
                "Aucune dépendance à une plateforme fermée",
                "Être propriétaire à 100 % de ton site",
                "Pouvoir le faire évoluer",
                "Pouvoir investir demain sur ta visibilité",
                "Un site rapide, responsive et optimisé selon les bonnes pratiques du web",
                "Aucun engagement, uniquement de la maintenance",
                "Garder la main sur chaque détail plutôt que de déléguer",
                "Obtenir un site qui inspire confiance à tous tes clients",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/jwlm"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Je réserve mon appel
            </a>
          </div>
        </ScrollReveal>

        <h2 className="mt-16 font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Cette offre
          <br />
          n&apos;est <span className="text-[#c9846f]">pas faite pour toi</span> si
          tu aimerais :
        </h2>
        <ScrollReveal>
          <div className="mx-auto mt-8 max-w-[820px] rounded-2xl bg-black p-8 text-left text-white">
            <ul className="space-y-2 text-[15px] leading-[24px]">
              {[
                "Un outil qui t'apporte de nouveaux clients",
                "Investir sur 12 mois pour construire un vrai levier d'acquisition, pas juste un site vitrine",
                "Déléguer entièrement, sans passer ton temps à coordonner plusieurs prestataires",
                "Orchestrer par ta réactivité ton site, tu valides vite, tu ne laisses pas traîner un projet pendant des mois",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/tarifs"
              className="mt-6 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-medium text-white transition-colors hover:bg-[#b8735f]"
            >
              Je crée mon site visible
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Les 5 étapes de ton site web */}
      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          Les 5 <span className="text-[#c9846f]">étapes</span>
          <br />
          de ton site web
        </h2>
        <style>{`
          .jwl-etape-img { animation: jwl-etape-float-1 4.5s ease-in-out infinite; will-change: transform; }
          .jwl-etape-img-1 { animation-name: jwl-etape-float-1; animation-duration: 4.2s; animation-delay: 0s; }
          .jwl-etape-img-2 { animation-name: jwl-etape-float-2; animation-duration: 5.1s; animation-delay: .4s; }
          .jwl-etape-img-3 { animation-name: jwl-etape-float-1; animation-duration: 4.8s; animation-delay: .9s; }
          .jwl-etape-img-4 { animation-name: jwl-etape-float-2; animation-duration: 3.9s; animation-delay: 1.3s; }
          @keyframes jwl-etape-float-1 {
            0%, 100% { transform: translateY(0) rotate(-7deg) scale(1); }
            50% { transform: translateY(-12px) rotate(6deg) scale(1.04); }
          }
          @keyframes jwl-etape-float-2 {
            0%, 100% { transform: translateY(-4px) rotate(6deg) scale(1.02); }
            50% { transform: translateY(9px) rotate(-8deg) scale(0.97); }
          }

          .jwl-etape-line { position: absolute; left: 50%; top: 0; height: 100%; width: 2px; transform: translateX(-50%); overflow: hidden; background: rgba(0,0,0,.1); }

          .jwl-step-badge-ring {
            box-shadow: 0 0 0 0 rgba(201,168,76,.55);
            animation: jwl-badge-ring-ping 2.4s ease-out infinite;
          }
          @keyframes jwl-badge-ring-ping {
            0% { box-shadow: 0 0 0 0 rgba(201,168,76,.55); }
            70% { box-shadow: 0 0 0 14px rgba(201,168,76,0); }
            100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); }
          }
          .jwl-step-badge { animation: jwl-step-badge-pulse 2.4s ease-in-out infinite; }
          @keyframes jwl-step-badge-pulse {
            0%, 100% { transform: translateX(-50%) scale(1) rotate(0deg); }
            50% { transform: translateX(-50%) scale(1.1) rotate(-8deg); }
          }

          .jwl-step-icon { animation: jwl-icon-wiggle 3.4s ease-in-out infinite; }
          @keyframes jwl-icon-wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-9deg); }
            75% { transform: rotate(9deg); }
          }

          .jwl-step-title { background: linear-gradient(90deg, #C9846F, #C9A84C, #C9846F); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: jwl-title-shimmer 3.5s linear infinite; }
          @keyframes jwl-title-shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }

          @media (prefers-reduced-motion: reduce) {
            .jwl-etape-img, .jwl-step-badge, .jwl-step-badge-ring, .jwl-step-icon, .jwl-step-title {
              animation: none !important;
            }
          }
        `}</style>
        <div className="relative mt-10">
          <div className="jwl-etape-line hidden md:block">
            <ScrollFillLine />
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
            {/* Row 1: card 1 | image 1 */}
            <ScrollReveal delay={0} className="flex justify-center md:justify-end">
              <StepCard
                n={1}
                icon="binoculars"
                title="Découverte de ton projet"
                text="Nous échangeons ensemble par téléphone ou visioconférence."
              />
            </ScrollReveal>
            <ScrollReveal delay={100} className="flex justify-center md:justify-start">
              <Image
                src="/images/jwl-etapes-1.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="jwl-etape-img jwl-etape-img-1 h-auto w-[180px] object-contain"
              />
            </ScrollReveal>

            {/* Row 2: image 2 | card 2 */}
            <ScrollReveal delay={150} className="flex justify-center md:justify-end">
              <Image
                src="/images/jwl-etapes-2.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="jwl-etape-img jwl-etape-img-2 h-auto w-[180px] object-contain"
              />
            </ScrollReveal>
            <ScrollReveal delay={200} className="flex justify-center md:justify-start">
              <StepCard
                n={2}
                icon="pencil"
                title="Conception de la maquette du site"
                text="Je conçois une maquette basée sur les bonnes pratiques de vente et d'expérience utilisateur."
              />
            </ScrollReveal>

            {/* Row 3: card 3 | image 3 */}
            <ScrollReveal delay={250} className="flex justify-center md:justify-end">
              <StepCard
                n={3}
                icon="eye"
                title="Intégration de tes contenus et de tes visuels"
                text="Tu m'envoies les éléments nécessaires à la création de ton site (photos, textes, logo, etc.)."
              />
            </ScrollReveal>
            <ScrollReveal delay={300} className="flex justify-center md:justify-start">
              <Image
                src="/images/jwl-etapes-3.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="jwl-etape-img jwl-etape-img-3 h-auto w-[180px] object-contain"
              />
            </ScrollReveal>

            {/* Row 4: image 4 | card 4 */}
            <ScrollReveal delay={350} className="flex justify-center md:justify-end">
              <Image
                src="/images/jwl-etapes-4.png"
                alt="JWL Marketing"
                width={220}
                height={220}
                className="jwl-etape-img jwl-etape-img-4 h-auto w-[180px] object-contain"
              />
            </ScrollReveal>
            <ScrollReveal delay={400} className="flex justify-center md:justify-start">
              <StepCard
                n={4}
                icon="plane"
                title="Mise en ligne de ton site"
                text="Je configure l'hébergement et la mise en ligne."
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Step 5: centrée, pleine largeur — atterrissage en grande pompe */}
        <ScrollReveal delay={450} className="jwl-landing-zone relative mt-10 flex flex-col items-center">
          <div className="jwl-step5-card">
            <StepCard
              n={5}
              icon="key"
              title="Remise des accès et autonomie"
              text="Je te transmets tous tes accès, tu es libre et autonome."
            />
          </div>

          <div className="jwl-parachute-wrap relative mt-6">
            <div className="jwl-flash" />
            <div className="jwl-ring jwl-ring-1" />
            <div className="jwl-ring jwl-ring-2" />
            <div className="jwl-ring jwl-ring-3" />
            {CONFETTI.map((c, i) => (
              <span
                key={i}
                className="jwl-confetti"
                style={
                  {
                    "--dx": `${c.dx}px`,
                    "--dy": `${c.dy}px`,
                    "--rot": `${c.rot}deg`,
                    "--bg": c.color,
                    "--delay": `${c.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
            <Image
              src="/images/jwl-etapes-5-parachute.png"
              alt="JWL Marketing"
              width={280}
              height={280}
              className="jwl-parachute relative h-auto w-[220px] object-contain"
            />
            <div className="jwl-parachute-shadow" />
          </div>
          <p className="jwl-landing-text mt-4 font-heading text-lg italic text-[#c9a84c]">
            Bienvenue chez toi. 🎉
          </p>
        </ScrollReveal>
        <style>{`
          .jwl-step5-card { animation: jwl-card-punch .5s ease-out both; animation-delay: 1.85s; }
          @keyframes jwl-card-punch {
            0% { transform: scale(1); }
            40% { transform: scale(1.06) translateY(-4px); }
            100% { transform: scale(1); }
          }

          .jwl-parachute-wrap {
            animation: jwl-parachute-drop 1.4s cubic-bezier(.2,.8,.2,1) both;
            animation-delay: .5s;
          }
          .jwl-parachute {
            animation: jwl-parachute-sway 3.2s ease-in-out infinite;
            animation-delay: 1.9s;
            transform-origin: 50% -20%;
          }
          .jwl-parachute-shadow {
            width: 90px;
            height: 14px;
            margin: 6px auto 0;
            border-radius: 50%;
            background: radial-gradient(ellipse at center, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 70%);
            animation: jwl-parachute-shadow-pulse 3.2s ease-in-out infinite;
            animation-delay: 1.9s;
          }
          @keyframes jwl-parachute-drop {
            0% { transform: translateY(-140px) rotate(-6deg); opacity: 0; }
            60% { opacity: 1; }
            100% { transform: translateY(0) rotate(0deg); opacity: 1; }
          }
          @keyframes jwl-parachute-sway {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          @keyframes jwl-parachute-shadow-pulse {
            0%, 100% { transform: scale(1); opacity: .6; }
            50% { transform: scale(.85); opacity: .4; }
          }

          .jwl-flash {
            position: absolute; left: 50%; bottom: 8px; width: 180px; height: 180px;
            transform: translate(-50%, 50%) scale(0);
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,240,210,.9) 0%, rgba(201,168,76,.35) 45%, transparent 75%);
            animation: jwl-flash-pop .7s ease-out both;
            animation-delay: 1.85s;
            pointer-events: none;
          }
          @keyframes jwl-flash-pop {
            0% { transform: translate(-50%, 50%) scale(0); opacity: 0; }
            35% { opacity: 1; }
            100% { transform: translate(-50%, 50%) scale(1.4); opacity: 0; }
          }

          .jwl-ring {
            position: absolute; left: 50%; bottom: 6px; width: 40px; height: 14px;
            transform: translate(-50%, 50%) scale(0);
            border: 2px solid #C9846F;
            border-radius: 50%;
            opacity: 0;
            animation: jwl-ring-expand 1s ease-out both;
            pointer-events: none;
          }
          .jwl-ring-1 { animation-delay: 1.9s; }
          .jwl-ring-2 { animation-delay: 1.98s; border-color: #C9A84C; }
          .jwl-ring-3 { animation-delay: 2.06s; }
          @keyframes jwl-ring-expand {
            0% { transform: translate(-50%, 50%) scale(0.3); opacity: .9; }
            100% { transform: translate(-50%, 50%) scale(6); opacity: 0; }
          }

          .jwl-confetti {
            position: absolute; left: 50%; bottom: 10px; width: 8px; height: 8px;
            background: var(--bg); border-radius: 2px;
            transform: translate(-50%, 0) rotate(0deg);
            opacity: 0;
            animation: jwl-confetti-burst 1.1s cubic-bezier(.2,.7,.3,1) both;
            animation-delay: calc(1.88s + var(--delay));
            pointer-events: none;
          }
          @keyframes jwl-confetti-burst {
            0% { transform: translate(-50%, 0) rotate(0deg); opacity: 1; }
            80% { opacity: 1; }
            100% {
              transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(var(--rot));
              opacity: 0;
            }
          }

          .jwl-landing-text { opacity: 0; animation: jwl-landing-text-in .6s ease-out both; animation-delay: 2.2s; }
          @keyframes jwl-landing-text-in {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @media (prefers-reduced-motion: reduce) {
            .jwl-step5-card, .jwl-parachute-wrap, .jwl-parachute, .jwl-parachute-shadow,
            .jwl-flash, .jwl-ring, .jwl-confetti, .jwl-landing-text {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>

      {/* Tous les mois je veille à la maintenance */}
      <section className="mx-auto max-w-[1300px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="font-medium">Tous les mois je veille</span>
          <br />
          <span className="font-medium">à la </span>
          <span className="text-[#c9846f]">maintenance</span>
          <span className="font-medium"> de ton site web</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1050px] gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-left">
            {[
              {
                title: "Maintenance",
                text: "Vérification du bon fonctionnement du site.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L10 5l3 3 1.7-1.7Z" />
                    <path d="M9 6 2.5 12.5a2.1 2.1 0 0 0 0 3l0 0a2.1 2.1 0 0 0 3 0L12 9" />
                    <circle cx="18.5" cy="18.5" r="3.5" />
                    <path d="M18.5 15.5v1M18.5 20v1M21.5 18.5h-1M16 18.5h-1M20.6 16.4l-.7.7M17.1 19.9l-.7.7M20.6 20.6l-.7-.7M17.1 17.1l-.7-.7" />
                  </svg>
                ),
              },
              {
                title: "Sauvegarde",
                text: "Sauvegardes régulières de ton site.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6.5 18a4 4 0 0 1-.8-7.9 5.5 5.5 0 0 1 10.7-2A4.5 4.5 0 0 1 17.5 18h-11Z" />
                    <path d="M9.5 12.5 12 10l2.5 2.5M12 10v8" />
                  </svg>
                ),
              },
              {
                title: "Sécurité",
                text: "Surveillance et sécurisation de ton site.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
                    <path d="M9 12.2l2 2 4-4.2" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="flex items-center gap-5 rounded-2xl bg-[#141414] p-6 text-white">
                  <div className="h-10 w-10 flex-shrink-0 text-[#c9846f]">{item.icon}</div>
                  <div>
                    <p className="font-heading text-xl text-[#c9846f]">{item.title}</p>
                    <p className="mt-1 text-sm leading-[21px] text-white/80">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={360}>
            <Image
              src="/images/maintenance-mensuelle-seo.png"
              alt="Suivi et maintenance mensuelle — JWL Marketing"
              width={1024}
              height={768}
              className="mx-auto h-auto w-full max-w-[400px] object-contain"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 100% propriétaire */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-bold leading-[1.15] md:text-[46px] md:leading-[1.15] text-black">
          <span className="text-[#c9846f]">100 % propriétaire de ton site</span>,
          <br />
          <span className="font-medium">
            tu es libre de continuer ou non avec
            <br />
            JWL Marketing
          </span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-8 text-left md:grid-cols-2">
          <ScrollReveal>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#faf3ea] p-8 text-center">
              <p className="text-[15px] leading-[22px] text-black">
                Une question avant de réserver ? Écris-moi sur WhatsApp, le
                message est déjà préparé pour aller droit au but.
              </p>
              <a
                href="https://wa.me/33783792814?text=Bonjour%20Jodie%2C%20j%27ai%20une%20question%20avant%20de%20r%C3%A9server%20un%20appel%20pour%20la%20cr%C3%A9ation%20de%20mon%20site%20web%C2%A0%3A"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#25D366] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe57]"
              >
                Poser ma question sur WhatsApp
              </a>
              <a
                href="https://calendly.com/jwlm"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
              >
                Réserver mon appel découverte
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
