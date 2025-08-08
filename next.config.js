/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["example.com", "pbs.twimg.com", "picsum.photos"], // İzin verdiğin domainleri buraya ekle
  },
};

module.exports = nextConfig;
