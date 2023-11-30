import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        background1: "var(--color-background1)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        sky: "var(--color-sky)",
        indigo: "var(--color-indigo)",
      },
      animation: {
        textGradient: "textGradient 2.5s ease infinite",
      },
      keyframes: {
        textGradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
