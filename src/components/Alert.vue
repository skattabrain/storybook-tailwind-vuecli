<template>
  <transition name="fade">
    <div
      v-if="message"
      class="p-3 flex mb-4"
      :class="alertClass">
      <ErrorIcon
        v-if="variant === 'error'"
        class="self-center text-base mr-2" />
      <span>{{ message }}
        <button
          class="ml-2 underline"
          @click.prevent="dismiss">Dismiss</button>
      </span>
    </div>
  </transition>
</template>

<script>
import ErrorIcon from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?inline';

export default {
  components: {
    ErrorIcon,
  },
  props: {
    variant: {
      default: 'error',
      type: String
    },
    message: {
      default: null,
      type: String,
    },
  },
  data() {
    return {
      showAlert: true
    }
  },
  computed: {
    alertClass() {
      return this.variant === 'error' ? 'alert-error' : ''
    },
  },
  methods: {
    dismiss() {
      this.$emit('alert-dismissed')
    }
  }
};
</script>

<style lang="css" scoped>
  .alert-error {
    @apply bg-red-500 text-red-50;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
