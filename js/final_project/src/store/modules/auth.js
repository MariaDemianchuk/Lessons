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
  isAuthenticated(state) {
    return state.token;
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
    localStorage.removeItem("userData");
  },
  async login(context, payload) {
    return context.dispatch("authStore", {
      ...payload,
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAjYh5sbL-7MSQ7ISkqp8IePcM8JN4B1Y",
    });
  },
  async signup(context, payload) {
    return context.dispatch("authStore", {
      ...payload,
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAjYh5sbL-7MSQ7ISkqp8IePcM8JN4B1Y",
    });
  },
  async authStore(context, payload) {
    let postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    };
    let response = await fetch(payload.url, postData);

    const data = await response.json();
    console.log(data);

    if (!data.error) {
      let tokenData = {
        token: data.idToken,
        email: data.email,
        userId: data.localId,
        refreshToken: data.refreshToken,
        expiresIn: data.expiresIn,
      };
      localStorage.setItem("userData", JSON.stringify(tokenData));
      context.commit("SET_USER_TOKEN_DATA", tokenData);
      console.log(tokenData);
    } else {
      console.log(data.error);
      throw data.error.message;
    }
  },
  autoLogin(context) {
    let userData = localStorage.getItem("userData");
    if (userData) {
      context.commit("SET_USER_TOKEN_DATA", JSON.parse(userData));
      console.log(JSON.parse(userData));
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
