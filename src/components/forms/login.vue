<template>
  <form>
    <AlertBox
      :message="errorMessage"
      @alert-dismissed="clearErrorMessage"
    />
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

    <button
      type="submit"
      class="btn w-full"
      @click.prevent="setErrorMessage"
    >
      Submit
    </button>
  </form>
</template>

<script>
import AlertBox from '@/components/Alert.vue';
import InputWrapper from '@/components/InputWrapper.vue';

export default {
  components: {
    AlertBox,
    InputWrapper,
  },
  data() {
    return {
      username: null,
      password: null,
      errorMessage: null
    }
  },
  methods: {
    clearErrorMessage() {
      this.errorMessage = null
    },
    setErrorMessage() {
      this.errorMessage = `You've done gone busted it up!`
    }
  }
};
</script>
