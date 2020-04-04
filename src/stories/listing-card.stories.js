/* eslint-disable import/no-extraneous-dependencies */
// import { action } from '@storybook/addon-actions';

import ListingCard from '../components/ListingCard.vue';

const templateDecorator = () => ({
  template: `
<div class="h-screen w-screen bg-gray-300 flex flex-col items-center justify-center">
  <div class="">
      <story />
  </div>
  <div class="mt-6">
    <div class="sm:visible md:invisible lg:invisible xl:invisible">SM</div>
    <div class="sm:invisible md:visible lg:invisible xl:invisible">MD</div>
    <div class="sm:invisible md:invisible lg:visible xl:invisible">LG</div>
    <div class="sm:invisible md:invisible lg:invisible xl:visible">
      <img src="./assets/icons/computer-desktop.svg">
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
