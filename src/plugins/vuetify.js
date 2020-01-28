import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
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
})
