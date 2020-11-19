<template>
  <span class="brand-logo font-open-sans font-extrabold uppercase"
        :class="[dark ? 'text-gray-800' : 'text-white']">
    My<span class="text-fuchsia-700">Company</span>.com</span>
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
