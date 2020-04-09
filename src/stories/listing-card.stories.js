/* eslint-disable import/no-extraneous-dependencies */
// import { action } from '@storybook/addon-actions';

import listingImage from '@/assets/demo/ferrari.jpg';
import ListingCard from '@/components/ListingCard.vue';
import ScreenSizeIndicator from '@/components/ScreenSizeIndicator.vue';

const templateDecorator = () => ({
  components: { ScreenSizeIndicator },
  data: () => ({
    wrapperWidthClasses: 'w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4',
  }),
  template: '<ScreenSizeIndicator :wrapper-width-classes="wrapperWidthClasses"><story /></ScreenSizeIndicator>',
});

const listing = {
  id: 32489,
  description: `The 360 Challenge Stradale, the 430 Scuderia, the 458 Speciale, and now the 488 Pista.`,
  image: listingImage,
  title: '2018 Ferrari 488 Pista',
  price: 350000,
  miles: 23000,
  dealer: 'Rad Ferrari USA',
  stockNumber: 'WS-32489',
  location: 'Las Vegas, NV',
  url: '#',
};

export default {
  component: ListingCard,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Listing Card',
};

export const withImage = () => ({
  components: { ListingCard },
  data: () => ({
    ...listing,
  }),
  template: '<listing-card :id="id" :url="url" :location="location" :stock-number="stockNumber" :title="title" :price="price" :miles="miles" :dealer="dealer" :description="description" :image-url="image" />',
});

export const withoutImage = () => ({
  components: { ListingCard },
  data: () => ({
    ...listing,
    image: null,
  }),
  template: '<listing-card :id="id" :url="url" :location="location" :stock-number="stockNumber" :title="title" :price="price" :miles="miles" :dealer="dealer" :description="description" :image-url="image" />',
});
