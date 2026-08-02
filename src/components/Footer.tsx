import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg text-white">
              Chaque mois, fais grandir ton entreprise avec JWL Marketing !
            </h3>
            <p className="mt-4 text-sm leading-6">
              Google change. Les habitudes des internautes aussi. Une à deux
              fois par mois, je te partage ce que j&apos;apprends sur le
              terrain — sans spam, juste du contenu utile.
            </p>
            <Link
              href="/contact-jwl-marketing-aix-en-provence"
              className="mt-4 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-black"
            >
              Reçois mes conseils
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/audit-seo-aix-en-provence">Audit SEO</Link></li>
              <li><Link href="/google-my-business-aix-en-provence">Fiche Google Business Profile</Link></li>
              <li><Link href="/site-internet-aix-en-provence">Création site web</Link></li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/qui-suis-je">À propos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact-jwl-marketing-aix-en-provence">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Business
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/entrepreneur-aix-en-provence">Indépendants</Link></li>
              <li><Link href="/entrepreneur-aix-en-provence">Professions libérales</Link></li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">
              Autres pages
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/trouver-client-aix-en-provence">Acquisition client</Link></li>
              <li><Link href="/formation-seo-a-aix-en-provence">Formation SEO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Zones d&apos;intervention
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/consultant-freelance-seo-nice">Consultant SEO Nice</Link></li>
              <li><Link href="/seo-aix-en-provence">Consultant SEO Aix-en-Provence</Link></li>
              <li><Link href="/referencement-google-aix-en-provence">Référencement Google</Link></li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="tel:+33783792814">07 83 79 28 14</a></li>
              <li><a href="mailto:service@jwl-marketing.fr">service@jwl-marketing.fr</a></li>
              <li>13290 - Pôle d&apos;activité La Duranne</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} JWL Marketing - Tous droits réservés
            <br />
            ™ Marque déposée • Immatriculée au Registre National des
            Entreprises (RNE)
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog">Blog</Link>
            <span>•</span>
            <Link href="/cgv">CGV</Link>
            <span>•</span>
            <Link href="/mentions-legales">Mentions légales</Link>
            <span>•</span>
            <Link href="/politique-de-confidentialite">
              Politique de confidentialité
            </Link>
            <span>•</span>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
