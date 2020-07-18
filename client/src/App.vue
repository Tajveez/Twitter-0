<template>
  <div id="app" class="bg-gray-300">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- tutorials -->
    <!-- https://www.youtube.com/watch?v=bQU-jPyQJ4A -->
    <!-- https://www.youtube.com/watch?v=JnEH9tYLxLkgi -->

    <Header />
    <!-- <div class="bg-gray-300 flex justify-center"> -->
    <div class>
      <router-view class="column" />
    </div>
    <RightSidebar class="three wide column" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";
// import "@/assets/styles/output.css";

export default {
  name: "App",
  components: {
    Header,
    RightSidebar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap");
#app {
  font-family: "Maven Pro", sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: "Dancing Script", cursive; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
/* .content-area {
  display: flex;
} */
body {
  background-color: #f7f7f7;
  /* padding-top: 50px;
  padding-bottom: 50px; */
}

.is-danger {
  color: #9f3a38;
}
</style>
