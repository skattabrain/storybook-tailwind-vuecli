<template>
  <div class="w-screen py-3 flex flex-col items-center">
    <div :class="wrapperWidthClasses">
      <slot></slot>
    </div>
    <ScreenSizeIndicator />
  </div>
</template>

<script>
import ScreenSizeIndicator from '@/components/utils/ScreenSizeIndicator.vue';

export default {
  name: 'StoryWrapper',
  components: {
    ScreenSizeIndicator
  },
  props: {
    wrapperWidthClasses: {
      default: 'w-1/2',
      type: String,
    },
  },
};
</script>
