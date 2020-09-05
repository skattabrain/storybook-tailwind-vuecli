import BrandLogo from '@/components/Logo.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'text-4xl',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
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
