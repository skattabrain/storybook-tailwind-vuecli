module.exports = function ({ addBase, theme }) {
  addBase({
    // we want a global default focus state styling
    '*:focus, button:focus': {
      outline: `${theme('colors.blue.500')} solid 2px`,
    },
    // but only when a user is interacting with a keyboard
    '*:focus:not(:focus-visible), button:focus:not(:focus-visible)': {
      outline: 'none'
    },
    'html': {
      color: theme('colors.grey.900'),
      fontSize: theme('fontSize.base')[0],
      ...theme('fontSize.base')[1],
      fontWeight: theme('fontWeight.normal'),
    },
    'code': {
      fontFamily: theme('fontFamily.mono'),
      color: theme('colors.rose.400'),
    },
    a: {
      color: theme('colors.blue.500'),
      textDecoration: 'underline',
      '&:hover': {
        color: theme('colors.blue.700'),
      }
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: theme('fontWeight.bold')
    },
    h1: {
      fontSize: theme('fontSize.4xl')[0],
      ...theme('fontSize.4xl')[1],
      fontWeight: theme('fontWeight.black'),
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: theme('fontSize.3xl')[0],
      ...theme('fontSize.3xl')[1],
    },
    h3: {
      fontSize: theme('fontSize.2xl')[0],
      ...theme('fontSize.2xl')[1],
    },
    h4: {
      fontSize: theme('fontSize.xl')[0],
      ...theme('fontSize.xl')[1],
    },
    h5: {
      fontSize: theme('fontSize.lg')[0],
      ...theme('fontSize.lg')[1],
    }
  })
}
