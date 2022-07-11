/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto, sans-serif',]
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1100px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      },
      colors: {
        background: '#131418',
        text: '#84878a',
        input: '#222222',
        secondary: '#02c29b'
      }
    },
  },
  plugins: [],
}
