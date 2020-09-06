<template>
  <h1 class="flex items-center">
    This is an about page!
    <CoolIcon class="ml-2 inline-block text-red-600 text-xl" />
    <ScreenSizeIndicator />
  </h1>
</template>


<script>
import CoolIcon from 'bootstrap-icons/icons/emoji-sunglasses.svg';
import ScreenSizeIndicator from '@/components/utils/ScreenSizeIndicator';

export default {
  components: {
    CoolIcon,
    ScreenSizeIndicator
  },
};
</script>
