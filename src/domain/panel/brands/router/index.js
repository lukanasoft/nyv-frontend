import Brands from "../views/Brands.vue";
export default {
  name: "dashboard-brands",
  path: "/dashboard/brands",
  component: Brands,
  meta: {
    requiresAuth: true,
    headerTitle: "Marcas",
  }
};
