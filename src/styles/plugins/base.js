module.exports = function ({ addBase, config, theme }) {
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
      fontSize: config('theme.fontSize.base')[0],
      ...config('theme.fontSize.base')[1],
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
      fontSize: config('theme.fontSize.4xl')[0],
      ...config('theme.fontSize.4xl')[1],
      fontWeight: theme('fontWeight.black'),
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: config('theme.fontSize.3xl')[0],
      ...config('theme.fontSize.3xl')[1],
    },
    h3: {
      fontSize: config('theme.fontSize.2xl')[0],
      ...config('theme.fontSize.2xl')[1],
    },
    h4: {
      fontSize: config('theme.fontSize.xl')[0],
      ...config('theme.fontSize.xl')[1],
    },
    h5: {
      fontSize: config('theme.fontSize.lg')[0],
      ...config('theme.fontSize.lg')[1],
    },
    'input:disabled': {
      backgroundColor: theme('colors.gray.300'),
      borderColor: theme('colors.gray.400'),
      color: theme('colors.gray.500'),
    }
  })
}
