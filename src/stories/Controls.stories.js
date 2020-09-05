const templateDecorator = () => ({
	template: '<div class="max-w-sm"><story /></div>',
  });

export default {
	decorators: [templateDecorator],
	title: 'Base/Controls',
	argTypes: {
    label: { control: 'text', name: 'Label' },
    helpText: { control: 'text', name: 'Help Text' },
    value: { control: 'text', name: 'Value' },
    placeholder: { control: 'text', 'Placeholder' },
	},
	args: {
		label: 'First Name',
		helpText: 'Look both ways before crossing the street',
		value: 'Gregory',
		placeholder: 'Type your name here',
	}
};

export const textInput = (args) => ({
	props: {
		label: {
			default: args.label,
		},
		helpText: {
			default: args.helpText,
		},
		value: {
			default: args.value,
		},
		placeholder: {
			default: args.placeholder
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
