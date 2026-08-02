import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Politique de confidentialité | JWL Marketing" };

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      subtitle="Comment JWL Marketing collecte, utilise et protège tes données personnelles."
    >
      <p>
        Chez JWL Marketing, la confidentialité de tes données, c&apos;est du
        sérieux. Cette page t&apos;explique simplement ce qu&apos;on fait de
        tes informations quand tu navigues sur le site ou que tu nous
        contactes.
      </p>

      <h2>1. Base légale et droit applicable</h2>
      <p>Cette politique respecte le cadre légal en vigueur en France et en Europe :</p>
      <ul>
        <li>Le Règlement général sur la protection des données (RGPD) 2016/679</li>
        <li>La loi Informatique et Libertés du 6 janvier 1978, modifiée en 2018</li>
        <li>La loi pour la confiance dans l&apos;économie numérique du 21 juin 2004</li>
      </ul>
      <p>
        Le traitement de tes données repose sur trois bases légales : ton
        consentement (par exemple pour la newsletter), l&apos;exécution
        d&apos;un contrat (pour une prestation), ou une obligation légale
        (pour la facturation).
      </p>

      <h2>2. Quelles données on collecte</h2>
      <p>
        Tes données sont collectées uniquement lorsque tu remplis un
        formulaire de contact, que tu prends rendez-vous, que tu demandes un
        devis ou que tu t&apos;inscris à la newsletter. Aucune collecte
        n&apos;est faite en dehors de ces démarches volontaires.
      </p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone</li>
        <li>Nom de l&apos;entreprise</li>
        <li>Site internet (si applicable)</li>
      </ul>
      <p>
        JWL Marketing ne collecte jamais de données sensibles : origine
        ethnique, opinions politiques, convictions religieuses, orientation
        sexuelle, données de santé ou biométriques.
      </p>

      <h2>3. Pourquoi on collecte ces données</h2>
      <table>
        <thead>
          <tr><th>Donnée</th><th>Finalité</th></tr>
        </thead>
        <tbody>
          <tr><td>Nom, prénom</td><td>Identification client, devis, facturation</td></tr>
          <tr><td>Email</td><td>Suivi commercial, envoi de newsletter</td></tr>
          <tr><td>Téléphone</td><td>Prise de contact, rendez-vous</td></tr>
          <tr><td>Entreprise</td><td>Personnalisation de l&apos;accompagnement</td></tr>
        </tbody>
      </table>

      <h2>4. Outils utilisés</h2>
      <p>
        Pour gérer la relation client et la prise de rendez-vous, JWL
        Marketing utilise des outils tiers, dont Calendly pour la réservation
        de créneaux et Google Search Console pour l&apos;analyse de la
        visibilité du site. Certains de ces outils peuvent stocker des
        données hors de l&apos;Union européenne, dans le respect des
        standards de protection en vigueur.
      </p>

      <h2>5. Destinataires des données</h2>
      <p>
        Tes données restent chez JWL Marketing. Elles ne sont ni vendues, ni
        louées, ni transmises à des tiers à des fins commerciales.
      </p>

      <h2>6. Durée de conservation</h2>
      <p>
        Les données personnelles sont conservées le temps nécessaire à la
        relation commerciale, puis supprimées automatiquement au bout de 3
        ans d&apos;inactivité.
      </p>

      <h2>7. Tes droits</h2>
      <p>
        Conformément au RGPD, tu disposes des droits suivants sur tes
        données personnelles :
      </p>
      <ul>
        <li><strong>Droit d&apos;accès</strong> : obtenir une copie des données te concernant</li>
        <li><strong>Droit de rectification</strong> : corriger une information inexacte</li>
        <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de tes données</li>
        <li><strong>Droit d&apos;opposition</strong> : t&apos;opposer au traitement de tes données</li>
        <li><strong>Droit à la portabilité</strong> : récupérer tes données dans un format réutilisable</li>
      </ul>
      <p>
        Pour exercer l&apos;un de ces droits, il te suffit d&apos;écrire à
        service@jwl-marketing.fr.
      </p>

      <h2>8. Sécurité des données</h2>
      <p>
        JWL Marketing met en place des mesures de sécurité adaptées pour
        protéger tes données contre toute perte, altération ou accès non
        autorisé. En cas de violation de données avérée, tu seras informé
        dans les meilleurs délais, avec des explications claires sur la
        situation et les mesures prises.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Le site jwl-marketing.fr utilise des cookies techniques nécessaires
        à son bon fonctionnement, ainsi que des cookies de mesure
        d&apos;audience pour comprendre comment le site est utilisé. Tu peux
        à tout moment refuser les cookies via les paramètres de ton
        navigateur.
      </p>
      <p>
        <strong>À savoir :</strong> refuser les cookies peut limiter
        certaines fonctionnalités du site, comme la prise de rendez-vous en
        ligne.
      </p>

      <h2>10. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles est Jodie
        Lapaillerie, entrepreneure individuelle, JWL Marketing, joignable à
        service@jwl-marketing.fr — Pôle d&apos;activité La Duranne, 13290
        Aix-en-Provence.
      </p>

      <h2>11. Réclamation auprès de la CNIL</h2>
      <p>
        Si tu estimes que tes droits ne sont pas respectés, tu peux adresser
        une réclamation directement à la CNIL, l&apos;autorité française
        compétente en matière de protection des données personnelles.
      </p>
    </LegalLayout>
  );
}
