<template>
  <section class="has-background-red-gradient mt-6 margin-section-contact">
    <div
      class="container is-flex is-align-items-center is-justify-content-space-evenly container-contact"
    >
      <map-location class="map" />
      <contact-info class="has-text-white" />
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
.has-background-red-gradient {
  background: linear-gradient(to right, #4b0002 3.16%, #b90107 98.24%);
}
.margin-section-contact {
  margin-bottom: 150px !important;
}
.map {
  position: relative;
  top: 125px;
}
@media (max-width: 1024px) {
  .map {
    position: static !important;
    margin-top: 5px;
  }
  .container-contact {
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-around !important;
  }
  .margin-section-contact {
    margin-bottom: 0px !important;
  }
}
@media (max-width: 768px) {
  .container-contact {
    flex-direction: column;
  }
}
</style>
