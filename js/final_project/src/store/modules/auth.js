// import axios from "axios";

const state = {
  name: "Maria Riaba",
};
const getters = {};
const mutations = {};
const actions = {
  async signup(context, payload) {
    let postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    };
    let response = fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAjYh5sbL-7MSQ7ISkqp8IePcM8JN4B1Y",
      postData
    ).then((response) => response.json());
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
