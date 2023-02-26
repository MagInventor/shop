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
            max="10000"
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
      quote: 1,
      oldQuote: 1
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'IS_MOBILE',
      'IS_DESKTOP',
      'QUOTE'
    ]),
    filteredProducts() {
      this.changePrice()

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
      'CHOOSE_CURRENCY'
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
      let vm = this

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
    },
    changeCurrency() {
      return (this.CHOOSE_CURRENCY / 1)  ? this.CHOOSE_CURRENCY : 1
    },
    changePrice() {
      this.PRODUCTS.map(item => {
        item.price = Math.round(item.price / this.oldQuote * this.QUOTE * 100) / 100
      })
      this.oldQuote = this.QUOTE
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
  padding: 20px 21px 30px 16px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 305px auto 229px;
  align-items: center;
}

.list-default {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 230px);
  grid-gap: 30px 20px;
  justify-content: center;
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


@media (max-width: 979px) {
 .list-default {
    grid-template-columns: repeat(3, 230px);
  }

  .product-setup {
    padding: 20px 21px 30px 16px;
    grid-template-columns: repeat(3, 230px);
  }
    .list-default {
    grid-template-columns: repeat(2, 230px);
  }
  
  .container .product-setup {
    margin-top: 30px;
    display: grid;
    justify-content: center;
  }

  .product-setup {
    background: transparent;
    height: 120px;
    padding: 46px 0 0 0;
    grid-template-rows: repeat(3, 30px);
  }

  .range-slider {
    margin: auto 0px;
  }

  .product-select__options {
    margin-left: 206px;
    margin-top: -30px;
    color: #513252;
  }

  .range-values {
    margin-top: 50px;
    text-align: left;
  }

  .range-slider input[type=range] {
    width: 205px;
  }
}

@media (max-width: 767px) {

}

@media (max-width: 479px) {
  .list-default {
    grid-template-columns: repeat(1, 230px);
  }
}
</style>
