import Vue from 'vue';
const state = {
    categories: [],
    category: 0,
};
const mutations = {
    SET_CATEGORIES(state, categories) {
        Vue.set(state, "categories", categories);
    },
    SET_CATEGORY(state, category) {
        Vue.set(state, "category", category);
    },
};
const actions = {
    async getCategories({ commit }) {
        //TODO: get categories from API
        const categories = []
        for (let i = 0; i < 8; i++) {
            categories.push({
                id: i,
                name: 'Faros'
            });
        }
        commit("SET_CATEGORIES", categories);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};