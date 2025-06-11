import { DevPageClient } from "./dev-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function DevPage() {
  return <DevPageClient />;
}
