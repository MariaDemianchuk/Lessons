import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const state = {
  name: "Maria Riaba",
};
const getters = {};
const mutations = {};
const actions = {
  async signup(context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAjYh5sbL-7MSQ7ISkqp8IePcM8JN4B1Y",
      postData
    );
    console.log(response);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
