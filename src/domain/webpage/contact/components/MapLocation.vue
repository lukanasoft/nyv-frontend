<template>
  <div>
    <iframe
      class="map-class"
      src="https://maps.google.com/maps?q=NYV%20MULTIMARCAS&t=&z=17&ie=UTF8&iwloc=&output=embed"
    />
  </div>
</template>

<script>
export default {
  name: "MapLocation",
};
</script>

<style scoped>
.map-class {
  width: 527px !important;
  height: 377px !important;
}
@media (max-width: 1024px) {
  .map-class {
    width: 350px !important;
    height: 250px !important;
  }
}
@media (max-width: 426px) {
  .map-class {
    width: 300px !important;
    height: 210px !important;
  }
}
</style>
