export default {
  state: {
    like: []
  },
  mutations: {
    SET_LIKE: (state, product) => {
      if (state.like.length) {
        let isProductExists = false
        state.like.map(function(item) {
          if (item.id === product.id) {
            isProductExists = true
          } 
        })
        if (!isProductExists) {
          state.like.push(product)
        }
      } else {
        state.like.push(product)
      }
    },
    REMOVE_FROM_LIKE: (state, index) => {
      state.like.splice(index, 1)
    }
  },
  actions: {
    ADD_TO_LIKE({commit}, product) {
      commit('SET_LIKE', product)
    },
    DELETE_FROM_LIKE({commit}, index) {
      commit('REMOVE_FROM_LIKE', index)
    }
  },
  getters: {
    LIKE(state) {
      return state.like
    }
  }
}
