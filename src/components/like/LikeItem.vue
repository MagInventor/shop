<template>
  <div class="like-container">
    <div class="like-item">
      <div class="img-card">
        <img 
          class="like-item__img" 
          :src=" require('../../assets/catalog/' + like_item_data.image) " alt=""
        >
      </div>
      <div class="like-item__info">
        <p class="like-item__info_title">{{like_item_data.title}}</p>
        <p class="like-item__info_price">{{like_item_data.price}}{{like_item_data.currency}}</p>
      </div>
    </div>
    <button
      class="like-item__info_delete"
      @click="deleteFromLike"
    >
      Usuń
    </button>
    <button
      class="like-item__info_to_cart"
      @click="addToCart"
    >
      Do koszyka
    </button>
  </div>
</template>

<script>
export default {
  name: 'LikeItem',
  props: {
    like_item_data: {
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
    deleteFromLike() {
      this.$emit('deleteFromLike')
    },
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style>
.like h1 {
  margin-bottom: 20px;
}

.like-container {
  width: 100%;
  height: 340px;
  margin-bottom: -1px;
  border: 1px solid #bbb;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  align-items: center;
}

.like-item__img {
  max-width: 230px;
}


.like-item {
  width: 230px;
  height: 300px;
  margin: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
}

.img-card {
  width: 100%;
  height: auto;
}

.like-item__img {
  width: 230px;
  height: auto;
}

.like-item__info_title {
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
}

.like-item__info_price {
  font-weight: 400;
  margin: 10px 20px;
  text-align: left;
  font-weight: bold;
  color: #7a4069;
}

.like-item__info_delete,
.like-item__info_to_cart {
  width: 190px;
  height: 45px;
  margin-top: 20px;
  display: grid;
  justify-content: center;
  justify-self: center;
  align-content: center;
  text-transform: uppercase;
  border: 1px solid #707070;
  cursor: pointer;
}

.like-item__info_to_cart {
  border: 2px solid #7a4069;
}

.like-item__info_delete:hover {
  background: #ca4e79;
  border: 1px solid #ca4e79;
  color: #fff;
  font-weight: bold;
}

.like-item__info_to_cart:hover {
  background: #ffc18e;
  border: 2px solid #ffc18e;
  color: #fff;
  font-weight: bold;
}
</style>
