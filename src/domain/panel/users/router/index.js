import Users from "../views/Users.vue";
export default {
  name: "dashboard-users",
  path: "/dashboard/users",
  component: Users,
  meta: {
    requiresAuth: true,
    headerTitle: "Usuarios"
  }
};
