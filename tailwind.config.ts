import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark palette tuned for minimalist neon accents
        bg: {
          DEFAULT: "#0b0f14",
          soft: "#0e131a",
          softer: "#10161f"
        },
        ink: {
          DEFAULT: "#e5f0ff",
          dim: "#a5b4c7"
        },
        accent: {
          cyan: "#22d3ee",
          magenta: "#f472b6",
          lime: "#a3e635"
        }
      },
      borderRadius: {
        island: "18px"
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.25)",
        glow2: "0 0 40px rgba(244, 114, 182, 0.25)",
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
        "grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
      },
      backgroundSize: {
        grid: "24px 24px"
      }
    },
  },
  plugins: [],
};
export default config;
