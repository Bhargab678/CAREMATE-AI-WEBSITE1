import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10B981",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          500: "#3B82F6",
          600: "#2563eb",
        },
        accent: {
          DEFAULT: "#22C55E",
          500: "#22C55E",
        },
        ink: "#111827",
        muted: "#6B7280",
        surface: "#F8FAFC",
        // Dark cinematic palette
        void: "#050505",
        abyss: "#08080c",
        deep: "#0b1020",
        panel: "#101018",
        neon: {
          purple: "#a855f7",
          cyan: "#22d3ee",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(17, 24, 39, 0.08)",
        card: "0 12px 40px -12px rgba(17, 24, 39, 0.12)",
        glow: "0 20px 60px -20px rgba(16, 185, 129, 0.45)",
        "glow-blue": "0 20px 60px -20px rgba(59, 130, 246, 0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-24px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(-6%, -3%, 0) scale(1)", opacity: "0.55" },
          "50%": { transform: "translate3d(6%, 4%, 0) scale(1.15)", opacity: "0.85" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,211,238,0.45)" },
          "50%": { boxShadow: "0 0 32px 8px rgba(34,211,238,0)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        marquee: "marquee 40s linear infinite",
        aurora: "aurora 16s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.6s ease-in-out infinite",
        "text-shimmer": "text-shimmer 6s linear infinite",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
