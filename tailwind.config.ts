import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system — referenced as bg-brand-navy, text-brand-amber, etc.
        brand: {
          navy: "#0A2E4A", // nav, headings, card backgrounds
          amber: "#F59E0B", // accent / CTA ONLY (Call, WhatsApp, primary action)
          ink: "#1E293B", // body text (near-black)
          mist: "#F8FAFC", // subtle section alternation
        },
      },
      fontFamily: {
        // Inter is loaded via next/font/google (no external CDN calls).
        sans: ["var(--font-inter)", "system-ui", "Arial", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      lineHeight: {
        relaxed: "1.7",
      },
    },
  },
  plugins: [],
};

export default config;
