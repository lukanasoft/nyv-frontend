<template>
  <div class="has-background-black">
    <div
      class="container is-flex is-align-items-center is-justify-content-space-between p-4"
    >
      <div class="is-flex icons-container">
        <icon-with-text
          class="mx-5 has-text-white margin-0 margin-b-5"
          icon="MailIcon"
          text="ventasnyv@gmail.com"
          icon-size="15"
          :is-link="true"
          icon-color="white"
          link-to="mailto:ventasnyv@gmail.com"
          link-color="white"
        />
        <icon-with-text
          class="mr-5 has-text-white margin-0 margin-b-5"
          icon="PhoneIcon"
          text="994 554 934 - 923 093 583"
          :is-link="true"
          link-to="tel:+51994554934"
          icon-color="white"
          link-color="white"
          icon-size="15"
        />
      </div>
      <div class="is-flex icons-container">
        <feather-icon
          class="has-text-white margin-b-5"
          icon="FacebookIcon"
          size="15"
        />
        <feather-icon
          class="mx-5 has-text-white margin-0"
          icon="MapPinIcon"
          size="15"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconWithText from "@/components/commons/IconWithText";
import FeatherIcon from "@/components/commons/FeatherIcon";

export default {
  name: "TopBar",
  components: { IconWithText, FeatherIcon },
};
</script>

<style scoped>
@media (max-width: 450px) {
  .icons-container {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  .margin-0 {
    margin: 0 !important;
  }
  .margin-b-5 {
    margin-bottom: 15px;
  }
}
</style>
