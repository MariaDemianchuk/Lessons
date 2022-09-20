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
    path: "/login",
    name: "LogIn",
    component: () => import("../components/auth/LogIn.vue"),
  },
  {
    path: "/registration",
    name: "SignUp",
    component: () => import("../components/auth/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
