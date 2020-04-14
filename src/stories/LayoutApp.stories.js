import LayoutApp from '@/components/LayoutApp.vue';

export default {
  component: LayoutApp,
  title: 'Layout',
};

export const app = () => ({
  components: { LayoutApp },
  data: () => ({
    heading: 'Dashboard',
    navItems: [
      {
        label: 'Listings',
        url: '#',
        active: true
      },
      {
        label: 'Inquires',
        url: '#',
        active: false
      },
      {
        label: 'Invoices',
        url: '#',
        active: false
      },
    ]
  }),
  template: '<layout-app :heading="heading" :nav-items="navItems" />'
});
