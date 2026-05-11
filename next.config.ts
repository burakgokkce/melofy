import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Proje kökü (üst dizindeki başka lockfile Turbopack’i şaırmasın) */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
