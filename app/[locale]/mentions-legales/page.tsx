// app/[locale]/mentions-legales/page.tsx
import { LegalPageClient } from "./legal-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function LegalPage() {
  return <LegalPageClient />;
}
