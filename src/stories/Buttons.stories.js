import { text, select } from '@storybook/addon-knobs';

const VARIATIONS = {
  none: '',
  'btn-secondary': 'btn-secondary',
  'btn-primary': 'btn-primary'
};

const APPLY_VARIATIONS = {
  none: '',
  'btn-alt-secondary': 'btn-alt-secondary',
  'btn-alt-primary': 'btn-alt-primary',
};

const templateDecorator = () => ({
  template: '<div class="p-3"><story /></div>',
});


export default {
  decorators: [
    templateDecorator,
  ],
  title: 'Buttons',
};

export const UsingJsBtnClass = () => ({
  props: {
    text: {
      default: text('Button Text', 'Click me you fool!')
    },
    variation: {
      default: select('Variaton', VARIATIONS, 'btn-primary')
    }
  },
  template: `<button type="button" class="btn" :class="[variation]">{{ text }}</button>`
});

export const UsingApply = () => ({
  props: {
    text: {
      default: text('Button Text', 'Click me you fool!')
    },
    variation: {
      default: select('Variaton', APPLY_VARIATIONS, 'btn-alt-primary')
    }
  },
  template: `<button type="button" class="btn-alt" :class="[variation]">{{ text }}</button>`
});
