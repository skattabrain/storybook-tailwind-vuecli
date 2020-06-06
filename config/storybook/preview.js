import './storybook.css'
import '../../src/styles.css'
import { addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { colorMapFlat } from '../../src/utils/colors.js'
require('typeface-open-sans')
require('typeface-bangers')

addParameters({
  backgrounds: {
    default: 'bg-gray-300',
    values: colorMapFlat('bg-gray-200'),
  },
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
})
