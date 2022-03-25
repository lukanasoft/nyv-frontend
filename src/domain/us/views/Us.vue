<template>
  <section
    class="container is-flex is-align-items-center is-justify-content-center py-6 px-3"
  >
    <div
      class="is-flex is-align-items-start is-justify-content-center is-flex-direction-column mr-3"
    >
      <img :src="require('@/assets/logo-texto.png')" alt="Logo NyV" />
      <p class="font-18 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam urna odio
        ut id vulputate libero faucibus. Sed at ultrices non volutpat sed.
        Vulputate laoreet risus egestas tellus sit sed bibendum. Magnis nibh
        nunc, gravida nunc, pellentesque commodo elementum ac feugiat.
      </p>
      <div style="width: 100%" class="mt-4 box-icons">
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
    <img
      class="img-us"
      :src="require('@/assets/images/us/us-bus.png')"
      alt="Bus"
    />
  </section>
</template>

<script>
import BoxIcon from "@/components/commons/BoxIcon";
export default {
  name: "ContactView",
  components: {
    BoxIcon,
  },
};
</script>

<style scoped>
.img-us {
  width: 40% !important;
}
.box-icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.font-18 {
  font-size: 18px;
  max-width: 600px;
  text-align: left;
}
.box-icon:hover {
  background-color: #b70006;
}
@media (max-width: 960px) {
  section {
    flex-direction: column !important;
  }
  .img-us {
    display: none;
  }
}
@media (max-width: 600px) {
  .box-icons {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 15px;
  }
  .box-icon {
    align-self: center;
    justify-self: center;
  }
}
</style>
