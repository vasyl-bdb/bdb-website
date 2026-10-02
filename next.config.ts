import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bdb-website",
  assetPrefix: "/bdb-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
