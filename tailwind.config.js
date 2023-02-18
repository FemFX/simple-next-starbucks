/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const constants = {
  red: "#F23C3D",
  green: "#008D64",
  "dark-green": "#006044",
  "light-green": "#E6F2EF",
  black: "#222222",
  "light-gray": "#E8E7E3",
  white: "#ffffff",
  "light-brown": "#A49B8F",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants,
    },
  },
  plugins: [],
};
