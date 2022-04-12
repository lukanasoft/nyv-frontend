<template>
  <div class="fixed-top">
    <b-navbar :style="{background: transparent ? ': transparent !important' : '', color: transparent ? 'white !important' : ''}" class="container" transparent centered>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img :src="require('@/assets/logo.png')" alt="N&V logo" />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ name: 'home' }"> Inicio </b-navbar-item>
        <b-navbar-item :style="transparent ? 'color: white' : ''" tag="router-link" :to="{ name: 'us' }">
          Nosotros
        </b-navbar-item>
        <b-navbar-item :style="transparent ? 'color: white' : ''" tag="router-link" :to="{ name: 'products' }">
          Productos
        </b-navbar-item>
        <b-navbar-item :style="transparent ? 'color: white' : ''" tag="router-link" :to="{ name: 'contact' }">
          Contactanos
        </b-navbar-item>
        <b-navbar-item class="is-flex is-align-items-center is-justify-content-center">
          <b-field>
            <b-input 
              type="text" 
              placeholder="Buscar..." 
              v-model="search" 
              icon-right="magnify" 
              icon-right-clickable 
              @icon-right-click="searchProducts"
              @keyup.enter.native="searchProducts" 
            />
          </b-field>
        </b-navbar-item>
      </template>
      <template #burger="{isOpened, toggleActive}"> 
        <a @click="toggleActive" class="navbar-burger">
          <feather-icon size="23" :style="transparent ? 'color: white' : ''" :icon="isOpened? 'XIcon' : 'MenuIcon'"/>
        </a>
      </template>
    </b-navbar>
  </div>
</template>

<script>
const { default: FeatherIcon }=require("../commons/FeatherIcon.vue")

export default {
  name: "NavigationBar",
  components: { FeatherIcon }, 
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      windowWidth: null,
      transparentNoEffect: true,
      search: ""
    }
  },
  async created() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  watch: {
    windowWidth(newVal) {
      if(newVal > 1000) {
        this.transparentNoEffect = false;
      } else {
        this.transparentNoEffect = true;
      }
    },
  },
  computed: {
    isValidTransparent() {
      return this.transparent && !this.transparentNoEffect;
    },
  },
  methods: {
    searchProducts() {
      this.$router.push({ name: 'products', query: { search: this.search } })
    }
  }
};
</script>

<style scoped>
.navbar-item img {
  max-height: 100% !important;
}
.router-link-exact-active {
  color: #0a90ca;
  font-weight: bold;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  color: #0a90ca !important;
}
</style>
<style>
@media screen and (max-width: 1023px){
  .navbar-burger {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .navbar-menu{
    background-color: transparent !important;
  }
  a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active {
    background-color: transparent !important;
    color: inherit !important;
  }
}
</style>
