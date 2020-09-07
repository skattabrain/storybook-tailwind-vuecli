import './storybook.css'
import '../../src/styles/index.css'
import { addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { colorMapFlat } from '../../src/utils/colors.js'
import Vue from 'vue'
import ScreenSizeIndicator from '@/components/utils/ScreenSizeIndicator.vue';
require('typeface-open-sans')
require('typeface-nunito-sans')
require('typeface-noto-sans')
require('typeface-source-sans-pro')
require('typeface-roboto')
require('typeface-lato')
require('typeface-quattrocento')

const fontSelections = [
  {
    value: '',
    title: 'Default Stack'
  },
  {
    value: 'font-nunito-sans',
    title: 'Nunito Sans'
  },
  {
    value: 'font-noto-sans',
    title: 'Noto Sans'
  },
  {
    value: 'font-open-sans',
    title: 'Open Sans'
  },
  {
    value: 'font-source-sans-pro',
    title: 'Source Sans Pro'
  },
  {
    value: 'font-roboto',
    title: 'Roboto'
  },
  {
    value: 'font-lato',
    title: 'Lato'
  },
  {
    value: 'font-quattrocento',
    title: 'Quattrocento'
  },
]

const componentPaddings = [
  {
    value: 'p-0',
    title: 'No Padding'
  },
  {
    value: 'p-1',
    title: '.25rem'
  },
  {
    value: 'p-2',
    title: '.5rem'
  },
  {
    value: 'p-3',
    title: '.75rem'
  },
  {
    value: 'p-4',
    title: '1rem'
  },
  {
    value: 'p-5',
    title: '1.25rem'
  },
  {
    value: 'p-6',
    title: '1.5rem'
  },
]

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
  fontSelection: {
    name: 'Font Selection',
    description: 'Set a font for the component to render in',
    defaultValue: '',
    toolbar: {
      icon: 'paragraph',
      items: fontSelections
    }
  },
  componentWidth: {
    name: 'Component Width',
    description: 'Set a width for the component to render in',
    defaultValue: 'w-full',
    toolbar: {
      icon: 'arrowrightalt',
      items: componentWidths
    }
  },
  componentPadding: {
    name: 'Component Padding',
    description: 'Set a padding for the component to render in',
    defaultValue: 'p-0',
    toolbar: {
      icon: 'component',
      items: componentPaddings
    }
  },
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

const fontSelectionObservable = Vue.observable({ fontSelection: null });
const fontSelectionProvider = (Story, context) => {
  fontSelectionObservable.fontSelection = context.globals.fontSelection

  return {
    computed: {
      fontSelection: () => {
        return fontSelectionObservable.fontSelection
      }
    },
    template: '<div :class="fontSelection"><story /></div>'
  }
}

const componentPaddingObservable = Vue.observable({ componentPadding: null });
const componentPaddingProvider = (Story, context) => {
  componentPaddingObservable.componentPadding = context.globals.componentPadding

  return {
    computed: {
      componentPadding: () => {
        return componentPaddingObservable.componentPadding
      }
    },
    template: '<div :class="componentPadding"><story /></div>'
  }
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
    template: '<div><div :class="componentWidth"><story /></div><ScreenSizeIndicator /></div>'
  }
}

export const decorators = [ fontSelectionProvider, componentWidthProvider, componentPaddingProvider ]
