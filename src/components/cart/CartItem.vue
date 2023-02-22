<template>
  <div class="cart-item">
    <div class="img-card">
      <img 
        class="cart-item__img" 
        :src=" require('../../assets/catalog/' + cart_item_data.image) " alt=""
      >
    </div>
    <div class="cart-item__info">
      <p class="cart-item__info_title">{{cart_item_data.title}}</p>
      <p class="cart-item__info_price">{{cart_item_data.price}}zł</p>
    </div>
    <div class="cart-item__quantity"> Ilość {{cart_item_data.quantity || 1}}</div>
    <button
      class="cart-item__info_delete"
      @click="deleteFromCart"
    >
      Usuń
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  }
  // ,
  // mounted() {
  //   const cartItemData = this.cart_item_data
  //   cartItemData.quantity = 1
  // }
}
</script>

<style>
.cart-item__img {
  max-width: 230px;
}


.cart-item {
  width: 230px;
  height: 350px;
  margin: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
}

.img-card {
  width: 100%;
  height: auto;
}

.cart-item__img {
  width: 230px;
  height: auto;
}

.cart-item__info_title {
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
}

.cart-item__info_price {
  font-weight: 400;
  margin: 10px 20px;
  text-align: left;
  font-weight: bold;
  color: #7a4069;
}

.cart-item__info_delete {
  width: 190px;
  height: 45px;
  margin-top: 10px;  
  text-transform: uppercase;
  border: 1px solid #707070;
  cursor: pointer;
}

.cart-item__info_delete:hover {
  background: #ca4e79;
  border: 1px solid #ca4e79;
  color: #fff;
  font-weight: bold;
}
</style>
