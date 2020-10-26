<template>
  <span class="brand-logo font-open-sans font-extrabold uppercase"
        :class="[dark ? 'text-gray-800' : 'text-white']">
    We<span class="text-purple-600">Sell</span>Limos<span class="text-purple-600">.com</span></span>
</template>

<script>
export default {
  props: {
    dark: {
      default: false,
      type: Boolean
    },
  },
};
</script>
