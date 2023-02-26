import axios from 'axios'

export default {
  state: {
    products: [],
    allProducts: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE:(state, products) => {
      state.products = products
      state.allProducts = products
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
      state.products.map(function(item) {
        item.currency = currentCurrency
      })
    },
    SET_SEARCH_PRODUCTS:(state, text) => {
      state.products = [...state.allProducts]
      let searchProducts = []
      
      state.products.map(item => {
        item.title.split(' ').filter(el  => {
          if (el.toLowerCase() === text.toLowerCase()) {
            searchProducts.push(item)
          }
        })
      })
      state.products = searchProducts
      return searchProducts;
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
    },
    SHOW_SEARCH_TEXT({commit}, text) {
      commit('SET_SEARCH_PRODUCTS', text)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    }
  }
}
