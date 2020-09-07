<template>
  <div class="flex flex-col min-h-screen w-screen">
    <layout-navigation :items="navItems" />
    <layout-main class="flex-grow">
      <slot />
    </layout-main>
  </div>
</template>

<script>
import LayoutMain from '@/components/LayoutMain.vue';
import LayoutNavigation from '@/components/Navigation.vue';

export default {
  components: {
    LayoutMain,
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
  })

};
</script>
