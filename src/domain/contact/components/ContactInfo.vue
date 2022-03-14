<template>
  <div class="contact-info-container">
    <h2 class="is-size-2">Contáctanos</h2>
    <div
      class="is-flex is-flex-direction-column is-align-items-start icons-container"
    >
      <icon-with-text
        class="has-text-white mt-3"
        icon="MapPinIcon"
        text="Av. Nicolas Arriola 1581, La Victoria"
        icon-size="20"
      />
      <icon-with-text
        class="has-text-white mt-3"
        icon="SmartphoneIcon"
        text="999 999 999"
        icon-size="20"
      />
      <icon-with-text
        class="has-text-white mt-3"
        icon="PhoneIcon"
        text="01 999 999"
        icon-size="20"
      />
      <icon-with-text
        class="has-text-white mt-3"
        icon="MailIcon"
        text="ventas@gmail.com"
        icon-size="20"
      />
    </div>
  </div>
</template>

<script>
import IconWithText from "@/components/commons/IconWithText";

export default {
  name: "ContactInfo",
  components: { IconWithText },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .icons-container {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
    grid-column-gap: 10px;
    margin-left: 80px;
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
    grid-template-columns: repeat(1, 1fr);
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
