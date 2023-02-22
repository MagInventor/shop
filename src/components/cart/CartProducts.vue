<template>
  <div 
    class="cart-products" 
  >
    <h1>Koszyk</h1>
    <cart-item
      v-for="(item, index) in cart_data"
      :key = "item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from './CartItem'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'CartProducts',
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>
