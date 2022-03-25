<template>
  <div id="app">
    <nav-bar />

    <transition name="fade">
      <router-view />
    </transition>
    <brand-carousel />
    <main-footer />
  </div>
</template>
<script>
import NavBar from "@/components/navbar/NavBar";
import BrandCarousel from "@/components/footer/BrandCarousel";
import MainFooter from "@/components/footer/MainFooter";
export default {
  name: "PrincipalLayout",
  components: {
    MainFooter,
    BrandCarousel,
    NavBar,
  },
};
</script>