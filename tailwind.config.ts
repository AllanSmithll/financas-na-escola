import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

export default config;