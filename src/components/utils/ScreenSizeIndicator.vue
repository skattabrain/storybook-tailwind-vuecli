<template>
  <div class="absolute bottom-0 right-0 text-gray-300 m-1 p-1 rounded bg-gray-800 bg-opacity-50">
    <span class="inline-block mr-2 text-gray-100 sm:text-gray-300">
      <phoneIcon />
      <div class="mt-1 text-xs text-center">all</div>
    </span>
    <span class="inline-block mr-2 sm:text-gray-100 md:text-gray-300">
      <phoneLandscapeIcon />
      <div class="mt-1 text-xs text-center">sm</div>
    </span>
    <span class="inline-block mr-2 md:text-gray-100 lg:text-gray-300">
      <tabletLandscapeIcon />
      <div class="mt-1 text-xs text-center">md</div>
    </span>
    <span class="inline-block mr-2 lg:text-gray-100 xl:text-gray-300">
      <laptopIcon />
      <div class="mt-1 text-xs text-center">lg</div>
    </span>
    <span class="inline-block xl:text-gray-100">
      <displayIcon />
      <div class="mt-1 text-xs text-center">xl</div>
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
