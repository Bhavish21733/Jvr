import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2942",      // Deep authoritative navy
          blue: "#0A78A8",      // Primary water blue
          aqua: "#17B7C7",      // Fresh aqua/cyan accent
          green: "#49B879",     // Fresh hygiene green accent
          bg: "#F4F8FA",        // Soft clean background
          text: "#102432",      // Dark readable text
          slate: "#1E3A52",     // Mid-tone slate
          light: "#EAF3F7",     // Soft tint
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(11, 41, 66, 0.04)',
        'card': '0 4px 24px -2px rgba(11, 41, 66, 0.08)',
        'card-hover': '0 16px 36px -4px rgba(11, 41, 66, 0.14)',
        'glow': '0 0 30px rgba(23, 183, 199, 0.25)',
      }
    },
  },
  plugins: [],
};

export default config;
