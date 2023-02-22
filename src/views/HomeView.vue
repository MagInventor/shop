<template>
  <div class="home">
    <the-header/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader, HelloWorld
  }
}
</script>
