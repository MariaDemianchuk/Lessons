import api from "../../api";
const state = {
  news: [],
};
console.log(state.news);
const getters = {
  getNews(state) {
    return state.news;
  },
};
const mutations = {
  SET_NEWS(state, payload) {
    state.news = payload;
    console.log(payload);
  },
};
const actions = {
  getNews({ commit }) {
    api.getNews().then((resp) => {
      console.log(resp);
      commit("SET_NEWS", resp.data.articles);
      console.log(resp.data.articles);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
