import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        inkora: {
          paper: "#F6F1E8",
          cream: "#FBF8F2",
          mocha: "#49372F",
          espresso: "#2D211C",
          clay: "#94543B",
          sand: "#E8DED0"
        }
      },
      fontFamily: {
        editorial: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        paper: "0 18px 60px rgba(67, 48, 37, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
