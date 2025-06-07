import { ContactPageClient } from "./contact-client";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ja" }];
}

export default function ContactPage() {
  return <ContactPageClient />;
}
