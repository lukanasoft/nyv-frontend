<template>
  <div id="app">
    <header>
      <top-bar />
      <navigation-bar />
      <div style="margin-bottom: 40px">
        <b-carousel
        :indicator="false"
      > 
         <b-carousel-item>
           <picture>
             <source :srcset="require('@/assets/images/home/principalr.png')" media="(max-width: 900px)" />

              <img 
                :srcset="require('@/assets/images/home/principal.png')" 
                alt="asdasd"
                style="width: 100%"
              >
            </picture>
          </b-carousel-item>
      </b-carousel>
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
import TopBar from "@/components/navbar/TopBar";
import ContactView from '@/domain/webpage/contact/views/Contact.vue';
export default {
  name: "HomeLayout",
  components: {
    MainFooter,
    BrandCarousel,
    NavigationBar,
    ContactView,
    TopBar
  },
  data() {
    return {
      backgroundImage: require("@/assets/images/header/home.png")
    };
  }
};
</script>