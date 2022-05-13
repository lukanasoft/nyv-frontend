<template>
  <div id="app">
    <header>
      <top-bar />
      <navigation-bar />
    </header>
    <transition name="fade">
      <router-view />
    </transition>
    <b-button @click="open = true" style="position: fixed; left: 40px; bottom: 40px; width: 60px; height: 60px" rounded class="button-blue">
      <div class="is-flex is-align-items-center is-justify-content-center" style="position: relative">
        <feather-icon icon="ShoppingCartIcon" size="25"/>
        <div 
          style="
            position: absolute; 
            top: -22px; right: -22px; 
            background: linear-gradient(180deg, #BA0107 0%, #4D0103 100%);
            border-radius: 50%;
            width: 25px; height: 25px;
          ">
          <span>{{cartSize}}</span>
        </div>
      </div>
    </b-button>
    <a href="https://api.whatsapp.com/send?phone=+51994554934&text=Hola 😁, me gustaría conversar con un asesor" target="_blank" class="is-clickable" style="position: fixed; right: 40px; bottom: 40px; width: 60px; height: 60px" rounded>
      <img :src="require('@/assets/images/icons/whatsapp.png')" />
    </a>
    <main-footer />
    <b-sidebar
      type="is-light"
      fullheight
      :overlay="true"
      right
      v-model="open"
      style="position: relative"

    >
      <div class="p-2" >
        <h3 class="tittle-sidebar-cart">
          ¡Cotiza ahora!
        </h3>
        <div class="grid-sidebar-cart">
          <div class="card p-2 is-flex is-align-items-center is-justify-content-space-around" v-for="(item, index) in shoppingCart" :key="index">
            <div style="width: 30% !important">
              <img :src="item.photos[0].url" alt="" style="width: 100%">
            </div>
            <div style="width: 65% !important; position: relative">
              <p style="font-weight: 600; font-size: 20px;">
                {{item.name}}
              </p>
            </div>
            <feather-icon class="is-clickable has-text-info" style="position: absolute; top: 0; right: 0" icon="XIcon" size="23" @click="removeItem(item)"/>
          </div>
        </div>
        <div>
          <b-button
            tag="a"
            :href="meesageWhatsapp"
            target="_blank"
            class="button-blue" 
            style="position: absolute; bottom: 15px; width: 90%"
            @click="cotizarCarrito"
          >
            Cotizar
          </b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import FeatherIcon from '@/components/commons/FeatherIcon.vue';
import { mapGetters } from 'vuex'
import NavBar from "@/components/navbar/NavBar.vue";
import MainFooter from "@/components/footer/MainFooter.vue";
import TopBar from "@/components/navbar/TopBar";
import NavigationBar from "@/components/navbar/NavigationBar";
export default {
  name: "SimpleLayout",
  components: {
    MainFooter,
    NavBar,
    TopBar,
    NavigationBar,
    FeatherIcon
  },
  computed: {
    ...mapGetters({
      cartSize: 'Products/cartSize',
      shoppingCart: 'Products/shoppingCart',
    }),
    meesageWhatsapp() {
      let message = "https://api.whatsapp.com/send?phone=+51994554934&text=";
      message += "Hola 😁, me gustaría cotizar estos productos: %0A";
      this.shoppingCart.forEach(item => {
        message += "✅ " + item.code +"-" + item.name + "%0A";
      });
      return message;
    }
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    cotizarCarrito() {
      this.open = false;
    }
  }
};
</script>
<style scoped>
.tittle-sidebar-cart{
  font-size: 1.5rem;
  font-weight: bold;
}
.grid-sidebar-cart {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.grid-item-sidebar-cart-info-name {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>