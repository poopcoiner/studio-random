import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allow production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
