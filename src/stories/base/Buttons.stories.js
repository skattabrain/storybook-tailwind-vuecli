import BaseButton from '@/components/BaseButton.vue';

export default {
  title: 'Base/Buttons',
  argTypes: {
    label: { control: 'text', name: 'Label' },
    working: { control: 'boolean', name: 'Working' },
  },
  args: {
    label: 'Click Me',
    working: false,
  },
}

export const Variants = (args) => ({
  components: {
    BaseButton,
  },
  props: {
    label: {
      default: args.label
    },
    working: {
      default: args.working
    }
  },
  template: `
<div>
  <base-button class="btn" :working="working">{{ label }}</base-button>
  <base-button class="btn btn--primary" :working="working">{{ label }}</base-button>
</div>
`
})
