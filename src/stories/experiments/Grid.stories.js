import Experiment from '@/components/experiments/Grid'

export default {
  title: 'Experiments/Grid',
};

export const Empty = () => ({
	components: {
		Experiment
	},
  data: () => ({
  }),
  template: '<Experiment />'
});
