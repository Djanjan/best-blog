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
    },
    Toggle_ContentBar (state) {
      state.contentBar.prominent = !state.contentBar.prominent
    },
    Update_ContentBar (state, contentBar) {
      if (contentBar.img !== null) {
        state.contentBar.img = contentBar.img
      }
      if (contentBar.color !== null) {
        state.contentBar.color = contentBar.color
      }
      if (contentBar.title !== null) {
        state.contentBar.title = contentBar.title
      }
    }
  },
  actions: {
    setDrawer ({ commit }, value) {
      commit('Set_Drawer', value)
    },
    toggleDrawer ({ commit }) {
      commit('Toggle_Drawer')
    },
    toggleContentBar ({ commit }) {
      commit('Toggle_ContentBar')
    },
    updateContentBar ({ commit }, contentBar) {
      commit('Update_ContentBar', contentBar)
    }
  }
}
