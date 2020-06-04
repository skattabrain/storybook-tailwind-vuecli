module.exports = function ({ addComponents, theme }) {
  const cards = {
    '.card': {
      display: 'block',
      backgroundColor: theme('colors.white'),
      color: theme('colors.gray.900'),
      borderRadius: '.25rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    '.card-header': {
      padding: theme('spacing.3'),
      fontWeight: 'bold',
      fontSize: theme('fontSize.lg'),
      borderBottom: `1px solid ${theme('colors.gray.400')}`
    },
    '.card-body': {
      padding: theme('spacing.3'),
      fontSize: theme('fontSize.base')
    }
  }

  addComponents(cards)
}
