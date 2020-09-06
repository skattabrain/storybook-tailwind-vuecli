module.exports = function ({ addComponents, config }) {
  addComponents({
    '.btn': {
      textAlign: 'center',
      color: config('theme.colors.gray.900'),
      backgroundColor: config('theme.colors.gray.300'),
      borderColor: config('theme.colors.gray.300'),
      borderWidth: config('theme.borderWidth.default'),
      // borderRadius: config('theme.borderRadius.none'),
      paddingTop: config('theme.spacing.2'),
      paddingRight: config('theme.spacing.3'),
      paddingBottom: config('theme.spacing.2'),
      paddingLeft: config('theme.spacing.3'),
      // fontSize: config('theme.fontSize.base'),
      // lineHeight: config('theme.lineHeight.normal'),
    }
  })
}
