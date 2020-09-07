<template>
  <div class="">
    <div class="container py-2">
      <a href="#"
         class="inline-block py-2 px-3 -ml-3">
        <brand-logo />
      </a>
      <ul v-if="items" class="inline-flex">
        <li v-for="item in items"
            :key="item.label"
            class="mr-2">
          <a class="inline-block py-2 px-3"
             :href="item.url">
            {{ item.label }}</a>
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
import BrandLogo from '@/components/Logo.vue';

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
