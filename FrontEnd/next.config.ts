// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "forooghteb.ir",
      },
]
}
  }

module.exports = nextConfig;
