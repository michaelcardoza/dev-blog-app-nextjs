/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    api: {
      url: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
  },
};

module.exports = nextConfig;
