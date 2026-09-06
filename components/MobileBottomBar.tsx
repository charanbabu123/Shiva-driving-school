import { business, waLink } from "@/lib/data";

/**
 * Fixed call-to-action bar pinned to the bottom of the viewport on mobile.
 *
 * Most visitors arrive on a phone from a Google search, so the three actions
 * that convert — call, WhatsApp, directions — stay permanently within thumb
 * reach. The page reserves matching bottom padding (`pb-20 md:pb-0` on <main>)
 * so this never covers content.
 */
export default function MobileBottomBar() {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-bold min-h-[3.75rem]";

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-navy/10 bg-white shadow-[0_-2px_14px_rgba(10,46,74,0.14)] md:hidden"
    >
      {/* Call is visually dominant — it is the primary conversion action. */}
      <a
        href={business.phoneTel}
        className={`${item} flex-[1.4] bg-brand-amber text-brand-navy`}
        aria-label={`Call ${business.phoneDisplay}`}
      >
        <span className="text-lg" aria-hidden="true">
          📞
        </span>
        Call Now
      </a>
      <a
        href={waLink("Hi, I'd like to know about driving classes at Varthur.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-brand-navy`}
      >
        <span className="text-lg" aria-hidden="true">
          💬
        </span>
        WhatsApp
      </a>
      <a
        href={business.maps}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} border-l border-slate-200 text-brand-navy`}
      >
        <span className="text-lg" aria-hidden="true">
          🗺️
        </span>
        Directions
      </a>
    </nav>
  );
}
