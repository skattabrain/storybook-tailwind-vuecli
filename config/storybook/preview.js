import '../../src/styles.css';
import { addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
});
