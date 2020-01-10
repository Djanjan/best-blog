import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'
import appBar from './modules/AppBar.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appBar
  }
})
