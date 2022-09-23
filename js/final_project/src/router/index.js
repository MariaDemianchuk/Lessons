import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/start_page/StartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: StartPage,
  },
  {
    path: "/user",
    name: "UserPage",
    component: () => import("../views/user_page/UserPage.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("userData")) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
