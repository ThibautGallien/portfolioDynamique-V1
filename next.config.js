/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour next-intl
  experimental: {
    // Activer le App Router (Next.js 13+)
    appDir: true,
  },

  // Images optimization
  images: {
    domains: ["images.pexels.com", "via.placeholder.com"],
    formats: ["image/webp", "image/avif"],
  },

  // Redirections personnalisées
  async redirects() {
    return [
      // Rediriger les anciennes URLs avec /fr vers la racine
      {
        source: "/fr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fr/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },

  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache statique pour les assets
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Optimisation du bundle
  webpack: (config, { isServer }) => {
    // Optimisation pour les icons
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Variables d'environnement publiques
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Transpilation de modules (si nécessaire)
  transpilePackages: ["next-intl"],

  // Configuration pour la production
  compress: true,
  poweredByHeader: false,

  // Analytics et monitoring
  ...(process.env.ANALYZE === "true" && {
    webpack: (config) => {
      config.plugins.push(
        new (require("@next/bundle-analyzer"))({
          enabled: true,
        })
      );
      return config;
    },
  }),
};

module.exports = nextConfig;
