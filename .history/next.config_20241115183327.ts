import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "via.placeholder.com", "3.106.236.171"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.106.236.171",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "3.106.236.171",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
