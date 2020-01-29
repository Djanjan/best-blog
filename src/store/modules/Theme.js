export default {
  namespaced: true,
  state: {
    navigationDrawer: {
      src: undefined,
      color: 'primary'
    },
    appBar: {
      isMin: false,
      src: undefined,
      color: undefined
    }
  },
  mutations: {
    Set_Navigation_Drawer (state, value) {
      if (value.src !== null) {
        state.navigationDrawer.src = value.src
      }
      if (value.color !== null) {
        state.navigationDrawer.color = value.color
      }
    },
    Set_App_Bar (state, value) {
      if (value.src !== null) {
        state.appBar.src = value.src
      }
      if (value.color !== null) {
        state.appBar.color = value.color
      }
      if (value.isMin !== null) {
        state.appBar.isMin = value.isMin
      }
    }
  },
  actions: {
    setNavigationDrawer ({ commit }, value) {
      commit('Set_Navigation_Drawer', value)
    },
    setAppBar ({ commit }, value) {
      commit('Set_App_Bar', value)
    }
  }
}
