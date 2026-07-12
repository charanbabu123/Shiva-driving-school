import { business, branches } from "@/lib/data";

/**
 * Fixed call-to-action bar pinned to the bottom on mobile only (< md).
 * Sits above all content; every button is a full-height 44px+ touch target.
 * The page reserves matching bottom padding on mobile so this never covers
 * content (see the `pb-20 md:pb-0` on the page's <main>).
 */
export default function MobileBottomBar() {
  const varthur = branches.find((b) => b.id === "varthur")!;

  const item =
    "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-bold text-brand-navy min-h-[3.5rem]";

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t-2 border-brand-navy bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden"
    >
      <a href={business.phoneTel} className={item}>
        <span className="text-xl" aria-hidden="true">
          📞
        </span>
        Call
      </a>
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} border-x border-slate-200`}
      >
        <span className="text-xl" aria-hidden="true">
          💬
        </span>
        WhatsApp
      </a>
      <a
        href={varthur.maps}
        target="_blank"
        rel="noopener noreferrer"
        className={item}
      >
        <span className="text-xl" aria-hidden="true">
          🗺
        </span>
        Directions
      </a>
    </nav>
  );
}
