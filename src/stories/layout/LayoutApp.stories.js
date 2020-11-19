import navItems from '@/mocks/navigation';
import LayoutApp from '@/components/LayoutApp'
import Login from '@/components/forms/Login'
import HomeAlt from '@/components/experiments/HomeAlt'

export default {
  component: LayoutApp,
  title: 'Layout/App',
};

export const Classic = () => ({
  components: { LayoutApp },
  data: () => ({
    heading: 'Dashboard',
    navItems
  }),
  template: `
<layout-app :heading="heading" :nav-items="navItems">
  <h1>YOLO</h1>
</layout-app>
`
});

export const GridLayout = () => ({
	components: {
		HomeAlt
	},
  data: () => ({
  }),
  template: '<HomeAlt />'
});

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
