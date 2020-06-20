<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Source+Sans+Pro&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Dancing Script", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
