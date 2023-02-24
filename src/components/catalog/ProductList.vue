<template>
  <div class="product-list">
    <div class="container">
      <div class="product-setup">
        <product-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
          :isExpanded="IS_DESKTOP"
        />
        <div class="range-slider">
          <input
              type="range"
              min="0"
              max="1000"
              step="50"
              v-model.number="minPrice"
              @change="setRangeSlider"
          >
          <input
              type="range"
              min="0"
              max="10000"
              step="50"
              v-model.number="maxPrice"
              @change="setRangeSlider"
          >
        </div>
        <div class="range-values">
          <p>Min: {{minPrice}}</p>
          <p>Max: {{maxPrice}}</p>
        </div>
      </div>
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
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
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
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories()
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected === category.name;
          return e.category === category.name
        })
      }
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
        this.sortByCategories()
      }
    })
  }
}
</script>

<style>
.product-setup {
  background: aliceblue;
  margin-top: 15px;
  padding: 20px 50px 30px 50px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 305px auto 229px;
  align-items: center;
}

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

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg, .range-slider input[type=range] {
  width: 230px;
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}

.range-values {
  float: left;
}
</style>
