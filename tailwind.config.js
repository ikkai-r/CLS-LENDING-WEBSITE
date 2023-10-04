/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './views/**/*.hbs',
      './public/**/*.{html,js}',
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")]
  }
  
  