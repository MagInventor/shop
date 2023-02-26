import axios from 'axios'

export default {
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE:(state, products) => {
      state.products = products
      state.products.filter(function(item) {
        item.currency = 'zł'
      })
    },
    SET_PRODUCTS_CURRENCY:(state, currency) => {
      let currentCurrency = (currency === 'PLNUSD') 
        ? '$'
        : (currency === 'PLNEUR') 
          ? 'EUR'
          : 'zł'
      console.log(currentCurrency)
      state.products.map(function(item) {
        item.currency = currentCurrency
      })
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_PRODUCTS_CURRENCY({commit}, currency) {
      commit('SET_PRODUCTS_CURRENCY', currency)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    }
  }
}
