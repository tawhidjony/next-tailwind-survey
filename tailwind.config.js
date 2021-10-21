const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '920px',
      'xl': '1080px',
      // '2xl': '1536px',

      // '2xl': {'max': '1535px'},
      // 'xl': {'max': '1279px'},
      // 'lg': {'max': '1023px'},
      // 'md': {'max': '767px'},
      // 'sm': {'max': '639px'},
     
    
  },
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
