<template>
  <div id="app" class="has-aside-left has-aside-expanded">
    <b-sidebar :can-cancel="false" open fullheight>
      <div class="p-6">
        <div
            class="
              column
              is-flex is-align-items-center is-justify-content-center
              mb-4
            "
          >
            <img
              style="width: 46px; height: 46px;"
              :src="require('@/assets/logo.png')"
              alt="N&V logo"
              class="mr-3"
            />
            <h3 class="logo">MULTIMARCAS</h3>
          </div>
        <b-menu>
          <b-menu-list>
            <b-menu-item v-for="(navItem, index) in navItems" :key="index" tag="router-link" :to="navItem.to">
              <template #label>
                <div class="color-item">
                  <feather-icon size="20" :icon="navItem.icon" class="mr-3" />
                  <span>{{navItem.title}}</span>
                </div>
              </template>
            </b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <div style="margin-left: 260px" class="p-6">
      <section class="header-card mb-4">
        <!-- is flex align items center -->
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <h2 style="font-size: 36px; font-weight:700">{{title}}</h2>
          <div 
            style="background: #0992CD; color: white; width: 50px !important; height: 50px !important; border-radius: 50%"
            class="is-flex is-align-items-center is-justify-content-center is-clickable	"
          >
            <feather-icon
              size="24"
              icon="UserIcon"
              class="cursor-pointer"
            />
          </div>
        </div>
        <p class="has-text-left" style="font-size: 20px; font-weight:600; color: #808080">
          {{date.day}} de {{monthNames[date.month]}}, {{date.year}}
        </p>
      </section>
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import navigation from "./navigation/index.js";
import FeatherIcon from '@/components/commons/FeatherIcon.vue';
export default {
  components: { FeatherIcon },
  name: "PanelLayout",
  data() {
    return {
      date: {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      },
      monthNames: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ],
      title: this.$route.meta.headerTitle,
      navItems: navigation
    };
  },
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background-color: #EBF3F6')
  },
  beforeDestroy () {
    document.querySelector('html').setAttribute('style', '')
  },
  watch: {
    $route(newRoute) {
      this.title = newRoute.meta.headerTitle;
    },
  },
};
</script>

<style scoped>
.logo {
  font-weight: 600;
}
.color-item {
  color: #868e96;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px !important;
  border-radius: 10px !important;
  transition: background-color 0.5s;
}
.color-item:hover {
   background-color: #0992CD !important;
    color: #fff !important;
}
</style>
<style>
.menu-list a.router-link-exact-active.router-link-active {
    background-color: #0992CD !important;
    border-radius: 10px !important;
}
.menu-list a.router-link-exact-active.router-link-active .color-item {
    color: #fff !important;
}
.menu-list {
  font-size: 16px;
}
.b-sidebar .sidebar-content.is-fullheight {
  /* border radius top right */
  border-top-right-radius: 50px !important;
  /* border radius bottom right */
  border-bottom-right-radius: 50px !important;
}
</style>