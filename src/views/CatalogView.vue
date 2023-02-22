<template>
  <div class="catalog">
    <the-header/>
    <h1>This is a catalog page</h1>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'

export default {
  name: 'HomeView',
  components: {
    TheHeader
  }
}
</script>
