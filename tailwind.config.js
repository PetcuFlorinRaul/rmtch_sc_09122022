/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kanit": "'Kanit', sans-serif",
        "montserrat": "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [
    require('tailwindcss-all'),
  ],
}
