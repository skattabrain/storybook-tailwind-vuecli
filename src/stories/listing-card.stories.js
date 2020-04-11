import listing from '@/mocks/listing';
import ListingCard from '@/components/ListingCard.vue';
import ScreenSizeIndicator from '@/components/ScreenSizeIndicator.vue';

const templateDecorator = () => ({
  components: { ScreenSizeIndicator },
  data: () => ({
    wrapperWidthClasses: 'w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4',
  }),
  template: '<ScreenSizeIndicator :wrapper-width-classes="wrapperWidthClasses"><story /></ScreenSizeIndicator>',
});


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
