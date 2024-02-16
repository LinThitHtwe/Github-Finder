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
        background: "#0D071A",
        "soft-background": "#130d22",
        primary: "#AB88E1",
        secondary: "#87224D",
        accent: "#CF3F3F",
        text: "#E5DAF6",
      },
      dropShadow: {
        "primary-sm": "0 10px 10px rgba(172, 137, 225, 0.25)",
        "primary-md": "0 20px 20px rgba(172, 137, 225, 0.25)",
        "primary-lg": "15px 20px 30px rgba(172, 137, 225, 0.25)",
        "primary-xl": "0 35px 35px rgba(172, 137, 225, 0.25)",
        "primary-github": "0 5px 24px rgba(172, 137, 225, 0.25)",
        "primary-search": "12px 6px 35px rgba(172, 137, 225, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
