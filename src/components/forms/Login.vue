<template>
  <FormWrapper class="p-4"
               :error-message="errorMessage"
               @submit-form="onSubmit"
               @clear-error="clearError">
    <InputWrapper label="Username">
      <input
        v-model="username"
        type="text"
        class="form-input w-full">
    </InputWrapper>

    <InputWrapper label="Password">
      <input
        v-model="password"
        type="password"
        class="form-input w-full">
    </InputWrapper>

    <div class="flex justify-between py-4">
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox">
        <span class="ml-2">Remember Me</span>
      </label>
      <a href="#">Forgot your password?</a>
    </div>
  </FormWrapper>
</template>

<script>
import InputWrapper from '@/components/InputWrapper'
import FormWrapper from '@/components/FormWrapper'

export default {
  components: {
    InputWrapper,
    FormWrapper
  },
  data() {
    return {
      username: null,
      password: null,
      errorMessage: null
    }
  }
}
</script>
