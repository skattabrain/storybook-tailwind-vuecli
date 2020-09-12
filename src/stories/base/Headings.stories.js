const templateDecorator = () => ({
  data: () => ({
    wrapperWidthClasses: 'text-4xl',
  }),
  template: '<div class="p-3"><story /></div>',
});


export default {
  layout: 'centered',
  decorators: [
    templateDecorator,
  ],
  title: 'Base/Headings',
  argTypes: {
    heading: { control: 'text', name: 'Heading' },
  },
  args: {
    heading: 'This is a heading',
  }
};

export const Headings = (args) => ({
  props: {
    heading: {
      default: args.heading
    },
  },
  template: `
<div>
  <h1>{{ heading }} &mdash; H1</h1>
  <h2>{{ heading }} &mdash; H2</h2>
  <h3>{{ heading }} &mdash; H3</h3>
  <h4>{{ heading }} &mdash; H4</h4>
  <h5>{{ heading }} &mdash; H5</h5>
  <h6>{{ heading }} &mdash; H6</h6>
  <p>This is a paragraph and this is <a href="#">a link</a>.</p>
</div>
`
});
