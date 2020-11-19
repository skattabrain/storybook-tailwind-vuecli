<template>
  <div v-if="development"
       class="text-center group fixed bottom-0 right-0 text-gray-400 m-1 py-1 rounded bg-gray-800 opacity-25 hover:opacity-100">
    <div class="hidden group-hover:block text-xs text-white m-1">
      {{ `${$vssWidth} x ${$vssHeight}` }}
    </div>
    <span class="inline-block sm:hidden group-hover:inline-block mx-1 text-white sm:text-gray-400">
      <phoneIcon class="hidden group-hover:inline-block" />
      <div class="indicator-label">all</div>
    </span>
    <span class="hidden sm:inline-block md:hidden group-hover:inline-block mx-1 sm:text-white md:text-gray-400">
      <phoneLandscapeIcon class="hidden group-hover:inline-block" />
      <div class="indicator-label">sm</div>
    </span>
    <span class="hidden md:inline-block lg:hidden group-hover:inline-block mx-1 md:text-white lg:text-gray-400">
      <tabletLandscapeIcon class="hidden group-hover:inline-block" />
      <div class="indicator-label">md</div>
    </span>
    <span class="hidden lg:inline-block xl:hidden group-hover:inline-block mx-1 lg:text-white xl:text-gray-400">
      <laptopIcon class="hidden group-hover:inline-block" />
      <div class="indicator-label">lg</div>
    </span>
    <span class="hidden xl:inline-block 2xl:hidden group-hover:inline-block mx-1 xl:text-white 2xl:text-gray-400">
      <displayIcon class="hidden group-hover:inline-block" />
      <div class="indicator-label">xl</div>
    </span>
    <span class="hidden 2xl:inline-block group-hover:inline-block 2xl:text-white mx-1">
      <tvIcon class="hidden group-hover:inline-block" />
      <div class="indicator-label">2xl</div>
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
