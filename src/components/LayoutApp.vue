<template>
  <div class="app grid h-screen w-screen bg-gray-100" :class="{ 'app-simple' : !showNavigation }">
    <layout-navigation v-if="showNavigation" :items="navItems" />
    <div class="main-content overflow-y-auto">
      <slot />
    </div>
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from '@/components/Navigation.vue';
import LayoutFooter from '@/components/Footer.vue';

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
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
    grid-template-rows: auto 1fr auto;
  }
  .app.app-simple {
    grid-template-rows: 1fr auto;
  }
</style>
