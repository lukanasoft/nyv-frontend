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
  components: {
    MainFooter,
    BrandCarousel,
    NavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Hind Madurai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
