const state = {
  token: "",
  email: "",
  userId: "",
  refreshToken: "",
  expiresIn: "",
};
const getters = {
  getEmail(state) {
    return state.email;
  },
};
const mutations = {
  SET_USER_TOKEN_DATA(state, payload) {
    state.token = payload.token;
    state.email = payload.email;
    state.userId = payload.userId;
    state.refreshToken = payload.refreshToken;
    state.expiresIn = payload.expiresIn;
  },
};
const actions = {
  logout(context) {
    context.commit("SET_USER_TOKEN_DATA", {
      token: null,
      email: null,
      userId: null,
      refreshToken: null,
      expiresIn: null,
    });
  },
  async login(context, payload) {
    let postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    };
    let response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAjYh5sbL-7MSQ7ISkqp8IePcM8JN4B1Y",
      postData
    );

    const data = await response.json();

    if (!data.error) {
      context.commit("SET_USER_TOKEN_DATA", {
        token: data.idToken,
        email: data.email,
        userId: data.localId,
        refreshToken: data.refreshToken,
        expiresIn: data.expiresIn,
      });
    } else {
      console.log(data.error);
      throw data.error.message;
    }
  },
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
    let response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAjYh5sbL-7MSQ7ISkqp8IePcM8JN4B1Y",
      postData
    );

    const data = await response.json();
    console.log(data);

    if (!data.error) {
      context.commit("SET_USER_TOKEN_DATA", {
        token: data.idToken,
        email: data.email,
        userId: data.localId,
        refreshToken: data.refreshToken,
        expiresIn: data.expiresIn,
      });
    } else {
      console.log(data.error);
      throw data.error.message;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
