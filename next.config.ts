import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Ensures it's NOT a fully static site
  async redirects() {
    return [
      {
        source: '/makers-test',
        destination: 'https://vintarochess.com', // Replace with your actual Microsoft Forms link
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
