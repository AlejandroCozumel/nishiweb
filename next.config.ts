import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't use 'output: export' - let @cloudflare/next-on-pages handle it
  experimental: {
    serverComponentsExternalPackages: []
  },
  // Optimize images for Cloudflare
  images: {
    remotePatterns: [
      // Add any external image domains you use
    ],
  },
  // Optional: if you have custom headers or redirects
  async headers() {
    return [];
  },
};

export default nextConfig;