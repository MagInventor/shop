import { createStore } from 'vuex'
// import axios from 'axios'
import allProducts from './modules/allProducts'
import cartProductsUser from './modules/cartProductsUser'
import likeProductsUser from './modules/likeProductsUser'
import sizeScreenUser from './modules/sizeScreenUser'

const store = createStore({
  modules: {
    allProducts,
    cartProductsUser,
    likeProductsUser,
    sizeScreenUser
  }
})

export default store
