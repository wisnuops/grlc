import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/makers-test",
        destination: "https://vintarochess.com", // Replace with your actual Microsoft Form URL
        permanent: true, // Use true for 301 (permanent) or false for 302 (temporary)
      },
    ];
  },
};

export default nextConfig;
