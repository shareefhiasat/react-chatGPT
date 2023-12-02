/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = nextConfig;
