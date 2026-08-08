import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        panel: "#ffffff",
        line: "#d7dce2",
        mint: "rgb(114 151 196)",
        gold: "#7a6846",
        steel: "#53606d",
      },
      boxShadow: {
        terminal: "0 24px 80px rgba(20, 31, 43, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
