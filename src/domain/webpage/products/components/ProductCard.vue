<template>
  <div style="width: 100%; max-width: 300px">
    <div @click="openDetail" class="card p-4 is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between is-clickable">
    <div class="container">
      <img class="image-size" :src="product.photos[0].url" :alt="product.photos[0].name" />
    </div>
    <div class="card-content">
      <div class="content is-text-18">
        {{ product.name }}
      </div>
    </div>
  </div>
  <b-button
      style="width: 100%" 
        class="button-red"
        @click="addToCart"
      >
        Cotiza ahora
      </b-button>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      openDetail() {
        this.$router.push({
          path: "/productos/" + this.product.id,
        })
      },
      addToCart() {
        this.$store.commit('Products/ADD_TO_CART', this.product);
      },
    },
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%; /* The size you want */
}
.container:after {
  content: "";
  display: block;
  padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
}

.container img {
  position: absolute; /* Take your picture out of the flow */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; /* Make the picture taking the size of it's parent */
  width: 100%; /* This if for the object-fit */
  height: 100%; /* This if for the object-fit */
  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
  object-position: center;
}
.is-text-18 {
  font-size: 18px;
}
.card-footer {
  border: none;
}
</style>