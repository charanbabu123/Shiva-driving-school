import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

// Allow every crawler everything, and point them at the sitemap.
//
// Nothing is disallowed on purpose: the Google Search Console verification
// file (public/googlee6672e337f273ab0.html) has to stay fetchable, and a
// single-page brochure site has nothing worth hiding from a crawler.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
