module.exports = function ({ addComponents, theme }) {

  // the big question - Is this better using JS (will need to import color palette from a JS file)
  // or is it better to create a component that's using the utilities? theme('colors.primary.hover') or theme('colors.primary.700')

  const buttons = {
    '.btn': {
      display: 'inline-block', // easy enough, but is it worthwhile to use a plain CSS file and instead use `@apply display-inline text-center align-middle select-none etc...`
      textAlign: 'center',
      verticalAlign: 'middle',
      userSelect: 'none',
      backgroundColor: 'transparent',
      border: '1px solid transparent', // this is a good base, but the pixel size comes from where?
      padding: '.375rem .75rem', // you can have magic... you can have anything, that you desire
      fontSize: '1rem',
      lineHeight: '1.5',
      borderRadius: '.25rem' // need to get from a var
    },
    '.btn-secondary': {
      backgroundColor: theme('colors.secondary.600'),
      color: theme('colors.secondary.100'),
      '&:hover': {
        backgroundColor: theme('colors.secondary.700'),
        color: theme('colors.white'),
      }
    },
    '.btn-primary': {
      backgroundColor: theme('colors.primary.600'),
      color: theme('colors.primary.100'),
      '&:hover': {
        backgroundColor: theme('colors.primary.700'),
        color: theme('colors.white'),
      }
    },
  }

  addComponents(buttons)
}
