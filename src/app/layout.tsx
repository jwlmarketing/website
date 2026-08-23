import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterCta from "@/components/NewsletterCta";

export const metadata: Metadata = {
  title: "JWL Marketing | Marketing Digital à Aix-en-Provence",
  description:
    "Marre des sites invisibles ? Découvre mon univers axé sur l'acquisition client, le SEO et l'IA. À Aix-en-Provence et partout en France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-800">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <div className="px-5 py-16">
          <NewsletterCta />
        </div>
        <Footer />
      </body>
    </html>
  );
}
