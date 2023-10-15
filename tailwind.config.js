/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'false',
    content: [
      './views/**/*.hbs',
      './public/**/*.{html,js}',
      "./node_modules/flowbite/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          'cmblue': '#14213D',
          'cmyellow': '#fca311',
          'cmgray': '#e5e5e5'
        },
        darkMode: 'false',
      },
      darkMode: 'false',
      fontFamily: {
        'sans': ['Gabarito']
      },
    },
    plugins: [
      require("daisyui"),
      require('flowbite/plugin')
  ],
    
    daisyui: {
      themes: ["light"],
      darkTheme: false,
      }
  }
  
  