/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "127.0.0.1:10058/",
      "localhost:10058/",
      "bubblybeaks.com",
      "localhost",
    ], // whatever port your backend runs on
  },
};

module.exports = nextConfig;
