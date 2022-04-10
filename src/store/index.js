import Vue from "vue";
import Vuex from "vuex";
import LayoutsStore from "@/domain/layouts/store/index.js";
import BrandStore from "@/components/footer/store/brands.store.js";
import WebPageStose from "@/domain/webpage/store/index.js";
import PanelStore from "@/domain/panel/store/index.js"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LayoutsStore,
    BrandStore,
    ...WebPageStose,
    ...PanelStore,
  },
});
