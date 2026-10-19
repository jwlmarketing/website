import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import NewsletterCta from "@/components/NewsletterCta";
import Faq from "@/components/Faq";
import ScrollRevealAll from "@/components/ScrollRevealAll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWL Marketing | Aix-en-Provence",
  description: "Un site Web qui attire de nouveaux clients",
  // AJOUTEZ EXACTEMENT CES LIGNES ICI :
  verification: {
    google: "yr5l2rUmiBbg_gWgrxKJi3Tb7UjdCihr5IUbL-CwwcE", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-800">
        <ScrollRevealAll />
        <main className="flex-1">{children}</main>
        <div className="px-5 py-16">
          <NewsletterCta />
        </div>
        <div className="px-5 pb-16">
          <Faq />
        </div>
        <Footer />
      </body>
    </html>
  );
}
