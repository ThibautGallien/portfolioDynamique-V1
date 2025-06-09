// lib/metadata.ts
import type { Metadata } from "next";

interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

const DEFAULT_METADATA = {
  siteName: "Thibaut Gallien - Portfolio",
  domain: "https://thibaut-gallien.com", // Remplacez par votre domaine
  ogImage: "/og-image.jpg", // Vous devrez créer cette image
  twitterHandle: "@Thibaut_gallien",
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}: MetadataConfig): Metadata {
  const fullTitle = title.includes("Thibaut Gallien")
    ? title
    : `${title} | ${DEFAULT_METADATA.siteName}`;
  const url = canonicalUrl || DEFAULT_METADATA.domain;
  const image = ogImage || DEFAULT_METADATA.ogImage;
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${DEFAULT_METADATA.domain}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "développeur web",
      "copywriter",
      "freelance",
      "React",
      "Next.js",
      "TypeScript",
      "SEO",
      "marketing digital",
      "Thibaut Gallien",
      ...keywords,
    ].join(", "),

    // Basic meta tags
    alternates: {
      canonical: url,
      languages: {
        fr: `${DEFAULT_METADATA.domain}/fr`,
        en: `${DEFAULT_METADATA.domain}/en`,
        ja: `${DEFAULT_METADATA.domain}/ja`,
      },
    },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: DEFAULT_METADATA.siteName,
      type: ogType as any,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fr_FR",
      alternateLocale: ["en_US", "ja_JP"],
    },

    // Twitter
    twitter: {
      card: twitterCard as any,
      title: fullTitle,
      description,
      images: [fullImageUrl],
      creator: DEFAULT_METADATA.twitterHandle,
      site: DEFAULT_METADATA.twitterHandle,
    },

    // Additional meta tags
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Verification and additional tags
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      other: {
        "facebook-domain-verification":
          process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION || "",
      },
    },

    // Additional metadata
    category: "Technology",
    authors: [{ name: "Thibaut Gallien", url: DEFAULT_METADATA.domain }],
    creator: "Thibaut Gallien",
    publisher: "Thibaut Gallien",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

// Métadonnées spécifiques par page
export const PAGE_METADATA = {
  home: {
    fr: {
      title: "Thibaut Gallien - Développeur Web & Copywriter Freelance",
      description:
        "Développeur web full-stack et copywriter créatif. Je transforme vos idées en expériences digitales exceptionnelles. Sites web modernes, applications, contenu persuasif.",
      keywords: [
        "portfolio",
        "développeur full-stack",
        "freelance France",
        "site web sur mesure",
      ],
    },
    en: {
      title: "Thibaut Gallien - Web Developer & Copywriter Freelance",
      description:
        "Full-stack web developer and creative copywriter. I transform your ideas into exceptional digital experiences. Modern websites, applications, persuasive content.",
      keywords: [
        "portfolio",
        "full-stack developer",
        "freelance",
        "custom website",
      ],
    },
    ja: {
      title: "Thibaut Gallien - ウェブ開発者・コピーライター",
      description:
        "フルスタックウェブ開発者兼クリエイティブコピーライター。あなたのアイデアを優れたデジタル体験に変換します。",
      keywords: [
        "ポートフォリオ",
        "フルスタック開発者",
        "フリーランス",
        "カスタムウェブサイト",
      ],
    },
  },

  dev: {
    fr: {
      title: "Services Développement Web",
      description:
        "Développement de sites web modernes, applications React/Next.js, e-commerce. Solutions sur mesure avec les dernières technologies.",
      keywords: [
        "développement React",
        "Next.js",
        "TypeScript",
        "e-commerce",
        "application web",
      ],
    },
    en: {
      title: "Web Development Services",
      description:
        "Modern website development, React/Next.js applications, e-commerce. Custom solutions with the latest technologies.",
      keywords: [
        "React development",
        "Next.js",
        "TypeScript",
        "e-commerce",
        "web application",
      ],
    },
    ja: {
      title: "ウェブ開発サービス",
      description:
        "モダンなウェブサイト開発、React/Next.jsアプリケーション、eコマース。最新技術でのカスタムソリューション。",
      keywords: [
        "React開発",
        "Next.js",
        "TypeScript",
        "eコマース",
        "ウェブアプリケーション",
      ],
    },
  },

  copy: {
    fr: {
      title: "Services Copywriting",
      description:
        "Rédaction de contenus persuasifs, pages de vente, emails marketing, contenus SEO. Copywriting qui convertit et engage votre audience.",
      keywords: [
        "copywriting",
        "rédaction web",
        "page de vente",
        "email marketing",
        "contenu SEO",
      ],
    },
    en: {
      title: "Copywriting Services",
      description:
        "Persuasive content writing, sales pages, email marketing, SEO content. Copywriting that converts and engages your audience.",
      keywords: [
        "copywriting",
        "web writing",
        "sales page",
        "email marketing",
        "SEO content",
      ],
    },
    ja: {
      title: "コピーライティングサービス",
      description:
        "説得力のあるコンテンツ執筆、セールスページ、メールマーケティング、SEOコンテンツ。",
      keywords: [
        "コピーライティング",
        "ウェブライティング",
        "セールスページ",
        "メールマーケティング",
      ],
    },
  },

  contact: {
    fr: {
      title: "Contact - Démarrons votre projet",
      description:
        "Contactez-moi pour discuter de votre projet web ou copywriting. Devis gratuit, réponse rapide. Transformons vos idées en réalité.",
      keywords: ["contact", "devis gratuit", "projet web", "consultation"],
    },
    en: {
      title: "Contact - Let's Start Your Project",
      description:
        "Contact me to discuss your web or copywriting project. Free quote, quick response. Let's transform your ideas into reality.",
      keywords: ["contact", "free quote", "web project", "consultation"],
    },
    ja: {
      title: "お問い合わせ - プロジェクトを始めましょう",
      description:
        "ウェブやコピーライティングプロジェクトについてご相談ください。無料見積もり、迅速な対応。",
      keywords: [
        "お問い合わせ",
        "無料見積もり",
        "ウェブプロジェクト",
        "コンサルテーション",
      ],
    },
  },
};

// Helper pour obtenir les métadonnées d'une page
export function getPageMetadata(
  page: keyof typeof PAGE_METADATA,
  locale: "fr" | "en" | "ja" = "fr"
) {
  const pageData = PAGE_METADATA[page]?.[locale] || PAGE_METADATA[page].fr;
  return generateMetadata(pageData);
}
