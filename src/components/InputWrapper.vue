<template>
  <label class="block">
    <span class="block mb-1" :class="[isDisabled ? 'text-gray-600' : 'text-gray-800' ]">{{ label }}</span>
    <slot></slot>
    <div v-if="error" class="text-red-500 mt-1 text-sm">{{ error }}</div>
    <div v-if="help" class="text-gray-600 mt-1 text-sm">{{ help }}</div>
  </label>
</template>

<script>
export default {
  name: 'InputWrapper',
  props: {
    isDisabled: {
      default: false,
      type: Boolean
    },
    label: {
      required: true,
      type: String,
    },
    help: {
      default: null,
      type: String,
    },
    error: {
      default: null,
      type: String,
    },
  },
};
</script>
