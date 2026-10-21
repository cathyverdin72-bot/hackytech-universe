
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Generate a static website for GitHub Pages.
  output: "export",
  trailingSlash: true,

  // GitHub Pages hosts this project under its repository path.
  basePath: "/hackytech-universe",

  // Static hosting does not run Next.js image optimization.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
