<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <layout-navigation :items="navItems" />
    <layout-header :heading="heading" />
    <layout-main class="flex-grow" />
    <layout-footer />
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter.vue';
import LayoutHeader from '@/components/LayoutHeader.vue';
import LayoutMain from '@/components/LayoutMain.vue';
import LayoutNavigation from '@/components/LayoutNavigation.vue';

export default {
  name: 'LayoutApp',
  components: {
    LayoutFooter,
    LayoutHeader,
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
      array: String
    }
  },
  data: () => ({
    open: false
  })

};
</script>
