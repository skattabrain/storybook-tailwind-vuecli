<template>
  <button class="text-center" type="button">
    <div class="absolute transition-opacity duration-100"
         :class="working ? 'opacity-100' : 'opacity-0'">
      <WorkingIcon class="animate-pulse" />
    </div>
    <div class="transition-opacity duration-100" :class="working ? 'opacity-0' : 'opacity-100'">
      <slot />
    </div>
  </button>
</template>

<script>
import WorkingIcon from 'bootstrap-icons/icons/three-dots.svg?inline';

export default {
  components: {
    WorkingIcon
  },
  props: {
    working: {
      default: false,
      type: Boolean
    }
  }
}
</script>
