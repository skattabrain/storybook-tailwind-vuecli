import InputWrapper from '@/components/InputWrapper.vue';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  component: InputWrapper,
  title: 'Input Wrapper',
};

export const Text = () => ({
  components: { InputWrapper },
  props: {
    disabled: {
      default: boolean('Is disabled?', false)
    },
    showWithFriends: {
      default: boolean('Show with friends?', false)
    },
    help: {
      default: text('help', 'Enter your name above or you will be sorry.'),
    },
    label: {
      default: text('label', 'Last Name'),
    },
    error: {
      default: text('error', ''),
    }
  },
  template: `
<div class="w-screen md:w-screen-75 px-6 md:px-0">
  <input-wrapper v-if="showWithFriends" class="mb-12" :is-disabled="disabled" label="First Name" help="First name">
    <input :disabled="disabled" class="form-input w-full" type="text" placheolder="John">
  </input-wrapper>

  <input-wrapper :is-disabled="disabled" :error="error" :label="label" :help="help">
    <input :disabled="disabled" class="form-input w-full" type="text" placheolder="Doe">
  </input-wrapper>

  <input-wrapper v-if="showWithFriends" class="mt-12" label="Email">
    <input :disabled="disabled" class="form-input w-full" type="text" placheolder="Some other value">
  </input-wrapper>
</div>
`
});
