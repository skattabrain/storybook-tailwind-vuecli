import { text } from '@storybook/addon-knobs';

const templateDecorator = () => ({
  data: () => ({
    wrapperWidthClasses: 'text-4xl',
  }),
  template: '<div class="p-3"><story /></div>',
});


export default {
  decorators: [
    templateDecorator,
  ],
  title: 'Headings',
};

export const Heading = () => ({
  props: {
    heading: {
      default: text('Heading Text', 'This is a heading')
    },
    subHeading: {
      default: text('Sub Heading Text', 'This is a subheading')
    }
  },
  template: `
<div>
  <h1>{{ heading }} <span>{{ subHeading }}</span></h1>
  <h2>{{ heading }} <span>{{ subHeading }}</span></h2>
  <h3>{{ heading }} <span>{{ subHeading }}</span></h3>
  <p>This is a paragraph and this is <a href="#">a link</a>.</p>
</div>
`
});
