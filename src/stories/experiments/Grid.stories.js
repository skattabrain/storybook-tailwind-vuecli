import Experiment from '@/components/experiments/Grid'
import Home from '@/components/experiments/Home'
import HomeAlt from '@/components/experiments/HomeAlt'
import HomeAlt2 from '@/components/experiments/HomeAlt2'

export default {
  title: 'Experiments/Grid',
};

export const HomeLayout = () => ({
	components: {
		Home
	},
  data: () => ({
  }),
  template: '<Home />'
});

export const HomeAltLayout = () => ({
	components: {
		HomeAlt
	},
  data: () => ({
  }),
  template: '<HomeAlt />'
});

export const HomeAlt2Layout = () => ({
	components: {
		HomeAlt2
	},
  data: () => ({
  }),
  template: '<HomeAlt2 />'
});

export const AppLayout = () => ({
	components: {
		Experiment
	},
  data: () => ({
  }),
  template: '<Experiment />'
});
