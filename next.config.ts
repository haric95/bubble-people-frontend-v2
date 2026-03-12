import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false,
  devIndicators: false,
  experimental: {
    viewTransition: true,
  },
  output: "export",
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL("https://picsum.photos/**"),
      new URL("https://res.cloudinary.com/**"),
    ],
    unoptimized: true,
  },
};

export default nextConfig;
