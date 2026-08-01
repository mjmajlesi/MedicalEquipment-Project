import type { NextConfig } from "next";

const backendInternalUrl =
  process.env.BACKEND_INTERNAL_URL ?? "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/backend-api/:path*",
        destination: `${backendInternalUrl}/api/v1/:path*`,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "forooghteb.ir",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "backend",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
