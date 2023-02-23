<template>
  <div class="cart-products">
    <div class="container">
      <h1>Koszyk</h1>
      <cart-item
        v-for="(item, index) in cart_data"
        :key = "item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
    <div class="cart-total">
      <div class="container">
        <p class="cart-total__name">Total:</p>
        <p class="cart-total__price">{{cartTotalCost}}</p>
      </div>
    </div>
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
    ]),
    cartTotalCost() {
      if (!this.cart_data.length) 
        return 0

      if (this.cart_data.length === 0) 
        return this.cart_data.price

      const result = []
      
      for (let item of this.cart_data) {
        item.quantity 
          ? result.push(item.price * item.quantity) 
          : result.push(item.price)    
      }

      return result.reduce((sum, el) => sum + el)
    }
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

<style>
.cart-total .container {
  height: 100px;
  margin: 20px auto;
  background: #513252;
  border: 1px solid #513252;
  color: #fff;
  display: grid;
  justify-self: center;
  align-content: center;
}

.cart-total__name {
  padding-top: 10px;
}

.cart-total__price {
  font-size: 20px;
  font-weight: bold;
  line-height: 2;
}
</style>
