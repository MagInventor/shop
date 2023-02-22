<template>
  <div class="blog">
    <the-header/>
    <h1>This is a blog page</h1>
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
