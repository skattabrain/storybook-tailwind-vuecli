<template>
  <span class="brand-logo" :class="[dark ? 'text-dark' : 'text-white']">
    SOME<span class="text-purple-500">BRAND</span>HERE<span class="text-purple-500">.COM</span>
  </span>
</template>

<script>
export default {
  name: 'BrandLogo',
  props: {
    dark: {
      default: false,
      type: Boolean
    },
  },
};
</script>

<style lang="css" scoped>
  .brand-logo {
    font-weight: 800;
    font-family: "Open Sans", sans-serif;
  }
</style>
