<template>
  <header>
    <div class="heading">
      <div class="container">
        <div>
          <router-link to="/" class="logo">
              <img class="logo-img" src="./assets/logo.png" alt="logo">
              <span>OM</span>
          </router-link>
        </div>
        <div class="head-elements">
          <form class="head-elements__search">
            <input id="search" type="search" name="search" placeholder="Czego shukasz?" autocomplete="off">
             <button class="search">
               <img alt="Search" class="head-elements__search_img" src="./assets/icons/search.png">
             </button>
          </form>
          <router-link to="/like" class="head-elements__like">
            <img alt="Like" class="head-elements__like_img" src="./assets/icons/like.png">
          </router-link>
          <router-link to="/cart" class="head-elements__cart">
            <img alt="Cart" class="head-elements__cart_img" src="./assets/icons/cart.png">
          </router-link>
          <router-link to="/user" class="head-elements__user">
            <img alt="User" class="head-elements__user_img" src="./assets/icons/user.png">
          </router-link>
        </div>
      </div>
    </div>
    <nav>
      <div class="container">
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Katalog</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/contacts">Contacts</router-link>
      </div>
    </nav>
  </header>
  <router-view/>
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

.head-elements {
  display: flex;
  flex-direction: row;
  justify-self: end;
}

.logo {
  width: 82px;
  padding: 10px 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #000;
  font-weight: 100;
  cursor: pointer;
}

.logo-img{
  width: 40px;
  height: 40px;
}

span {
  padding-top: 16px;
  font-size: 26px;
}

#search {
  height: 30px;
}

input[type=search] {
      width: 226px;
  border: 1px solid #513252;
  padding-left: 7px;
}

.head-elements__search {
  height: 50px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.head-elements__search button {
  width: 30px;
  height: 30px;
  background: transparent;
  border: transparent;
  cursor: pointer;
}

.head-elements__search button:hover {
  background: #ffc18e;
  border-radius: 0 3px 3px 0;
}

.head-elements__like,
.head-elements__cart,
.head-elements__user {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.head-elements__like:hover,
.head-elements__cart:hover,
.head-elements__user:hover {
background: #ffc18e;
}

.head-elements__search_img,
.head-elements__like_img,
.head-elements__cart_img,
.head-elements__user_img {
  width: 20px;
  height: 20px;
}

</style>
