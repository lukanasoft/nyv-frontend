<template>
  <div>
    <div class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
      <section style="max-width: 900px" class="is-flex is-align-items-center is-justify-content-center mb-6">
          <div class="is-flex is-flex-direction-column is-align-items-start mr-6">
            <h3 class="is-font-36 mb-2">Sobre Nosotros</h3>
            <p class="has-text-left is-font-18 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam urna odio ut id vulputate libero faucibus. Sed at ultrices non volutpat sed. Vulputate laoreet risus egestas tellus sit sed bibendum. Magnis nibh nunc, gravida nunc, pellentesque commodo elementum ac feugiat.</p>
            <b-button class="button-red w-50" tag="router-link" :to="{name: 'us'}">Conoce más</b-button>
          </div>
          <div>
            <div style="width: 100%" class="box-icons">
              <box-icon
                class="box-icon"
                :svg-data="require('@/assets/svg/icons/atention.svg')"
                text="ATENCIÓN PERSONALIZADA"
              />
              <box-icon
                class="box-icon"
                :svg-data="require('@/assets/svg/icons/bus.svg')"
                text="ENVIO NACIONAL"
              />
              <box-icon
                class="box-icon"
                :svg-data="require('@/assets/svg/icons/accesorios.svg')"
                text="ACCESORIOS DE CALIDAD"
              />
              <box-icon
                class="box-icon"
                :svg-data="require('@/assets/svg/icons/dashboard.svg')"
                text="EXPERIENCIAS EN EL SECTOR"
              />
          </div>
          </div>
      </section>
    </div>
    <div style="background: linear-gradient(177.9deg, #B90107 3.16%, #4B0002 98.24%); color: white" class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
      <section style="max-width: 900px" class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column mb-6 p-6">
          <div class="is-flex is-flex-direction-column is-align-items-center mr-6">
            <h3 class="is-font-36 mb-2">Nuestros Productos</h3>
            <p class="has-text-centered is-font-18 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam urna odio ut id vulputate libero faucibus. Sed at ultrices non volutpat sed. Vulputate laoreet risus egestas tellus sit sed bibendum. Magnis nibh nunc, gravida nunc, pellentesque commodo elementum ac feugiat.</p>
            <b-button style="background: transparent; color: white" outlined class="w-50" tag="router-link" :to="{name: 'us'}">Conoce más</b-button>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import BoxIcon from "@/components/commons/BoxIcon";
export default {
  name: "HomeView",
  components: {
    BoxIcon,
  },
  created() {
    this.$store.commit("LayoutsStore/SET_LAYOUT", "HomeLayout");
  },
};
</script>

<style scoped>
.box-icon:hover {
  background-color: #0A90CA;
}
.box-icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.is-font-36 {
  font-size: 36px;
  font-weight: 600;
}
.is-font-18 {
  font-size: 18px;
}
.is-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}
</style>
