import { business } from "@/lib/data";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  /** "amber" = amber gradient band; "navy" = navy gradient band. */
  variant?: "amber" | "navy";
};

/**
 * Recurring conversion band with Call + WhatsApp buttons. Dropped between
 * sections so a visitor is never more than a scroll away from a way to get
 * in touch. Two tones (amber / navy) so consecutive bands stay distinct.
 */
export default function CtaBand({
  eyebrow,
  title,
  sub,
  variant = "amber",
}: CtaBandProps) {
  const amber = variant === "amber";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div
          className={`relative overflow-hidden rounded-3xl px-6 py-10 shadow-card md:px-12 md:py-12 ${
            amber
              ? "bg-gradient-to-br from-brand-amber-light to-brand-amber"
              : "bg-gradient-to-br from-brand-navy-700 to-brand-navy-900"
          }`}
        >
          {/* Decorative glow + dot texture */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${
              amber ? "bg-white/30" : "bg-brand-amber/25"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 bg-[length:22px_22px] opacity-40 ${
              amber ? "bg-dot-grid-navy" : "bg-dot-grid"
            }`}
          />

          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-[0.22em] ${
                  amber ? "text-brand-navy/70" : "text-brand-amber"
                }`}
              >
                {eyebrow}
              </span>
              <h2
                className={`mt-2 text-2xl font-extrabold sm:text-3xl ${
                  amber ? "text-brand-navy" : "text-white"
                }`}
              >
                {title}
              </h2>
              {sub && (
                <p
                  className={`mt-2 max-w-xl text-base leading-relaxed ${
                    amber ? "text-brand-navy/80" : "text-white/80"
                  }`}
                >
                  {sub}
                </p>
              )}
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={business.phoneTel}
                className={amber ? "btn-navy px-6 py-3 text-base" : "btn-amber"}
              >
                📞 Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={amber ? "btn-white" : "btn-outline"}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
