import LayoutFooter from '@/components/Footer.vue';

export default {
  component: LayoutFooter,
  title: 'Components/Footer',
};

export const simple = () => ({
  components: { LayoutFooter },
  data: () => ({
  }),
  template: '<layout-footer></layout-footer>'
});
