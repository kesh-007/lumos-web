/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        '2md': '770px',
        '2sm': '840px',
        '2lg': '1480px',
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
}