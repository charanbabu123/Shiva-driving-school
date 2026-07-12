"use client";

import { useState } from "react";
import { business, navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl" aria-hidden="true">
            🚗
          </span>
          <span className="text-sm font-bold leading-tight text-brand-navy sm:text-base md:text-lg">
            Shiva New-Tech <span className="whitespace-nowrap">Driving School</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-brand-ink transition-colors hover:text-brand-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Call button (always visible) + mobile hamburger */}
        <div className="flex items-center gap-2">
          <a href={business.phoneTel} className="btn-amber px-4 py-2 text-sm">
            📞 <span className="whitespace-nowrap">Call Now</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-brand-navy md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-100 bg-white md:hidden"
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
          </ul>
        </nav>
      )}
    </header>
  );
}
