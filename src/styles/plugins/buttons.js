module.exports = function ({ addComponents, theme }) {
  addComponents({
    '.btn': {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme('colors.gray.900'),
      backgroundColor: theme('colors.gray.300'),
      borderColor: theme('colors.gray.300'),
      borderWidth: theme('borderWidth.default'),
      borderRadius: theme('borderRadius.none'),
      padding: theme('spacing.3'),
      fontSize: theme('fontSize.base')[0],
      lineHeight: theme('lineHeight.none'),

      '&.btn--primary': {
        backgroundColor: theme('colors.blue.600'),
        borderColor: theme('colors.blue.600'),
        color: theme('colors.blue.50')
      }
    }
  })
}
