import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ⚠️ Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    position: 'top-right',
  },
};

export default nextConfig;