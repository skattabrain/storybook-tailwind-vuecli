<template>
  <div class="bg-gray-200">
    <div class="fixed left-0 top-0 w-full flex flex-row items-center p-3 text-3xl bg-gray-200 h-12">
      <BrandLogo :dark="true" class="flex-grow" />
      <button class="p-2 border">
        <listIcon class="text-xl" />
      </button>
    </div>
    <div class="content p-3 mb-24 mt-15">
      <div class="">
        <h3 class="font-bold text-2xl space-y-3">
          Content Area
        </h3>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
        <p>Ad aenean vulputate molestie arcu habitant natoque magnis fermentum, inceptos nec dapibus nascetur egestas nulla per pulvinar orci, semper nibh torquent ligula tincidunt non feugiat..</p>
      </div>
    </div>
    <div class="fixed left-0 bottom-0 w-full text-sm navigation flex overflow-x-auto px-3 pb-2 pt-3 bg-gray-200">
      <a href="#">
        <truckIcon class="text-3xl mb-1" />
        Browse
      </a>
      <a href="#">
        <plusIcon class="text-3xl mb-1" />
        List
      </a>
      <a href="#">
        <listIcon class="text-3xl mb-1" />
        Menu
      </a>
      <a href="#">
        <searchIcon class="text-3xl mb-1" />
        Search
      </a>
      <a href="#">
        <profileIcon class="text-3xl mb-1" />
        Profile
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

  }),
}
</script>

<style lang="css">
  .navigation a {
    @apply w-full flex flex-col items-center justify-center;
  }
</style>
