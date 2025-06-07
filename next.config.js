/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commenté pour le développement
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
