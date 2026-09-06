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
          "navy-700": "#0d3a5e", // lighter navy for gradients
          "navy-900": "#061b2d", // darker navy for depth
          amber: "#F59E0B", // accent / CTA ONLY (Call, WhatsApp, primary action)
          "amber-light": "#FBBF24", // amber gradient highlight
          ink: "#1E293B", // body text (near-black)
          mist: "#F8FAFC", // subtle section alternation
        },
      },
      fontFamily: {
        // Inter is loaded via next/font/google (no external CDN calls).
        sans: ["var(--font-inter)", "system-ui", "Arial", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.7",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(10, 46, 74, 0.18)",
        "card-hover": "0 22px 45px -18px rgba(10, 46, 74, 0.32)",
        glow: "0 0 40px -8px rgba(245, 158, 11, 0.45)",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
        "dot-grid-navy":
          "radial-gradient(rgba(10,46,74,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
