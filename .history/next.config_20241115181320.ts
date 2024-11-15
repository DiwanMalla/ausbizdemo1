import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["upload.wikimedia.org", "via.placeholder.com"], // You can add more domains as needed
  },
  remotePatterns: [
    {
      protocol: "http",
      hostname: "3.106.236.171",
      pathname: "/wp-content/uploads/**",
    },
  ],
};

export default nextConfig;
