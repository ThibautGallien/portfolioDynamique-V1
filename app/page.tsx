import { HomePageClient } from "../home-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function HomePage() {
  return <HomePageClient />;
}
