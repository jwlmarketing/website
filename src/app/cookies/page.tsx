import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Politique de cookies | JWL Marketing" };

export default function Cookies() {
  return (
    <LegalLayout
      title="Politique de cookies"
      subtitle="Ce que le site jwl-marketing.fr dépose sur ton navigateur, et pourquoi."
    >
      <p>
        Un cookie, c&apos;est un petit fichier texte déposé sur ton
        navigateur quand tu visites un site. Il permet de faire fonctionner
        certaines fonctionnalités, de mesurer la fréquentation, ou de
        mémoriser tes préférences. Voici la liste claire de ce
        qu&apos;utilise jwl-marketing.fr.
      </p>

      <h2>1. Cookies strictement nécessaires</h2>
      <p>
        Ces cookies sont indispensables au bon fonctionnement du site. Ils
        ne peuvent pas être désactivés, car sans eux certaines
        fonctionnalités ne marcheraient plus (navigation, sécurité,
        affichage des pages).
      </p>
      <table>
        <thead><tr><th>Cookie</th><th>Finalité</th><th>Durée</th></tr></thead>
        <tbody>
          <tr><td>Cookies WordPress</td><td>Fonctionnement du site et de l&apos;administration</td><td>Session</td></tr>
        </tbody>
      </table>

      <h2>2. Cookies de mesure d&apos;audience</h2>
      <p>
        Ces cookies permettent de comprendre comment les visiteurs utilisent
        le site : pages consultées, temps passé, provenance du trafic. Ces
        données sont utilisées uniquement pour améliorer le contenu et
        l&apos;expérience du site.
      </p>
      <table>
        <thead><tr><th>Outil</th><th>Finalité</th><th>Durée</th></tr></thead>
        <tbody>
          <tr><td>Google Search Console</td><td>Analyse de la visibilité et des requêtes Google</td><td>Variable</td></tr>
        </tbody>
      </table>

      <h2>3. Cookies tiers</h2>
      <p>Certains outils intégrés au site peuvent déposer leurs propres cookies :</p>
      <ul>
        <li>Calendly, pour la prise de rendez-vous en ligne</li>
        <li>Google, pour l&apos;affichage de la carte, des avis ou de contenus liés à Google Business Profile</li>
      </ul>
      <p>
        Ces prestataires disposent de leur propre politique de
        confidentialité, sur laquelle JWL Marketing n&apos;a pas de contrôle
        direct.
      </p>

      <h2>4. Comment gérer les cookies</h2>
      <p>
        Tu peux à tout moment accepter, refuser ou supprimer les cookies via
        les paramètres de ton navigateur :
      </p>
      <ul>
        <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
        <li><strong>Firefox :</strong> Paramètres → Vie privée et sécurité</li>
        <li><strong>Safari :</strong> Préférences → Confidentialité</li>
        <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
      </ul>
      <p>
        <strong>À savoir :</strong> désactiver certains cookies peut limiter
        des fonctionnalités du site, comme la prise de rendez-vous en ligne
        via Calendly.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les cookies déposés sur ce site ont une durée de vie maximale de 13
        mois, conformément aux recommandations de la CNIL. Passé ce délai,
        ton consentement sera à nouveau demandé.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pour toute question sur cette politique de cookies, tu peux écrire à
        service@jwl-marketing.fr.
      </p>
    </LegalLayout>
  );
}
