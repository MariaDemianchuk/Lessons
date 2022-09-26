import api from "../../api";

const state = {
  upcoming: [],
  popular: [],
  dataSearch: [],
  page: 1,
  total: 1,
  url: "https://api.themoviedb.org/3/search/movie?api_key=1901d4ddedf283037c131abf45be39d0&query=fall",
  videoURL: [],
  idVideo: "",
  loading: false,
};
const getters = {
  getUpcoming(state) {
    return state.upcoming;
  },
  getPopular(state) {
    return state.popular;
  },
  getSearch(state) {
    return state.dataSearch;
  },
  getPages(state) {
    return state.page;
  },
  getTotal(state) {
    return state.total;
  },
  getVideoUrl(state) {
    return state.videoURL;
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
  SET_PAGE(state, payload) {
    state.page = payload;
  },
  SET_TOTAL_RESULTS(state, payload) {
    state.total = payload;
  },
  SET_DATA_SEARCH(state, payload) {
    state.dataSearch = payload;
  },
  SET_NEW_URL(state, payload) {
    state.url = payload;
  },
  SET_VIDEO_URL(state, payload) {
    state.videoURL = payload;
  },
  SET_VIDEO_ID(state, payload) {
    state.idVideo = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};
const actions = {
  getUpcoming({ commit }) {
    commit("SET_LOADING", true);
    api.getUpcoming().then((resp) => {
      console.log(resp);
      commit("SET_UPCOMING_MOVIES", resp.data.results);
      commit("SET_LOADING", false);
    });
  },
  getPopular({ commit }) {
    commit("SET_LOADING", true);
    api.getPopular().then((resp) => {
      console.log(resp.data.results);
      commit("SET_POPULAR_MOVIES", resp.data.results);
      commit("SET_LOADING", false);
    });
  },
  getSearchPerPage({ commit }, page) {
    let url = state.url;
    commit("SET_LOADING", true);
    api.getSearchPerPage(url, page).then((resp) => {
      commit("SET_PAGE", resp.data.total_pages);
      commit("SET_TOTAL_RESULTS", resp.data.total_results);
      commit("SET_DATA_SEARCH", resp.data.results);
      console.log(resp.data.results);
      commit("SET_LOADING", false);
    });
  },
  getSearch({ commit }, title) {
    api.getSearch(title).then((resp) => {
      console.log(resp.data.title);
      commit("SET_DATA_SEARCH", resp.data.results);
      commit("SET_PAGE", resp.data.total_pages);
      commit("SET_TOTAL_RESULTS", resp.data.total_results);
      let url = `https://api.themoviedb.org/3/search/movie?api_key=1901d4ddedf283037c131abf45be39d0&query=${title}`;
      commit("SET_NEW_URL", url);
    });
  },
  getVideo({ commit }) {
    let id = state.idVideo;
    console.log(id);
    api.getVideo(id).then((resp) => {
      console.log(resp.data);
      commit("SET_VIDEO_URL", resp.data.results);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
