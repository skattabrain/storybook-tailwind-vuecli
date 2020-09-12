import listings from '@/mocks/listings';
import ListingCards from '@/components/ListingCards.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'container',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
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
