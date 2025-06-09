import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Dynamique - Développeur Web & Copywriter",
  description:
    "Portfolio ultra-dynamique d'un développeur web et copywriter professionnel. Créons ensemble votre projet digital.",
  keywords: "développeur web, copywriter, portfolio, web design, développement",
  openGraph: {
    title: "Portfolio Dynamique - Développeur Web & Copywriter",
    description:
      "Portfolio ultra-dynamique d'un développeur web et copywriter professionnel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
