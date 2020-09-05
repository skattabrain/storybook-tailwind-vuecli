import InputWrapper from '@/components/InputWrapper.vue';

export default {
  component: InputWrapper,
  title: 'Base/Input Wrapper',
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
    help: 'Enter your name above or you will be sorry.',
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
  <input-wrapper v-if="showWithOtherControls" class="mb-12" :is-disabled="disabled" label="First Name" help="First name">
    <input :disabled="disabled" class="w-full" type="text" placheolder="John">
  </input-wrapper>

  <input-wrapper :is-disabled="disabled" :error="error" :label="label" :help="help">
    <input :disabled="disabled" class="w-full" type="text" placheolder="Doe">
  </input-wrapper>

  <input-wrapper v-if="showWithOtherControls" class="mt-12" label="Email">
    <input :disabled="disabled" class="w-full" type="text" placheolder="Some other value">
  </input-wrapper>
</div>
`
});
