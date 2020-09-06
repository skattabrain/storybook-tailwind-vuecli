<template>
  <div class="absolute bottom-0 right-0 text-gray-300 m-1 p-1 rounded bg-gray-800 bg-opacity-50">
    <span class="indicator mr-2 text-gray-100 sm:text-gray-300">
      <phoneIcon />
      <div class="indicator-label">all</div>
    </span>
    <span class="indicator mr-2 sm:text-gray-100 md:text-gray-300">
      <phoneLandscapeIcon />
      <div class="indicator-label">sm</div>
    </span>
    <span class="indicator mr-2 md:text-gray-100 lg:text-gray-300">
      <tabletLandscapeIcon />
      <div class="indicator-label">md</div>
    </span>
    <span class="indicator mr-2 lg:text-gray-100 xl:text-gray-300">
      <laptopIcon />
      <div class="indicator-label">lg</div>
    </span>
    <span class="indicator xl:text-gray-100">
      <displayIcon />
      <div class="indicator-label">xl</div>
    </span>
  </div>
</template>

<script>
import displayIcon from 'bootstrap-icons/icons/display.svg?inline';
import laptopIcon from 'bootstrap-icons/icons/laptop.svg?inline';
import phoneIcon from 'bootstrap-icons/icons/phone.svg?inline';
import phoneLandscapeIcon from 'bootstrap-icons/icons/phone-landscape.svg?inline';
import tabletLandscapeIcon from 'bootstrap-icons/icons/tablet-landscape.svg?inline';

export default {
  name: 'ScreenSizeIndicator',
  components: {
    displayIcon,
    laptopIcon,
    phoneIcon,
    phoneLandscapeIcon,
    tabletLandscapeIcon,
  }
};
</script>

<style lang="css" scoped>
  .indicator {
    display: inline-block;
  }
  .indicator-label {
    @apply mt-1 text-xs text-center;
  }
</style>
