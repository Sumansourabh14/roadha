import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next"; // ✅ Import the type

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(config);
