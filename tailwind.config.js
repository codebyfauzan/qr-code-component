/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "slate-900": "#1F314F",
        "slate-500": "#68778D",
        "slate-300": "#D5E1EF",
      },
    },
    fontFamily: {
      Outfit: ["Outfit, sans-serif"],
    },
  },
  plugins: [],
};
