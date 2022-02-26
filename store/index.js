import Cookie from "js-cookie"

export const state = () => ({
  token: null
});

export const getters = {
  // this.$store.getters["test/function()"]
  getToken(state) {
    return state.token;
  },
  isAuth(state) {
    return state.token
  },
  // clearToken(state) {
  //   return state.token = null;
  // }
};

export const actions = {
  authLogin(vuexContext, authData) {
    return this.$axios
      .$post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`,
        authData
      )
      .then((res) => {
        console.warn("res login ::::", res);
        vuexContext.commit("updateToken", res.idToken);
        localStorage.setItem("elbashaToken", res.idToken)
        localStorage.setItem("elbashaTokenExpiration", new Date().getTime() + +res.expiresIn * 1000)
        Cookie.set("elbashaToken", res.idToken)
        Cookie.set("elbashaTokenExpiration", new Date().getTime() + +res.expiresIn * 1000)
      })
      .catch((err) => {
        console.warn("err login ::::", err);
      });
  },
  initAuth(vuexContext, req) {
    let token
    let expirationDate

    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('elbashaToken='))

      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split("=")[1]
      expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('elbashaTokenExpiration=')).split("=")[1]
    } else {
      token = localStorage.getItem("elbashaToken")
      expirationDate = localStorage.getItem("elbashaTokenExpiration")
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.warn("no token or ivalid token");
      vuexContext.commit("clearToken")
      return;
    }
    vuexContext.commit("updateToken", token)

  }
};

export const mutations = {
  // this.$store.commit("test/function()");
  updateToken(state, val) {
    state.token = val;
  },
  clearToken(state, val) {
    state.token = null;
  }
};


