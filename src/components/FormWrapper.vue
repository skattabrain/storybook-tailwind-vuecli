<template>
  <form>
    <AlertBox :message="errorMessage"
              @alert-dismissed="clearErrorMessage" />
    <slot />

    <button type="submit"
            class="btn w-full mt-4"
            @click.prevent="submitForm">
      <span>{{ submitLabel }}</span>
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
    submitLabel: {
      default: 'Submit',
      type: String
    },
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
