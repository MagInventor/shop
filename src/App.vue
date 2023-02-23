<template>
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {},
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ]),
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
  },
  mounted() {
    let vm = this
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP()
        console.log('this is desctop')
      } else {
        vm.SET_MOBILE()
        console.log('this is mobile')
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 980px;
  margin: 0 auto;
}

button {
  background: transparent;
}

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
