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
    colors,
    extend: {
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
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
      },
    }
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    padding: ({ after }) => after(['hover']),
    overflow: ({ after }) => after(['responsive']),
    zIndex: ({ after }) => after(['hover']),
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./src/styles/plugins/base'),
    require('./src/styles/plugins/fonts'),
    require('./src/styles/plugins/buttons'),
  ],
}
