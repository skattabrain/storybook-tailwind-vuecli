import Footer from '@/components/Footer.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'w-full',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
});


export default {
  component: Footer,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Footer',
};

export const simple = () => ({
  components: { Footer },
  data: () => ({
  }),
  template: '<footer />'
});
