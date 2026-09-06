# syntax=docker/dockerfile:1

# =========================================================================
# Shiva New-Tech Driving School — production Docker image
#
# The site is a Next.js *static export* (see next.config.mjs), so there is no
# Node server at runtime: stage 1 builds ./out, stage 2 serves it with nginx.
# This mirrors how Netlify hosts it, and keeps the final image tiny.
#
# Netlify does NOT use this file — it runs `npm run build` and publishes ./out
# per netlify.toml. This is only for running the site locally in a container.
# =========================================================================

# ---- Stage 1: build the static site ----
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Produces ./out — needs network so next/font can fetch and self-host Inter.
RUN npm run build

# ---- Stage 2: serve the static files ----
FROM nginx:1.27-alpine AS runner

# Long-cache the fingerprinted build assets; let HTML revalidate.
RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  root /usr/share/nginx/html;' \
  '  index index.html;' \
  '  location /_next/static/ { expires 1y; add_header Cache-Control "public, immutable"; }' \
  '  location /images/      { expires 30d; add_header Cache-Control "public"; }' \
  '  location / { try_files $uri $uri/ $uri.html /index.html; }' \
  '}' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
