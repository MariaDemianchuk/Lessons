import api from "../../api";

const state = {
  upcoming: [],
  popular: [],
};
console.log(state.upcoming);
const getters = {
  getUpcoming(state) {
    return state.upcoming;
  },
  getPopular(state) {
    return state.popular;
  },
};
const mutations = {
  SET_UPCOMING_MOVIES(state, payload) {
    state.upcoming = payload;
    console.log(payload);
  },
  SET_POPULAR_MOVIES(state, payload) {
    state.popular = payload;
    console.log(payload);
  },
};
const actions = {
  getUpcoming({ commit }) {
    api.getUpcoming().then((resp) => {
      console.log(resp);
      commit("SET_UPCOMING_MOVIES", resp.data.results);
    });
  },
  getPopular({ commit }) {
    api.getPopular().then((resp) => {
      console.log(resp.data.results);
      commit("SET_POPULAR_MOVIES", resp.data.results);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
