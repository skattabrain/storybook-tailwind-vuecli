import InputWrapper from '@/components/InputWrapper';
import FormWrapper from '@/components/FormWrapper';

export default {
  component: FormWrapper,
  title: 'Components/Form Wrapper'
};

export const Login = () => ({
  components: { FormWrapper, InputWrapper },
  data() {
    return {
      username: null,
      password: null,
      errorMessage: null
    }
  },
  methods: {
    clearError() {
      this.errorMessage = null
    },
    onSubmit() {
      console.log(this.username, this.password)
      this.errorMessage = 'Did not work so well!'
    }
  },
  template: `
<FormWrapper class="p-4" @submit-form="onSubmit" :error-message="errorMessage" @clear-error="clearError">
  <InputWrapper label="Username">
    <input
      v-model="username"
      type="text"
      class="form-input w-full"
    >
  </InputWrapper>
  <InputWrapper label="Password">
    <input
      v-model="password"
      type="password"
      class="form-input w-full"
    >
  </InputWrapper>
</FormWrapper>
`
});
