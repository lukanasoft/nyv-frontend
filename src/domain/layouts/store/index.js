import Vue from "vue";

const state = {
    layout: ''
};
const getters = {
    layout: state => state.layout
};
const mutations = {
    SET_LAYOUT: (state, layout) => {
        Vue.set(state, 'layout', layout);
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations
};