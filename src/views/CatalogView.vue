<template>
  <div class="catalog">
    <the-header/>
    <h1>Twoje zwierzę, nasza pasja</h1>
    <product-list/>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import ProductList from '@/components/catalog/ProductList'

export default {
  name: 'HomeView',
  components: {
    TheHeader, ProductList
  }
}
</script>
