import Vue from "vue";
import VueRouter from "vue-router";
import ContactRoute from "@/domain/contact/router";
import ProductsRoute from "@/domain/products/router";
import UsRoute from "@/domain/us/router";
import HomeRoute from "@/domain/home/router";
Vue.use(VueRouter);

const routes = [ContactRoute, ProductsRoute, UsRoute, HomeRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router;
