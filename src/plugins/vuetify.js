import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import light from './vuetify/light.js'
import dark from './vuetify/dark.js'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: { light, dark },
    options: {
      customProperties: true
    }
  }
})

/* export default new Vuetify({
  theme: {
    themes: { light, dark }
  }
}) */

/* export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FF5722',
        secondary: '#b0bec5'
      },
      dark: {
        primary: '#FF5722',
        secondary: '#b0bec5'
      }
    }
  }
}) */
