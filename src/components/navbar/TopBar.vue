<template>
  <div class="has-background-black">
    <div
      class="container is-flex is-align-items-center is-justify-content-space-between p-4"
    >
      <div class="is-flex icons-container">
        <icon-with-text
          class="mx-5 has-text-white margin-0 margin-b-5"
          icon="MailIcon"
          text="ventanyv@gmail.com"
          icon-size="15"
        />
        <icon-with-text
          class="has-text-white"
          icon="PhoneIcon"
          text="923 093 583"
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
