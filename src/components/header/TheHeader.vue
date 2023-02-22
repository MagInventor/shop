<template>
  <header>
    <header-elements/>
    <nav-menu/>
  </header>
</template>

<script>
import HeaderElements from './HeaderElements'
import NavMenu from './NavMenu'

export default {
  name: 'TheHeader',
  components: {
    HeaderElements, NavMenu
  }
}
</script>

<style>
header {
  margin-bottom: 20px;
  height: 110px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.heading .container {
  display: grid;
  grid-template-columns: 120px auto;
  align-items: center;
}
</style>
