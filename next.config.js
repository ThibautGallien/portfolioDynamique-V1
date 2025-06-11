/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images optimization
  images: {
    domains: ["images.pexels.com", "via.placeholder.com"],
    formats: ["image/webp", "image/avif"],
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
        ],
      },
    ];
  },

  // Optimisation du bundle
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // Configuration pour la production
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
