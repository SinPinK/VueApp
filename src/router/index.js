import Vue from "vue";
import Router from "vue-router";
import About from "../components/About.vue";
import Film from "../components/Film.vue";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";
import Detail from "../components/Filmdetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/film",
      name: "Film",
      component: Film
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/Profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/filmdetail",
      name: "Detail",
      component: Detail
    }
  ]
});
