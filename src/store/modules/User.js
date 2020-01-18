export default {
  namespaced: true,
  state: {
    logged: false,
    date: {
      login: null,
      password: null,
      email: null,
      avatar: null
    }

  },
  getters: {
    getContentBar: (state, getters) => {
      return state.contentBar
    }
  },
  mutations: {
    Toggle_Logged (state) {
      state.logged = !state.logged
    },
    Authorization (state, value) {
      state.date.login = value.login
      state.date.email = value.email
      state.date.password = value.password
      state.date.avatar = value.avatar
      state.logged = true
    },
    Logout (state) {
      state.date.email = null
      state.date.password = null
      state.date.login = null
      state.date.avatar = null
      state.logged = false
    }
  },
  actions: {
    authorization ({ commit }, value) {
      commit('Authorization', value)
    },
    logout ({ commit }) {
      commit('Logout')
    },
    toggleLogged ({ commit }) {
      commit('Toggle_Logged')
    }
  }
}
