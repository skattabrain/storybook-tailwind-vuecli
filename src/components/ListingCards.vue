<template>
  <div class="listing-cards grid place-items-stretch">
    <div v-for="listing in listings"
         :key="listing.id"
         class="item p-2">
      <listing-card
        :id="listing.id"
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

<style lang="css" scoped>
  .listing-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    /* @screen xl {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    } */
  }
</style>
