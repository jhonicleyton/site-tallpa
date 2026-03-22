import type { MetadataRoute } from "next";

const BASE_URL = "https://tallpa.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/sistemas`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ia-automacao`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/data-bi`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/showcase`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
