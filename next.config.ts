import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next"; // ✅ Import the type

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true
};

export default withMDX(config);
