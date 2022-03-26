<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout"/>
    </transition>
  </div>
</template>
<script>
import PrincipalLayout from "@/domain/layouts/PrincipalLayout";
import HomeLayout from "@/domain/layouts/HomeLayout";
import {mapState} from 'vuex';
export default {
  components: {
    PrincipalLayout,
    HomeLayout
  },  
  computed: {
    ...mapState({
      layout: state => state.LayoutsStore.layout,
    }),
  },
  created() {
    this.$store.commit("LayoutsStore/SET_LAYOUT", "HomeLayout");
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
.button-blue {
  background: linear-gradient(180deg, #0991CC 0%, #013E59 100%);
  color: white !important;
}
.button-red {
  background: linear-gradient(180deg, #BA0107 0%, #4D0103 100%);
  color: white !important; 
}
.button-blue:hover, .button-red:hover, .button-blue:focus, .button-red:focus {
  color: white !important;
}
.w-50 {
  width: 50%;
  height: 100%;
}
</style>
