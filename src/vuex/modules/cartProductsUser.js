// import { createStore } from 'vuex'
// import axios from 'axios'

export default {
  state: {
    cart: []
  },
  mutations: {
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false
        state.cart.map(function(item) {
          if (item.id === product.id) {
            isProductExists = true
            if (!item.quantity) {
              item.quantity = 1
            }
            item.quantity++
          } 
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity > 1
        ? state.cart[index].quantity--
        : state.cart[index].quantity = 0
    },
    DECREMENT: (state, index) => {
      state.cart[index].quantity
        ? state.cart[index].quantity++
        : state.cart[index].quantity = 2
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  getters: {
    CART(state) {
      return state.cart
    }
  }
}
