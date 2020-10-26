<template>
  <div
    class="flex flex-col cursor-pointer bg-white rounded shadow hover:shadow-lg transition-shadow duration-200 w-full h-full">
    <div class="h-28 sm:h-32 bg-coolGray-900 rounded-t text-right">
      <div v-if="favorite" class="-translate-x-1 -translate-y-3 absolute bg-orange-500 flex items-center py-0.5 px-1.5 rounded text-white text-xs transform">
        <starIcon class="mr-1" /> <span>We Like This One!</span>
      </div>
      <button type="button"
              class="favorite absolute transform p-2 -translate-x-8"
              @click.prevent="favorite = !favorite">
        <heartFillIcon v-if="favorite" class="text-red-500" />
        <heartIcon v-else class="text-red-300 hover:text-red-500" />
      </button>
      <img
        :src="imageSrc"
        :alt="`title`"
        class="h-full object-cover rounded-t w-full"
        @click="select">
      <div class="transform -translate-y-full flex float-right items-center p-1">
        <span class="inline-block bg-coolGray-900 bg-opacity-50 text-coolGray-50 text-xs px-1 rounded-sm">
          {{ stockNumber }}
        </span>
      </div>
    </div>
    <div class="p-2 flex flex-col flex-grow space-y-1" @click="select">
      <h3 class="text-coolGray-700 font-bold leading-5 tracking-tight truncate">
        <a :href="url">
          {{ title }}
        </a>
      </h3>
      <p class="description leading-tight text-coolGray-500 text-sm tracking-tight flex-grow overflow-hidden">
        {{ desc }}
      </p>
      <div class="flex flex-row items-center">
        <div class="flex-1 font-bold text-lg text-coolGray-800">
          <span class="align-text-top text-sm">$</span>{{ price | numberFilter }}
        </div>
        <div class="font-medium text-coolGray-700 text-sm">
          {{ miles | numberFilter }} mi
        </div>
      </div>
      <div class="text-xs text-coolGray-500 truncate">
        {{ location }} &ndash; {{ dealer }}
      </div>
    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/demo/no-image.gif'
import numberFilter from '@/filters/numbers'
import heartIcon from 'bootstrap-icons/icons/heart.svg?inline'
import starIcon from 'bootstrap-icons/icons/star-fill.svg?inline'
import heartFillIcon from 'bootstrap-icons/icons/heart-fill.svg?inline'

export default {
  name: 'ListingCard',
  components: {
    heartIcon,
    heartFillIcon,
    starIcon,
  },
  filters: {
    numberFilter
  },
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
    desc: {
      default: null,
      type: String,
    },
    dealer: {
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
  data: () => ({
    favorite: false
  }),
  computed: {
    imageSrc() {
      return this.imageUrl && this.imageUrl !== '' ? this.imageUrl : defaultImage;
    },
  },
  methods: {
    select() {
      window.location.href = this.url;
      console.log(this.url);
    },
  },

};
</script>
<style lang="css" scoped>
  .favorite {
    text-shadow: 1px 1px #FFF;
  }
  .description {
    height: 52px;
  }
</style>
