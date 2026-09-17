import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pas de CMS ici | JWL Marketing",
  robots: { index: false, follow: false },
};

const JOKES: Record<string, { title: string; text: string }> = {
  "/admin": {
    title: "Ah, presque !",
    text: "Il y a bien un espace admin sur ce site, mais pas à cette adresse-là. Et non, je ne vais pas te dire où.",
  },
  "/wp-admin": {
    title: "Eh non, pas de CMS ici.",
    text: "Pas de WordPress, pas de plugin à mettre à jour tous les 3 jours, pas de \"votre site a été piraté\" à 2h du matin. Juste du code, écrit à la main, avec amour.",
  },
  "/wp-login.php": {
    title: "Le mot de passe, c'est... il n'y en a pas besoin.",
    text: "Ce site n'a pas de wp-login.php. Il n'a même pas de WordPress. Tu peux ranger ton dictionnaire de mots de passe.",
  },
  "/wp-content": {
    title: "Aucun contenu à voler ici.",
    text: "wp-content/uploads est vide pour la bonne raison qu'il n'existe pas. Le contenu de ce site est codé en dur, comme au bon vieux temps.",
  },
  "/wp-json": {
    title: "404, mais en pire : y'a jamais eu d'API WordPress.",
    text: "Ce site tourne sur Next.js. wp-json/wp/v2/ n'a jamais existé ici et n'existera jamais.",
  },
  "/xmlrpc.php": {
    title: "xmlrpc.php ? Connais pas.",
    text: "Ce vieux fichier plein de failles n'a jamais mis les pieds sur ce serveur. Désolé pour le brute-force, tu perds ton temps.",
  },
  "/phpmyadmin": {
    title: "Pas de phpMyAdmin, pas de base MySQL à fouiller.",
    text: "Ce site n'a même pas de base de données accessible par ici. Bonne chance pour la suite de ta journée.",
  },
  "/administrator": {
    title: "Joomla ? Ça alors, non plus.",
    text: "Aucun back-office Joomla ici. Juste un site rapide, sans CMS, sans base de données exposée.",
  },
  "/.env": {
    title: "Le fichier .env que tu cherches n'existe pas ici.",
    text: "Les secrets de ce site ne traînent pas dans un fichier accessible publiquement. Belle tentative, cela dit.",
  },
  "/.git": {
    title: "Pas de .git exposé non plus.",
    text: "Le code source ne se balade pas en clair sur le serveur. On referme cette porte gentiment.",
  },
  "/config.php": {
    title: "config.php ? Ce site ne parle même pas PHP.",
    text: "Aucun fichier de config à récupérer ici, tout est propre côté serveur.",
  },
  "/wp-config.php": {
    title: "wp-config.php n'a jamais existé sur ce serveur.",
    text: "Pas de base MySQL, pas d'identifiants à voler, pas de WordPress. Tu peux passer au site suivant.",
  },
  "/cpanel": {
    title: "cPanel ? Ce site n'est même pas hébergé comme ça.",
    text: "Pas de panneau d'administration mutualisé à l'horizon. Circulez.",
  },
  "/webmail": {
    title: "Pas de webmail ici non plus.",
    text: "Les emails de ce domaine ne passent pas par une interface web exposée publiquement.",
  },
  "/wordpress": {
    title: "Wordpress ? Jamais entendu parler.",
    text: "Ce site est fait main, ligne de code par ligne de code. Pas une seule trace de WordPress dans les parages.",
  },
  "/typo3": {
    title: "TYPO3 ? Certainement pas.",
    text: "Encore un CMS que ce site n'utilise pas. On commence à manquer d'idées de CMS à tester, non ?",
  },
  "/joomla": {
    title: "Joomla, vraiment ?",
    text: "Non plus. Ce site tient debout sans CMS depuis le début.",
  },
  "/craft": {
    title: "Craft CMS ? Toujours pas.",
    text: "À ce niveau, tu explores juste la liste Wikipédia des CMS existants. Ce n'est aucun d'entre eux.",
  },
  "/umbraco": {
    title: "Umbraco non plus, désolé.",
    text: "Ce site n'a pas de back-office .NET planqué quelque part. Bonne chasse ailleurs.",
  },
  "/user/login": {
    title: "Drupal ? Ça se tente, mais non.",
    text: "Pas de /user/login ici, pas de Drupal, pas de base à cracker.",
  },
};

const DEFAULT_JOKE = {
  title: "Eh non, on n'a pas de CMS ici !",
  text: "Ce site est écrit à la main, sans WordPress, sans Joomla, sans back-office magique à débusquer. Tu peux ranger ton scanner de vulnérabilités.",
};

export default async function PasDeCmsPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;
  const key = (from || "").toLowerCase();
  const joke =
    Object.entries(JOKES).find(([path]) => key === path || key.startsWith(`${path}/`))?.[1] ||
    DEFAULT_JOKE;

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#141414] px-6 py-24 text-center text-white">
      <p className="font-heading text-lg italic text-[#c9846f]">
        {from ? `Tentative détectée sur ${from}` : "Tentative détectée"}
      </p>
      <h1 className="mt-4 max-w-[700px] font-heading text-3xl font-bold leading-[1.2] md:text-5xl">
        {joke.title}
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] leading-[26px] text-white/80">
        {joke.text}
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-[#c9846f] px-8 py-[15px] font-semibold text-white transition-colors hover:bg-[#b8735f]"
      >
        Retourner sur le vrai site
      </Link>
    </div>
  );
}
