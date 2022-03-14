import Vue from "vue";
import VueRouter from "vue-router";
import ContactRoute from "@/domain/contact/router";
import ProductsRoute from "@/domain/products/router";
Vue.use(VueRouter);

const routes = [ContactRoute, ProductsRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
