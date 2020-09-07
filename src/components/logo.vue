<template>
  <span class="brand-logo"
        :class="[dark ? 'text-dark' : 'text-white']">{{ brandName }}</span>
</template>

<script>
export default {
  props: {
    dark: {
      default: false,
      type: Boolean
    },
  },
  data() {
    return {
      brandName: 'WeSellLimos'
    }
  }
};
</script>

<style lang="css" scoped>
  /* .brand-logo {
    font-weight: 800;
    font-family: "Open Sans", sans-serif;
  } */
</style>
