<template>
  <div class="bg-white shadow-sm">
    <div class="">
      <a href="#"
         class="inline-block py-2 px-3 -ml-3 no-underline">
        <brand-logo :dark="true" />
      </a>
      <ul v-if="items" class="inline-flex">
        <li v-for="item in items"
            :key="item.label"
            class="mr-2">
          <a class="py-2 px-3 no-underline"
             :href="item.url">
            {{ item.label }}
          </a>
        </li>
      </ul>
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
