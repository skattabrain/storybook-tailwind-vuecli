<template>
  <div class="bg-coolGray-200 pt-12">
    <div class="fixed left-0 top-0 w-full h-12 flex flex-row items-center px-1 bg-coolGray-200 text-coolGray-500 z-10 shadow-lg">
      <button class="inline-flex items-center justify-center text-center h-10 w-10" aria-label="Home Page">
        <houseIcon class="text-2xl" />
      </button>
      <BrandLogo :dark="true" class="flex-grow text-center text-2xl my-2" />
      <button class="inline-flex items-center justify-center text-center h-10 w-10" aria-label="Main Menu">
        <listIcon class="text-3xl" />
      </button>
    </div>
    <div class="content bg-coolGray-200 space-y-4" :class="{ 'overflow-hidden h-full': modal }">
      <div class="-mb-20 bg-coolGray-800 page-intro pb-20 pt-6 px-3 space-y-1 text-coolGray-50">
        <h1 class="font-bold text-xl">
          Limousines, Sprinters &amp; Buses For Sale
        </h1>
        <p>
          Your new one-stop shop for both buying and selling new and used limousines, Mercedes-Benz Sprinters, buses and custom motorcoaches. We've been working in the luxury ground transportation industry since 1987 and we are now viewed in over 180 countries.
        </p>
        <div class="flex space-x-3 py-4">
          <button class="p-2 flex-1 border-2 rounded text-white">
            Browse <span class="sm:inline-block hidden">Listings</span>
          </button>
          <button class="p-2 flex-1 border-2 rounded text-white">
            Sell <span class="sm:inline-block hidden">Your Vehicle</span>
          </button>
          <button class="p-2 flex-1 border-2 rounded text-white">
            Cash Offer
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 my-12 mx-3 gap-x-3 gap-y-6">
        <div v-for="listing in listings"
             :key="listing.id"
             class="item-listing">
          <listing-card
            :id="`listing-${listing.stockNumber}`"
            :url="listing.url"
            :location="listing.location"
            :stock-number="listing.stockNumber"
            :title="listing.title"
            :price="listing.price"
            :badge="listing.badge"
            :youtube="listing.youtube"
            :miles="listing.miles"
            :dealer="listing.dealer"
            :desc="listing.description"
            :image-url="listing.image" />
        </div>
        <div class="row-start-3 col-span-2 text-xl text-center my-6 rounded py-16 px-3 bg-red-800 text-white">
          Advertiser Block 1
        </div>
        <div class="row-start-6 col-span-2 text-xl text-center my-6 rounded py-16 px-3 bg-red-800 text-white">
          Advertiser Block 2
        </div>
        <div class="row-start-9 col-span-2 text-xl text-center my-6 rounded py-16 px-3 bg-red-800 text-white">
          Advertiser Block 3
        </div>
        <!--
        <div class="row-start-9 col-span-2 text-xl text-center my-6 rounded py-16 px-3 bg-red-800 text-white">
          Advertiser Block
        </div>
        <div class="row-start-9 col-span-2 text-xl text-center my-6 rounded py-16 px-3 bg-red-800 text-white">
          Advertiser Block
        </div> -->
      </div>
      <div class="flex px-2 py-6">
        <a href="#" class="flex-1 py-1 px-2 border-2 border-coolGray-400 rounded flex items-center">
          <chevronLeftIcon class="mr-2" />
          <span>Previous</span>
        </a>
        <a href="#" class="flex-1 ml-auto border-2 border-coolGray-400 py-1 px-2 rounded flex items-center">
          <span>Next</span>
          <chevronRightIcon class="ml-2" />
        </a>
      </div>
    </div>
    <div class="fixed shadow-top-lg left-0 bottom-0 w-full text-sm navigation flex overflow-x-auto px-0 pb-2 pt-3 bg-coolGray-200 text-coolGray-500">
      <a href="#">
        <truckIcon class="text-coolGray-700 text-2xl mb-1" />
        Browse
      </a>
      <button type="button" @click="modal = !modal">
        <searchIcon class="text-coolGray-700 text-2xl mb-1" />
        Search
      </button>
      <a v-if="loggedIn" href="#">
        <plusIcon class="text-coolGray-700 text-2xl mb-1" />
        List
      </a>
      <a v-else href="#">
        <emailIcon class="text-coolGray-700 text-2xl mb-1" />
        Subscribe
      </a>
      <button type="button" @click="lit = !lit">
        <heartFillIcon v-if="lit" class="text-red-500 text-2xl mb-1" />
        <heartIcon v-else class="text-coolGray-700 text-2xl mb-1" />
        Saved
      </button>
      <button type="button" @click="loggedIn = !loggedIn">
        <profileIcon class="text-coolGray-700 text-2xl mb-1" />
        Profile
      </button>
    </div>
    <div v-if="modal" class="fixed h-screen top-0 z-30">
      <div class="bg-white h-full p-3 overflow-scroll">
        <button class="border float-right p-2" @click="modal = !modal">
          <closeIcon />
        </button>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">
            Search
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est, esse sit dignissimos odio alias rerum illo deserunt, quisquam perspiciatis facere et provident sunt repellat quod molestiae, ipsam explicabo fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est, esse sit dignissimos odio alias rerum illo deserunt, quisquam perspiciatis facere et provident sunt repellat quod molestiae, ipsam explicabo fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est, esse sit dignissimos odio alias rerum illo deserunt, quisquam perspiciatis facere et provident sunt repellat quod molestiae, ipsam explicabo fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est, esse sit dignissimos odio alias rerum illo deserunt, quisquam perspiciatis facere et provident sunt repellat quod molestiae, ipsam explicabo fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est, esse sit dignissimos odio alias rerum illo deserunt, quisquam perspiciatis facere et provident sunt repellat quod molestiae, ipsam explicabo fugit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listIcon from 'bootstrap-icons/icons/list.svg?inline'
import plusIcon from 'bootstrap-icons/icons/plus-square-fill.svg?inline'
import chevronLeftIcon from 'bootstrap-icons/icons/chevron-left.svg?inline'
import chevronRightIcon from 'bootstrap-icons/icons/chevron-right.svg?inline'
import emailIcon from 'bootstrap-icons/icons/envelope-open.svg?inline'
import closeIcon from 'bootstrap-icons/icons/x.svg?inline'
import houseIcon from 'bootstrap-icons/icons/house.svg?inline'
import searchIcon from 'bootstrap-icons/icons/search.svg?inline'
import profileIcon from 'bootstrap-icons/icons/person-circle.svg?inline'
import heartIcon from 'bootstrap-icons/icons/heart.svg?inline'
import heartFillIcon from 'bootstrap-icons/icons/heart-fill.svg?inline'
import truckIcon from 'bootstrap-icons/icons/truck.svg?inline'
import BrandLogo from '@/components/Logo.vue'
import ListingCard from '@/components/ListingCard.vue'
import listings from '@/mocks/listings';

export default {
	components: {
    BrandLogo,
    closeIcon,
    chevronLeftIcon,
    chevronRightIcon,
    listIcon,
    emailIcon,
    houseIcon,
    truckIcon,
    plusIcon,
    heartIcon,
    heartFillIcon,
    profileIcon,
    searchIcon,
    ListingCard,
	},
	data: () => ({
    listings,
    loggedIn: false,
    lit: false,
    modal: false
  }),
}
</script>

<style lang="css">
  /* .page-intro {
    background-image: url('https://weselllimos.com/img/bg/bentley-limos-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  } */

  .navigation a, .navigation button {
    @apply w-full flex flex-col items-center justify-center
  }
</style>
