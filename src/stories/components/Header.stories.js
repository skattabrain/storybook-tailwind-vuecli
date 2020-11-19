import LayoutHeader from '@/components/Header.vue';

export default {
  component: LayoutHeader,
  title: 'Components/Header',
};

export const heading = () => ({
  components: { LayoutHeader },
  data: () => ({
    heading: 'Dashboard',
  }),
  template: '<layout-header :heading="heading" />'
});
