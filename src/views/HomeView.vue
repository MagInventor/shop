<template>
  <div class="home">
    <the-header/>
    <home-page msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import HomePage from '@/components/main/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader, HomePage
  }
}
</script>
