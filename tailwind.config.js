let purgeEnabled = (process.env.NODE_ENV === 'production' && !process.argv.includes('config/storybook'))

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: [
      './src/**/*.vue',
    ]
  },
  theme: {
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.none')
        }
      },
    }),
    extend: {
      fontFamily: {
        sans: [
          '"Cooper Hewitt"', // Experimenting with this
          '"Open Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('./src/styles/plugins/typography'),
  ],
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
