import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
      },
      boxShadow: {
        shadow: "4px 12px 30px 6px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
