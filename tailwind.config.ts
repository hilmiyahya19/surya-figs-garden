import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hijauSFG: "#2F7F34",
        "hijauSFG-light": "#D5E5D6",
        hijauWA: "#25D366",
        abuSFG: "#4B5563",
        abu2SFG: "#94A3B8",
        hitamCerah: "#333333",
      },
    },
  },
  plugins: [],
};

export default config;
