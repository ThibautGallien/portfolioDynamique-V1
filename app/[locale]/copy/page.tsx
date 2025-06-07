import { CopyPageClient } from "./copy-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function CopyPage() {
  return <CopyPageClient />;
}
