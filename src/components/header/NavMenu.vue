<template>
  <nav>
    <div class="container">
      <div class="header-tab-menu" id="tab">
        <button class="btn-tab-menu">
           <img class="menu-img" src="../../assets/icons/menu.png" alt="menu">
        </button>
      </div>
      <div class="navmenu">
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Katalog</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/contacts">Contacts</router-link>
      </div>
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
.navmenu {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}

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

.btn-tab-menu {
  display: none;
  background: transparent;
  border: transparent;
  cursor: pointer;
}

@media (max-width: 979px) {

}

@media (max-width: 767px) {
  .navmenu {
/*    display: none;*/
  }

  nav .container {
    display: grid;
    justify-content: start;
  }
  .header-tab-menu {
    width: 25px;
    height: 25px;
    margin: 10px 17px;
  }

  .btn-tab-menu {
    width: 25px;
    height: 25px;
    background: #fff;
/*    display: block;*/
    border-radius: 2px;
  }

  .menu-img {
    width: 25px;
    height: 24px;
  }
}

@media (max-width: 479px) {

}

</style>
