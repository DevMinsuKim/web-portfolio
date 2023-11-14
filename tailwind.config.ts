import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        background1: "var(--color-background1)",
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
