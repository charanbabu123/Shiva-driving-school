/** @type {import('next').NextConfig} */
// NOTE: Next.js 14 loads `.js`/`.mjs` config (TypeScript config files are a
// Next.js 15+ feature). The image settings requested for `next.config.ts` are
// applied here instead so they actually take effect on the Next 14 build.
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All images are local from /public/images — no remote hosts needed.
    // Optimization stays ON (this is the Next.js default) so next/image serves
    // responsive, modern formats on the Vercel Hobby tier at no cost.
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
