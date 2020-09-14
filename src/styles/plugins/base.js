module.exports = function ({ addBase, config }) {
  addBase({
    '*:focus, button:focus': {
      outline: `${config('theme.colors.blue.500')} solid 2px`,
    },
    'html': {
      color: config('theme.colors.grey.900'),
      fontSize: config('theme.fontSize.base')[0],
      fontWeight: config('theme.fontWeight.normal'),
    },
    'code': {
      fontFamily: config('theme.fontFamily.mono')
    }
  })
}
