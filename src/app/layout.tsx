import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "JWL Marketing | Marketing Digital à Aix-en-Provence",
  description:
    "Résultats mesurables, Aix-en-Provence. Transforme ta présence digitale en commercial terrain 24h/24, sur Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${sourceSerif.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-800">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
