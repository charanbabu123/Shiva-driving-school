import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

// Single-page site: one URL entry for the homepage.
// TODO: replace SITE_URL in lib/data.ts with the real domain before launch.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
