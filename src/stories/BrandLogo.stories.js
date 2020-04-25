import BrandLogo from '@/components/BrandLogo.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'w-full text-center text-4xl',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
});


export default {
  component: BrandLogo,
  decorators: [
    templateDecorator,
  ],
  title: 'Brand/Logo',
};

export const light = () => ({
  components: { BrandLogo },
  data: () => ({
  }),
  template: '<brand-logo />'
});

export const dark = () => ({
  components: { BrandLogo },
  data: () => ({
  }),
  template: '<brand-logo :dark="true" />'
});
