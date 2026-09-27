import { buildMetadata } from "@/lib/seo";
import LegalLayout from "@/components/LegalLayout";

export const metadata = buildMetadata({
  path: "/mentions-legales",
  locale: "fr",
  title: "Mentions légales | JWL Marketing",
  description: "TODO: ajouter une meta description (<=155 caracteres)",
});

export default function MentionsLegales() {
  return (
    <LegalLayout
      title="Mentions légales"
      subtitle="Toutes les informations légales de JWL Marketing."
    >
      <p>
        <strong>JWL Marketing Freelance :</strong> Jodie Lapaillerie,
        entrepreneure individuelle basée à Aix-en-Provence. J&apos;accompagne
        les TPE, PME, indépendants et artisans du PACA sur leur stratégie
        marketing, leur SEO et leur visibilité en ligne.
      </p>
      <p>
        <strong>Nom commercial :</strong> JWL Marketing — ™ Marque déposée et
        Immatriculée au Registre National des Entreprises (RNE)
      </p>
      <p><strong>Forme juridique :</strong> Entrepreneur individuel</p>
      <p><strong>SIREN :</strong> 989 154 380</p>
      <p><strong>SIRET :</strong> 989 154 380 00012</p>
      <p>
        <strong>Code APE :</strong> 70.21Z – Conseil en relations publiques
        et communication
      </p>
      <p><strong>RCS :</strong> Aix-en-Provence</p>
      <p>
        <strong>Siège social :</strong> Pôle d&apos;activité La Duranne,
        13290 Aix-en-Provence
      </p>
      <p><strong>Directrice de publication :</strong> Jodie Lapaillerie</p>
      <p><strong>Email :</strong> service@jwl-marketing.fr</p>
      <p><strong>Téléphone :</strong> 07 83 79 28 14</p>

      <h2>Hébergement du site</h2>
      <p>
        Le site jwl-marketing.fr est hébergé par <strong>JWL Marketing</strong>, sur son
        infrastructure propre (JWL Hub), opérée sur un serveur privé virtuel Oracle Cloud
        Infrastructure (Oracle France SAS).
      </p>
      <p>
        Une copie du site est également hébergée à titre secondaire par <strong>Vercel Inc.</strong>,
        340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com, afin d&apos;assurer
        la continuité de service.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Tous les contenus de ce site (textes, visuels, logo, structure,
        identité de marque) appartiennent à JWL Marketing, sauf mention
        contraire. Toute reproduction, même partielle, est interdite sans
        autorisation écrite préalable.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations transmises via les formulaires du site (contact,
        newsletter, prise de rendez-vous) sont uniquement destinées à JWL
        Marketing, pour le suivi commercial et la relation client. Elles ne
        sont ni revendues, ni transmises à des tiers.
      </p>
      <p>
        Conformément au RGPD, tu disposes à tout moment d&apos;un droit
        d&apos;accès, de rectification et de suppression de tes données. Une
        simple demande à service@jwl-marketing.fr suffit.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site peut utiliser des cookies techniques nécessaires à son
        fonctionnement, ainsi que des cookies de mesure d&apos;audience. Tu
        peux à tout moment paramétrer ton navigateur pour les refuser.
      </p>

      <h2>Formations JWL Marketing</h2>
      <p>
        JWL Marketing propose des formations en marketing digital et
        référencement naturel, destinées aux entrepreneurs, indépendants et
        porteurs de projet.
      </p>
      <p>
        <strong>À noter :</strong> ces formations ne sont actuellement pas
        finançables via le CPF. JWL Marketing est en cours de démarche pour
        obtenir la certification Qualiopi, qui ouvrira à terme l&apos;accès à
        certains dispositifs de financement de la formation professionnelle.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        JWL Marketing s&apos;efforce d&apos;assurer l&apos;exactitude des
        informations diffusées sur ce site, sans garantir qu&apos;elles
        soient exemptes d&apos;erreurs ou d&apos;oublis. JWL Marketing ne
        pourra être tenue responsable des dommages directs ou indirects
        résultant de l&apos;utilisation du site ou de l&apos;impossibilité
        d&apos;y accéder.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. Tout
        litige relatif à l&apos;utilisation du site relève de la compétence
        des tribunaux français.
      </p>

      <div className="flex justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a
          href="https://copyright01.com/certificat/A6BF1B13CEC0329DD426EEB79575DEE5"
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://copyright01.com/badge/A6BF1B13CEC0329DD426EEB79575DEE5.svg?theme=black&style=minimal"
            alt="Protected by Copyright01"
            width={160}
          />
        </a>
      </div>
    </LegalLayout>
  );
}
