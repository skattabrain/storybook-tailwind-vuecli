<template>
  <label class="block">
    <div
      :class="[isDisabled ? 'text-gray-600' : 'text-gray-800' ]"
    >{{ label }}</div>

    <div
      v-if="help"
      class="text-gray-600 text-sm"
    >{{ help }}</div>

    <slot />

    <div
      v-if="error"
      class="text-red-500 mt-1 text-sm"
    >{{ error }}</div>

  </label>
</template>

<script>
export default {
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
