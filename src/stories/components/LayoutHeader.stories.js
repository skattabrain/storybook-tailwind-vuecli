import LayoutHeader from '@/components/LayoutHeader.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'w-full',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
});


export default {
  component: LayoutHeader,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Header',
};

export const heading = () => ({
  components: { LayoutHeader },
  data: () => ({
    heading: 'Dashboard',
  }),
  template: '<layout-header :heading="heading" />'
});
