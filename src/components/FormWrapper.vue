<template>
  <form>
    <AlertBox :message="errorMessage"
              @alert-dismissed="clearErrorMessage" />

    <slot />

    <button type="submit"
            class="btn btn--primary w-full mt-4"
            @click.prevent="submitForm">
      <WorkingIcon class="animate-spin absolute transition-opacity duration-100 opacity-0" :class="{ 'opacity-100' : working }" />
      <div class="transition-opacity duration-100" :class="{ 'opacity-0' : working }">
        {{ submitLabel }}
      </div>
    </button>
  </form>
</template>

<script>
import AlertBox from '@/components/Alert.vue';
import WorkingIcon from 'bootstrap-icons/icons/gear-fill.svg?inline';

export default {
  components: {
    AlertBox,
    WorkingIcon
  },
  props: {
    submitLabel: {
      default: 'Submit',
      type: String
    },
    errorMessage: {
      default: null,
      type: String
    },
    working: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    clearErrorMessage() {
      this.$emit('clear-error')
    },
    submitForm() {
      this.$emit('submit-form')
    },
  }
};
</script>
