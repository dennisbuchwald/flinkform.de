import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    // Als String angegeben, damit es auch mit Turbopack funktioniert
    remarkPlugins: [["remark-gfm"]],
  },
});

export default withMDX(nextConfig);
