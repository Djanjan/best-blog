export default {
  namespaced: true,
  state: {
    drawer: true
  },
  mutations: {
    Toggle_Drawer (state) {
      state.drawer = !state.drawer
    },
    Set_Drawer (state, value) {
      state.drawer = value
    }
  },
  actions: {
    setDrawer ({ commit }, value) {
      commit('Set_Drawer', value)
    },
    toggleDrawer ({ commit }) {
      commit('Toggle_Drawer')
    }
  }
}
