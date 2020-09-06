import BrandLogo from '@/components/Logo.vue';

const templateDecorator = () => ({
  template: '<div class="text-3xl"><story /></div>',
});


export default {
  component: BrandLogo,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Logo',
  argTypes: {
    dark: { control: 'boolean', name: 'Is Dark?' },
  },
  args: {
    dark: false
  }
};

export const logo = (args) => ({
  components: { BrandLogo },
  props: {
    dark: {
      default: args.dark
    }
  },
  template: '<brand-logo :dark="dark" />'
});
