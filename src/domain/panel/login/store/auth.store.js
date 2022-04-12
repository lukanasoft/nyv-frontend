import AuthService from "@/domain/services/auth.service.js";

const state = {
    user: {},
    token: null,
    error: null,
    loading: false,
};

const mutations = {
    login(state, payload) {
        state.user = payload.data.user;
        state.token = payload.data.token;
        console.log(state)
        // set user and token in local storage
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
    },
    setError(state, error) {
        state.error = error;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    },
};

const actions = {
    async login({ commit }, { email, password }) {
        try {
            commit("setLoading", true);
            const response = await AuthService.login({email, password, device: "web"});
            commit("login", response);
            return response;
        } catch(error) {
            if(error.response.status === 401) {
                commit("setError", error.response.data.message);
            } else {
                commit("setError", "Something went wrong");
            }
            return error;
        } finally {
            commit("setLoading", false);
        }
    },
    logout(state) {
        
        state.user = {};
        state.token = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    },
};

const getters = {
    isLoggedIn(state) {
        return state.isLoggedIn;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
};