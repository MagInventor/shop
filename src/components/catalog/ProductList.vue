<template>
  <div class="product-list">
    <div class="container">
      <product-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        :isExpanded="IS_DESKTOP"
      />
      <div class="list-default">
        <product-card
          v-for="(product) in filteredProducts"
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
import ProductSelect from './ProductSelect'

export default {
  name: 'ProductList',
  components: {
    ProductCard, ProductSelect
  },
  props: {},
  data() {
    return {
      categories: [
        {name: 'Wszystkie', value: 'all'},
        {name: 'Domki dla zwierząt', value: 'house'},
        {name: 'Zwierząta', value: 'animal'},
      ],
      selected: 'Wszystkie',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'IS_MOBILE',
      'IS_DESKTOP'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_LIKE',
      'ADD_TO_CART',
    ]),
    sortByCategories(category) {
      this.sortedProducts = []
      let vm = this
      this.PRODUCTS.filter(function(item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item)
        }
      })
    },
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

.product-select {
  width: 200px;
  height: 26px;
  margin-bottom: 90px;
  padding: 7px 0 0 7px;
  background: #513252;
  color: #ffc18e;
}

.product-select__options {
  color: #513252;
}

.product-select__options p {
  padding: 5px 0;
}
</style>
