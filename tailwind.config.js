/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/client/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "poppins-semibold": ["Poppins-semibold", "sans-serif"],
      },
      height: {
        fill: "-webkit-fill-available",
      },
      screens: {
        "w-max-600": { raw: "(max-width: 600px)" },
        "w-max-350": { raw: "(max-width: 350px)" },
        "h-max-400": { raw: "(max-height: 400px)" },
        "w-min-600": { raw: "(min-width: 600px)" },
      },
      colors: {
        "mblue-100": "#080A1A",
        "mblue-200": "#0D0F1F",
        "cblue-100": "#4AD8FF",
        "cblue-200": "#2B738F",
      },
    },
  },
  plugins: [tailwindScrollbar],
  darkMode: "class",
};
