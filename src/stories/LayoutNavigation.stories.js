import LayoutNavigation from '@/components/LayoutNavigation.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'w-full',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
});


export default {
  component: LayoutNavigation,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Navigation',
};

export const noLinks = () => ({
  components: { LayoutNavigation },
  data: () => ({
  }),
  template: '<layout-navigation />'
});
