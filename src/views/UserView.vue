<template>
  <div class="user">
    <the-header/>
    <h1>This is an user page</h1>
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
