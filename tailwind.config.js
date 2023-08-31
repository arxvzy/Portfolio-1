/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#EF2D56",
        primary: "#363537",
        third: "#CBEEF3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
