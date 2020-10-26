let purgeEnabled = (process.env.NODE_ENV === 'production' && !process.argv.includes('config/storybook'))

module.exports = {
  purge: {
    enabled: purgeEnabled,
    preserveHtmlElements: true,
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
      boxShadow: {
        lg: '0 10px 6px -8px rgba(0, 0, 0, 0.075), 0 4px 6px -8px rgba(0, 0, 0, 0.05)',
        'top-lg': '0 -10px 6px -8px rgba(0, 0, 0, 0.075), 0 -4px 6px -8px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        xxl: '1440px',
        hd: '1920px',
      },
      fontFamily: {
        sans: [
          '"Open Sans"',
          '"Nunito Sans"',
          '"Source Sans Pro"',
          'Lato',
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
      },
      rotate: {
        '-15': '-15deg',
        '-10': '-10deg',
        '-5': '-5deg',
        '-2.5': '-2.5deg',
        '-1.5': '-1.5deg',
        '-0.5': '-0.5deg',
        '0.5': '0.5deg',
        '1.5': '1.5deg',
        '2.5': '2.5deg',
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
      },
      animation: {
        'spin-slower': 'spin 1.5s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
      }
    }
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    overflow: ({ after }) => after(['responsive']),
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('./src/styles/plugins/base'),
    require('./src/styles/plugins/fonts'),
    require('./src/styles/plugins/buttons'),
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
