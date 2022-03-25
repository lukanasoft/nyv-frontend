import Vue from "vue";
import Vuex from "vuex";
import ProductsStore from "@/domain/products/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ...ProductsStore,
  },
});
