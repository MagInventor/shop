<template>
  <div class="product-list">
    <div class="container">
      <div class="list-default">
        <product-card
          v-for="(product) in PRODUCTS"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
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
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    addToCart(data) {
      console.log(data)
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

</style>
