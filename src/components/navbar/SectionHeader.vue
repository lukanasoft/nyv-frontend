<template>
  <div
    :style="{
      'background-image': `url(${image})`,
      height: '50vh',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center',
      position: 'relative',
      width: '100%',
    }"
    class="image-section-principal is-flex is-align-items-center is-justify-content-center"
  >
    <p class="has-text-white font-size-64" style="z-index: 9">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  data() {
    return {
      image: this.$route.meta.headerImage,
      title: this.$route.meta.headerTitle,
    };
  },
  watch: {
    $route(newRoute) {
      this.image = newRoute.meta.headerImage;
      this.title = newRoute.meta.headerTitle;
    },
  },
};
</script>

<style scoped>
.image-section-principal::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.65);
}
.font-size-64 {
  font-size: 64px !important;
}
</style>
