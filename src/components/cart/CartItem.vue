<template>
  <div class="cart-container">
    <div class="cart-item">
      <div class="img-card">
        <img 
          class="cart-item__img" 
          :src=" require('../../assets/catalog/' + cart_item_data.image) " alt=""
        >
      </div>
      <div class="cart-item__info">
        <p class="cart-item__info_title">{{cart_item_data.title}}</p>
        <p class="cart-item__info_price">{{cart_item_data.price}} zł</p>
      </div>
    </div>
    <div class="cart-item__quantity">
      <p>Ilość</p>
      <p class="cart-item__quantity_info">
        <span>
          <button class="cart-item__quantity_add" @click="incrementItem">-</button>
          <span class="cart-item__quantity_number">{{cart_item_data.quantity || 1}}</span>
          <button class="cart-item__quantity_add" @click="decrementItem">+</button>
        </span>
      </p>
    </div>
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
    incrementItem() {
      this.$emit('incrementItem')
    },
    decrementItem() {
      this.$emit('decrementItem')
    },
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
.cart h1 {
  margin-bottom: 20px;
}

.cart-container {
  width: 100%;
  height: 340px;
  margin-bottom: -1px;
  border: 1px solid #bbb;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}

.cart-item__img {
  max-width: 230px;
}


.cart-item {
  width: 230px;
  height: 300px;
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

.cart-item__quantity_info {
  height: 30px;
  display: grid;
  justify-items: center;
  align-content: center;
}

button.cart-item__quantity_add {
  width: 30px;
  height: 30px;
  background: #ffc1be;
  border: transparent;
  cursor: pointer;
}

.cart-item__quantity_number {
  margin: 0 10px;
  font-size: 20px;
}

.cart-item__info_delete {
  width: 190px;
  height: 45px;
  display: grid;
  justify-content: center;
  justify-self: center;
  align-content: center;
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
