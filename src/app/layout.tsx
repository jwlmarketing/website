import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Footer from "@/components/Footer";
import NewsletterCta from "@/components/NewsletterCta";
import Faq from "@/components/Faq";
import ScrollRevealAll from "@/components/ScrollRevealAll";
import CookieConsent from "@/components/CookieConsent";
import PromoCarouselPopup from "@/components/PromoCarouselPopup";
import { LocalBusinessSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "JWL Marketing | Marketing Digital à Aix-en-Provence",
  description:
    "Marre des sites invisibles ? Découvre mon univers axé sur l'acquisition client, le SEO et l'IA. À Aix-en-Provence et partout en France.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";

  return (
    <html lang={lang} className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700,701&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-800">
        <LocalBusinessSchema locale={lang} />
        <ScrollRevealAll />
        <main className="flex-1">{children}</main>
        <div className="px-5 py-16">
          <NewsletterCta />
        </div>
        <div className="px-5 pb-16">
          <Faq />
        </div>
        <Footer />
        <PromoCarouselPopup />
        <CookieConsent />
      </body>
    </html>
  );
}
