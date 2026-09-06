"use client";

import { useState } from "react";
import { business, navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-navy text-base font-extrabold text-brand-amber"
            aria-hidden="true"
          >
            L
          </span>
          <span className="text-sm font-extrabold leading-tight text-brand-navy sm:text-base">
            Shiva New-Tech
            <span className="block whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
              Driving School · Varthur
            </span>
          </span>
        </a>

        {/* Desktop nav — 7 items, so it only unfolds at lg and above. */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Call is always visible at every breakpoint — it is the whole point. */}
        <div className="flex items-center gap-2">
          <a
            href={business.phoneTel}
            className="btn-amber px-4 py-2 text-sm"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            📞{" "}
            <span className="whitespace-nowrap">
              <span className="hidden xl:inline">{business.phoneDisplay}</span>
              <span className="xl:hidden">Call Now</span>
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-brand-navy lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-100 bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-brand-ink hover:bg-brand-mist hover:text-brand-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2 border-t border-slate-100 px-2 pb-3 pt-3">
              <a
                href={business.phoneTel}
                onClick={() => setOpen(false)}
                className="btn-amber flex-1 text-sm"
              >
                📞 Call
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-outline-navy flex-1 text-sm"
              >
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
