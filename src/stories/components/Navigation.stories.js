import navItems from '@/mocks/navigation';
import LayoutNavigation from '@/components/Navigation.vue';

export default {
  component: LayoutNavigation,
  title: 'Components/Navigation',
};

export const noLinks = () => ({
  components: { LayoutNavigation },
  data: () => ({
    navItems
  }),
  template: '<layout-navigation :items="navItems" />'
});
