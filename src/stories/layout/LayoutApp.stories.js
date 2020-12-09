import navItems from '@/mocks/navigation';
import LayoutApp from '@/components/LayoutApp'
import Login from '@/components/forms/Login'
import HomeAlt from '@/components/layouts/HomeAlt'

export default {
  component: LayoutApp,
  title: 'Layout/App',
  parameters: {
    layout: 'fullsreen'
  }
};

export const StickyHeaderFooter = () => ({
  components: { LayoutApp },
  data: () => ({
    heading: 'Dashboard',
    navItems
  }),
  template: `
<layout-app :heading="heading" :nav-items="navItems">
  <h1 class="my-3">Lorem Ipsum</h1>
  <p v-for="item in 10" class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper risus eget pharetra sagittis. Duis lectus dui, facilisis at nunc in, facilisis pharetra felis. Sed laoreet turpis vitae lectus tristique facilisis. Etiam tincidunt nunc varius felis dapibus, vel egestas arcu consequat. Praesent congue felis quis purus ornare, non molestie nibh congue. Phasellus eleifend felis sodales, rutrum magna tristique, condimentum leo. Aliquam eros eros, posuere malesuada metus sed, iaculis imperdiet velit. Maecenas euismod arcu vitae risus euismod, ut mollis justo dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget eros luctus, fermentum massa vitae, pellentesque odio.</p>
</layout-app>
`
});

export const MobileGridLayout = () => ({
	components: {
		HomeAlt
	},
  data: () => ({
  }),
  template: '<HomeAlt />'
});

MobileGridLayout.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  },
};

export const LoginForm = () => ({
  components: { Login, LayoutApp },
  data: () => ({
    heading: 'Dashboard',
    navItems
  }),
  template: `
<layout-app :heading="heading" :nav-items="navItems">
  <Login />
</layout-app>
`
});
