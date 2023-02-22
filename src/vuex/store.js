import { createStore } from 'vuex'
import axios from 'axios'
import allProducts from './modules/allproducts'

const store = createStore({
  modules: {
    allProducts
  }
})

export default store
