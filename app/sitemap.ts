import type { MetadataRoute } from "next";

const siteUrl = "https://www.market-technicals.com";

const routes = [
  "",
  "/MI400",
  "/TechnicalQuestions",
  "/MarketScenarios",
  "/MixedPractice",
  "/BehavioralPractice",
  "/Prep",
  "/investment-banking-interview-questions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
