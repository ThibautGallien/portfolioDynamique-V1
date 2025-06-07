import frMessages from "../messages/fr.json";
import enMessages from "../messages/en.json";
import jaMessages from "../messages/ja.json";

export const locales = ["fr", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

const messages = {
  fr: frMessages,
  en: enMessages,
  ja: jaMessages,
};

export function getMessages(locale: Locale) {
  return messages[locale] || messages.fr;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
