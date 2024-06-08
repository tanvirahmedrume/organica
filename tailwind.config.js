/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
      fontFamily: {
        'body' : ["Ubuntu", "sans-serif"],
        'h2' : ["Titillium Web", "sans-serif"],

      }
    },
    extend: {
      colors: {
         "color-primary" : "#98AB3F",
      }
    },
  },
  plugins: [require('daisyui'),],
}

