"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";
import { useLocale } from "@/components/providers/i18n-provider";

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

interface LanguageSelectorProps {
  variant?: "header";
  className?: string;
}

export function LanguageSelector({
  variant,
  className,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    console.log("Switching from", currentLocale, "to", langCode);
    console.log("Current pathname:", pathname);

    // Extraire le path sans la locale
    const segments = pathname.split("/").filter(Boolean);
    const locales = ["fr", "en", "ja"];

    let pathWithoutLocale = "/";

    // Si le premier segment est une locale, on l'enlève
    if (locales.includes(segments[0])) {
      pathWithoutLocale = "/" + segments.slice(1).join("/");
    } else {
      pathWithoutLocale = pathname;
    }

    // Si on va au français, pas de préfixe
    // Sinon, ajouter le préfixe de langue
    let newPath;
    if (langCode === "fr") {
      newPath = pathWithoutLocale === "/" ? "/" : pathWithoutLocale;
    } else {
      newPath = `/${langCode}${pathWithoutLocale}`;
    }

    // Nettoyer les doubles slashes
    newPath = newPath.replace(/\/+/g, "/");

    console.log("New path:", newPath);

    // Utiliser window.location pour forcer le rechargement avec next-intl
    window.location.href = newPath;
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-accent"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 z-20 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
            >
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center space-x-3 ${
                    currentLocale === language.code ? "bg-accent/50" : ""
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                  {currentLocale === language.code && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
