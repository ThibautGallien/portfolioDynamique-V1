// app/[locale]/politique-confidentialite/page.tsx
import { PrivacyPageClient } from "./privacy-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
