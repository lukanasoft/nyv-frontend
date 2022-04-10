import Vue from 'vue';
import ProductService from '@/domain/services/product.service';
const state = {
  products: [],
  product: {},
  detailOpen: false,
  total: 50,
  perPage: 9,
  page: 1,
};
const mutations = {
  SET_PRODUCTS(state, products) {
    Vue.set(state, "products", products);
  },
  SET_PRODUCT(state, product) {
    Vue.set(state, "product", product);
  },
  SET_TOTAL(state, total) {
    Vue.set(state, "total", total);
  },
  SET_PER_PAGE(state, perPage) {
    Vue.set(state, "perPage", perPage);
  },
  SET_PAGE(state, page) {
    Vue.set(state, "page", page);
  },
  SET_DETAIL_OPEN(state, detailOpen) {
    Vue.set(state, "detailOpen", detailOpen);
  },
};
const actions = {
  async getProducts({ commit, state }, { category }) {
    console.log(category, state);
    const response = await ProductService.getAllProducts(
      {
        page: state.page,
        perPage: state.perPage,
        categoryId: category,
      }
    );
    const products = response.data.data
    commit("SET_TOTAL", response.data.total);
    commit("SET_PRODUCTS", products);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
