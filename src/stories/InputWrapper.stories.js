import InputWrapper from '@/components/InputWrapper.vue';

export default {
  component: InputWrapper,
  title: 'Components/Input Wrapper',
  argTypes: {
    disabled: { control: 'boolean', name: 'Is disabled?' },
    showWithOtherControls: { control: 'boolean', name: 'Shot with other controls' },
    help: { control: 'text', name: 'Help Text' },
    label: { control: 'text', name: 'Label' },
    error: { control: 'text', name: 'Error text' }
  },
  args: {
    disabled: false,
    showWithOtherControls: false,
    help: 'Enter your last name here. If this is a problem, sorry but we can\'t help you.',
    label: 'Last Name',
    error: null,
  }
};

export const Text = (args) => ({
  components: { InputWrapper },
  props: {
    disabled: {
      default: args.disabled
    },
    showWithOtherControls: {
      default: args.showWithOtherControls
    },
    help: {
      default: args.help
    },
    label: {
      default: args.label
    },
    error: {
      default: args.error
    }
  },
  template: `
<div class="p-6">
  <input-wrapper v-if="showWithOtherControls" class="mb-3" :is-disabled="disabled" label="First Name" help="If you do not know your first name, please seek professional help.">
    <input :disabled="disabled" class="w-full" type="text" placeholder="John">
  </input-wrapper>

  <input-wrapper class="mb-3" :is-disabled="disabled" :error="error" :label="label" :help="help">
    <input :disabled="disabled" class="w-full" type="text" placeholder="Doe">
  </input-wrapper>

  <input-wrapper v-if="showWithOtherControls" class="mb-3" label="Email" help="So we can SPAM the shit out of you.">
    <input :disabled="disabled" class="w-full" type="text" placeholder="johndoe@example.com">
  </input-wrapper>
</div>
`
});
