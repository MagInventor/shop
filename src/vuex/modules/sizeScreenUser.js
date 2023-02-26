export default {
  state: {
    isMobile: false,
    isDesktop: true
  },
  mutations: {
    SWITCH_MOBILE: (state) => {
      state.isMobile = true
      state.isDesktop = false
    },
    SWITCH_DESKTOP: (state) => {
      state.isMobile = false
      state.isDesktop = true
    }
  },
  actions: {
    SET_MOBILE({commit}) {
      commit('SWITCH_MOBILE')
    },
    SET_DESKTOP({commit}) {
      commit('SWITCH_DESKTOP')
    }
  },
  getters: {
    IS_MOBILE(state) {
      return state.isMobile
    },
    IS_DESKTOP(state) {
      return state.isDesktop
    }
  }
}
