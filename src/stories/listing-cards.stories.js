import listings from '@/mocks/listings';
import ListingCards from '@/components/ListingCards.vue';
import ScreenSizeIndicator from '@/components/ScreenSizeIndicator.vue';

const templateDecorator = () => ({
  components: { ScreenSizeIndicator },
  data: () => ({
    wrapperWidthClasses: 'container',
  }),
  template: '<ScreenSizeIndicator :wrapper-width-classes="wrapperWidthClasses"><story /></ScreenSizeIndicator>',
});

export default {
  component: ListingCards,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Listing Cards',
};

export const grid4321 = () => ({
  components: { ListingCards },
  data: () => ({
    listings,
  }),
  template: '<listing-cards :listings="listings" />',
});
