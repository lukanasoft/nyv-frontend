import Products from "../views/Products.vue";
export default {
  name: "products",
  path: "/productos",
  meta: {
    headerTitle: "Nuestros productos",
    headerImage: require("@/assets/images/header/productos.png"),
  },
  component: Products,
};
