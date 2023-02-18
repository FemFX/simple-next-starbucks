/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "static.vecteezy.com"],
  },
  env: {
    APP_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
