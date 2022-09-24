import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/news";
import auth from "./modules/auth";
import movies from "./modules/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    news,
    auth,
    movies,
  },
});
