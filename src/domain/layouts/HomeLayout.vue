<template>
  <div id="app">
    <header
      :style="{backgroundImage: `url(${backgroundImage})`}"
      style="margin-bottom: 100px"
      class="hero is-fullheight"
    >
      <navigation-bar class="z-index-99" transparent />
      <div class="hero-body z-index-99">
        <div class="container is-flex is-align-items-start is-justify-content-center mb-6">
          <p class="title has-text-white is-font-72" style="max-width: 790px">
            Accesorios de calidad para tu bus
          </p>
        </div>
      </div>
      <div class="hero-foot z-index-99 mt-6">
        <div class="position-relative is-flex align-items-center is-justify-content-center mt-6">
          <img style="max-height: 350px" class="position-absolute" :src="require('@/assets/images/home/bus1.png')" alt="bus">
        </div>
      </div>
    </header>
    <transition name="fade">
      <router-view />
    </transition>
    <brand-carousel />
    <contact-view :needLayout="false" />
    <main-footer />
    <a href="https://api.whatsapp.com/send?phone=+51994554934&text=Hola 😁, me gustaría conversar con un asesor" target="_blank" class="is-clickable" style="position: fixed; right: 40px; bottom: 40px; width: 60px; height: 60px" rounded>
      <img :src="require('@/assets/images/icons/whatsapp.png')" />
    </a>
  </div>
</template>
<script>
import BrandCarousel from "@/components/footer/BrandCarousel";
import MainFooter from "@/components/footer/MainFooter";
import NavigationBar from '@/components/navbar/NavigationBar.vue';
import ContactView from '@/domain/webpage/contact/views/Contact.vue';
export default {
  name: "HomeLayout",
  components: {
    MainFooter,
    BrandCarousel,
    NavigationBar,
    ContactView
  },
  data() {
    return {
      backgroundImage: require("@/assets/images/header/home.png")
    };
  }
};
</script>
<style scoped>
.is-font-72 {
  font-size: 72px;
}
.z-index-99 {
  z-index: 99;
}
header {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
header:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
  bottom: -80px;
}
@media(max-width: 900px) {
  .is-font-72 {
    font-size: 50px;
  }
  .hero-foot {
    display: none;
  }
}
</style>