import { text } from '@storybook/addon-knobs';

const templateDecorator = () => ({
	template: '<div class="max-w-sm"><story /></div>',
  });

export default {
	decorators: [templateDecorator],
	title: 'Controls',
};

export const textInput = () => ({
	props: {
		label: {
			default: text('Label', 'First Name')
		},
		helpText: {
			default: text('Help Text', 'Look both ways before crossing the street')
		},
		value: {
			default: text('Value', 'Gregory')
		},
		placeholder: {
			default: text('Placeholder', 'Type your name here')
		},
	},
  template: `
<div>
	<label>
		<div class="text-sm text-gray-700">{{ label }}</div>
		<input :value="value" :placeholder="placeholder" class="block bg-white w-full text-black border">
	</label>
	<div class="text-sm text-gray-600">{{ helpText }}</div>
</div>
`
});
