/* eslint-disable import/no-extraneous-dependencies */
// import { action } from '@storybook/addon-actions';

import ListingCard from '../components/ListingCard.vue';

const templateDecorator = () => ({
  template: `
<div class="h-screen bg-gray-300">
    <div class="container">
        <div>
            <story />
        </div>
    </div>
</div>
    `,
});

export default {
  component: ListingCard,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Listing Card',
};

export const withText = () => ({
  components: { ListingCard },
  data: () => ({}),
  template: '<listing-card title="My Listing" />',
});
