import ProductsDashboard from "../views/ProductsDashboard.vue";
export default {
  name: "dashboard-products",
  path: "/dashboard/products",
  component: ProductsDashboard,
  meta: {
    requiresAuth: true,
    headerTitle: "Productos"
  }
};
