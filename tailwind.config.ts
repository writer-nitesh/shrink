import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#D32F2F"
      },
      colors: {
        "postive": "#32a852",
        "negative": "#D32F2F"
      }

    },
  },
  plugins: [],
};
export default config;
