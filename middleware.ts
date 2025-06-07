import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Langues supportées
  locales: ["fr", "en", "ja"],

  // Langue par défaut (français)
  defaultLocale: "fr",

  // Ne pas afficher la locale dans l'URL pour la langue par défaut
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    // Activer une redirection vers une locale correspondante à la racine
    "/",

    // Définir un cookie pour se souvenir de la locale précédente pour
    // toutes les requêtes qui ont un préfixe de locale
    "/(fr|en|ja)/:path*",

    // Activer les redirections qui ajoutent les locales manquantes
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
