<template>
  <div class="bg-gray-800">
    <div class="container py-2">
      <a href="#" class="inline-block rounded py-2 px-3 -ml-3 hover:bg-gray-900">
        <brand-logo />
      </a>
      <ul v-if="items"  class="inline-flex">
        <li v-for="item in items"
          :key="item.label"
          class="mr-2">
          <a class="inline-block rounded py-2 px-3 text-gray-300 hover:bg-gray-900 hover:text-gray-100" :href="item.url">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <!-- <ul v-if="items" class="flex">
        <li v-for="item in items"
          :key="item.label"
          class="mr-3">
          <a :href="item.url"
            class="text-gray-100 hover:bg-gray-800 p-3">
            {{ item.label }}
          </a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import BrandLogo from '@/components/BrandLogo.vue';

export default {
  components: {
    BrandLogo
  },
  props: {
    items: {
      default: null,
      type: Array
    }
  }
}
</script>
