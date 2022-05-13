<template>
  <div>
    <div class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
      <section style="max-width: 900px" class="is-flex is-align-items-center is-justify-content-center mb-6 section-nosotros">
          <div class="is-flex is-flex-direction-column is-align-items-start mr-6 mini-sobre">
            <h3 class="is-font-36 mb-2">Sobre Nosotros</h3>
            <p class="has-text-left is-font-18 mb-2">
              N&V Multimarcas es una empresa importadora de acccesorios para buses interprovinciales. Fue creada en el 2012 y nuestra esencia como empresa está relacionada a la pasión por nuestro trabajo, la generosidad y compromiso con nuestros clientes.
            </p>
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
                text="ENVÍO NACIONAL"
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
    <div style="background: linear-gradient(177.9deg, #B90107 3.16%, #4B0002 98.24%); color: white" class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column p-6">
      <section style="max-width: 900px" class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column p-6">
          <div class="is-flex is-flex-direction-column is-align-items-center">
            <h3 class="is-font-36 mb-2">Nuestros Productos</h3>
            <p class="has-text-centered is-font-18 mb-5">
              Somos una empresa homologada, lo cual nos permite ofrecer productos y servicios de calidad, obteniendo la plena satisfacción de nuestros clientes.
            </p>
            <b-button style="background: transparent; color: white" outlined class="w-50" tag="router-link" :to="{name: 'products'}">Ver más</b-button>
          </div>
      </section>
    </div>
    <div style="height: 400px; position: relative" class="is-flex is-align-items-center is-justify-content-center ge">
      <div style="position: absolute; top: -40px; display: flex; align-items: center; justify-content: space-between; width: 700px; height: 350px" class="ga">
        <div style="width: 65%; margin-right: 17px; height: 100%" class="faro-raro">
          <div style="width: 100%; height: 50% !important; background: #F3F3F3; margin-bottom: 17px" class="is-flex is-align-items-center is-justify-content-center">
              <img style="max-width: 100%" :src="require('@/assets/images/home/faro-raro.png')" alt="">
          </div>
          <div style="width: 100%; height: calc(50% - 17px) !important;"  class="ocultar is-flex is-align-items-center is-justify-content-center">
            <div style="width: 50%; height: 100% !important; background: #F3F3F3; margin-right: 17px" class="is-flex is-align-items-center is-justify-content-center">
              <img style="max-height: 100%" :src="require('@/assets/images/home/motor-raro.png')" alt="">
            </div>
            <div style="width: 50%; height: 100% !important; background: #F3F3F3" class="is-flex is-align-items-center is-justify-content-center">
              <img style="max-width: 100%" :src="require('@/assets/images/home/bujia-rara.png')" alt="">
            </div>
          </div>
        </div>
        <div style="width: 35%; background: #F3F3F3; height: 100%" class="ocultar is-flex is-align-items-center is-justify-content-center">
          <img style="max-width: 100%" :src="require('@/assets/images/home/raya-rara.png')" alt="">
        </div>
      </div>
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
@media(max-width: 770px) {
  .faro-raro {
    width: 80% !important;
    margin: 0 !important;
  }
  .ocultar {
    display: none !important;
  }
  .ga {
    justify-content: center !important;
    width: 100% !important;
  }
  .ge {
    height: 200px !important;
  }
}

@media(max-width: 900px) {
  .section-nosotros {
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;
  }
  .mini-sobre {
    align-items: center !important;
    justify-content: center !important;
    margin-right: 0 !important;
    padding: 40px;
  }
  .mini-sobre p {
    text-align: center !important;
    margin-bottom: 30px !important;
  }
}
</style>
