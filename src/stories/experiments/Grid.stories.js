import Experiment from '@/components/experiments/Grid'

export default {
  title: 'Experiments/Grid',
};

export const AppLayout = () => ({
	components: {
		Experiment
	},
  data: () => ({
  }),
  template: '<Experiment />'
});
