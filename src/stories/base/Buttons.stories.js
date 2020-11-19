export default {
  title: 'Base/Buttons',
  argTypes: {
    label: { control: 'text', name: 'Label' },
  },
  args: {
    label: 'Click Me',
  },
}

export const Variants = (args) => ({
  props: {
    label: {
      default: args.label
    },
  },
  template: `
<div>
  <button class="btn">{{ label }}</button>
  <button class="btn btn--primary">{{ label }}</button>
</div>
`
})
