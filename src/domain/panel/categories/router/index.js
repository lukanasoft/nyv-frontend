import Categories from "../views/Categories.vue";
export default {
  name: "dashboard-categories",
  path: "/dashboard/categories",
  component: Categories,
  meta: {
    requiresAuth: true,
    headerTitle: "Categorias"
  }
};
