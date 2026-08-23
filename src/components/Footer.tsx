import Image from "next/image";
import Link from "next/link";

const ZONES = [
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
    <footer className="bg-black px-5 pb-[30px] pt-20 text-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-[45px]">
          <div>
            <Image
              src="/images/logo-jwl-marketing.webp"
              alt="JWL Marketing"
              width={200}
              height={156}
              className="h-10 w-auto"
            />
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-[#D4AF37]">Services</div>
            <Link href="/audit-seo-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Audit SEO</Link>
            <Link href="/google-my-business-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Fiche Google Business Profile</Link>
            <Link href="/site-internet-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Création site web</Link>

            <div className="mb-[18px] mt-6 text-[15px] font-semibold text-[#D4AF37]">Navigation</div>
            <Link href="/consultant-freelance-seo-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">À propos</Link>
            <Link href="/blog" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Blog</Link>
            <Link href="/contact-jwl-marketing-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Contact</Link>

            <div className="mb-[18px] mt-6 text-[15px] font-semibold text-[#D4AF37]">Business</div>
            <Link href="/entrepreneur-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Indépendants</Link>
            <span className="mb-2 block text-[13px] text-[#777]">Professions libérales</span>
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-[#D4AF37]">Autres pages</div>
            <Link href="/trouver-client-aix-en-provence" className="mb-2 block text-[13px] text-white hover:text-[#C26A4B]">Acquisition client</Link>
            <span className="mb-2 block text-[13px] text-[#777]">Formation SEO</span>
          </div>

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-[#D4AF37]">Zones d&apos;intervention</div>
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

          <div>
            <div className="mb-[18px] text-[15px] font-semibold text-[#D4AF37]">Contact</div>
            <div className="mb-2.5 flex items-center gap-2 text-sm">
              <svg className="h-4 w-4 shrink-0 fill-[#C26A4B]" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.3z" />
              </svg>
              <a href="tel:+33783792814" className="!m-0 !inline text-white hover:text-[#C26A4B]">07 83 79 28 14</a>
            </div>
            <div className="mb-2.5 flex items-center gap-2 text-sm">
              <svg className="h-4 w-4 shrink-0 fill-[#C26A4B]" viewBox="0 0 24 24">
                <path d="M2 4h20v16H2V4zm10 9l10-7H2l10 7zm0 2l-10-7v10h20V8l-10 7z" />
              </svg>
              <a href="mailto:service@jwl-marketing.fr" className="!m-0 !inline text-white hover:text-[#C26A4B]">service@jwl-marketing.fr</a>
            </div>
            <div className="mb-2.5 flex items-center gap-2 text-sm">
              <svg className="h-4 w-4 shrink-0 fill-[#C26A4B]" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
              </svg>
              13290 - Pôle d&apos;activité La Duranne
            </div>

            <div className="mt-2.5">
              <a href="http://api.jwl-marketing.fr/redirects/gmb/jwl.html" target="_blank" rel="noopener">
                <Image src="/images/qr-avis-google.png" alt="Avis Google" width={110} height={110} className="w-[110px] rounded-md" />
              </a>
              <div className="mt-1 text-xs text-[#aaa]">Laisser un avis Google</div>
            </div>

            <a
              href="https://calendly.com/contact-jwlmarketing/nouvelle-reunion"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-block rounded-[5px] bg-[#C26A4B] px-[26px] py-3 font-semibold text-white hover:bg-white hover:text-black"
            >
              Réserver un créneau
            </a>
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
