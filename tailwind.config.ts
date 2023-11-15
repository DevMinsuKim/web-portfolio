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
        gray: "var(--color-gray)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
