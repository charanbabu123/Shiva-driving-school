import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

// Allow all crawlers; point them to the sitemap.
// TODO: replace SITE_URL in lib/data.ts with the real domain before launch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
