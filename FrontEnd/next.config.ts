// next.config.ts

// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "forooghteb.ir",
        },
      ],
      unoptimized: true,
      },
  output: "standalone",
};

export default nextConfig