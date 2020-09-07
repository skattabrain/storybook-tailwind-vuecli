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
