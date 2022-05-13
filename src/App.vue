<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout"/>
    </transition>
  </div>
</template>
<script>
import PrincipalLayout from "@/domain/layouts/PrincipalLayout.vue";
import HomeLayout from "@/domain/layouts/HomeLayout.vue";
import LoginLayout from "@/domain/layouts/LoginLayout.vue";
import PanelLayout from "@/domain/layouts/PanelLayout.vue";
import SimpleLayout from "@/domain/layouts/SimpleLayout.vue";

import {mapState} from 'vuex';
export default {
  components: {
    PrincipalLayout,
    HomeLayout,
    LoginLayout,
    PanelLayout,
    SimpleLayout
  },  
  computed: {
    ...mapState({
      layout: state => state.LayoutsStore.layout,
    }),
  },
  created() {
    this.$store.commit("LayoutsStore/SET_LAYOUT", "HomeLayout");

    //get user and token from localStorage
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    let token = localStorage.getItem("token");
    
    // set to store
    this.$store.commit("AuthStore/SET_USER", user);
    this.$store.commit("AuthStore/SET_TOKEN", token);
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
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.button-blue-dashboard {
  background-color: #0992CD !important;
  color: white !important;
  border-radius: 10px !important;
}
.button-blue {
  background: linear-gradient(180deg, #0991CC 0%, #013E59 100%);
  color: white !important;
}
.button-red {
  background: linear-gradient(180deg, #BA0107 0%, #4D0103 100%);
  color: white !important; 
}
.button-blue:hover, .button-red:hover, .button-blue:focus, .button-red:focus, .button-blue-dashboard:hover, .button-blue-dashboard:focus {
  color: white !important;
}
.w-50 {
  width: 50%;
  height: 100%;
}
</style>
