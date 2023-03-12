/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        text: '#fff',

        primary: '#3300FF',
        secondary: '#4EE8FF',
      }
    },
  },
  plugins: [],
}
