// next.config.ts

// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/backend-api/:path*",
        destination: "http://127.0.0.1:8000/api/v1/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "forooghteb.ir",
      },
<<<<<<< HEAD
]
}
}
=======
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
    ],
  },
};
>>>>>>> e7dcd91 (fix local development setup and frontend-backend integration)

export default nextConfig