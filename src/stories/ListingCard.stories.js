import listing from '@/mocks/listing';
import ListingCard from '@/components/ListingCard.vue';

const templateDecorator = () => ({
  template: '<div class="max-w-xs"><story /></div>',
});


export default {
  component: ListingCard,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Listing Card',
  argTypes: {
    title: { control: 'text', name: 'Title' },
    dealer: { control: 'text', name: 'Dealer' },
    location: { control: 'text', name: 'Location' },
    stockNumber: { control: 'text', name: 'Stock Number' },
    price: { control: 'number', name: 'Price' },
    miles: { control: 'number', name: 'Mileage' },
    imageUrl: { control: 'text', name: 'Image URL' },
    url: { control: 'text', name: 'URL' },
  },
  args: {
    title: listing.title,
    dealer: listing.dealer,
    location: listing.location,
    stockNumber: listing.stockNumber,
    price: listing.price,
    miles: listing.miles,
    imageUrl: listing.image,
    url: listing.url,
  }
};

export const Default = (args) => ({
  components: { ListingCard },
  props: {
    title: {
      default: args.title,
    },
    dealer: {
      default: args.dealer,
    },
    location: {
      default: args.location,
    },
    stockNumber: {
      default: args.stockNumber,
    },
    price: {
      default: args.price,
    },
    miles: {
      default: args.miles,
    },
    imageUrl: {
      default: args.image,
    },
    url: {
      default: args.url,
    },
  },
  data() {
    return {
      id: listing.id
    }
  },
  template: '<listing-card :id="id" :url="url" :location="location" :stock-number="stockNumber" :title="title" :price="price" :miles="miles" :dealer="dealer" :image-url="imageUrl" />',
});
