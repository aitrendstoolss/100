import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  allowedDevOrigins: [
    '192.168.1.5:3000',
    '192.168.1.5',
    '192.168.1.6:3000',
    '192.168.1.6',
    '192.168.1.7:3000',
    '192.168.1.7',
    '192.168.1.8:3000',
    '192.168.1.8',
    'localhost:3000'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
