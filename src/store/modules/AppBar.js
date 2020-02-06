export default {
  namespaced: true,
  state: {
    drawer: false,
    contentBar: {
      prominent: false,
      img: 'https://picsum.photos/1920/1080?random',
      color: 'transparent',
      title: 'Article'
    }
  },
  getters: {
    getContentBar: (state, getters) => {
      return state.contentBar
    }
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
