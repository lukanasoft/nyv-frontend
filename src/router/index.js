import Vue from "vue";
import VueRouter from "vue-router";
import WebPageRoutes from "@/domain/webpage/router/index.js";
import PanelRoutes from "@/domain/panel/router/index.js";
Vue.use(VueRouter);

const routes = [...WebPageRoutes, ...PanelRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// if route requires auth and user is not logged in, redirect to login page
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next({
        name: "login",
      });
    } else {
      window.scrollTo(0, 0)
      next();
    }
  } else {
    window.scrollTo(0, 0)
    next();
  }
});

export default router;
