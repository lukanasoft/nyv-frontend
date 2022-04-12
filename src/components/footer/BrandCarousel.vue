<template>
  <div class="has-background-grey-lighter">
    <div class="container">
      <b-carousel-list
        ref="carousel"
        class="p-3"
        v-bind="carouselBrandConfiguration"
        :data="brands"
      >
        <template #item="{name, image}">
          <section style="height: 100%" class="is-flex is-align-items-center is-justify-content-center">
            <img
              :src="image"
              style="max-height: 200px !important"
              :alt="name"
            />
          </section>
        </template>
      </b-carousel-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "BrandCarousel",
  data() {
    return {
      intervalCarousel: null,
      carouselBrandConfiguration: {
        itemsToShow: 2,
        arrow: false,
        repeat: true,
        hasDrag: true,
        breakpoints: {
          768: {
            itemsToShow: 3,
          },
          960: {
            itemsToShow: 4,
          },
          1216: {
            itemsToShow: 5,
          },
        },
      },
    };
  },
  computed: {
    ...mapState({
      brands: state => state.BrandStore.brands,
    }),
  },
  
  async created() {
    const self = this;
    this.intervalCarousel = setInterval(() => {
      self.$refs.carousel.next();
    }, 6000);
    // get data
    await this.$store.dispatch("BrandStore/getAll");
  },
  beforeDestroy() {
    clearInterval(this.intervalCarousel);
  },
};
</script>

<style scoped>
.carousel-list.has-shadow {
  box-shadow: none !important;
}
.ga {
  max-height: 50px !important;
}
</style>
