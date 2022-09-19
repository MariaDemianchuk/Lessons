import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/start_page/StartPage.vue";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";

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
    component: LogIn,
  },
  {
    path: "/registration",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
