"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

/**
 * Accessible accordion. The answer text is rendered from the shared `faqs`
 * array — the exact same source used to build the FAQPage JSON-LD in
 * app/layout.tsx — so the visible copy and the structured data cannot drift.
 * Answers stay in the DOM when collapsed (just visually hidden) so the full
 * text is always present for search engines.
 */
export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
      {faqs.map((f, i) => {
        const isOpen = openIdx === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div
            key={i}
            className={`border-b border-slate-200 transition-colors last:border-b-0 ${
              isOpen ? "bg-brand-mist/60" : "hover:bg-brand-mist/40"
            }`}
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 border-l-4 px-5 py-4 text-left transition-colors ${
                  isOpen ? "border-brand-amber" : "border-transparent"
                }`}
              >
                <span className="text-base font-bold text-brand-navy md:text-lg">
                  {f.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-2xl font-bold leading-none transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-brand-amber text-brand-navy"
                      : "bg-brand-mist text-brand-amber"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-brand-ink md:text-base">
                  {f.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
