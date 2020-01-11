import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#F44336',
        secondary: '#b0bec5'
      },
      dark: {
        primary: '#F44336',
        secondary: '#b0bec5'
      }
    }
  }
})
