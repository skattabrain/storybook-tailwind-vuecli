import './storybook.css';
import '../../src/styles.css';
import { addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { colorMapFlat } from '../../src/utils/colors.js';

addParameters({
  backgrounds: {
    default: 'bg-gray-400',
    values: colorMapFlat('bg-gray-400')
  },
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
});
