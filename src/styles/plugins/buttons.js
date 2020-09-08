module.exports = function ({ addComponents, config }) {
  addComponents({
    '.btn': {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: config('theme.colors.gray.900'),
      backgroundColor: config('theme.colors.gray.300'),
      borderColor: config('theme.colors.gray.300'),
      borderWidth: config('theme.borderWidth.default'),
      borderRadius: config('theme.borderRadius.none'),
      padding: config('theme.spacing.3'),
      fontSize: config('theme.fontSize.base')[0],
      lineHeight: config('theme.lineHeight.none'),
    }
  })
}
