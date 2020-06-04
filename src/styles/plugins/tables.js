module.exports = function ({ addBase, theme }) {
  addBase({
    table: {
      display: 'table',
      width: '100%',
      backgroundColor: theme('colors.white')
    },
    tbody: {
      tr: {
        '&:hover': {
          backgroundColor: theme('colors.gray.200'),
          cursor: 'pointer',
        }
      }
    },
    th: {
      textAlign: 'left',
      fontWeight: 'bold',
      padding: '10px',
      borderBottom: `2px solid ${theme('colors.gray.300')}`
    },
    td: {
      textAlign: 'left',
      padding: '10px'
    },
  })
}
