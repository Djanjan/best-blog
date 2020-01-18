import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'
import appBar from './modules/AppBar.js'
import user from './modules/User.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appBar,
    user
  },
  state: {
    dialog: false
  },
  mutations: {
    Toggle_Dialog (state) {
      state.dialog = !state.dialog
    }
  },
  actions: {
    toggleDialog ({ commit }) {
      commit('Toggle_Dialog')
    }
  }
})
