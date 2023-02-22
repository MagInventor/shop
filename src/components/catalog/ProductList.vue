<template>
  <div class="product-list">
    <div class="container">
      <div class="list-default">
        <product-card
          v-for="(product) in products"
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

export default {
  name: 'ProductList',
  components: { ProductCard },
  data() {
    return {
      searchText: '',
      products: [
        {
          image: '1.jpg',
          title: 'Ptaszarnia zwykła',
          price: 100,
          id: 'I1',
          available: true
        },
        {
          image: '2.jpg',
          title: 'Ptaszarnia piękna',
          price: 150,
          id: 'I2',
          available: true
        },
        {
          image: '3.jpg',
          title: 'Ptaszarnia ładna',
          price: 200,
          id: 'I3',
          available: true
        },
        {
          image: '4.jpg',
          title: 'Ptaszarnia apartamenty',
          price: 300,
          id: 'I4',
          available: true
        },
        {
          image: '5.jpg',
          title: 'Psiarnia piękna',
          price: 170,
          id: 'I5',
          available: true
        },
        {
          image: '6.jpg',
          title: 'Psiarnia ładna',
          price: 220,
          id: 'I6',
          available: true
        }
      ]
    }
  },
  computed: {},
  methods: {
    addToCart(data) {
      console.log(data)
    }
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
