// app/[locale]/layout.tsx
import "./globals.css";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Toaster } from "@/components/ui/sonner";
import { getMessages, isValidLocale, locales } from "@/lib/i18n";
import { I18nProvider } from "@/components/providers/i18n-provider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

// Métadonnées par défaut (simplifiées pour le debug)
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isValidLocale(locale)) {
    return { title: "Page not found" };
  }

  return {
    title: "Thibaut Gallien - Portfolio",
    description: "Développeur Web & Copywriter",
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider messages={messages} locale={locale}>
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
        </I18nProvider>
      </body>
    </html>
  );
}
