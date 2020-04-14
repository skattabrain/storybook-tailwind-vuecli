import LayoutFooter from '@/components/LayoutFooter.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'w-full',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
});


export default {
  component: LayoutFooter,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Footer',
};

export const simple = () => ({
  components: { LayoutFooter },
  data: () => ({
  }),
  template: '<layout-footer />'
});
