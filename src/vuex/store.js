import { createStore } from 'vuex'
// import axios from 'axios'
import allProducts from './modules/allProducts'
import cartProductsUser from './modules/cartProductsUser'

const store = createStore({
  modules: {
    allProducts,
    cartProductsUser
  }
})

export default store
