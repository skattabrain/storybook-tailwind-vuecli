<template>
  <label
    class="block"
    :class="marginClass">
    <div class="mb-1">
      <div
        class="font-bold"
        :class="labelColor">
        {{ label }}
        <span
          v-if="optional"
          class="font-normal ml-2">(Optional)</span>
      </div>

      <div
        v-if="error"
        class="flex items-center text-red-500 font-normal text-sm"
        :class="ERROR_COLOR">
        <ExclamationTriangleFill
          v-if="error"
          class="mr-1" /> <span>{{ error }}</span></div>

      <div
        v-if="help"
        class="text-gray-600 text-sm">{{ help }}</div>


    </div>
    <slot />
  </label>
</template>

<script>
import ExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?inline';

const ERROR_COLOR = 'text-red-500';

export default {
  components: {
    ExclamationTriangleFill,
  },
  props: {
    isDisabled: {
      default: false,
      type: Boolean
    },
    label: {
      required: true,
      type: String,
    },
    help: {
      default: null,
      type: String,
    },
    optional: {
      default: false,
      type: Boolean
    },
    error: {
      default: null,
      type: String,
    },
    marginClass: {
      default: 'mb-4',
      type: String
    }
  },
  data() {
    return {
      ERROR_COLOR
    }
  },
  computed: {
    labelColor() {
      return this.error ? ERROR_COLOR : this.isDisabled ? 'text-gray-600' : 'text-gray-800';
    }
  }
};
</script>
