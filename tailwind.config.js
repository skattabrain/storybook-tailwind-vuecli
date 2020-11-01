const colors = require('./colors')
const purgeEnabled = (process.argv.includes('-purge') || process.env.NODE_ENV === 'production')
const isStorybook = process.argv.includes('config/storybook');

const purgeContent = [
  './src/**/*.vue',
  './src/**/*.html',
]

if (isStorybook) {
  purgeContent.push('./src/stories/**/*')
  purgeContent.push('./config/storybook/preview.js') // one off to allow keeping of Storybook Addon Toolbar Options
}

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: purgeContent,
    preserveHtmlElements: true,
    options: {
      safelist: [
        /^bg-/, // needed for storybook
      ],
    },
  },
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
    },
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
    padding: ({ after }) => after(['hover']),
    overflow: ({ after }) => after(['responsive']),
    zIndex: ({ after }) => after(['hover']),
  },
  plugins: [
    // require('@tailwindcss/custom-forms'),
    require('./src/styles/plugins/base'),
    require('./src/styles/plugins/fonts'),
    require('./src/styles/plugins/buttons'),
  ],
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
    extendedFontSizeScale: true,
  },
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true
  },
}
