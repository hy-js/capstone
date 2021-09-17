const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
        colors: {
      transparent: 'transparent',
      current: 'currentColor',
      highlight: "#fbec74",
      dark: "#2b2a33",
      light: "#d2d2d2",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {

    },
  },
  variants: {

    extend: {},
  },
  plugins: [],
}
