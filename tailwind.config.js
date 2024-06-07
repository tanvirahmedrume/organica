/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
         "color-primary" : "#98AB3F",
      }
    },
  },
  plugins: [require('daisyui'),],
}

