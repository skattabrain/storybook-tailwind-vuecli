<template>
  <label class="block">
    <div class="mb-2">
      <div
        class="font-bold inline-flex items-center"
        :class="labelColor"
      >
        <ExclamationTriangleFill
          v-if="error"
          class="mr-1"
        />
        {{ label }} <span
          v-if="optional"
          class="font-normal ml-2"
        >(Optional)</span>
      </div>

      <div
        v-if="error"
        class="text-red-500 font-normal text-sm"
        :class="ERROR_COLOR"
      >{{ error }}</div>

      <div
        v-if="help"
        class="text-gray-600 text-sm"
      >{{ help }}</div>


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
