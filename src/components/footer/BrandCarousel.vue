<template>
  <div class="has-background-grey-lighter">
    <div class="container">
      <b-carousel-list
        ref="carousel"
        v-bind="carouselBrandConfiguration"
        :data="brands"
      >
        <template #item>
          <section>
            <img
              src="https://dancolmex.com.pe/wp-content/uploads/2021/03/bmp-proar-300x300.png"
              style="max-height: 200px !important"
            />
          </section>
        </template>
      </b-carousel-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandCarousel",
  data() {
    return {
      brands: [
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
      ],
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
  created() {
    const self = this;
    this.intervalCarousel = setInterval(() => {
      self.$refs.carousel.next();
    }, 6000);
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
