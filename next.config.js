/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    qualities: [10, 75], // Kullandığınız quality değerlerini ekleyin
  },

  async rewrites() {
    return [
      {
        source: "/bossphorus",
        destination: "/bossphorus.html",
      },
    ];
  },
};

module.exports = nextConfig;
