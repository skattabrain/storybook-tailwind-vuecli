import BrandLogo from '@/components/Logo.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';
import { boolean } from '@storybook/addon-knobs';

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
};

export const logo = () => ({
  components: { BrandLogo },
  props: {
    isDark: {
      default: boolean('Dark', false)
    }
  },
  template: '<brand-logo :dark="isDark" />'
});
