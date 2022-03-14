import Products from "@/domain/products/views/Products";
export default {
  name: "products",
  path: "/productos",
  meta: {
    headerTitle: "Nuestros productos",
    headerImage: require("@/assets/images/header/productos.png"),
  },
  component: Products,
};
