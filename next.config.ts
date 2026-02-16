import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL("https://picsum.photos/**"),
      new URL("https://res.cloudinary.com/**"),
    ],
  },
};

export default nextConfig;
