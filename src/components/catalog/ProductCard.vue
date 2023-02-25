<template>
  <div class="product-card">
    <div class="img-card">
      <img :src=" require('../../assets/catalog/' + product_data.image) " alt="img" >
      <span
        class="img-card__like"
        @click="addToLike"
      >
        <img :src=" require(`../../assets/icons/like${likeRed}.png`)">
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
import {mapGetters} from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product_data: {
      type: Object,
      default() {
        return {
          likeActive: '',
          likered: ' '
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'LIKE'
    ]),
    likeRed() {
      return (this.LIKE.length && this.LIKE.findIndex(item => item.id === this.product_data.id) !== -1) ? 'red' : ''
    }
  },
  methods: {
    addToLike() {
      this.$emit('addToLike', this.product_data)
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
