import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Langues supportées
  locales: ["fr", "en", "ja"],

  // Langue par défaut (français)
  defaultLocale: "fr",

  // Ne pas afficher la locale dans l'URL pour la langue par défaut
  // "/" = français, "/en" = anglais, "/ja" = japonais
  localePrefix: "as-needed",

  // Optionnel : Détection automatique de la langue basée sur Accept-Language
  // localeDetection: true, // Activez si vous voulez la détection auto
});

export const config = {
  matcher: [
    // Activer une redirection vers une locale correspondante à la racine
    "/",

    // Définir un cookie pour se souvenir de la locale précédente pour
    // toutes les requêtes qui ont un préfixe de locale
    "/(fr|en|ja)/:path*",

    // Activer les redirections qui ajoutent les locales manquantes
    // Exclut : _next (Next.js), _vercel (Vercel), fichiers avec extension
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
