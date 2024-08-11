import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        "base-border": "oklch(var(--base-border) / <alpha-value>)",
        "base-shadow": "oklch(var(--base-shadow) / <alpha-value>)",
        "base-400": "oklch(var(--base-400) / <alpha-value>)",
        "base-500": "oklch(var(--base-500) / <alpha-value>)",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#4f46e5",
          "base-100": "#ffffff",
          "--base-400": "100% 0% 89.876",
          "--base-500": "96% 1% 286.32",
          "--base-border": "92.3% 0.75% 48.717",
          "--base-shadow": "86.9% 1% 56.366",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#4f46e5",
          "base-100": "#0F0F0F",
          "base-300": "#1d1f22",
          "base-content": "#dfe2ea",
          "--base-400": "0% 0% 0",
          "--base-500": "0% 0% 0",
          "--base-border": "21.6% 1.5% 56.043",
          "--base-shadow": "13% 6.75% 261.692",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

  darkMode: ["class", '[data-theme="dark"]'],
};
export default config;
