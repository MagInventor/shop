<template>
  <div class="like-products">
    <div class="container">
      <h1>Życzenia</h1>
      <like-item
        v-for="(item, index) in like_data"
        :key = "item.id"
        :like_item_data="item"
        @deleteFromLike="deleteFromLike(index)"
        @addToCart="addToCart(item)"
      />
    </div>
  </div>
</template>

<script>
import LikeItem from './LikeItem'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'LikeProducts',
  components: {
    LikeItem
  },
  props: {
    like_data: {
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
      'LIKE'
    ]),
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_LIKE',
      'ADD_TO_CART'
    ]),
    deleteFromLike(index) {
      this.DELETE_FROM_LIKE(index)
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
}
</script>
