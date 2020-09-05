<template>
  <div class="w-screen py-3 flex flex-col items-center">
    <div :class="wrapperWidthClasses">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryWrapper',
  props: {
    wrapperWidthClasses: {
      default: 'w-1/2',
      type: String,
    },
  },
};
</script>
