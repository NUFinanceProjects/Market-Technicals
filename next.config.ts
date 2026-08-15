import type { NextConfig } from "next";

const appRoutes = [
  "/MI400",
  "/MI400/:path*",
  "/TechnicalQuestions",
  "/TechnicalQuestions/:path*",
  "/MarketScenarios",
  "/MarketScenarios/:path*",
  "/MixedPractice",
  "/MixedPractice/:path*",
  "/BehavioralPractice",
  "/BehavioralPractice/:path*",
  "/Prep",
];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return appRoutes.map((source) => ({
      source,
      destination: "/",
    }));
  },
};

export default nextConfig;
