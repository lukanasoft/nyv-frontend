<template>
  <div class="card p-4 is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between" style="height: 340px !important">
    <div class="card-image">
      <figure class="image">
        <img :src="product.photos[0].url" :alt="product.photos[0].name" style="max-height: 120px !important" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content is-text-18">
        {{ product.name }}
      </div>
    </div>
    <footer class="card-footer">
      <b-button 
        class="w-50 button-red"
        @click="addToCart"
      >
        Cotiza
      </b-button>
      <b-button 
        class="w-50 button-blue"
        @click="openDetail"
      >
        Detalles
      </b-button>
    </footer>
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
        this.$store.commit('Products/SET_PRODUCT', this.product);
        this.$store.commit('Products/SET_DETAIL_OPEN', true);
      },
      addToCart() {
        this.$store.commit('Products/ADD_TO_CART', this.product);
      },
    },
}
</script>

<style scoped>
.is-text-18 {
  font-size: 18px;
}
.card-footer {
  border: none;
}
</style>