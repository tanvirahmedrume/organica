/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    extend: {
      colors: {
         "color-primary" : "#98AB3F",
      }
    },
  },
  plugins: [require('daisyui'),],
}

