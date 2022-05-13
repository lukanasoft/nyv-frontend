import Vue from 'vue';
import ProductService from '@/domain/services/product.service';
const state = {
  products: [],
  product: {},
  detailOpen: false,
  total: 50,
  perPage: 9,
  page: 1,
  //get shopping cart local storage
  shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || [],
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
  UPDATE_PRODUCT(state, product) {
    const index = state.products.findIndex(p => p.id === product.id);
    Vue.set(state.products, index, product);
  },
  ADD_TO_CART(state, product) {
    //preven duplicates
    if (state.shoppingCart.findIndex(p => p.id === product.id) === -1) {
      product.quantity = 1;
      Vue.set(state.shoppingCart, state.shoppingCart.length, product);
      // set shopping cart in local storage
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    }
  },
  REMOVE_FROM_CART(state, product) {
    const index = state.shoppingCart.findIndex(p => p.id === product.id);
    Vue.delete(state.shoppingCart, index);
    localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
  },
};
const actions = {
  async getProducts({ commit, state }, { category, search }) {
    const response = await ProductService.getAllProducts(
      {
        page: state.page,
        perPage: state.perPage,
        categoryId: category,
        search: search
      }
    );
    const products = response.data.data
    commit("SET_TOTAL", response.data.total);
    commit("SET_PRODUCTS", products);
  },
  async addProduct({ commit }, product) {
    await ProductService.uploadProduct(product);
  },
  async deleteProduct({ commit }, product) {
    console.log('gaa', product)
    await ProductService.deleteProduct(product.id);
  },

  async deletePhoto({ commit }, {photo, product}) {
    await ProductService.deletePhoto(product.id, photo.id);
  },

  async editProduct({ commit }, {product, formData}) {
    const response = await ProductService.updateProduct(product.id, formData);
    commit("UPDATE_PRODUCT", response.data);
  },

  async getProduct({ commit }, { id }) {
    const response = await ProductService.getProduct(id);
    commit("SET_PRODUCT", response.data);
  },
};
const getters = {
  cartSize: state => state.shoppingCart.length,
  shoppingCart: state => state.shoppingCart,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
