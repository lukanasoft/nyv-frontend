import Dashboard from "../views/Dashboard.vue";
export default {
  name: "Dashboard",
  path: "/dashboard",
  component: Dashboard,
  meta: {
    requiresAuth: true,
    headerTitle: "NyV Dashboard"
  }
};
