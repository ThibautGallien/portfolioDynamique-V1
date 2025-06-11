import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thibaut Gallien - Portfolio",
  description: "Développeur Web & Copywriter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
