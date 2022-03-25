<template>
  <footer>
    <section
      class="bg-blue-gradient is-flex is-align-items-center is-justify-content-center py-6"
    >
      <div class="is-grid px-6">
        <div
          class="is-flex is-align-items-center is-justify-content-start is-flex-direction-column"
        >
          <div
            class="column is-flex is-align-items-center is-justify-content-center"
          >
            <img
              :src="require('@/assets/logo.png')"
              alt="N&V logo"
              class="mr-3"
            />
            <h3 class="logo">MULTIMARCAS</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam urna
            odio ut id vulputate libero faucibus. Sed at ultrices non volutpat
            sed.
          </p>
        </div>
        <!--<div
        class="is-flex is-align-items-center is-justify-content-start is-flex-direction-column"
      >
        <ul
          class="is-flex is-align-items-start is-justify-content-center is-flex-direction-column"
        >
          <h4 class="subtitle">Secciones</h4>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Contactanos</li>
        </ul>
      </div>-->
        <div class="is-flex is-align-items-center is-justify-content-center">
          <div class="contact-footer">
            <div class="mb-2">
              <h5 class="subtitle">Horario de atención</h5>
              <p class="has-text-left ml-1 text-hour">
                Lunes a viernes: 8:00am a 6:00pm
              </p>
              <p class="has-text-left ml-1 text-hour">
                Sábados: 8:00am a 5:00pm
              </p>
            </div>
            <div class="contact-section">
              <h5 class="subtitle">Contacto</h5>
              <icon-with-text
                class="has-text-white ml-1"
                icon="SmartphoneIcon"
                text="999 999 999"
                icon-size="16"
              />
              <icon-with-text
                class="has-text-white my-1 ml-1"
                icon="PhoneIcon"
                text="01 999 9999"
                icon-size="16"
              />
              <icon-with-text
                class="has-text-white ml-1"
                icon="MailIcon"
                text="ventas@gmail.com"
                icon-size="16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="container is-flex is-align-items-center is-justify-content-space-between py-5 px-2 brand"
    >
      <span>Coded with 🧡 by Lukana © 2022</span>
      <div class="is-flex is-align-items-center payments">
        <span class="mr-5">Metodos de pago</span>
        <img
          class="footer-image"
          :src="require('@/assets/images/icons/visa.png')"
          alt="Visa"
        />
        <img
          class="footer-image"
          :src="require('@/assets/images/icons/mastercard.png')"
          alt="Mastercard"
        />
        <img
          class="footer-image"
          :src="require('@/assets/images/icons/yape.png')"
          alt="Yape"
        />
        <img :src="require('@/assets/images/icons/plin.png')" alt="Plin" />
      </div>
    </section>
  </footer>
</template>

<script>
import IconWithText from "@/components/commons/IconWithText";
export default {
  name: "MainFooter",
  components: {
    IconWithText,
  },
};
</script>

<style scoped>
.bg-blue-gradient {
  background: linear-gradient(180deg, #0891cc 3.16%, #003e59 98.24%);
}
.is-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 950px;
  color: white !important;
  font-size: 14px;
}
.logo {
  font-size: 24px;
  font-weight: 600;
}
.subtitle {
  font-weight: 800 !important;
  font-size: 14px;
  color: white;
  margin-bottom: 10px !important;
  text-align: left;
}
.footer-image {
  margin-right: 8px;
}
@media (max-width: 600px) {
  .contact-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .brand,
  .contact-section {
    flex-direction: column;
  }
  .subtitle,
  .text-hour {
    text-align: center !important;
  }
  .payments {
    margin-top: 20px;
  }
  .is-grid {
    grid-template-columns: repeat(1, 1fr);
    max-width: 80%;
    padding: 0 !important;
  }
  .contact-footer {
    width: 100% !important;
    margin-top: 20px !important;
  }
}
@media (max-width: 426px) {
  .is-grid {
    max-width: 95%;
  }
}
</style>
