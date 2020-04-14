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

export const darkBackground = () => ({
  components: { BrandLogo },
  data: () => ({
  }),
  template: '<div class="bg-gray-800"><brand-logo /></div>'
});

export const lightBackground = () => ({
  components: { BrandLogo },
  data: () => ({
  }),
  template: '<div class="bg-white"><brand-logo :dark="false" /></div>'
});
