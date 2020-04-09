<template>
  <div @click="select" class="cursor-pointer bg-white duration-150 ease-in-out hover:scale-105
    rounded shadow-lg transform transition w-full">
    <div class="bg-gray-900 rounded-t">
      <img :src="imageSrc" :alt="title" class="h-48 object-cover rounded-t w-full">
      <div class="transform -translate-y-full flex float-right items-center p-1">
        <span class="inilne-block bg-gray-800-80 text-gray-200 text-xs px-1 rounded-sm">
          {{ stockNumber }}
        </span>
      </div>
    </div>
    <div class="p-3">
      <h3 class="text-gray-800 text-lg">
        <a :href="url">
          {{ title }}
        </a>
      </h3>
      <div class="flex flex-row items-center">
        <div class="flex-1 font-bold text-green-500 text-xl">
          <span class="align-text-top text-sm">$</span>{{ price }}
        </div>
        <div class="font-medium text-gray-700 text-sm">{{ miles }}mi</div>
      </div>
      <div class="text-xs text-gray-500">{{ location }}</div>
    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/demo/no-image.gif';

export default {
  name: 'ListingCard',
  props: {
    url: {
      required: true,
      type: String,
    },
    imageUrl: {
      default: null,
      type: String,
    },
    title: {
      default: null,
      type: String,
    },
    description: {
      default: null,
      type: String,
    },
    location: {
      default: null,
      type: String,
    },
    stockNumber: {
      default: null,
      type: String,
    },
    price: {
      default: null,
      type: Number,
    },
    miles: {
      default: null,
      type: Number,
    },
  },
  computed: {
    imageSrc() {
      return this.imageUrl && this.imageUrl !== '' ? this.imageUrl : defaultImage;
    },
  },
  methods: {
    select() {
      this.$emit('clicked!');
    },
  },
};
</script>
