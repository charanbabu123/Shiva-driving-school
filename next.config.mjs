/** @type {import('next').NextConfig} */
// Static export: `next build` writes a complete, self-contained site to ./out.
// Netlify serves that straight from its CDN — no serverless functions, no cold
// starts, and the fastest possible Largest Contentful Paint, which Core Web
// Vitals (and therefore search ranking) rewards.
//
// app/sitemap.ts and app/robots.ts are still generated at build time and land
// in ./out as sitemap.xml and robots.txt.
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    // Next's on-demand image optimizer needs a server, so it is off here.
    // Instead every photo is pre-sized and pre-encoded to both JPEG and WebP
    // at build-prep time, and served via <picture> (see components/Pic.tsx).
    unoptimized: true,
  },
};

export default nextConfig;
