module.exports = function ({ addBase, config }) {
  addBase({
    '*:focus, button:focus': {
      outline: `${config('theme.colors.blue.500')} solid 2px`,
    },
    'html': {
      color: config('theme.colors.grey.900'),
      fontSize: config('theme.fontSize.base')[0],
      ...config('theme.fontSize.base')[1],
      fontWeight: config('theme.fontWeight.normal'),
    },
    'code': {
      fontFamily: config('theme.fontFamily.mono'),
      color: config('theme.colors.rose.400'),
    },
    a: {
      color: config('theme.colors.blue.500'),
      textDecoration: 'underline',
      '&:hover': {
        color: config('theme.colors.blue.700'),
      }
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: config('theme.fontWeight.bold')
    },
    h1: {
      fontSize: config('theme.fontSize.4xl')[0],
      ...config('theme.fontSize.4xl')[1],
      fontWeight: config('theme.fontWeight.black'),
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
    }
  })
}
