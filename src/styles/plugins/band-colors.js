module.exports = function ({ addUtilities, theme }) {
  const bandColors = {
    '.prince': {
      backgroundColor: theme('colors.purple.600'),
      color: theme('colors.purple.200')
    },
    '.stryper': {
      backgroundColor: theme('colors.black'),
      color: theme('colors.yellow.500')
    },
    '.type-o-negative': {
      backgroundColor: theme('colors.green.600'),
      color: theme('colors.black')
    },
  }

  addUtilities(bandColors)
}
