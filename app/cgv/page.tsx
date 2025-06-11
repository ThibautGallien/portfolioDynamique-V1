// app/[locale]/cgv/page.tsx
import { CgvPageClient } from "./cgv-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function CgvPage() {
  return <CgvPageClient />;
}
