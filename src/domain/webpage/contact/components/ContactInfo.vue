<template>
  <div class="contact-info-container">
    <h2 class="is-size-2 has-text-weight-semibold">Contáctanos</h2>
    <map-location class="map my-4" />
    <div
      class="is-flex is-flex-direction-column is-align-items-start icons-container"
    >
      <icon-with-text
        class="mt-3"
        icon="MapPinIcon"
        text="Av. Nicolas Arriola 1581, La Victoria"
        icon-size="20"
        icon-color="#B70006"
      />
      <icon-with-text
        class="mt-3"
        icon="SmartphoneIcon"
        text="923 093 583"
        icon-size="20"
        icon-color="#B70006"
      />
      <icon-with-text
        class="mt-3"
        icon="PhoneIcon"
        text="01 697 5531"
        icon-size="20"
        icon-color="#B70006"
      />
      <icon-with-text
        class="mt-3"
        icon="MailIcon"
        text="ventas@gmail.com"
        icon-size="20"
        icon-color="#B70006"
      />
    </div>
  </div>
</template>

<script>
import IconWithText from "@/components/commons/IconWithText";
import MapLocation from "./MapLocation.vue";

export default {
  name: "ContactInfo",
  components: { MapLocation, IconWithText },
};
</script>

<style scoped>
.map {
  display: none;
}
@media (max-width: 768px) {
  .map {
    display: inline;
  }
  .icons-container {
    align-self: start !important;
    display: grid !important;
    grid-template-columns: repeat(1, 1fr);
    justify-items: start;
    align-items: start;
    grid-column-gap: 10px;
  }
  .contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
@media (max-width: 426px) {
  .icons-container {
    display: grid !important;
    justify-items: start;
    grid-column-gap: 0;
    margin-left: 0;
  }
  .contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
