import Products from "../views/Products.vue";
import ProductDetail from "../views/ProductDetail.vue";
export default [
  {
    name: "products",
    path: "/productos",
    meta: {
      headerTitle: "Nuestros productos",
      headerImage: require("@/assets/images/header/productos.png"),
    },
    component: Products,
  },
  {
    name: "product-detail",
    path: "/productos/:id",
    component: ProductDetail,
  },
];
