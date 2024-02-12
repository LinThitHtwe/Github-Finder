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
        primary: "#AB88E1",
        secondary: "#87224D",
        accent: "#CF3F3F",
        text: "#E5DAF6",
      },
    },
  },
  plugins: [],
};
export default config;
