<template>
  <div class="experiment">
    <div class="header">
      Header
    </div>
    <div class="sidebar bg-teal-400">
      SideBar
    </div>
    <div class="content">
      <ListingCards :listings="listings" />
    </div>
    <div class="footer text-gray-400 text-xs p-1">
      Copyright &copy; Some Company
    </div>
  </div>
</template>

<script>
import ListingCards from '@/components/ListingCards.vue';
import listings from '@/mocks/listings';

export default {
	components: {
		ListingCards
	},
	data: () => ({
	listings,
  }),
}
</script>
<style lang="css" scoped>
	.experiment {
		@apply h-screen bg-gray-200 overflow-y-auto;
		display: grid;
		grid-template-rows: 80px auto 1fr auto;
		grid-template-areas:
				"header"
				"sidebar"
				"content"
				"footer";

		@screen md {
			grid-template-columns: 200px 1fr;
			grid-template-rows: auto 1fr;
			grid-template-areas:
				"header		header"
				"sidebar	content"
				"footer 	footer";
		}

		@screen lg {
			grid-template-columns: 300px 1fr;
		}
	}

	.sidebar {
		grid-area: sidebar;
		@apply bg-blue-300 p-2;
	}
	.header {
		grid-area: header;
		@apply bg-red-300 inline-flex items-center p-2;
	}
	.content {
		grid-area: content;

		@screen md {
			@apply overflow-y-auto;
		}

		p {
			@apply mb-4;
		}
	}
	.footer {
		grid-area: footer;
	}
</style>
