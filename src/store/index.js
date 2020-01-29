import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'
import appBar from './modules/AppBar.js'
import user from './modules/User.js'
import theme from './modules/Theme.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appBar,
    user,
    theme
  },
  state: {
    dialog: false,
    dialogLogin: false,
    dialogRegister: false
  },
  mutations: {
    Toggle_Dialog (state) {
      state.dialog = !state.dialog
    },
    Toggle_Dialog_Login (state) {
      state.dialogLogin = !state.dialogLogin
    },
    Toggle_Dialog_Register (state) {
      state.dialogRegister = !state.dialogRegister
    }
  },
  actions: {
    toggleDialog ({ commit }) {
      commit('Toggle_Dialog')
    },
    toggleDialogLogin ({ commit }) {
      commit('Toggle_Dialog_Login')
    },
    toggleDialogRegister ({ commit }) {
      commit('Toggle_Dialog_Register')
    }
  }
})
