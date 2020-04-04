import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'
import user from './modules/User.js'
import theme from './modules/Theme.js'
import router from './modules/Router.js'
import error from './modules/Error.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    theme,
    router,
    error
  }
})
