export default {
  namespaced: true,
  state: {
    drawer: true
  },
  mutations: {
    Set_Drawer (state) {
      // console.log(state.drawer = !state.drawer)
      state.drawer = !state.drawer
    }
  },
  actions: {
    setDrawer ({ commit }, drawer) {
      commit('Set_Drawer', drawer)
    }
  }
}
