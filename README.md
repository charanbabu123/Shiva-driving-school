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

> Do **not** re-enable Netlify's HTML post-processing. `netlify.toml` sets
> `[build.processing] skip_processing = true` so Pretty URLs can never rewrite
> `/googlee6672e337f273ab0.html`, which would break Search Console
> verification.

### Known issue: Netlify head injection

Netlify injects a promotional comment into `<head>` on the served page:

```html
<!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&… -->
```

Next's App Router renders `<head>` as part of the React tree, so React sees
that as unexpected DOM during hydration: it logs error #418 three times, then
#423, and discards the prerendered HTML to re-render the whole page on the
client.

Reproduced both ways against the same build — errors appear only when the
injected node is present (`WITHOUT injection: no errors` / `WITH injection:
#418 x3, #423`). `skip_processing` does not stop it; it is applied at the edge.

**The exact markup changes over time.** It first appeared as the comment plus
`<meta name="hosting-provider">` and `<meta name="netlify-deploy">`; Netlify
has since dropped the two meta tags and kept the comment, and moved it after
`<meta charSet>`. Grep for the comment text, not for the meta names — checking
for `hosting-provider` now reports a false "fixed" while the comment, which is
on its own enough to break hydration, is still being served.

**Impact is limited:** the server HTML is complete and correct, so Googlebot
and social scrapers are unaffected — content, JSON-LD and meta tags all read
fine, and every section still renders for users. The cost is a slower time to
interactive, since the browser redoes work that prerendering already did.

**To fix:** in Netlify, go to *Project configuration → Build & deploy →
Post processing* and turn off the hosting-metadata / snippet injection. It
appears to be tied to the free `*.netlify.app` subdomain, so attaching a
custom domain may also remove it. Re-check with:

```bash
# 0 means the injection is gone and hydration is healthy again.
curl -s https://shivanewtechdrivingschool.netlify.app/ | grep -c "hosted on Netlify"
```

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
2. **Google Search Console** — the HTML verification file is already live at
   `/googlee6672e337f273ab0.html`, so in Search Console just press **Verify**
   on the HTML-file method. Then submit `sitemap.xml` under *Sitemaps*.
   Keep `public/googlee6672e337f273ab0.html` in the repo — Google re-checks it
   periodically and un-verifies the property if it disappears.
3. **`sameAs` links** — add the Google Business Profile, Justdial, Facebook and
   Instagram URLs in `app/layout.tsx`. These are a strong local trust signal.
4. **Add the website URL to your Google Business Profile** once it is live —
   this is the single highest-impact local SEO step available to you.
