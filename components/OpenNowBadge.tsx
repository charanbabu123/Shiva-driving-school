"use client";

import { useEffect, useState } from "react";

const OPEN_MIN = 6 * 60; // 06:00 IST
const CLOSE_MIN = 21 * 60; // 21:00 IST

/**
 * Live "Open now" / "Closed now" pill.
 *
 * Opening hours are fixed in IST, so the visitor's own timezone is normalised
 * away rather than trusted. Renders nothing until mounted on the client, which
 * keeps the static export free of hydration mismatches.
 */
export default function OpenNowBadge({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      // Local time → UTC → IST (UTC+5:30).
      const istMs =
        now.getTime() + now.getTimezoneOffset() * 60_000 + 5.5 * 3_600_000;
      const ist = new Date(istMs);
      const mins = ist.getHours() * 60 + ist.getMinutes();
      setOpen(mins >= OPEN_MIN && mins < CLOSE_MIN);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${
        open
          ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40"
          : "bg-white/10 text-white/70 ring-1 ring-white/20"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${
          open ? "animate-pulse bg-emerald-400" : "bg-white/50"
        }`}
      />
      {open ? "Open now · until 9:00 PM" : "Closed now · opens 6:00 AM"}
    </span>
  );
}
