import LoginForm from '@/components/forms/login';

export default {
  component: LoginForm,
  title: 'Forms/Login'
};

export const Example = () => ({
  components: { LoginForm },
  template: '<LoginForm />'
});
