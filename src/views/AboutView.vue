<template>
  <div class="about">
    <the-header/>
    <h1>This is an about page</h1>
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
