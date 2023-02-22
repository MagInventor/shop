<template>
  <div class="cart">
    <the-header/>
    <cart-products
      :cart_data="CART"
    />
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import CartProducts from '@/components/cart/CartProducts'
import {mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    TheHeader, CartProducts
  },
  props: {},
  data() {},
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>
