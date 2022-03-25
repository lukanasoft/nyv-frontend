<template>
  <div class="fixed-top">
    <b-navbar class="container" transparent centered>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img :src="require('@/assets/logo.png')" alt="N&V logo" />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="#"> Inicio </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'us' }">
          Nosotros
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'products' }">
          Productos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'contact' }">
          Contactanos
        </b-navbar-item>
        <b-navbar-item>
          <b-autocomplete
            rounded
            placeholder="Search"
            icon-right="magnify"
            clearable
          >
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
.navbar-item img {
  max-height: 100% !important;
}
.router-link-active {
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
