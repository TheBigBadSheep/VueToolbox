module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'null': '0rem',
      },
      colors: {
        ToDo: {
          Green: '#CEDCBC',
          LightGreen: '#DAF1BC',
          DarkGreen: '#9CB08D'
        }
      },
      boxShadow: {
        'inner-xl': 'inset 0 -18px 12px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
