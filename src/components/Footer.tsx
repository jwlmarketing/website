import Link from "next/link";

const OTHER_PAGES = [
  { href: "/consultant-freelance-seo-aix-en-provence", label: "Qui suis-je" },
  { href: "/audit-seo-aix-en-provence", label: "Audit SEO" },
  { href: "/google-my-business-aix-en-provence", label: "Fiche Google Business Profile" },
  { href: "/site-internet-aix-en-provence", label: "Création site web" },
  { href: "/trouver-client-aix-en-provence", label: "Acquisition client" },
  { href: "/entrepreneur-aix-en-provence", label: "Indépendants" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-jwl-marketing-aix-en-provence", label: "Contact" },
];

const ZONES = [
  { href: "/consultant-freelance-seo-aix-en-provence", label: "Consultant SEO Aix-en-Provence", external: false },
  { href: "https://www.jwl-marketing.fr/consultant-freelance-seo-marseille/", label: "Consultant SEO Marseille", external: true },
  { href: "/consultant-freelance-seo-nice", label: "Consultant SEO Nice", external: false },
  { href: "https://www.jwl-marketing.fr/consultant-freelance-seo-montpellier/", label: "Consultant SEO Montpellier", external: true },
  { href: "https://www.jwl-marketing.fr/consultant-freelance-seo-toulouse-jwl-marketing/", label: "Consultant SEO Toulouse", external: true },
  { href: "https://www.jwl-marketing.fr/consultant-freelance-seo-bordeaux-jwl-marketing/", label: "Consultant SEO Bordeaux", external: true },
];
const ZONES_STATIC = [
  "Consultant SEO Paris",
  "Consultant SEO Lyon",
  "Consultant SEO Nantes",
  "Consultant SEO Lille",
  "Consultant SEO Strasbourg",
  "Consultant SEO Grenoble",
];

export default function Footer() {
  return (
    <footer className="rounded-t-[40px] bg-black px-5 pb-[30px] pt-16" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-heading text-3xl text-gold">Contactez-moi</h2>
          <p className="text-sm text-[#c9846f]">
            JWL MARKETING® est une marque enregistrée auprès de l&apos;INPI.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-white">SIÈGE SOCIAL</div>
            <p className="mb-4 text-[13px] leading-relaxed text-white">
              JWL MARKETING
              <br />
              Pôle d&apos;activité des Milles
              <br />
              13290 Aix-en-Provence
            </p>
            <p className="mb-4 text-[13px] leading-relaxed text-white">
              <span className="font-semibold">SIRET</span> 315 087 767
              <br />
              RCS Aix-en-Provence
            </p>
            <a
              href="mailto:service@jwl-marketing.fr"
              className="mb-4 block text-[13px] font-semibold text-white underline hover:text-[#C26A4B]"
            >
              service@jwl-marketing.fr
            </a>
            <div className="mb-2 text-[13px] font-semibold text-white">RÉSEAUX SOCIAUX</div>
            <a
              href="https://www.facebook.com/people/JWL-Marketing-Communication-Marketing-et-Commercial/61578345536283/"
              target="_blank"
              rel="noopener"
              className="block text-[13px] text-white hover:text-[#C26A4B]"
            >
              Facebook
            </a>
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-white">AUTRES PAGES</div>
            {OTHER_PAGES.map((p) => (
              <Link key={p.href} href={p.href} className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">
                {p.label}
              </Link>
            ))}
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-white">ZONE D&apos;INTERVENTION</div>
            {ZONES.map((z) =>
              z.external ? (
                <a key={z.href} href={z.href} className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">
                  {z.label}
                </a>
              ) : (
                <Link key={z.href} href={z.href} className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">
                  {z.label}
                </Link>
              )
            )}
            {ZONES_STATIC.map((z) => (
              <span key={z} className="mb-2 block text-[13px] text-white">
                {z}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[#1a1a1a] pt-5 text-center leading-relaxed">
          <div className="text-sm text-white">
            © {new Date().getFullYear()} JWL Marketing - Tous droits réservés
          </div>
          <div className="text-xs text-[#C26A4B]">
            ™ Marque déposée • Immatriculée au Registre National des Entreprises (RNE)
          </div>
          <div className="mt-3.5 flex flex-wrap justify-center gap-x-1 gap-y-1.5 text-xs">
            <Link href="/blog" className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">Blog</Link>
            <span className="text-[#444]">•</span>
            <Link href="/cgv" className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">CGV</Link>
            <span className="text-[#444]">•</span>
            <Link href="/mentions-legales" className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">Mentions légales</Link>
            <span className="text-[#444]">•</span>
            <Link href="/politique-de-confidentialite" className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">Politique de confidentialité</Link>
            <span className="text-[#444]">•</span>
            <Link href="/cookies" className="!m-0 !inline text-[#aaa] hover:text-[#C26A4B]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
