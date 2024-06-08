/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
      fontFamily: {
        'body' : ["Ubuntu", "sans-serif"],
        'h2' : ["Titillium Web", "sans-serif"],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
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

