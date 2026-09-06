# Shiva New-Tech Driving School — Website

Marketing site for **Shiva New-Tech Driving School**, Madhuranagar 2nd Stage,
Muthsandra Main Road, Varthur, Bengaluru 560087.

Every call-to-action on the page dials **+91 96327 81536**.

- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS
- **Output:** fully static export (`./out`) — no server, no serverless functions
- **Hosting:** Netlify

---

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site → ./out
```

## Deploying to Netlify

`netlify.toml` already contains everything Netlify needs, so the setup is:

1. In Netlify, **Add new site → Import an existing project** and pick the
   GitHub repo `charanbabu123/Shiva-driving-school`.
2. Leave the build settings alone — Netlify reads them from `netlify.toml`
   (build command `npm run build`, publish directory `out`).
3. Deploy.

> Do **not** install `@netlify/plugin-nextjs`. This site is a static export;
> the plugin would try to wrap it in serverless functions.

### After the first deploy — set the real URL

The canonical tag, `sitemap.xml`, `robots.txt` and the social-share image all
need the live domain. Set it once in **Site settings → Environment variables**:

```
NEXT_PUBLIC_SITE_URL = https://your-real-domain.com
```

then redeploy. Until you do, it falls back to the value in `netlify.toml`.

---

## Editing the content

Almost all text lives in one file: **`lib/data.ts`**. Courses, RTO services,
FAQs, areas served, phone numbers, address and opening hours are all there, and
the page plus the structured data are generated from it — so the visible copy
and what Google reads can never disagree.

| What you want to change      | Where                                    |
| ---------------------------- | ---------------------------------------- |
| Phone, address, hours        | `business` in `lib/data.ts`              |
| Courses / RTO services       | `courses`, `rtoServices`                 |
| FAQ (also feeds FAQ schema)  | `faqs`                                   |
| Areas served                 | `areasServed`                            |
| Google rating & review count | `business.googleRating` / `…ReviewCount` |
| Photos                       | `public/images/` (+ matching `.webp`)    |

### Adding student reviews

`testimonials` in `lib/data.ts` ships **empty on purpose**, and the quote cards
only render once it has entries. Paste in real reviews from your Google
Business Profile:

```ts
export const testimonials: Testimonial[] = [
  { name: "Priya R.", area: "Varthur", quote: "…their actual words…" },
];
```

Please don't invent reviews — Google penalises fabricated review content, and
it is the fastest way to lose a local ranking you have earned.

---

## SEO checklist — done in the code

- Keyword-targeted `<title>`, meta description and canonical URL
- One `<h1>`, clean `h2`/`h3` hierarchy across every section
- `LocalBusiness` (`AutomotiveBusiness` + `EducationalOrganization`) JSON-LD
  with address, geo, opening hours, 18 service areas and all 14 services
- `FAQPage` JSON-LD generated from the same array the accordion renders
- `WebSite` + `BreadcrumbList` JSON-LD
- Open Graph + Twitter card with a 1200×630 image
- `sitemap.xml` and `robots.txt` generated at build time
- Real business photos with descriptive alt text (not stock imagery)
- WebP served via `<picture>`, explicit `width`/`height` (zero layout shift)
- Self-hosted fonts, no render-blocking third-party scripts

## Still to do (needs the owner)

These are marked with `TODO(owner)` in the code:

1. **Exact map coordinates** — `business.geo` in `lib/data.ts` is approximate.
   Open Google Maps, find the shop, copy the real latitude/longitude. Precise
   coordinates measurably help "driving school near me" rankings.
2. **Google Search Console** — verify the site, then submit `sitemap.xml`.
   Uncomment `verification.google` in `app/layout.tsx` to verify by meta tag.
3. **`sameAs` links** — add the Google Business Profile, Justdial, Facebook and
   Instagram URLs in `app/layout.tsx`. These are a strong local trust signal.
4. **Add the website URL to your Google Business Profile** once it is live —
   this is the single highest-impact local SEO step available to you.
