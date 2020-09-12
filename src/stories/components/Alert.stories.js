import AlertBox from '@/components/Alert.vue';

export default {
  component: AlertBox,
  title: 'Components/Alert',
  argTypes: {
    message: { control: 'text', name: 'Message' },
    variant: { control: 'text', name: 'Alert Type' },
  },
  args: {
    message: `You've done gone busted it up!`,
    variant: 'error',
  }
};

export const Alert = (args) => ({
  components: { AlertBox },
  props: {
    message: {
      default: args.message,
    },
    variant: {
      default: args.variant,
    }
  },
  template: '<AlertBox :message="message" :variant="variant" />'
});
