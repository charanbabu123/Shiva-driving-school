import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

/**
 * Date the page's *content* last meaningfully changed.
 *
 * Deliberately a constant rather than `new Date()`: a lastmod that bumps on
 * every deploy — even a CSS tweak — teaches Google the value is meaningless,
 * and it starts ignoring it. Bump this by hand when the copy, services or
 * FAQs actually change.
 */
const CONTENT_LAST_MODIFIED = "2026-09-07";

// Single-page site, so the sitemap holds exactly one URL. The trailing slash
// matches `trailingSlash: true` in next.config.mjs and the canonical tag.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
