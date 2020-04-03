<template>
    <div class="bg-white shadow-xl rounded">
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
  name: 'ListingCard',
  props: {
    title: {
      default: null,
      type: String,
    },
  },
};
</script>
