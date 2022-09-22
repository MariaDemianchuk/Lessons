import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/start_page/StartPage.vue";
import auth from "../store/modules/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: StartPage,
    meta: { auth: false },
    // beforeRouteLeave: (to, from, next) => {
    //   console.log(to);
    //   if (to.meta.auth && auth.getters.isUserAuth) {
    //     console.log(!auth.getters.isUserAuth);
    //     next("/user");
    //   } else {
    //     next("/");
    //   }
    // },
  },
  {
    path: "/user",
    name: "UserPage",
    component: () => import("../views/user_page/UserPage.vue"),
    meta: { auth: true },
    beforeEnter: (to, from, next) => {
      if (auth.state.token === "") {
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
// router.beforeEach((to, from, next) => {
//   if (!auth.getters.isUserAuth && to.meta.auth) {
//     console.log(to);
//     next("/user");
//   } else {
//     next("/");
//   }
// });
export default router;
