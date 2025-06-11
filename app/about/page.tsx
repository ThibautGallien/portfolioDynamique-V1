// app/[locale]/about/page.tsx
import { AboutPageClient } from "./about-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function AboutPage() {
  return <AboutPageClient />;
}
