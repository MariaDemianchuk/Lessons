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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
