import api from "../../api";
const state = {
  news: [],
};
const getters = {
  getNews(state) {
    return state.news;
  },
};
const mutations = {
  SET_NEWS(state, payload) {
    state.news = payload;
  },
};
const actions = {
  getNews({ commit }) {
    api.getNews().then((resp) => {
      console.log(resp);
      commit("SET_NEWS", resp.data.articles);
      console.log(resp.data.articles[0].imageUrl);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
