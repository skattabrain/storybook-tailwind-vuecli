<template>
  <div class="flex flex-wrap -mx-2 px-2 sm:px-0">
    <div v-for="listing in listings" :key="listing.id"
      class="flex w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-6">
      <listing-card :id="listing.id"
        :url="listing.url"
        :location="listing.location"
        :stock-number="listing.stockNumber"
        :title="listing.title"
        :price="listing.price"
        :miles="listing.miles"
        :dealer="listing.dealer"
        :description="listing.description"
        :image-url="listing.image" />
      </div>
  </div>
</template>

<script>
import ListingCard from '@/components/ListingCard.vue';

export default {
  name: 'ListingCards',
  components: {
    ListingCard,
  },
  props: {
    listings: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
