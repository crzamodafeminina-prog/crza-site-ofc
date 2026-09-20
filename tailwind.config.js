/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        areia: "#E7DAC7",
        areiaesc: "#D6C4AB",
        offwhite: "#F8F5F0",
        terra: "#AF4E2F",
        terraesc: "#8E3C22",
        cacau: "#3B2A21",
        oliva: "#7A7A5E",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Karla", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
