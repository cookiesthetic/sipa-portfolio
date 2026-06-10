import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static export
  output: "export",

  // Ensures routes like /about → /about/index.html
  trailingSlash: true,

  // next/image optimization is server-side; must disable for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
