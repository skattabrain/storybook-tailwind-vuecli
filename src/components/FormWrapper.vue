<template>
  <form>
    <AlertBox
      :message="errorMessage"
      @alert-dismissed="clearErrorMessage"
    />
    <slot />

    <button
      type="submit"
      class="btn w-full mt-4"
      @click.prevent="submitForm"
    >
      Submit
    </button>
  </form>
</template>

<script>
import AlertBox from '@/components/Alert.vue';

export default {
  components: {
    AlertBox,
  },
  props: {
    errorMessage: {
      default: null,
      type: String
    }
  },
  methods: {
    clearErrorMessage() {
      this.$emit('clear-error')
    },
    submitForm() {
      this.$emit('submit-form')
    },
  }
};
</script>
