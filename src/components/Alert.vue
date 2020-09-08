<template>
  <transition name="fade">
    <div
      v-if="message"
      class="p-3 flex mb-4 items-start"
      :class="alertClass">
      <span v-if="variant === 'error'" class="text-base mr-2 p-1">
        <ErrorIcon />
      </span>
      <span class="mr-2">{{ message }}</span>
      <button class="ml-auto underline text-2xl"
              @click.prevent="dismiss">
        <CloseIcon />
      </button>
    </div>
  </transition>
</template>

<script>
import ErrorIcon from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?inline';
import CloseIcon from 'bootstrap-icons/icons/x.svg?inline';

export default {
  components: {
    CloseIcon,
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
