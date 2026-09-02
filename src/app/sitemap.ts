import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

/** Data da reconstrução do site. Atualizar em mudanças estruturais. */
const LAST_MODIFIED = new Date("2026-09-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/solucoes`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/projetos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/contato`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/sobre`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/projetos/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseRoutes].map((route) => ({
    ...route,
    lastModified: LAST_MODIFIED,
  }));
}
