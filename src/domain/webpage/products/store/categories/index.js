import Vue from 'vue';
import categoryService from '@/domain/services/category.service';

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
    SET_NEW_CATEGORY(state, category) {
        state.categories.push(category);
    },
    UPDATE_CATEGORY(state, category) {
        const index = state.categories.findIndex(c => c.id === category.id);
        Vue.set(state.categories, index, category);
    }
};
const actions = {
    async getCategories({ commit}, params = null) {
        const categories = await categoryService.getAllCategories(params);
        commit("SET_CATEGORIES", categories.data);
    },
    async addCategory({ commit }, category) {
        const newCategory = await categoryService.addCategory(category);
        commit("SET_NEW_CATEGORY", newCategory.data);
    },
    async deleteCategory({ commit }, category) {
        await categoryService.deleteCategory(category);
        commit("SET_CATEGORY", 0);
    },
    async updateCategory({ commit }, category) {
        const editedCategory = await categoryService.updateCategory(category.id, category);
        commit("UPDATE_CATEGORY", editedCategory.data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};