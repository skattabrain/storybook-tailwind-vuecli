module.exports = function ({ addBase, theme }) {
  addBase({
    'h1': {
      fontSize: theme('fontSize.2xl'),
      span: {
        fontSize: theme('fontSize.xl'),
      }
    },
    'h2': {
      fontSize: theme('fontSize.xl'),
      span: {
        fontSize: theme('fontSize.lg'),
      }
    },
    'h3': {
      fontSize: theme('fontSize.lg'),
      span: {
        fontSize: theme('fontSize.base'),
      }
    },
  })
}
