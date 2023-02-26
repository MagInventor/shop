<template>
  <div class="like">
    <the-header/>
    <like-products
      :like_data="LIKE"
    />
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import LikeProducts from '@/components/like/LikeProducts'
import {mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    TheHeader, LikeProducts
  },
  props: {},
  data() {},
  computed: {
    ...mapGetters([
      'LIKE'
    ])
  }
}
</script>
