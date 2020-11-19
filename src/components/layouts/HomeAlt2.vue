<template>
  <div class="layout bg-gray-200">
    <div class="header p-3 text-2xl">
      <BrandLogo :dark="true" class="flex-grow" />
    </div>
    <div class="content space-y-3 p-3">
      <h1 class="font-bold text-xl">
        Exotics Cars For Sale
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro aliquid id incidunt illo soluta quod praesentium fuga, accusamus expedita aut corrupti alias voluptas dolorem, a reiciendis, dolore pariatur hic.
      </p>
      <div class="flex space-x-2">
        <button class="p-3 bg-purple-300">
          Browse
        </button>
        <button class="p-3 bg-purple-300">
          Browse
        </button>
        <button class="p-3 bg-purple-300">
          Browse
        </button>
      </div>
      <div class="flex flex-wrap -ml-1 -mr-1">
        <div v-for="listing in listings"
             :key="listing.id"
             class="item w-1/2 p-1">
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

      <div v-for="(para, index) in paragraphs"
           :key="index"
           class="w-full bg-white p-3 shadow my-3 rounded">
        {{ para }}
      </div>
      <p v-for="(para, index) in paragraphs" :key="index">
        {{ para }}
      </p>
    </div>
    <div class="navigation fixed left-0 bottom-0 w-full flex overflow-x-auto space-x-2 text-sm bg-gray-200 px-2 py-3">
      <a href="#">
        <truckIcon class="text-2xl mb-1" />
        <span>Browse</span>
      </a>
      <a href="#">
        <plusIcon class="text-2xl mb-1" />
        <span>List</span>
      </a>
      <a href="#">
        <listIcon class="text-2xl mb-1" />
        <span>Menu</span>
      </a>
      <a href="#">
        <searchIcon class="text-2xl mb-1" />
        <span>Search</span>
      </a>
      <a href="#">
        <profileIcon class="text-2xl mb-1" />
        <span>Profile</span>
      </a>
    </div>
  </div>
</template>

<script>
import listIcon from 'bootstrap-icons/icons/list.svg?inline'
import plusIcon from 'bootstrap-icons/icons/plus-square-fill.svg?inline'
import searchIcon from 'bootstrap-icons/icons/search.svg?inline'
import profileIcon from 'bootstrap-icons/icons/person-circle.svg?inline'
import truckIcon from 'bootstrap-icons/icons/truck.svg?inline'
import BrandLogo from '@/components/Logo.vue'
import ListingCard from '@/components/ListingCard.vue'
import listings from '@/mocks/listings';

export default {
	components: {
    BrandLogo,
    listIcon,
    truckIcon,
    plusIcon,
    profileIcon,
    searchIcon,
    ListingCard,
	},
	data: () => ({
    innerHeight: null,
    paragraphs: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Ab labore iusto minus molestias aspernatur dolore, voluptatum dicta exercitationem ad unde rerum illo atque quae eligendi nam enim odio debitis quasi.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis magnam quae harum vel aspernatur. Aperiam distinctio corrupti quo dolor earum impedit! Aliquam, aliquid! Corporis dicta, atque cumque tenetur autem deserunt.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo cum mollitia tenetur ipsum sed non in totam, repudiandae delectus iste excepturi a unde consequuntur, sint numquam quam nesciunt quod. Quibusdam.',
      'Tempore dolor facilis temporibus aliquid unde consequatur neque cumque maxime nam expedita facere, impedit porro quidem, sint soluta ea! Odit, dolorem. Numquam!',
      'Tempore dolor facilis temporibus aliquid unde consequatur neque cumque maxime nam expedita facere, impedit porro quidem, sint soluta ea! Odit, dolorem. Numquam!',
      'Doloribus vitae, autem enim fugit dolore ipsam aperiam non eveniet magnam placeat tenetur repellat voluptatum suscipit. Eius voluptatum placeat voluptate atque delectus!',
      'Doloribus vitae, autem enim fugit dolore ipsam aperiam non eveniet magnam placeat tenetur repellat voluptatum suscipit. Eius voluptatum placeat voluptate atque delectus!',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque libero harum quisquam. Numquam aliquid sint soluta illo inventore totam, odio quae rem, consectetur distinctio facilis ullam suscipit, labore molestiae quas?',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque libero harum quisquam. Numquam aliquid sint soluta illo inventore totam, odio quae rem, consectetur distinctio facilis ullam suscipit, labore molestiae quas?',
      'Esse repellat harum laborum aperiam provident, aliquid quis ad autem nihil! Dolorem tenetur cum molestiae, sit ut excepturi veritatis laboriosam hic laudantium.',
      'Esse repellat harum laborum aperiam provident, aliquid quis ad autem nihil! Dolorem tenetur cum molestiae, sit ut excepturi veritatis laboriosam hic laudantium.',
      'Sunt beatae perspiciatis inventore ad soluta nostrum possimus unde aliquid laboriosam rerum accusantium voluptas nam culpa animi, quidem saepe, molestiae quibusdam illu.',
    ],
    listings,
  }),
  computed: {
    windowHeight() {
      return `${this.innerHeight}px`
    }
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    this.onResize();
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize(event) {
      console.log(window.innerHeight);
      this.innerHeight = window.innerHeight;
      console.log('window has been resized', event)
    }
  }
}
</script>

<style lang="css">
  .layout {
    grid-template-rows: auto 80px;
  }
  .header {}
  .content {
    padding-bottom: 100px;
  }
  .navigation {}
  .navigation a {
    @apply w-full flex flex-col items-center justify-center p-2;
  }

</style>
