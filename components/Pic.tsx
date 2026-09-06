type PicProps = {
  /** Path to the JPEG under /public, e.g. "/images/hero-fleet.jpg". */
  src: string;
  alt: string;
  /** Intrinsic size — always pass both so the browser reserves space (no CLS). */
  width: number;
  height: number;
  /** Classes for the <img> itself. */
  className?: string;
  /** Eager-load + decode synchronously. Use for the hero image only. */
  priority?: boolean;
  sizes?: string;
};

/**
 * Plain <picture> element serving a WebP first and falling back to the JPEG.
 *
 * The site is built as a static export, so Next's image optimizer is not in
 * play — the WebP variants are pre-generated into /public/images alongside the
 * JPEGs. Explicit width/height on the <img> keeps Cumulative Layout Shift at
 * zero, which Core Web Vitals (and therefore ranking) cares about.
 */
export default function Pic({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
}: PicProps) {
  const webp = src.replace(/\.jpe?g$/i, ".webp");

  return (
    <picture>
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={className}
      />
    </picture>
  );
}
