// app/sitemap.ts
import { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thibaut-gallien.com";

// Pages statiques de votre site
const staticPages = [
  "", // home
  "/dev", // développement
  "/copy", // copywriting
  "/contact", // contact
];

// Pages légales
const legalPages = ["/mentions-legales", "/politique-confidentialite", "/cgv"];

// Langues supportées
const locales = ["fr", "en", "ja"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const siteMap: MetadataRoute.Sitemap = [];

  // Pages principales pour chaque langue
  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      // URL pour la langue française (pas de préfixe)
      if (locale === "fr") {
        siteMap.push({
          url: `${baseUrl}${page}`,
          lastModified: now,
          changeFrequency: page === "" ? "weekly" : "monthly",
          priority: page === "" ? 1.0 : 0.8,
          alternates: {
            languages: {
              fr: `${baseUrl}${page}`,
              en: `${baseUrl}/en${page}`,
              ja: `${baseUrl}/ja${page}`,
            },
          },
        });
      } else {
        // URLs pour les autres langues (avec préfixe)
        siteMap.push({
          url: `${baseUrl}/${locale}${page}`,
          lastModified: now,
          changeFrequency: page === "" ? "weekly" : "monthly",
          priority: page === "" ? 1.0 : 0.8,
          alternates: {
            languages: {
              fr: `${baseUrl}${page}`,
              en: `${baseUrl}/en${page}`,
              ja: `${baseUrl}/ja${page}`,
            },
          },
        });
      }
    });
  });

  // Pages légales (seulement en français)
  legalPages.forEach((page) => {
    siteMap.push({
      url: `${baseUrl}${page}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    });

    // Versions en anglais et japonais des pages légales
    locales
      .filter((locale) => locale !== "fr")
      .forEach((locale) => {
        siteMap.push({
          url: `${baseUrl}/${locale}${page}`,
          lastModified: now,
          changeFrequency: "yearly",
          priority: 0.3,
        });
      });
  });

  return siteMap;
}

// Génération d'un sitemap pour les images (optionnel)
export function generateImageSitemap(): MetadataRoute.Sitemap {
  const images = [
    {
      url: `${baseUrl}/og-image.jpg`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/profile-image.jpg`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    // Ajoutez d'autres images importantes de votre portfolio
  ];

  return images;
}
