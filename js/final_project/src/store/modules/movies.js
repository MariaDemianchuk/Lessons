import api from "../../api";

const state = {
  upcoming: [],
  popular: [],
  search: [],
  page: 1,
  total_results: null,
  loading: false,
};
console.log(state.upcoming);
const getters = {
  getUpcoming(state) {
    return state.upcoming;
  },
  getPopular(state) {
    return state.popular;
  },
  getSearch(state) {
    return state.search;
  },
  getPages(state) {
    return state.page;
  },
  getTotalResults(state) {
    return state.total_results;
  },
  getLoading(state) {
    return state.loading;
  },
};
const mutations = {
  SET_UPCOMING_MOVIES(state, payload) {
    state.upcoming = payload;
    console.log(payload);
  },
  SET_POPULAR_MOVIES(state, payload) {
    state.popular = payload;
  },
  SET_SEARCH_MOVIES(state, payload) {
    state.search = payload;
    console.log(payload);
  },
  SET_PAGE(state, payload) {
    state.page = payload;
  },
  SET_TOTAL_RESULTS(state, payload) {
    state.total_results = payload.total_results;
  },
  SET_LOADING(state, payload) {
    state.loading = payload.loading;
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
  getSearch({ commit }, page) {
    api.getSearch(page).then((resp) => {
      console.log(resp.data);
      commit("SET_SEARCH_MOVIES", resp.data.results);
      commit("SET_PAGE", resp.data.total_pages);
      commit("SET_TOTAL_RESULTS", resp.data.total_results);
      console.log(
        "pages",
        resp.data.total_pages,
        "total",
        resp.data.total_results
      );
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
