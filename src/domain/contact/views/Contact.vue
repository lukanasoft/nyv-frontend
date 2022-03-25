<template>
  <section class="my-6">
    <div
      class="container is-flex is-align-items-center is-justify-content-space-evenly container-contact"
    >
      <map-location class="map" />
      <contact-info />
    </div>
  </section>
</template>

<script>
import MapLocation from "@/domain/contact/components/MapLocation";
import ContactInfo from "@/domain/contact/components/ContactInfo";
export default {
  name: "ContactView",
  components: { ContactInfo, MapLocation },
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .container-contact {
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-around !important;
  }
}
@media (max-width: 768px) {
  .container-contact {
    flex-direction: column;
  }
  .map {
    display: none;
  }
}
</style>
