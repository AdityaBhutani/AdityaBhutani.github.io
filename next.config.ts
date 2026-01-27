import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to a subpath like username.github.io/valentines
  // basePath: "/valentines",
};

export default nextConfig;