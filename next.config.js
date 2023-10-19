/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "avatars.githubusercontent.com",
      "cloudflare-ipfs.com",
      "",
    ],
  },
  experimental: {
    serverActions: true,
    
  },
};

module.exports = nextConfig;
