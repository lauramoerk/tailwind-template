/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pri: "#242325",
      sec: "#47454A",
      ter: "#ADACAF",
      acc: "#F07A05",
      blck: "#000",
      wht: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        aboreto: "'Aboreto', cursive",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
