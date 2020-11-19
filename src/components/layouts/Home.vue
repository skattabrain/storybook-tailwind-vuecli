<template>
  <div class="layout grid bg-gray-200" :style="{ height: windowHeight }">
    <div class="content space-y-3 overflow-y-auto">
      <div class="header flex flex-row items-center p-3 text-3xl">
        <BrandLogo :dark="true" class="flex-grow" /> {{ windowHeight }}
        <button class="p-2 border">
          <listIcon class="text-xl" />
        </button>
      </div>
      <h3 class="font-bold text-2xl">
        Content Area
      </h3>
      <p v-for="(para, index) in paragraphs" :key="index">
        {{ para }}
      </p>
    </div>
    <div class="navigation w-full flex overflow-x-auto p-3 space-y-2 text-sm bg-gray-200">
      <a href="#">
        <truckIcon class="text-3xl" />
        <span>Browse</span>
      </a>
      <a href="#">
        <plusIcon class="text-3xl" />
        <span>List</span>
      </a>
      <a href="#">
        <listIcon class="text-3xl" />
        <span>Menu</span>
      </a>
      <a href="#">
        <searchIcon class="text-3xl" />
        <span>Search</span>
      </a>
      <a href="#">
        <profileIcon class="text-3xl" />
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

// function setDocHeight() {
//   document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
// }

export default {
	components: {
    BrandLogo,
    listIcon,
    truckIcon,
    plusIcon,
    profileIcon,
    searchIcon,
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
  .content {}
  .navigation {}
  .navigation a {
    @apply w-full flex flex-col items-center justify-center;
  }
</style>
