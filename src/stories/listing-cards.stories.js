/* eslint-disable import/no-extraneous-dependencies */
// import { action } from '@storybook/addon-actions';

import listingImage from '@/assets/demo/ferrari.jpg';
import ListingCards from '@/components/ListingCards.vue';
import ScreenSizeIndicator from '@/components/ScreenSizeIndicator.vue';

const templateDecorator = () => ({
  components: { ScreenSizeIndicator },
  data: () => ({
    wrapperWidthClasses: 'container',
  }),
  // template: '<div class="h-screen w-screen bg-gray-300"><div class=""><story /></div></div>',
  template: '<ScreenSizeIndicator :wrapper-width-classes="wrapperWidthClasses"><story /></ScreenSizeIndicator>',
});

const listings = [
  {
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
  },
  {
    id: 32490,
    description: `The 360 Challenge Stradale, the 430 Scuderia, the 458 Speciale, and now the 488 Pista.`,
    image: listingImage,
    title: '2018 Ferrari 488 Pista',
    price: 350000,
    miles: 23000,
    dealer: 'Rad Ferrari USA',
    stockNumber: 'WS-32490',
    location: 'Las Vegas, NV',
    url: '#',
  },
  {
    id: 32491,
    description: `The 360 Challenge Stradale, the 430 Scuderia, the 458 Speciale, and now the 488 Pista.`,
    image: listingImage,
    title: '2018 Ferrari 488 Pista',
    price: 350000,
    miles: 23000,
    dealer: 'Rad Ferrari USA',
    stockNumber: 'WS-32491',
    location: 'Las Vegas, NV',
    url: '#',
  },
  {
    id: 32589,
    description: `The 360 Challenge Stradale, the 430 Scuderia, the 458 Speciale, and now the 488 Pista.`,
    image: listingImage,
    title: '2018 Ferrari 488 Pista',
    price: 350000,
    miles: 23000,
    dealer: 'Rad Ferrari USA',
    stockNumber: 'WS-32589',
    location: 'Las Vegas, NV',
    url: '#',
  },
  {
    id: 32590,
    description: `The 360 Challenge Stradale, the 430 Scuderia, the 458 Speciale, and now the 488 Pista.`,
    image: listingImage,
    title: '2018 Ferrari 488 Pista',
    price: 350000,
    miles: 23000,
    dealer: 'Rad Ferrari USA',
    stockNumber: 'WS-32590',
    location: 'Las Vegas, NV',
    url: '#',
  },
  {
    id: 32591,
    description: `The 360 Challenge Stradale, the 430 Scuderia, the 458 Speciale, and now the 488 Pista.`,
    image: listingImage,
    title: '2018 Ferrari 488 Pista',
    price: 350000,
    miles: 23000,
    dealer: 'Rad Ferrari USA',
    stockNumber: 'WS-32591',
    location: 'Las Vegas, NV',
    url: '#',
  },
];

export default {
  component: ListingCards,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Listing Cards',
};

export const threeInAGrid = () => ({
  components: { ListingCards },
  data: () => ({
    listings,
  }),
  template: '<listing-cards :listings="listings" />',
});
