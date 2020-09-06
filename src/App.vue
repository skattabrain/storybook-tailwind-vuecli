<template>
  <div>
    <div>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
    <ScreenSizeIndicator />
  </div>
</template>

<script>
import ScreenSizeIndicator from '@/components/utils/ScreenSizeIndicator';

export default {
  components: {
    ScreenSizeIndicator
  },
};
</script>

<style src="./styles/index.css">

