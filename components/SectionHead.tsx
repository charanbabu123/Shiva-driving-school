type SectionHeadProps = {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  /** "dark" = navy text on light bg (default); "light" = white text on navy bg. */
  tone?: "dark" | "light";
};

/**
 * Consistent section header: small amber eyebrow label, bold title, an amber
 * accent underline, and an optional sub-line. Used across every section so the
 * page reads as one cohesive design system.
 */
export default function SectionHead({
  eyebrow,
  title,
  sub,
  tone = "dark",
}: SectionHeadProps) {
  const light = tone === "light";
  return (
    <div className="text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-3 text-2xl font-extrabold sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-amber" />
      {sub && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            light ? "text-white/80" : "text-brand-ink"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
