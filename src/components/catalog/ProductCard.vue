<template>
  <div class="product-card">
    <div class="img-card">
      <img :src=" require('../../assets/catalog/' + product_data.image) " alt="img" >
      <span
        class="img-card__like"
        @click="addToLike"
      >
        <img :src=" require('../../assets/icons/like.png')" class="img-card__like_transparent like-active">
        <img :src=" require('../../assets/icons/likered.png')" class="img-card__like_choosed">
      </span>
    </div>
    <div class="product-card__info">
      <p class="product-card__info_title">{{ product_data.title }}</p>
      <p class="product-card__info_price">{{ product_data.price }}zł</p>
      <button 
        type="button"
        class="product-card__info_cart" 
        @click="addToCart"
      >
        Do koszyka
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {},
  methods: {
    addToLike() {
      this.$emit('addToLike', this.product_data)

      const CARD_TRANSPARENT = document.querySelectorAll('.img-card__like_transparent')
      const CARD_CHOOSED = document.querySelectorAll('.img-card__like_choosed')
      let itemID = this.product_data.id.substring(1) - 1
     
      CARD_TRANSPARENT[itemID].classList.remove('like-active')
      CARD_CHOOSED[itemID].classList.add('like-active')
    },
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style>
.product-card {
  width: 230px;
  height: 313px;
  margin: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  display: grid;
  grid-template-rows: auto 180px;
}

.img-card {
  width: 100%;
  height: auto;
  position: relative;
}

.img-card img {
  width: 230px;
  height: auto;
}

.img-card__like img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.img-card__like_transparent,
.img-card__like_choosed {
  display: none;
}

.like-active {
  display: block;
}

.product-card__info_title {
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
}

.product-card__info_price {
  font-weight: 400;
  margin: 10px 20px;
  text-align: left;
  font-weight: bold;
  color: #7a4069;
}

.product-card__info_cart {
  width: 190px;
  height: 45px;
  margin-top: 10px;  
  text-transform: uppercase;
  border: 1px solid #707070;
  cursor: pointer;
}

.product-card__info_cart:hover {
  background: #ca4e79;
  border: 1px solid #ca4e79;
  color: #fff;
  font-weight: bold;
}
</style>
