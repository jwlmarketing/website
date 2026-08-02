import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | JWL Marketing",
  description:
    "Discutons de votre visibilité Google. Parlons de votre projet et construisons ensemble une stratégie de visibilité rentable.",
};

const CONTACTS = [
  { label: "Email", value: "service@jwl-marketing.fr", href: "mailto:service@jwl-marketing.fr" },
  { label: "Téléphone", value: "07 83 79 28 11", href: "tel:+33783792811" },
  { label: "Site web", value: "www.jwl-marketing.fr", href: "https://www.jwl-marketing.fr" },
  { label: "LinkedIn", value: "Jodie Lapaillerie · JWL Marketing", href: "https://www.linkedin.com/" },
  { label: "Instagram", value: "jwl.marketing.aixenprovence", href: "https://www.instagram.com/" },
  { label: "TikTok", value: "jwl.marketing", href: "https://www.tiktok.com/" },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
        Contact
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold leading-tight text-black md:text-4xl">
        Discutons de votre <span className="text-gold">visibilité Google</span>
      </h1>
      <p className="mt-4 max-w-2xl text-[#555]">
        80 avis Google, 1ère page sur 4 mots-clés locaux, des clients qui
        appellent sans publicité payante. C&apos;est ce qu&apos;une stratégie
        SEO bien construite peut faire pour votre activité.
      </p>
      <p className="mt-4 max-w-2xl text-[#555]">
        Parlons de votre projet et construisons ensemble une{" "}
        <strong className="text-black">
          stratégie de visibilité rentable
        </strong>
        , adaptée à votre secteur, votre ville, vos objectifs.
      </p>
      <p className="mt-2 font-heading text-sm font-semibold uppercase tracking-wide text-gold">
        Audit marketing offert
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px]">
        <ContactForm />

        <div className="space-y-6">
          {CONTACTS.map((c) => (
            <div key={c.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                {c.label}
              </p>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                className="mt-1 block text-sm text-black hover:text-gold"
              >
                {c.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
