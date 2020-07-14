import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "./views/Login"),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register"),
    },
    {
      path: "/post",
      name: "post",
      component: () => import(/* webpackChunkName: "Post" */ "./views/Post"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "Profile" */ "./views/Profile"),
    },
  ],
});
