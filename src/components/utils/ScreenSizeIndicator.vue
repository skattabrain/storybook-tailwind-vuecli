<template>
  <div v-if="development"
       class="text-center group fixed bottom-0 right-0 text-gray-400 m-1 py-1 rounded bg-gray-800 bg-opacity-25 hover:bg-opacity-100">
    <div class="hidden group-hover:block text-center text-xs text-white m-1">
      {{ `${$vssWidth} x ${$vssHeight}` }}
    </div>
    <span class="inline-block sm:hidden group-hover:inline-block mx-1 text-white sm:text-gray-400">
      <phoneIcon />
      <div class="indicator-label">all</div>
    </span>
    <span class="hidden sm:inline-block md:hidden group-hover:inline-block mx-1 sm:text-white md:text-gray-400">
      <phoneLandscapeIcon />
      <div class="indicator-label">sm</div>
    </span>
    <span class="hidden md:inline-block lg:hidden group-hover:inline-block mx-1 md:text-white lg:text-gray-400">
      <tabletLandscapeIcon />
      <div class="indicator-label">md</div>
    </span>
    <span class="hidden lg:inline-block xl:hidden group-hover:inline-block mx-1 lg:text-white xl:text-gray-400">
      <laptopIcon />
      <div class="indicator-label">lg</div>
    </span>
    <span class="hidden xl:inline-block xxl:hidden group-hover:inline-block mx-1 xl:text-white xxl:text-gray-400">
      <displayIcon />
      <div class="indicator-label">xl</div>
    </span>
    <span class="hidden xxl:inline-block group-hover:inline-block xxl:text-white mx-1">
      <tvIcon />
      <div class="indicator-label">xxl</div>
    </span>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import displayIcon from 'bootstrap-icons/icons/display.svg?inline'
import laptopIcon from 'bootstrap-icons/icons/laptop.svg?inline'
import phoneIcon from 'bootstrap-icons/icons/phone.svg?inline'
import phoneLandscapeIcon from 'bootstrap-icons/icons/phone-landscape.svg?inline'
import tabletLandscapeIcon from 'bootstrap-icons/icons/tablet-landscape.svg?inline'
import tvIcon from 'bootstrap-icons/icons/tv.svg?inline'

export default {
  name: 'ScreenSizeIndicator',
  components: {
    displayIcon,
    laptopIcon,
    phoneIcon,
    phoneLandscapeIcon,
    tabletLandscapeIcon,
    tvIcon
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      development: (process.env.NODE_ENV === 'development'),
    }
  }
};
</script>

<style lang="css" scoped>
  .indicator-label {
    @apply mt-1 text-xs text-center;
  }
</style>
