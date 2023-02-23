<template>
  <div class="product-list">
    <div class="container">
      <div class="list-default">
        <product-card
          v-for="(product) in PRODUCTS"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
          @addToLike="addToLike"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'ProductList',
  components: { ProductCard },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_LIKE',
      'ADD_TO_CART',
    ]),
    addToLike(data) {
      this.ADD_TO_LIKE(data)
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('Data arrived')
      }
    })
  }
}
</script>

<style>
  .list-default {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

</style>
