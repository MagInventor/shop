<template>
  <nav>
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/catalog">Katalog</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  components: {}
}
</script>

<style>
nav {
  height: 45px;
  background: #513252;
}

nav .container {
  display: flex;
  justify-content: center;
}

nav a {
  padding: 13px 15px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}

nav a:hover {
  color: #ffc18e;
}

nav a.router-link-exact-active {
  color: #ffc18e;
}
</style>
