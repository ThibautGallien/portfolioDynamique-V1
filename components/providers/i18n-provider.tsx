"use client";

import { createContext, useContext, ReactNode } from "react";

interface I18nContextType {
  messages: any;
  locale: string;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  messages: any;
  locale: string;
}

export function I18nProvider({
  children,
  messages,
  locale,
}: I18nProviderProps) {
  const t = (key: string): string => {
    const keys = key.split(".");
    let value = messages;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <I18nContext.Provider value={{ messages, locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslations must be used within an I18nProvider");
  }
  return context.t;
}

export function useLocale() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLocale must be used within an I18nProvider");
  }
  return context.locale;
}
