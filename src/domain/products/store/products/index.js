import Vue from 'vue';

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
    // TODO: get products from API
    console.log(category, state);
    const products = [];
    for (let i = 0; i < state.perPage; i++) {
      products.push({
        id: i,
        name: "FARO DELANTERO MPOLO G7" + i,
        description: "Un faro muy bonito y ecologico",
        images: [
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
          {
            image: "https://s.alicdn.com/@sc04/kf/HTB15eCmO4TpK1RjSZFKq6y2wXXaM.jpg_300x300.jpg",
            title: "Faro delantero MPOLO G7",
          },
        ],
        price: i * 10,
        branch: 'bmpproar',
        aplication: 'Se aplica en los camiones que necesitan un faro delantero',
      });
    }
    commit("SET_PRODUCTS", products);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
