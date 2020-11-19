<template>
  <div class="bg-white shadow">
    <div class="container p-4">
      <h1 class="text-gray-900">
        {{ heading }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      required: true,
      type: String
    }
  }
}
</script>
