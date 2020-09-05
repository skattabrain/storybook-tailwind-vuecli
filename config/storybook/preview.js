import './storybook.css'
import '../../src/styles.css'
import { addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { colorMapFlat } from '../../src/utils/colors.js'
import Vue from 'vue'
import ScreenSizeIndicator from '@/components/utils/ScreenSizeIndicator.vue';
require('typeface-open-sans')

const componentWidths = [
  {
    value: 'w-1/4',
    title: '25% Width'
  },
  {
    value: 'w-2/4',
    title: '50% Width'
  },
  {
    value: 'w-3/4',
    title: '75% Width'
  },
  {
    value: 'w-full',
    title: '100% Width'
  },
]

export const globalTypes = {
  componentWidth: {
    name: 'Component Width',
    description: 'Set a width for the component to render in',
    defaultValue: 'w-full',
    toolbar: {
      icon: 'arrowrightalt',
      items: componentWidths
    }
  }
}

addParameters({
  backgrounds: {
    default: 'bg-gray-200',
    values: colorMapFlat(),
  },
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
})

export const parameters = {
  controls: { hideNoControlsWarning: true },
}

const componentWidthObservable = Vue.observable({ componentWidth: null });

const componentWidthProvider = (Story, context) => {
  componentWidthObservable.componentWidth = context.globals.componentWidth

  return {
    components: {
      ScreenSizeIndicator
    },
    computed: {
      componentWidth: () => {
        return componentWidthObservable.componentWidth
      }
    },
    template: '<div class="h-screen"><div :class="componentWidth"><story /></div><ScreenSizeIndicator class="absolute bottom-0 right-1" /></div>'
  }
}

export const decorators = [ componentWidthProvider ]
