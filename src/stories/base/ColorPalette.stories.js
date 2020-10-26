import { colorMap } from '../../utils/colors.js';

export default {
  title: 'Base/Colors',
};

export const palette = () => ({
  data: () => ({
    colors: colorMap(),
  }),
  template: `
<div class="p-6">
  <div v-for="color in colors" class="mb-6">
    <h3 class="capitalize font-semibold mb-2 text-lg text-gray-900">{{ color.name }}</h3>
    <div class="flex flex-wrap">
      <div v-for="variation in color.variations" class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex mb-6">
        <div :class="variation.bg" class="border-solid border border-gray-300 shadow-md rounded p-3 h-20 w-20 mr-3"></div>
        <div class="flex flex-col flex-grow items-start justify-center space-y-1">
          <div class="capitalize font-bold text-sm text-gray-700">{{ color.name }} {{ variation.color }}</div>
          <div class="font-mono text-xs text-pink-600">.{{ variation.bg }}</div>
          <div class="font-mono text-xs text-pink-400">{{ variation.hex }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
});
