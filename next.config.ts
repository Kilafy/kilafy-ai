import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Exclude Sanity Studio from Next.js compilation
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    // Ignore studio-kilafy-ai directory during build
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /studio-kilafy-ai/,
    });
    return config;
  },
};

export default nextConfig;
