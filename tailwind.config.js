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
