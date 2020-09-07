<template>
  <div class="app grid h-screen w-screen bg-gray-100" :class="{ 'app-simple' : !showNavigation }">
    <layout-navigation v-if="showNavigation" :items="navItems" />
    <div class="main-content overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '@/components/Navigation.vue';

export default {
  components: {
    LayoutNavigation
  },
  props: {
    heading: {
      required: true,
      type: String
    },
    navItems: {
      default: null,
      type: Array
    }
  },
  data: () => ({
    open: false
  }),
  computed: {
    showNavigation() {
      return true
    }
  }
};
</script>

<style lang="css" scoped>
  .app {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  .app.app-simple {
    grid-template-rows: 1fr;
  }
</style>
