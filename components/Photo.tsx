import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  /** Emoji shown in the navy placeholder when the file has not been added yet. */
  emoji?: string;
  /** Wrapper classes — MUST include a position utility (relative/absolute) and a size. */
  className?: string;
  /** Classes applied to the <Image> itself (defaults to object-cover). */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders the requested photo with next/image (fill + object-cover), or a
 * plain navy (#0A2E4A) placeholder with a centered white emoji when the file
 * does not yet exist in /public. This lets the client drop in real photos
 * later with zero code changes and no broken-image icons in the meantime.
 *
 * The wrapper is NOT positioned for you — pass `relative` (or `absolute`)
 * plus a size in `className` so next/image `fill` has a containing block.
 */
export default function Photo({
  src,
  alt,
  emoji = "🚗",
  className = "",
  imgClassName = "object-cover",
  sizes = "100vw",
  priority = false,
}: PhotoProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <div className={`overflow-hidden bg-brand-navy ${className}`}>
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imgClassName}
        />
      ) : (
        // TODO: add the real photo at public{src} — showing navy placeholder for now.
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-5xl md:text-6xl" aria-hidden="true">
            {emoji}
          </span>
        </div>
      )}
    </div>
  );
}
