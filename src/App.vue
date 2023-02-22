<template>
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

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
