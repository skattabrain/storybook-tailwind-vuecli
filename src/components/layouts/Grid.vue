<template>
  <div class="experiment grid h-screen bg-gray-200 overflow-y-auto">
    <div class="header inline-flex items-center p-2">
      Header
    </div>
    <div class="sidebar p-2 md:overflow-y-auto">
      <div class="max-h-full overflow-y-scroll bg-gray-50 border-gray-100 border-1 rounded">
        <ul>
          <li><a href="#">Menu Option #1</a></li>
          <li><a href="#">Menu Option #2</a></li>
          <li><a href="#">Menu Option #3</a></li>
          <li><a href="#">Menu Option #4</a></li>
          <li><a href="#">Menu Option #5</a></li>
          <li><a href="#">Menu Option #6</a></li>
          <li><a href="#">Menu Option #7</a></li>
          <li><a href="#">Menu Option #8</a></li>
          <li><a href="#">Menu Option #9</a></li>
          <li><a href="#">Menu Option #10</a></li>
          <li><a href="#">Menu Option #11</a></li>
          <li><a href="#">Menu Option #12</a></li>
          <li><a href="#">Menu Option #13</a></li>
          <li><a href="#">Menu Option #14</a></li>
          <li><a href="#">Menu Option #15</a></li>
          <li><a href="#">Menu Option #16</a></li>
          <li><a href="#">Menu Option #17</a></li>
          <li><a href="#">Menu Option #18</a></li>
          <li><a href="#">Menu Option #19</a></li>
          <li><a href="#">Menu Option #20</a></li>
        </ul>
      </div>
    </div>
    <div class="content md:overflow-y-auto">
      <ListingCards :listings="listings" />
    </div>
    <div class="footer text-gray-400 text-xs py-1 px-2">
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
		grid-template-rows: 80px auto 1fr auto;
		grid-template-areas:
				"header"
				"sidebar"
				"content"
				"footer";

		@screen md {
			grid-template-columns: 200px 1fr;
			grid-template-rows: auto 1fr auto;
			grid-template-areas:
				"header		header"
				"sidebar	content"
				"footer 	footer";
		}

		@screen lg {
			grid-template-columns: 300px 1fr;
		}
	}

	.header {
		grid-area: header;
	}

	.sidebar {
		grid-area: sidebar;

		ul {
			li {
				@apply border-b border-gray-200;

				a {
					@apply text-purple-500 p-2 block;

					&:hover {
						@apply bg-white;
					}
				}
			}
		}
	}

	.content {
		grid-area: content;

		p {
			@apply mb-4;
		}
	}

	.footer {
		grid-area: footer;
	}
</style>
